"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { ProfissionalFooter } from "@/components/demos/profissional/ProfissionalFooter";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

const services = [
  {
    title: "Consultas Veterinárias",
    description: "Atendimento completo com diagnóstico, exames e retorno no mesmo dia.",
    link: "/sites/profissional-teste/servicos",
  },
  {
    title: "Cirurgias",
    description: "Centro cirúrgico completo com monitoramento e recuperação assistida.",
    link: "/sites/profissional-teste/servicos",
  },
  {
    title: "Emergências 24h",
    description: "Plantão permanente para quando seu pet mais precisa de você.",
    link: "/sites/profissional-teste/servicos",
  },
  {
    title: "Exames Especializados",
    description: "Ultrassom, raio-x digital e laboratório completo na clínica.",
    link: "/sites/profissional-teste/servicos",
  },
];

export default function ProfissionalTestePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-50">
      {/* Hero - Assimétrico e autoral */}
      <section className="mx-auto max-w-5xl grid gap-10 px-5 pb-14 pt-16 sm:grid-cols-[1.15fr_0.85fr] sm:pt-20">
        <div className="flex flex-col gap-6">
          <div className="h-1.5 w-16 rounded-sm bg-emerald-400" />
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">Aurora Pet</p>
            <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">
              Clínica veterinária feita por quem vive rotina de pet.
            </h1>
          </div>
          <p className="text-lg text-slate-200 sm:text-xl">
            Nada de fila, nada de formalidade dura. Consulta, exames e retorno no mesmo lugar, com conversa clara e
            rapidez pelo WhatsApp.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-[#0f172a] shadow-none hover:bg-emerald-400"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Agendar agora
              </a>
            </Button>
            <p className="text-sm text-emerald-100 sm:ml-2">Retorno em até 5 minutos (sim, de verdade).</p>
          </div>
        </div>

        <div className="relative flex flex-col gap-4 rounded-md border border-white/10 bg-white/5 px-5 py-6 shadow-none">
          <div className="absolute inset-y-4 left-3 w-px bg-emerald-300/60" />
          <div className="pl-5">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Por dentro da rotina</p>
            <p className="mt-3 text-lg font-semibold text-white">
              Atendimento direto com veterinário, sem roteiros engessados.
            </p>
            <p className="mt-2 text-sm text-slate-200">
              A gente conversa olhando no olho, explica o que importa e segue junto no acompanhamento.
            </p>
          </div>
          <div className="pl-5">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Quando você precisa</p>
            <p className="mt-3 text-lg font-semibold text-white">Horários estendidos e resposta rápida no WhatsApp.</p>
            <p className="mt-2 text-sm text-slate-200">
              Chegou uma dúvida? Manda mensagem. A prioridade é resolver, não enrolar.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços - Ritmo quebrado */}
      <section className="bg-slate-50 py-12 text-slate-900">
        <div className="mx-auto max-w-5xl grid gap-10 px-5 sm:grid-cols-[1fr_1.1fr] sm:items-start">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">O que resolvemos</p>
            <h2 className="text-3xl font-bold leading-tight text-slate-900">Do check-up ao pós-operatório.</h2>
            <p className="max-w-md text-base text-slate-700">
              Linha completa de cuidado: prevenção, procedimentos e acompanhamento. Sem prometer o impossível, só o que
              a equipe faz bem todos os dias.
            </p>
            <Link
              href="/sites/profissional-teste/servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-600 mt-4"
            >
              Ver todos os serviços <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service, idx) => (
              <Link
                key={service.title}
                href={service.link}
                className={`rounded-md border border-slate-200 bg-white px-4 py-5 text-left shadow-none transition hover:border-emerald-300 ${
                  idx % 2 === 0 ? "sm:translate-y-2" : "sm:-translate-y-2"
                }`}
              >
                <p className="text-base font-semibold text-slate-900">{service.title}</p>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#0f172a] py-12">
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex flex-col gap-4 rounded-md border border-white/10 bg-white/5 p-6 shadow-none sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Pronto quando você precisar</p>
              <h2 className="text-2xl font-semibold text-white">Fala com a gente pelo WhatsApp.</h2>
              <p className="text-sm text-slate-200">Sem formulário, sem espera. A conversa já começa resolvendo.</p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-[#0f172a] shadow-none hover:bg-emerald-400"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Chamar agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contato - Informações básicas */}
      <section className="bg-slate-50 py-12 text-slate-900">
        <div className="mx-auto max-w-5xl grid gap-8 px-5 sm:grid-cols-[1fr_1fr] sm:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">Detalhes rápidos</p>
            <h3 className="text-2xl font-bold text-slate-900">Fale direto, sem burocracia.</h3>
            <p className="text-base text-slate-700">
              Se preferir passar na clínica, só avisar antes. A gente organiza o horário para não deixar você e o pet
              esperando.
            </p>
            <Link
              href="/sites/profissional-teste/contato"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-600 mt-4"
            >
              Ver página de contato <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4 rounded-md border border-slate-200 bg-white p-5 shadow-none">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-emerald-700" />
              <span className="text-slate-800">(16) 99999-9999</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-emerald-700" />
              <span className="text-slate-800">Rua Exemplo, 123 - Centro</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-emerald-700" />
              <span className="text-slate-800">Segunda a Sexta: 8h às 18h</span>
            </div>
          </div>
        </div>
      </section>

      <ProfissionalFooter />
    </main>
  );
}

