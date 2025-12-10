"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Phone } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const scrollAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const servicesData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  included: string[];
  process: { step: number; title: string; description: string }[];
}> = {
  "fusoes-aquisicoes": {
    title: "Fusões & Aquisições",
    description: "Estratégias de M&A que transformam empresas em líderes de mercado.",
    longDescription: "Nossa expertise em fusões e aquisições combina rigor analítico com execução tática. Realizamos due diligence completa, valuation independente e gestão integral do processo de integração. Mitigamos riscos reputacionais, financeiros e regulatórios antes da assinatura, garantindo que cada transação maximize valor e minimize exposição.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
    included: [
      "Due diligence jurídica, financeira e operacional completa",
      "Valuation independente com múltiplas metodologias",
      "Análise de sinergias e riscos integrados",
      "Estruturação legal e fiscal otimizada",
      "Gestão de integração pós-fusão",
      "Suporte em negociações e documentação",
    ],
    process: [
      {
        step: 1,
        title: "Diagnóstico Inicial",
        description: "Análise profunda do cenário atual, identificação de oportunidades e riscos potenciais.",
      },
      {
        step: 2,
        title: "Due Diligence",
        description: "Varredura completa de aspectos jurídicos, financeiros, operacionais e regulatórios.",
      },
      {
        step: 3,
        title: "Valuation e Modelagem",
        description: "Avaliação independente com múltiplas metodologias e modelagem de cenários.",
      },
      {
        step: 4,
        title: "Estruturação",
        description: "Desenho da estrutura legal, fiscal e operacional otimizada para a transação.",
      },
      {
        step: 5,
        title: "Execução",
        description: "Gestão do processo de negociação, documentação e fechamento da transação.",
      },
      {
        step: 6,
        title: "Integração",
        description: "Suporte na integração pós-fusão, garantindo sinergias e minimizando disrupções.",
      },
    ],
  },
  "consultoria-juridica-estrategica": {
    title: "Consultoria Jurídica Estratégica",
    description: "Compliance e estruturação legal para operações globais.",
    longDescription: "Estruturamos holdings, compliance e governança multinível para empresas que operam em múltiplas jurisdições. Atuamos em conjunto com times jurídicos internos para redesenhar contratos críticos, políticas antifraude e estruturas corporativas que suportam crescimento acelerado com segurança jurídica.",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=1200&q=80",
    included: [
      "Estruturação de holdings e governança multinível",
      "Compliance regulatório e políticas antifraude",
      "Redesenho de contratos críticos",
      "Análise de riscos jurídicos e regulatórios",
      "Suporte em operações internacionais",
      "Treinamento de equipes jurídicas internas",
    ],
    process: [
      {
        step: 1,
        title: "Mapeamento Jurídico",
        description: "Análise completa da estrutura legal atual e identificação de gaps e riscos.",
      },
      {
        step: 2,
        title: "Estruturação",
        description: "Desenho de estrutura corporativa otimizada para operações globais.",
      },
      {
        step: 3,
        title: "Compliance",
        description: "Implementação de políticas e procedimentos de conformidade regulatória.",
      },
      {
        step: 4,
        title: "Documentação",
        description: "Redação e revisão de contratos críticos e documentos corporativos.",
      },
      {
        step: 5,
        title: "Implementação",
        description: "Acompanhamento na implementação e ajustes necessários.",
      },
      {
        step: 6,
        title: "Governança",
        description: "Estabelecimento de rituais e processos de governança contínua.",
      },
    ],
  },
  "gestao-ativos-performance": {
    title: "Gestão de Ativos & Performance",
    description: "Otimização de portfólios e maximização de retornos.",
    longDescription: "Modelagem de portfólios, análise de capital allocation e programas de eficiência operacional alinhados a métricas ESG e metas de expansão. Transformamos dados em insights acionáveis que otimizam performance financeira e operacional.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    included: [
      "Modelagem e otimização de portfólios",
      "Análise de capital allocation",
      "Programas de eficiência operacional",
      "Métricas ESG integradas",
      "KPIs customizados e dashboards",
      "Acompanhamento de performance contínuo",
    ],
    process: [
      {
        step: 1,
        title: "Análise de Portfólio",
        description: "Mapeamento completo de ativos e análise de performance atual.",
      },
      {
        step: 2,
        title: "Modelagem",
        description: "Construção de modelos financeiros e cenários de otimização.",
      },
      {
        step: 3,
        title: "Estratégia",
        description: "Desenho de estratégia de capital allocation e eficiência.",
      },
      {
        step: 4,
        title: "Implementação",
        description: "Execução de programas de otimização e eficiência.",
      },
      {
        step: 5,
        title: "Monitoramento",
        description: "Acompanhamento de KPIs e ajustes estratégicos.",
      },
      {
        step: 6,
        title: "Otimização",
        description: "Refinamento contínuo baseado em dados e resultados.",
      },
    ],
  },
  "auditoria-compliance": {
    title: "Auditoria & Compliance",
    description: "Garantia de conformidade regulatória e excelência operacional.",
    longDescription: "Auditorias independentes e programas de compliance customizados para seu setor. Garantimos conformidade regulatória e excelência operacional através de processos rigorosos e tecnologia avançada.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    included: [
      "Auditorias independentes completas",
      "Programas de compliance customizados",
      "Análise de conformidade regulatória",
      "Mapeamento de riscos e controles",
      "Treinamento de equipes",
      "Relatórios executivos e recomendações",
    ],
    process: [
      {
        step: 1,
        title: "Planejamento",
        description: "Definição de escopo e metodologia da auditoria.",
      },
      {
        step: 2,
        title: "Execução",
        description: "Realização de testes e análises de conformidade.",
      },
      {
        step: 3,
        title: "Análise",
        description: "Identificação de gaps e oportunidades de melhoria.",
      },
      {
        step: 4,
        title: "Relatório",
        description: "Documentação de achados e recomendações.",
      },
      {
        step: 5,
        title: "Implementação",
        description: "Suporte na implementação de melhorias.",
      },
      {
        step: 6,
        title: "Monitoramento",
        description: "Acompanhamento contínuo de conformidade.",
      },
    ],
  },
};

