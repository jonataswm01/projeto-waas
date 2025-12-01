 "use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const timeline = [
  {
    year: "2010",
    title: "Fundação",
    description:
      "Nasce em São Paulo uma consultoria boutique conduzida por três sócios que acreditavam que planejamento estratégico deveria ser acessível e ágil.",
  },
  {
    year: "2015",
    title: "Expansão Nacional",
    description:
      "Abertura das unidades do Rio de Janeiro e Brasília. Primeiros projetos com traços de transformação digital e foco em eficiência operacional.",
  },
  {
    year: "2019",
    title: "O Salto Tecnológico",
    description:
      "Integramos IA e data science ao core da consultoria. Nasce o Nexus Insights, suíte proprietária de modelos de previsão e mapeamento competitivo.",
  },
  {
    year: "Hoje",
    title: "Presença Global",
    description:
      "Operações em 20 países, atuando com boards e fundos de private equity que buscam expansão acelerada com governança impecável.",
  },
];

const values = [
  {
    title: "Integridade",
    description:
      "Decisões orientadas por transparência, compliance e responsabilidade com stakeholders.",
  },
  {
    title: "Excelência",
    description:
      "Executamos com rigor metodológico e obsessão por resultados mensuráveis.",
  },
  {
    title: "Inovação",
    description:
      "Tecnologia e pensamento crítico aplicados para antecipar movimentos de mercado.",
  },
];

const offices = [
  {
    title: "Headquarters — São Paulo",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
  },
  {
    title: "Hub de Inovação — Londres",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&q=80",
  },
];

export default function CorporativoSobrePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-20 px-6">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        {/* Hero */}
        <motion.section {...fadeUp} className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            Sobre a Nexus
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Construindo o futuro dos negócios há mais de uma década.
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            De uma pequena consultoria em SP para uma potência global impulsionada por
            dados, tecnologia e visão de longo prazo.
          </p>
        </motion.section>

        {/* Timeline */}
        <section className="relative">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-3">
              A Jornada
            </p>
            <h2 className="text-3xl font-semibold">
              Legado que conecta passado, presente e futuro.
            </h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full border-l border-slate-800" />
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 text-right md:text-left">
                    <p className="text-sm uppercase tracking-[0.5em] text-amber-400 mb-2">
                      {item.year}
                    </p>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-slate-400 mt-3">{item.description}</p>
                  </div>
                  <div className="relative">
                    <span className="w-4 h-4 rounded-full bg-amber-500 block border-4 border-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
                  </div>
                  <div className="md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section>
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-3">
              Nossos Valores
            </p>
            <h2 className="text-3xl font-semibold">O que sustenta cada decisão.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg shadow-black/20 hover:border-amber-500/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Galeria */}
        <section>
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-3">
              Presença Física
            </p>
            <h2 className="text-3xl font-semibold">Onde as decisões acontecem.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 * index }}
                className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl shadow-black/30"
              >
                <div className="relative h-72">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${office.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-sm uppercase tracking-[0.4em] text-amber-300 mb-2">
                    Nexus Offices
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {office.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

