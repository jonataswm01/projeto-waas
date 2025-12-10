"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ProfissionalFooter } from "@/components/demos/profissional/ProfissionalFooter";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-50">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <Link
          href="/sites/profissional-teste"
          className="mb-8 inline-flex items-center gap-2 text-sm text-emerald-200 hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao início
        </Link>

        <div className="mb-12 space-y-3">
          <div className="h-1.5 w-16 rounded-sm bg-emerald-400" />
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">Sobre a Aurora Pet</p>
          <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">
            Clínica feita por quem vive rotina de pet.
          </h1>
        </div>

        <div className="grid gap-10 sm:grid-cols-[1fr_1.1fr] mb-12">
          <div className="space-y-4">
            <p className="text-lg text-slate-200">
              A Aurora Pet nasceu da vontade de fazer diferente. Nada de fila, nada de formalidade dura. A gente
              conversa olhando no olho, explica o que importa e segue junto no acompanhamento.
            </p>
            <p className="text-base text-slate-300">
              Atendimento direto com veterinário, sem roteiros engessados. Consulta, exames e retorno no mesmo lugar,
              com conversa clara e rapidez pelo WhatsApp.
            </p>
            <p className="text-base text-slate-300">
              A prioridade é resolver, não enrolar. Chegou uma dúvida? Manda mensagem. Horários estendidos e resposta
              rápida quando você precisa.
            </p>
          </div>

          <div className="relative rounded-md border border-white/10 bg-white/5 p-6 shadow-none">
            <div className="absolute inset-y-4 left-3 w-px bg-emerald-300/60" />
            <div className="pl-5 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-2">Nossa missão</p>
                <p className="text-base text-slate-200">
                  Cuidar do seu pet com o mesmo carinho que você tem. Sem complicação, sem burocracia.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-2">Nossa visão</p>
                <p className="text-base text-slate-200">
                  Ser a clínica de referência na região pelo atendimento humanizado e tecnologia de ponta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-300 mb-4">
            Quer conhecer mais? Fala com a gente pelo WhatsApp e marca uma visita.
          </p>
          <Button
            asChild
            className="rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-[#0f172a] shadow-none hover:bg-emerald-400"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
      <ProfissionalFooter />
    </main>
  );
}

