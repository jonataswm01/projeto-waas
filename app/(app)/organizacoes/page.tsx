"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { supabase } from "@/supabase/client";
import {
  getUserOrganizations,
  organizationHasActivePlan,
  type UserOrganization,
} from "@/app/actions/onboarding";

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<UserOrganization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (!isMounted) return;

        if (!data.user) {
          router.replace("/entrar");
          return;
        }

        const orgs = await getUserOrganizations(data.user.id);
        if (!isMounted) return;

        setOrganizations(orgs);
      } catch (err) {
        if (!isMounted) return;
        setError(
          err instanceof Error
            ? err.message
            : "Não foi possível carregar suas organizações."
        );
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="h-10 w-10 rounded-full bg-orange-600/90 flex items-center justify-center text-sm font-semibold mb-3">
            <span className="tracking-tight text-white">Lu</span>
          </div>
          <p className="text-sm font-medium tracking-[0.18em] uppercase text-slate-500">
            Lumina
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm px-4 sm:px-8 py-6 sm:py-10">
          <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">
                Organizações
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Acesse uma organização existente ou crie uma nova.
              </p>
            </div>
            <Button className="rounded-full whitespace-nowrap w-full sm:w-auto">
              + Adicionar organização
            </Button>
          </header>

          {loading ? (
            <div className="text-sm text-slate-500">Carregando...</div>
          ) : error ? (
            <div className="text-sm text-red-500 text-center">{error}</div>
          ) : organizations.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
              Nenhuma organização por aqui ainda.
              <br />
              Use o botão{" "}
              <span className="font-medium">“Adicionar organização”</span> para
              criar a primeira.
            </div>
          ) : (
            <ul className="space-y-3">
              {organizations.map((org) => (
                <li
                  key={org.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {org.name}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      /organizacoes/{org.slug}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={async () => {
                      const hasPlan = await organizationHasActivePlan(org.id);
                      if (hasPlan) {
                        // TODO: Redirecionar para dashboard/área do cliente quando implementar
                        router.push(`/organizacoes/${org.slug}`);
                      } else {
                        router.push(`/organizacoes/${org.slug}/precos`);
                      }
                    }}
                    className="rounded-full text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition-all duration-200 px-4 sm:px-5 py-2 w-full sm:w-auto flex-shrink-0"
                  >
                    Abrir
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}



