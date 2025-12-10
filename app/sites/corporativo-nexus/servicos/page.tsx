"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const services = [
  {
    title: "Fusões & Aquisições",
    description: "Due diligence rigorosa, valuation independente e gestão do processo de integração. Mitigamos riscos reputacionais, financeiros e regulatórios antes da assinatura.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
    slug: "fusoes-aquisicoes",
  },
  {
    title: "Consultoria Jurídica Estratégica",
    description: "Estruturamos holdings, compliance e governança multinível. Atuamos com times jurídicos internos para redesenhar contratos críticos e políticas antifraude.",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=1200&q=80",
    slug: "consultoria-juridica-estrategica",
  },
  {
    title: "Gestão de Ativos & Performance",
    description: "Modelagem de portfólios, análise de capital allocation e programas de eficiência operacional alinhados a métricas ESG e metas de expansão.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    slug: "gestao-ativos-performance",
  },
  {
    title: "Auditoria & Compliance",
    description: "Garantia de conformidade regulatória e excelência operacional. Auditorias independentes e programas de compliance customizados para seu setor.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    slug: "auditoria-compliance",
  },
];

export default function ServicosPage() {
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero */}
        <motion.section {...fadeUp} className="text-center space-y-4 mb-20">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            Nossos Serviços
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Soluções estratégicas para cada desafio
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Expertise multidisciplinar que integra visão jurídica, financeira e operacional para entregar segurança e crescimento mensurável.
          </p>
        </motion.section>

        {/* Grid 2 colunas com cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.1 }}
              className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-50 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/sites/corporativo-nexus/servicos/${service.slug}`}
                  className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold transition-colors group-hover:translate-x-1"
                >
                  Ver detalhes completos
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

