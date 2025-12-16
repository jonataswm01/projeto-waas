"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/supabase/client";
import { upsertProfile } from "@/app/actions/onboarding";

export default function SignUpPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password: senha,
      });

      if (signUpError) {
        throw new Error(
          signUpError.message || "Não foi possível criar a conta."
        );
      }

      // Dependendo da configuração do Supabase, o usuário pode não vir direto em data.user.
      let userId = data.user?.id;

      // Se não houver usuário na resposta (por exemplo, se confirmação de e-mail estiver ativa),
      // tentamos fazer login imediatamente, já que você não quer verificação de e-mail agora.
      if (!userId) {
        const { data: signInData, error: signInError } =
          await supabase.auth.signInWithPassword({
            email,
            password: senha,
          });

        if (signInError || !signInData.user) {
          throw new Error(
            signInError?.message ||
              "Conta criada, mas não foi possível iniciar a sessão automaticamente."
          );
        }

        userId = signInData.user.id;
      }

      await upsertProfile({
        userId,
        fullName: nome,
        email,
      });

      router.push("/onboarding");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocorreu um erro ao criar sua conta. Tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <div className="h-10 w-10 rounded-full bg-orange-600/90 flex items-center justify-center text-sm font-semibold">
          <span className="tracking-tight text-white">LS</span>
        </div>
        <div className="mt-3 text-sm font-medium tracking-[0.18em] uppercase text-slate-500">
          LoveSite
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200 px-4 sm:px-6 py-6 sm:py-8 space-y-5 sm:space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Criar sua conta
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Preencha os detalhes para começar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-xs text-slate-700">
              Nome
            </Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como devemos te chamar?"
              className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-emerald-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs text-slate-700">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@exemplo.com"
              className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-emerald-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="senha" className="text-xs text-slate-700">
              Senha
            </Label>
            <Input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Mínimo de 8 caracteres"
              minLength={8}
              className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-emerald-500"
              required
            />
            <p className="mt-1 text-[11px] text-slate-500">
              8 ou mais caracteres
            </p>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-sm font-semibold rounded-full py-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Criando conta..." : "Criar conta"}
          </Button>

          {error && (
            <p className="mt-2 text-xs text-red-500 text-center">{error}</p>
          )}

          <div className="relative mt-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-[11px] text-slate-400">
              <span className="bg-white px-2">Ou continue com</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            disabled
            className="w-full border-slate-200 bg-white text-slate-900 rounded-full text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
              >
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.92h5.44c-.24 1.26-.98 2.33-2.09 3.05l3.38 2.62C20.54 18.37 21.5 16.38 21.5 14c0-.62-.06-1.22-.18-1.8H12z"
                />
                <path
                  fill="#34A853"
                  d="M6.53 14.48 5.7 15.1l-2.7 2.08C4.36 19.86 7.02 21.5 10 21.5c2.7 0 4.96-.9 6.61-2.43l-3.38-2.62c-.9.6-2.06.97-3.23.97-2.48 0-4.59-1.68-5.34-3.94z"
                />
                <path
                  fill="#4A90E2"
                  d="M3 7.82C2.28 9 1.88 10.44 1.88 12s.4 3 1.12 4.18c0 0 1.53-1.19 1.53-1.2.78-1.56.78-3.4 0-4.96L3 7.82z"
                />
                <path
                  fill="#FBBC05"
                  d="M10 4.5c1.46 0 2.78.5 3.82 1.48l2.86-2.86C15 1.9 12.74 1 10 1 7.02 1 4.36 2.64 3 4.82l2.53 1.98C5.41 6.18 7.52 4.5 10 4.5z"
                />
              </svg>
            </span>
            <span>Google</span>
            <span className="text-[10px] text-slate-400">(em breve)</span>
          </Button>
        </form>

        <p className="text-center text-xs text-slate-500">
          Já tem uma conta?{" "}
          <Link
            href="/entrar"
            className="text-slate-900 underline underline-offset-4"
          >
            Entrar
          </Link>
        </p>
      </div>

      <p className="mt-6 text-center text-[11px] text-slate-400 max-w-md mx-auto">
        Ao se cadastrar, você concorda com nossos{" "}
        <button
          type="button"
          className="underline underline-offset-4 hover:text-slate-700"
        >
          Termos de Uso
        </button>{" "}
        e{" "}
        <button
          type="button"
          className="underline underline-offset-4 hover:text-slate-700"
        >
          Política de Privacidade
        </button>
        .
      </p>
    </div>
  );
}


