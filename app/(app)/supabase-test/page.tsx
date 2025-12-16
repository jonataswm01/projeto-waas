import { supabaseAdmin } from "@/supabase/client";

export default async function SupabaseTestPage() {
  let message = "Teste ainda não executado.";

  try {
    const { data, error } = await supabaseAdmin
      .from("leads")
      .select("id")
      .limit(1);

    if (error) {
      message = `Erro ao conectar no Supabase: ${error.message}`;
    } else {
      message = `Conexão OK com Supabase. ${
        data && data.length > 0
          ? "Tabela leads retornou pelo menos um registro."
          : "Tabela leads acessível, mas sem registros."
      }`;
    }
  } catch (err) {
    message = `Exceção ao testar Supabase: ${
      err instanceof Error ? err.message : String(err)
    }`;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-xl mx-auto rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-800 shadow-sm">
        <h1 className="text-base font-semibold mb-2">
          Teste de integração com Supabase
        </h1>
        <p>{message}</p>
      </div>
    </main>
  );
}