export default function ServicoSinglePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
          <Link href="/sites/corporativo-nexus/servicos" className="text-amber-500 hover:text-amber-400">
            Voltar para serviços
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl =
    "https://wa.me/5516997330113?text=Olá!%20Tenho%20interesse%20no%20serviço%20" +
    encodeURIComponent(service.title) +
    ".%20Quero%20saber%20mais.";

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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <motion.div {...fadeUp} className="mb-8">
          <Link
            href="/sites/corporativo-nexus/servicos"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para serviços
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.section {...fadeUp} className="mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-4">
            {service.title}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            {service.longDescription}
          </p>
        </motion.section>

        {/* Imagem Grande */}
        <motion.div
          {...scrollAnimation}
          className="relative h-96 rounded-2xl overflow-hidden border border-slate-800 mb-16 shadow-2xl"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        </motion.div>

        {/* Grid 2 colunas: O que está incluído + Como funciona */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* O que está incluído */}
          <motion.div
            {...scrollAnimation}
            className="bg-slate-900 border border-slate-800 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-slate-50 mb-6">
              O que está incluído
            </h2>
            <ul className="space-y-4">
              {service.included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-amber-500" />
                  </div>
                  <span className="text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Como funciona */}
          <motion.div
            {...scrollAnimation}
            transition={{ ...scrollAnimation.transition, delay: 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-slate-50 mb-6">
              Como funciona
            </h2>
            <div className="space-y-6">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-amber-500">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Card */}
        <motion.div
          {...scrollAnimation}
          className="bg-gradient-to-br from-amber-600/20 via-amber-500/15 to-yellow-600/20 border border-amber-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4">
            Pronto para começar?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Fale com nosso time e descubra como podemos ajudar sua empresa a alcançar os próximos níveis de crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 hover:from-amber-400 hover:to-yellow-400 rounded-md px-8 py-4 font-semibold shadow-xl shadow-amber-500/30"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-md px-8 py-4 font-semibold"
            >
              <a href="tel:+551140002000">
                <Phone className="h-4 w-4 mr-2" />
                Ligar agora
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

