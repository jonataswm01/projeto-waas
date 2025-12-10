"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const postsData: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  image: string;
  content: string[];
}> = {
  "futuro-fusoes-2024": {
    title: "O futuro das fusões em 2024",
    category: "Mercado",
    date: "15 Jan 2024",
    readTime: "8 min",
    author: "Roberto Mendes",
    excerpt: "Análise profunda sobre as tendências de M&A para 2024, incluindo setores em alta, novas regulamentações e estratégias de integração.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    content: [
      "O mercado de fusões e aquisições em 2024 apresenta um cenário complexo, marcado por incertezas macroeconômicas, mas também por oportunidades significativas em setores específicos. Após um 2023 de relativa cautela, observamos sinais de reaquecimento em segmentos como tecnologia, saúde e energia renovável.",
      "As empresas estão cada vez mais focadas em aquisições estratégicas que complementem suas operações core, ao invés de diversificação ampla. Isso reflete uma mudança de mentalidade: crescimento orgânico combinado com aquisições cirúrgicas que agregam capacidades específicas.",
      "Do ponto de vista regulatório, vemos uma maior atenção de órgãos antitruste em várias jurisdições. Isso exige due diligence ainda mais rigorosa e estruturas de transação que antecipem potenciais objeções regulatórias. A preparação prévia se torna crítica.",
      "A tecnologia continua sendo um driver importante. Empresas tradicionais buscam adquirir startups e scale-ups que trazem inovação tecnológica, enquanto empresas tech buscam consolidação para ganhar escala e eficiência operacional.",
      "Em termos de valuation, observamos uma correção em relação aos múltiplos exorbitantes de 2021-2022. Isso cria oportunidades para compradores estratégicos, mas também desafios para vendedores que precisam ajustar expectativas.",
      "A integração pós-fusão ganha ainda mais relevância. Não basta fechar a transação; é essencial ter um plano claro de integração que preserve valor, minimize disrupções e realize sinergias prometidas. Empresas que investem em planejamento de integração desde o início têm taxas de sucesso significativamente maiores.",
    ],
  },
  "compliance-digital-regulamentacoes": {
    title: "Compliance digital: novas regulamentações",
    category: "Legal",
    date: "10 Jan 2024",
    readTime: "6 min",
    author: "Ana Paula Silva",
    excerpt: "Como as novas regulamentações digitais impactam empresas e quais são as principais mudanças que precisam ser implementadas em 2024.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    content: [
      "O cenário regulatório digital está em constante evolução, e 2024 traz mudanças significativas que impactam empresas de todos os portes. A LGPD brasileira, GDPR europeu e novas regulamentações em outros países criam um ambiente complexo que exige atenção constante.",
      "Uma das principais mudanças é a maior ênfase em privacidade por design. Não basta mais adicionar controles de privacidade após o fato; eles precisam ser incorporados desde a concepção de produtos e serviços. Isso requer mudanças culturais e processuais profundas.",
      "A governança de dados ganha centralidade. Empresas precisam ter estruturas claras de responsabilidade, processos documentados e mecanismos de auditoria. O papel do DPO (Data Protection Officer) se torna cada vez mais estratégico.",
      "Incidentes de segurança cibernética estão sob maior escrutínio. Reguladores estão mais rigorosos em relação a notificações obrigatórias e medidas de mitigação. Ter um plano de resposta a incidentes não é mais opcional.",
      "A questão de transferência internacional de dados continua complexa. Empresas que operam globalmente precisam navegar por diferentes regimes regulatórios e garantir que suas transferências estejam em conformidade.",
      "Para empresas que ainda não implementaram programas robustos de compliance digital, o momento é de ação. Reguladores estão aumentando fiscalização e aplicando multas significativas. Investir em compliance agora é mais econômico do que lidar com consequências de não conformidade.",
    ],
  },
  "tendencias-investimento-esg": {
    title: "Tendências de investimento ESG",
    category: "Estratégia",
    date: "5 Jan 2024",
    readTime: "7 min",
    author: "Mariana Costa",
    excerpt: "Como os critérios ESG estão transformando decisões de investimento e quais são as principais tendências para 2024.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    content: [
      "Os critérios ESG (Environmental, Social, Governance) deixaram de ser um diferencial para se tornarem essenciais em decisões de investimento. Em 2024, vemos uma maturação do mercado, com investidores sendo mais sofisticados em sua análise e empresas sendo mais estratégicas em sua abordagem.",
      "No aspecto ambiental, a transição energética continua sendo o tema dominante. Empresas que demonstram compromisso real com descarbonização e eficiência energética atraem mais capital. Greenwashing não funciona mais; investidores fazem due diligence profunda.",
      "A dimensão social ganha destaque, especialmente em relação a diversidade, equidade e inclusão. Investidores institucionais estão cada vez mais exigentes sobre representatividade em boards e equipes executivas. Isso não é mais apenas sobre compliance, mas sobre performance.",
      "Governança corporativa se torna ainda mais crítica. Investidores querem transparência, accountability e estruturas que previnam conflitos de interesse. Empresas com governança fraca pagam um prêmio de risco significativo.",
      "A integração de ESG em estratégia de negócios é fundamental. Não basta ter um departamento de sustentabilidade isolado; ESG precisa estar integrado em decisões operacionais, financeiras e estratégicas. Isso requer mudanças organizacionais profundas.",
      "Para empresas que buscam capital ou estão em processos de M&A, ter uma estratégia ESG robusta e bem documentada se torna um diferencial competitivo significativo. Investidores e compradores estão dispostos a pagar prêmios por empresas com ESG forte.",
    ],
  },
};

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = postsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <Link href="/sites/corporativo-nexus/insights" className="text-amber-500 hover:text-amber-400">
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl =
    "https://wa.me/5516997330113?text=Olá!%20Li%20o%20artigo%20" +
    encodeURIComponent(post.title) +
    "%20e%20gostaria%20de%20saber%20mais.";

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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <motion.div {...fadeUp} className="mb-8">
          <Link
            href="/sites/corporativo-nexus/insights"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header {...fadeUp} className="mb-12">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} de leitura
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-amber-500"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </motion.header>

        {/* Imagem Destacada */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="relative h-96 rounded-2xl overflow-hidden border border-slate-800 mb-12 shadow-2xl"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </motion.div>

        {/* Conteúdo */}
        <motion.article
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="prose prose-invert max-w-none"
        >
          {post.content.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={staggerItem}
              className="text-slate-300 text-lg leading-relaxed mb-6"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.article>

        {/* CTA Final */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-amber-600/20 via-amber-500/15 to-yellow-600/20 border border-amber-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-50 mb-4">
            Quer saber mais sobre este tema?
          </h3>
          <p className="text-slate-300 mb-6">
            Fale com nossos especialistas e descubra como podemos ajudar sua empresa.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 hover:from-amber-400 hover:to-yellow-400 rounded-md px-8 py-4 font-semibold shadow-xl shadow-amber-500/30"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar com especialista
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

