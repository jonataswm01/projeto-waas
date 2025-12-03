"use server"

import { supabaseAdmin } from "@/supabase/client"
import { revalidatePath } from "next/cache"
import { randomUUID } from "crypto"

export type CreateLeadData = {
  template: string
  empresa: string
  nicho: string
  dominio: string
  nome: string
  whatsapp: string
  email: string
  cnpj?: string
}

export type CreateLeadResult = {
  success: boolean
  leadId?: string
  error?: string
}

export async function createLead(
  data: CreateLeadData
): Promise<CreateLeadResult> {
  try {
    // Validação básica
    if (!data.template || !data.empresa || !data.nicho || !data.dominio ||
        !data.nome || !data.whatsapp || !data.email) {
      return {
        success: false,
        error: "Todos os campos obrigatórios devem ser preenchidos.",
      }
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Email inválido.",
      }
    }

    // Criar o lead usando Supabase API
    const { data: lead, error } = await supabaseAdmin
      .from('leads')
      .insert({
        id: randomUUID(),
        nome: data.nome,
        whatsapp: data.whatsapp,
        email: data.email,
        empresa: data.empresa,
        nicho: data.nicho,
        dominio: data.dominio,
        template: data.template,
        cnpj: data.cnpj || null,
        status: "PENDING",
        // created_at será preenchido automaticamente pelo DEFAULT now() do banco
      })
      .select()
      .single()

    if (error) {
      console.error("Erro ao criar lead no Supabase:", error)
      return {
        success: false,
        error: error.message || "Erro ao salvar os dados. Tente novamente.",
      }
    }

    revalidatePath("/comecar")

    return {
      success: true,
      leadId: lead.id,
    }
  } catch (error) {
    console.error("Erro ao criar lead:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro ao salvar os dados. Tente novamente.",
    }
  }
}
