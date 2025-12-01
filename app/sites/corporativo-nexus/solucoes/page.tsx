 "use client";

import { motion } from "framer-motion";
import {
  Search,
  LineChart,
  Settings,
  Infinity,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const method = [
  {
    title: "Diagnóstico Profundo",
    description: "Varremos múltiplas bases de dados, realizamos entrevistas com stakeholders e aplicamos análises forenses para entender riscos e alavancas ocultas.",
    Icon: Search,
  },
  {
    title: "Modelagem de Cenários",
    description: "Construímos matrizes financeiras e jurídicas com sensitividades para cada hipótese, simulando impactos em EBITDA, governança e pessoas.",
    Icon: LineChart,
  },
  {
    title: "Execução Tática",
    description: "Hands-on junto ao board, conectando squads jurídicos, financeiros e operacionais para acelerar sinergias e eliminar gargalos.",
    Icon: Settings,
  },
  {
    title: "Governança Contínua",
    description: "Criamos rituais trimestrais, KPIs e comitês para sustentar a estratégia com accountability claro e transparência total.",
    Icon: Infinity,
  },
];

const services = [
  {
    title: "Fusões & Aquisições",
    description:
      "Due diligence rigorosa, valuation independente e gestão do processo de integração. Mitigamos riscos reputacionais, financeiros e regulatórios antes da assinatura.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
  },
  {
    title: "Consultoria Jurídica Estratégica",
    description:
      "Estruturamos holdings, compliance e governança multinível. Atuamos com times jurídicos internos para redesenhar contratos críticos e políticas antifraude.",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=1200&q=80",
  },
  {
    title: "Gestão de Ativos & Performance",
    description:
      "Modelagem de portfólios, análise de capital allocation e programas de eficiência operacional alinhados a métricas ESG e metas de expansão.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  },
];

const results = [
  { label: "Aumento médio de EBITDA", value: "30%" },
  { label: "Fusões concluídas 2024", value: "12" },
  { label: "Risco jurídico mitigado", value: "90%" },
];

export default function CorporativoSolucoesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-20 px-6">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        {/* Hero */}
        <motion.section {...fadeUp} className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            Soluções Nexus
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Expertise multidisciplinar.
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Nossa abordagem integra visão jurídica, financeira e operacional para entregar segurança e crescimento mensurável.
          </p>
        </motion.section>

        {/* Método */}
        <section>
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-2">
              O Método Nexus
            </p>
            <h2 className="text-3xl font-semibold">Como geramos valor.</h2>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {method.map((step, index) => (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg shadow-black/30 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <step.Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < method.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-amber-500/40 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Serviços detalhados */}
        <section className="space-y-12">
          <motion.div {...fadeUp} className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-2">
              Pilares de atuação
            </p>
            <h2 className="text-3xl font-semibold">Metodologia aplicada ao contexto.</h2>
          </motion.div>

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 * index }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`relative h-72 rounded-3xl overflow-hidden border border-slate-800 shadow-xl shadow-black/30 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              </div>
              <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-3">
                  {service.title}
                </p>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Resultados */}
        <section>
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-2">
              Impacto Real
            </p>
            <h2 className="text-3xl font-semibold">Mensuramos cada entrega.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 text-center shadow-lg shadow-black/30"
              >
                <p className="text-4xl font-bold text-amber-400 mb-3">
                  {result.value}
                </p>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {result.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-amber-600/20 via-amber-500/10 to-transparent border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-amber-500/20">
          <motion.p
            {...fadeUp}
            className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-3"
          >
            Consulte o Board
          </motion.p>
          <motion.h3
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-3xl font-semibold text-white mb-6"
          >
            Precisa de uma análise personalizada?
          </motion.h3>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-slate-300 mb-8"
          >
            Nossos especialistas combinam inteligência competitiva e execução tática para maximizar o valor do seu negócio.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            <button className="bg-white text-slate-950 font-semibold px-8 py-4 rounded-full shadow-xl shadow-white/20 hover:bg-slate-100 transition-colors">
              Agendar Diagnóstico
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

