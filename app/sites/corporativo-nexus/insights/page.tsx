 "use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const filters = ["Todos", "Fusões", "Tecnologia", "ESG"];

const articles = [
  {
    title: "O impacto das novas taxas de juros no varejo.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=900&q=80",
    tag: "Macro",
    date: "18 Jan 2024",
  },
  {
    title: "ESG: De obrigação legal a diferencial competitivo.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&q=80",
    tag: "ESG",
    date: "12 Jan 2024",
  },
  {
    title: "Como preparar sua empresa para uma fusão transnacional.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80",
    tag: "M&A",
    date: "08 Jan 2024",
  },
];

export default function CorporativoInsightsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-20 px-6">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <motion.section {...fadeUp} className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            Nexus Intelligence
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Análises aprofundadas sobre economia, tecnologia e gestão.
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Insights exclusivos preparados pelo nosso time de economistas, juristas e estrategistas.
          </p>
        </motion.section>

        {/* Toolbar */}
        <motion.section {...fadeUp} className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar por tema, autor ou palavra-chave"
              className="w-full bg-slate-900 border border-slate-800 rounded-full pl-12 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                  filter === "Todos"
                    ? "bg-amber-500 text-slate-950"
                    : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Hero Post */}
        <section>
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/40"
          >
            <div className="relative h-72 md:h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            </div>
            <div className="p-8 md:p-10 space-y-4">
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full">
                Tendência 2025
              </span>
              <h2 className="text-3xl font-semibold text-white leading-tight">
                A era da Inteligência Artificial Generativa nos Conselhos de Administração.
              </h2>
              <p className="text-slate-400">
                Como boards globais estão redesenhando seus playbooks de governança, risco e inovação a partir de algoritmos generativos e copilotos estratégicos.
              </p>
              <button className="inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors">
                Ler Análise Completa →
              </button>
            </div>
          </motion.div>
        </section>

        {/* Grid artigos */}
        <section>
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 * index }}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg shadow-black/30 hover:-translate-y-1 hover:shadow-amber-500/10 transition-all"
              >
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                    <span>{article.tag}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {article.title}
                  </h3>
                  <button className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
                    Ler insight →
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Newsletter */}
        <motion.section
          {...fadeUp}
          className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-2">
              Newsletter Nexus
            </p>
            <h4 className="text-2xl font-semibold text-white">
              Receba nossos relatórios semanais.
            </h4>
            <p className="text-slate-400 mt-2">
              Insights exclusivos direto no seu e-mail. Sem spam, apenas inteligência aplicável.
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 bg-slate-950 border border-slate-800 rounded-full px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
            />
            <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-5 py-3 rounded-full transition-colors">
              Inscrever-se
            </button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}

