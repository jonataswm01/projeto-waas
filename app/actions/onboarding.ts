"use server";

import { supabaseAdmin } from "@/supabase/client";

type UpsertProfileInput = {
  userId: string;
  fullName: string;
  phone?: string;
  email: string;
};

type CreateOrganizationInput = {
  ownerId: string;
  name: string;
  slug: string;
  document: string;
};

export async function upsertProfile({
  userId,
  fullName,
  phone,
  email,
}: UpsertProfileInput) {
  const { error } = await supabaseAdmin
    .from("profiles")
    .upsert(
      {
        id: userId,
        full_name: fullName,
        phone: phone ?? null,
        email,
      },
      { onConflict: "id" }
    );

  if (error) {
    console.error("Erro ao salvar perfil no Supabase:", error);
    throw new Error(error.message || "Não foi possível salvar seu perfil.");
  }
}

export async function createOrganization(input: CreateOrganizationInput) {
  const digits = input.document.replace(/\D/g, "");
  const documentType = digits.length <= 11 ? "cpf" : "cnpj";

  const { data: organization, error } = await supabaseAdmin
    .from("organizations")
    .insert({
      owner_id: input.ownerId,
      name: input.name,
      slug: input.slug,
      document: digits,
      document_type: documentType,
    })
    .select()
    .single();

  if (error || !organization) {
    console.error("Erro ao criar organização:", error);
    throw new Error(error?.message || "Não foi possível criar a organização.");
  }

  const { error: memberError } = await supabaseAdmin
    .from("organization_members")
    .insert({
      organization_id: organization.id,
      user_id: input.ownerId,
      role: "owner",
    });

  if (memberError) {
    console.error("Erro ao vincular usuário à organização:", memberError);
    throw new Error(
      memberError.message ||
        "Organização criada, mas não foi possível vincular o usuário."
    );
  }

  return { organizationId: organization.id as string };
}

export async function userHasOrganization(userId: string): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from("organization_members")
    .select("id")
    .eq("user_id", userId);

  if (error) {
    console.error("Erro ao verificar organizações do usuário:", error);
    throw new Error(
      error.message || "Não foi possível verificar suas organizações."
    );
  }

  return !!data && data.length > 0;
}

export type UserOrganization = {
  id: string;
  name: string;
  slug: string;
};

export async function getUserOrganizations(
  userId: string
): Promise<UserOrganization[]> {
  const { data, error } = await supabaseAdmin
    .from("organization_members")
    .select(
      `
      organization_id,
      organizations!inner (
        id,
        name,
        slug
      )
    `
    )
    .eq("user_id", userId);

  if (error) {
    console.error("Erro ao carregar organizações do usuário:", error);
    throw new Error(
      error.message || "Não foi possível carregar suas organizações."
    );
  }

  if (!data) return [];

  return data.map((row: any) => ({
    id: row.organizations.id as string,
    name: row.organizations.name as string,
    slug: row.organizations.slug as string,
  }));
}

/**
 * Verifica se uma organização tem um plano ativo
 * Por enquanto retorna false (assumindo que não há plano ativo)
 * TODO: Implementar verificação real quando tiver tabela de subscriptions
 */
export async function organizationHasActivePlan(
  organizationId: string
): Promise<boolean> {
  // TODO: Implementar verificação real quando tiver tabela de subscriptions/payments
  // Por enquanto, sempre retorna false para redirecionar para página de preços
  return false;
}

/**
 * Busca organização por slug
 */
export async function getOrganizationBySlug(
  slug: string
): Promise<{ id: string; name: string; slug: string } | null> {
  const { data, error } = await supabaseAdmin
    .from("organizations")
    .select("id, name, slug")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id as string,
    name: data.name as string,
    slug: data.slug as string,
  };
}



