"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/supabase/client";
import { createOrganization, upsertProfile } from "@/app/actions/onboarding";

type Step = 1 | 2;

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(1);
  const [userId, setUserId] = useState<string | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const [profile, setProfile] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  const [organization, setOrganization] = useState({
    documento: "",
    nome: "",
    slug: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const isValidEmail = (value: string) => {
    const email = value.trim();
    if (!email) return false;
    // regex simples para validar estrutura do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const formatDocumento = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 14);

    if (digits.length <= 11) {
      // CPF: 000.000.000-00
      if (digits.length <= 3) return digits;
      if (digits.length <= 6)
        return `${digits.slice(0, 3)}.${digits.slice(3)}`;
      if (digits.length <= 9)
        return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(
          6
        )}`;
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(
        6,
        9
      )}-${digits.slice(9)}`;
    }

    // CNPJ: 00.000.000/0000-00
    if (digits.length <= 2) return digits;
    if (digits.length <= 5)
      return `${digits.slice(0, 2)}.${digits.slice(2)}`;
    if (digits.length <= 8)
      return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
    if (digits.length <= 12)
      return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(
        5,
        8
      )}/${digits.slice(8)}`;
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(
      5,
      8
    )}/${digits.slice(8, 12)}-${digits.slice(12)}`;
  };

  const totalSteps: Step = 2;

  const initials =
    profile.nome
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("") || "LU";

  const handleNext = () => {
    if (step < totalSteps) {
      setStep((prev) => (prev + 1) as Step);
    } else {
      // TODO: enviar dados para o backend e redirecionar para /organizations
      console.log({ profile, organization });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as Step);
    }
  };

  const canContinue =
    step === 1
      ? profile.nome.trim() !== "" &&
        profile.telefone.trim() !== "" &&
        isValidEmail(profile.email)
      : organization.documento.trim() !== "" &&
        organization.nome.trim() !== "" &&
        organization.slug.trim() !== "";

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!isMounted) return;

      if (!data.user) {
        router.replace("/entrar");
        return;
      }

      setUserId(data.user.id);
      setProfile((prev) => ({
        ...prev,
        email: data.user.email ?? prev.email,
      }));
      setLoadingUser(false);
    })();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const handlePrimaryAction = async () => {
    if (!userId) return;
    setError(null);
    setIsSaving(true);

    try {
      if (step === 1) {
        await upsertProfile({
          userId,
          fullName: profile.nome,
          phone: profile.telefone,
          email: profile.email,
        });
        setStep(2);
      } else {
        await createOrganization({
          ownerId: userId,
          name: organization.nome,
          slug: organization.slug,
          document: organization.documento,
        });
        router.push("/organizacoes");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocorreu um erro ao salvar seus dados. Tente novamente."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <header className="mb-6 sm:mb-10 flex items-center justify-between text-sm">
          <button
            type="button"
            onClick={() => {
              supabase.auth.signOut().finally(() => router.push("/entrar"));
            }}
            className="text-slate-500 hover:text-slate-800 transition-colors text-xs sm:text-sm"
          >
            Sair
          </button>
          <div className="text-center flex-1 px-2">
            <p className="text-xs font-medium text-emerald-600 uppercase tracking-[0.18em]">
              Etapa {step} de {totalSteps}
            </p>
            <div className="mt-2 flex justify-center gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => {
                const current = index + 1;
                const active = current <= step;
                return (
                  <span
                    key={current}
                    className={`h-1.5 w-8 sm:w-10 rounded-full transition-colors ${
                      active ? "bg-emerald-600" : "bg-slate-200"
                    }`}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-8 sm:w-10" />
        </header>

        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm px-4 sm:px-8 py-6 sm:py-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="h-10 w-10 rounded-full bg-orange-600/90 flex items-center justify-center text-sm font-semibold text-white mb-4">
              Lu
            </div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.18em]">
              LoveSite
            </p>
          </div>

          {step === 1 && (
            <div>
              <h1 className="text-xl font-semibold text-slate-900 mb-2 text-center">
                Configure seu perfil
              </h1>
              <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto text-center">
                Verifique se as informações do seu perfil estão corretas. Você
                poderá alterar isso depois nas configurações da conta.
              </p>

              <div className="flex flex-col items-center mb-8">
                <div className="h-20 w-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-lg font-semibold text-slate-700">
                  {initials}
                </div>
              </div>

              <form
                className="space-y-5 max-w-xl mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome *</Label>
                  <Input
                    id="nome"
                    value={profile.nome}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, nome: e.target.value }))
                    }
                    placeholder="Como devemos te chamar?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    value={profile.telefone}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        telefone: formatPhone(e.target.value),
                      }))
                    }
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    disabled
                    placeholder="voce@exemplo.com"
                  />
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className="text-xl font-semibold text-slate-900 mb-2 text-center">
                Adicione sua organização
              </h1>
              <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto text-center">
                Precisamos de algumas informações básicas para configurar a sua
                organização. Você poderá editar isso depois.
              </p>

              <form
                className="space-y-5 max-w-xl mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <Label htmlFor="documento">Documento (CPF/CNPJ) *</Label>
                  <Input
                    id="documento"
                    value={organization.documento}
                    onChange={(e) =>
                      setOrganization((prev) => ({
                        ...prev,
                        documento: formatDocumento(e.target.value),
                      }))
                    }
                    placeholder="CPF ou CNPJ"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nome-org">Nome *</Label>
                  <Input
                    id="nome-org"
                    value={organization.nome}
                    onChange={(e) =>
                      setOrganization((prev) => ({
                        ...prev,
                        nome: e.target.value,
                      }))
                    }
                    placeholder="Nome da empresa ou organização"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={organization.slug}
                    onChange={(e) =>
                      setOrganization((prev) => ({
                        ...prev,
                        slug: e.target.value.toLowerCase(),
                      }))
                    }
                    placeholder="minha-empresa"
                  />
                  <p className="text-xs text-slate-400">
                    Seu endereço ficará assim: <span className="font-mono">/organizacoes/{organization.slug || "minha-empresa"}</span>
                  </p>
                </div>
              </form>
            </div>
          )}

          <div className="mt-8 sm:mt-10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className="text-slate-500 hover:text-slate-800 disabled:opacity-40 w-full sm:w-auto order-2 sm:order-1"
            >
              Voltar
            </Button>

            <Button
              type="button"
              onClick={handlePrimaryAction}
              disabled={!canContinue || isSaving || loadingUser || !userId}
              className="rounded-full px-6 w-full sm:w-auto order-1 sm:order-2"
            >
              {isSaving
                ? "Salvando..."
                : step === totalSteps
                ? "Concluir"
                : "Próximo passo →"}
            </Button>
          </div>

          {error && (
            <p className="mt-4 text-xs text-red-500 text-center">{error}</p>
          )}
        </section>
      </div>
    </main>
  );
}



