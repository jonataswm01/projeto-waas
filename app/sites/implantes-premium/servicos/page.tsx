"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Smile, Sparkles, AlignCenter } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Vi%20o%20modelo%20Profissional%20(Dentista)%20e%20gostei.%20Quero%20saber%20mais%20sobre%20o%20plano%20de%20R$%20129,90.";

const treatments = [
  {
    title: "Implantes Dentários",
    description:
      "Tecnologia guiada por computador para um procedimento rápido, seguro e com cicatrização acelerada.",
    Icon: Smile,
    features: [
      "Planejamento digital 3D",
      "Cirurgia guiada por computador",
      "Carga imediata quando possível",
      "Acompanhamento pós-operatório 24h",
      "Garantia de 5 anos",
    ],
  },
  {
    title: "Lentes de Contato Dental",
    description:
      "Facetas ultrafinas com scanners 3D que garantem ajuste perfeito e preservam a estrutura do dente.",
    Icon: Sparkles,
    features: [
      "Scanner intraoral 4K",
      "Design digital do sorriso",
      "Lentes de 0.2mm a 0.4mm",
      "Ajuste perfeito garantido",
      "Resultado em 2 consultas",
    ],
  },
  {
    title: "Invisalign Premium",
    description:
      "Alinhadores transparentes com acompanhamento digital semanal e previsibilidade total do resultado.",
    Icon: AlignCenter,
    features: [
      "Planejamento digital completo",
      "Acompanhamento semanal via app",
      "Alinhadores transparentes",
      "Previsibilidade total do resultado",
      "Tratamento personalizado",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scrollAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function ServicosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 text-slate-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-16 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-[150px]" />
        <div className="absolute top-32 -left-10 h-[360px] w-[360px] rounded-full bg-blue-200/40 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/sites/implantes-premium"
            className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-700 hover:text-cyan-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          <motion.div {...fadeUp} className="mb-12 space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Nossos Tratamentos</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transformações sob medida
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Protocolos personalizados com acompanhamento contínuo e tecnologia de precisão para resultados naturais.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group flex flex-col rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_15px_50px_rgba(8,112,184,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 via-blue-100 to-white text-cyan-700 shadow-inner shadow-white/60">
                  <treatment.Icon className="h-6 w-6" />
                </div>
                <h2 className="mb-3 text-2xl font-semibold text-slate-900">{treatment.title}</h2>
                <p className="mb-4 text-slate-600">{treatment.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {treatment.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform hover:scale-105 hover:shadow-cyan-500/50"
                >
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Agendar este tratamento
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...scrollAnimation}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_25px_90px_rgba(8,112,184,0.14)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40 sm:px-10 lg:px-16 lg:py-16"
          >
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute -top-3 right-8 h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="absolute bottom-0 left-16 h-40 w-40 rounded-full bg-blue-200/40 blur-[120px]" />
            </div>
            <div className="relative text-center space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Não encontrou o que precisa?</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Fale com a gente pelo WhatsApp e vamos ver o que podemos fazer pelo seu caso. Cada situação é única e
                merece atenção personalizada.
              </p>
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

