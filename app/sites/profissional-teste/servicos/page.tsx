"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { ProfissionalFooter } from "@/components/demos/profissional/ProfissionalFooter";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

const services = [
  {
    title: "Consultas Veterinárias",
    description: "Atendimento completo com diagnóstico, exames e retorno no mesmo dia. Nada de fila, nada de espera desnecessária.",
    features: [
      "Consulta com veterinário especialista",
      "Exames básicos incluídos",
      "Retorno no mesmo dia",
      "Prontuário digital",
    ],
  },
  {
    title: "Cirurgias",
    description: "Centro cirúrgico completo com monitoramento e recuperação assistida. Procedimentos seguros com anestesia monitorada.",
    features: [
      "Centro cirúrgico equipado",
      "Anestesia monitorada",
      "Recuperação assistida",
      "Acompanhamento pós-operatório",
    ],
  },
  {
    title: "Emergências 24h",
    description: "Plantão permanente para quando seu pet mais precisa de você. Atendimento rápido e eficiente a qualquer hora.",
    features: [
      "Plantão 24 horas",
      "Atendimento imediato",
      "Equipe especializada",
      "Monitoramento constante",
    ],
  },
  {
    title: "Exames Especializados",
    description: "Ultrassom, raio-x digital e laboratório completo na clínica. Resultados rápidos e diagnósticos precisos.",
    features: [
      "Ultrassom",
      "Raio-x digital",
      "Laboratório completo",
      "Resultados no mesmo dia",
    ],
  },
];

export default function ServicosPage() {
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
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">Nossos Serviços</p>
          <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">
            Do check-up ao pós-operatório.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Linha completa de cuidado: prevenção, procedimentos e acompanhamento. Sem prometer o impossível, só o que
            a equipe faz bem todos os dias.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`rounded-md border border-white/10 bg-white/5 p-6 shadow-none ${
                idx % 2 === 0 ? "sm:translate-y-2" : "sm:-translate-y-2"
              }`}
            >
              <h2 className="text-xl font-semibold text-white mb-3">{service.title}</h2>
              <p className="text-slate-300 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-200">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-[#0f172a] shadow-none hover:bg-emerald-400 w-full"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Agendar este serviço
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-md border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-300 mb-4">
            Não encontrou o que precisa? Fala com a gente pelo WhatsApp e a gente vê o que dá pra fazer.
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

