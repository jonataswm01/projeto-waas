"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Instagram, 
  Linkedin,
  Mail,
  PhoneCall,
  UserX, 
  TrendingDown, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  MessageCircle,
  Hand
} from "lucide-react";
import Link from "next/link";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ScrollProgress } from "@/components/marketing/scroll-progress";
import { PainPointsSection } from "@/components/marketing/pain-points-section";

// Componente para Aurora Orbs com Parallax
function ParallaxOrb({ className, speed = 0.5 }: { className: string; speed?: number }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      style={{ y }}
    />
  );
}

export default function MarketingPage() {
  const footerSections = [
    {
      title: "Produto",
      links: [
        { label: "Por que a Lumina", href: "#solucao" },
        { label: "Planos e preços", href: "#planos" },
        { label: "Perguntas frequentes", href: "#faq" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Site rápido e seguro", href: "#solucao" },
        { label: "Suporte humanizado", href: "/comecar" },
        { label: "Atualizações contínuas", href: "#solucao" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre a Lumina", href: "#solucao" },
        { label: "Resultados de clientes", href: "#planos" },
        { label: "Suporte e ajuda", href: "#faq" },
      ],
    },
    {
      title: "Contato",
      links: [
        { label: "Falar com especialista", href: "/comecar" },
        { label: "WhatsApp prioritário", href: "/comecar" },
        { label: "Central de ajuda", href: "#faq" },
      ],
    },
  ];

  const footerSocials = [
    { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
    { label: "E-mail", href: "mailto:contato@lumina.com", icon: Mail },
    { label: "Fale com a Lumina", href: "/comecar", icon: PhoneCall },
  ];

  return (
    <>
      <ScrollProgress />
      <main className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 overflow-hidden pt-20">
      {/* Aurora Orbs com Parallax Sutil */}
      <ParallaxOrb 
        className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-indigo-300/40 blur-3xl"
        speed={0.3}
      />
      <ParallaxOrb 
        className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl"
        speed={0.5}
      />
      <ParallaxOrb 
        className="absolute bottom-[-6rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-300/40 blur-3xl"
        speed={0.4}
      />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-8 pb-16 sm:pb-24 md:pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              {/* Badge -> linha tipográfica discreta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center md:justify-start mb-6"
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/70" />
                  <span>Pare de perder vendas hoje</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.25] px-2 sm:px-0"
              >
                Seu concorrente está vendendo pelo Google. E você? Não perca mais tempo.{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-pink-500 bg-clip-text text-transparent">
                  
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-6 max-w-3xl mx-auto md:mx-0 leading-relaxed"
              >
                Tenha um Site Profissional, Otimizado e Seguro no ar em até 7 dias
              </motion.p>

              {/* Micro-copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm text-slate-500 mb-10"
              >
                Assinatura mensal. Cancele quando quiser.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center md:justify-start"
              >
                <motion.div>
                  <Link
                    href="/comecar"
                    className="inline-flex items-center justify-center text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 font-semibold rounded-[1rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:from-blue-500 hover:to-indigo-600 hover:shadow-indigo-500/50 hover:shadow-xl hover:brightness-105 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    QUERO VENDER MAIS PELO GOOGLE
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Aurora Glass Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:flex relative h-[320px] sm:h-[360px] md:h-[400px] items-center justify-center"
            >
              <div className="relative w-full max-w-sm">
                <div className="hidden md:block rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-indigo-500/20 p-6 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-wide text-indigo-600 mb-2">
                    Lumina
                  </p>
                  <p className="text-lg font-semibold text-slate-900 mb-1">
                    Seu site sempre atualizado
                  </p>
                  <p className="text-sm text-slate-700">
                    Tecnologia de ponta sem investimento inicial, pensada para gerar vendas reais.
                  </p>
                </div>

                <motion.div
                  className="hidden md:block absolute -top-20 -right-16 w-36 sm:w-40 rounded-[1.5rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg shadow-sky-500/20 p-4"
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-medium text-slate-500 mb-1">Resultado médio</p>
                  <p className="text-lg font-semibold text-slate-900">+30% vendas</p>
                  <p className="text-[11px] text-slate-600">em 90 dias com presença profissional.</p>
                </motion.div>

                <motion.div
                  className="hidden md:block absolute -bottom-28 -left-16 w-44 sm:w-52 rounded-[1.75rem] bg-indigo-600/90 backdrop-blur-xl border border-white/40 shadow-xl shadow-indigo-500/40 p-4 text-white"
                  animate={{ y: [10, -6, 10] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-medium mb-1">Site blindado & rápido</p>
                  <p className="text-sm text-indigo-100">
                    Hospedado em infraestrutura moderna, com Certificado de Segurança e monitoramento contínuo.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Pain Points - AURORA GLASS Dark Mode */}
      <PainPointsSection />

      {/* Seção A Solução */}
      <section id="solucao" className="relative py-20 md:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center mb-6 md:mb-8"
          >
            Ter um site profissional custava R$ 3.000,00. Agora você paga a partir de R$ 99,90 por mês
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            Nós quebramos o modelo das agências tradicionais. Não vendemos &apos;código&apos;, vendemos sua máquina de vendas pronta.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card Modelo Velho - Pain */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full rounded-[1.25rem] bg-red-50/50 backdrop-blur-md border border-red-200 shadow-lg shadow-slate-200/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="h-6 w-6 text-red-500" />
                    <CardTitle className="text-slate-900 text-2xl tracking-tight">O Velho Jeito (Agências)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600">Paga caro na entrada (R$ 3.000+)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600">Site fica lento em 6 meses</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600">Suporte cobra por hora</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600">Tecnologia desatualizada</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card Modelo Lumina - Gain (Destaque Premium) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full rounded-[1.25rem] bg-white/80 backdrop-blur-md border border-emerald-100 shadow-xl shadow-emerald-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
                  <CardHeader>
                    <div className="mb-3">
                      <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-200 hover:bg-emerald-500/20 text-xs font-semibold">
                        Recomendado
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                      <CardTitle className="text-2xl tracking-tight text-slate-900">O Jeito Lumina</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Zero entrada, a partir de R$ 99,90/mês</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Tecnologia sempre atualizada (Tecnologia Moderna)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Suporte incluso na mensalidade</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Site rápido e otimizado para sempre</p>
                      </div>
                    </div>
                    {/* CTA no rodapé do card */}
                    <div className="pt-6 mt-4 border-t border-emerald-100">
                      <Link href="/comecar">
                        <Button
                          className="w-full rounded-[1rem] bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 font-semibold"
                        >
                          Começar Agora
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção A Vitrine - Template Showcase */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center mb-4 md:mb-6"
          >
            Veja os modelos. Escolha o ideal para você
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-700 text-center mb-12 md:mb-16"
          >
            Todos os modelos são otimizados para converter visitantes em clientes
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Template 1: Corporativo Elite (TOPO - DESTAQUE - Card Largo) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 shadow-xl shadow-blue-500/5 hover:bg-white/80 transition-colors duration-300 flex flex-col md:flex-row md:col-span-2 md:h-[450px]"
            >
              {/* Conteúdo - Lado Esquerdo */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center md:w-[40%]">
                <div className="mb-3">
                  <Badge className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 border-0 shadow-md shadow-amber-500/30">
                    Plano Profissional
                  </Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                  Institucional Empresarial
                </h3>
                <p className="text-slate-700 mb-3 text-lg">
                  Site Institucional Completo. Múltiplas páginas, &apos;Sobre Nós&apos; e Seção de Notícias. Autoridade máxima
                </p>
                <p className="text-sm text-slate-500 mb-6">
                  Recomendado para empresas que querem parecer maiores do que são hoje
                </p>
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-[1rem] text-sm px-6 font-semibold bg-amber-500 text-slate-900 hover:bg-amber-600 shadow-lg shadow-amber-500/30 transition-colors"
                  >
                    <Link href="/sites/corporativo-nexus" target="_blank" rel="noopener noreferrer">
                      Ver Demo Ao Vivo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-[1rem] text-sm px-6 font-semibold border-amber-500 text-amber-600 hover:bg-amber-50"
                  >
                    <Link href="/comecar">
                      Quero Este Site
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Imagem - Lado Direito (60% da largura) */}
              <div
                className="relative w-full md:w-[60%] min-h-[400px] md:min-h-0 md:h-full bg-[url('/corporativo-nexus-full-site.png')] bg-cover bg-no-repeat bg-top rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none overflow-hidden transition-all duration-\[6000ms\] ease-in-out"
                style={{
                  backgroundPosition: "center top",
                  transition: "background-position 6s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "center bottom";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "center top";
                }}
                aria-label="Scroll automático do site Corporativo Elite"
              >
                {/* Ícone de toque - apenas mobile */}
                <div className="absolute bottom-4 right-4 md:hidden z-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Hand className="h-4 w-4 text-slate-600" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Template 2: LP Authority (EMBAIXO Esquerda) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 shadow-xl shadow-blue-500/5 hover:bg-white/80 transition-colors duration-300 flex flex-col"
            >
              <div 
                className="relative h-64 md:h-80 bg-[url('/dentista-full.png')] bg-cover bg-top bg-no-repeat rounded-t-2xl group-hover:bg-bottom transition-all duration-\[12000ms\] ease-in-out"
                style={{
                  backgroundPosition: 'center top',
                  transition: 'background-position 12s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = 'center bottom';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = 'center top';
                }}
                aria-label="Página Profissional - Site do Dentista"
              >
                {/* Ícone de toque - apenas mobile */}
                <div className="absolute bottom-4 right-4 md:hidden z-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Hand className="h-4 w-4 text-slate-600" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200 hover:bg-cyan-200 shadow-sm">
                    Plano Profissional
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
                  Página Profissional
                </h3>
                <p className="text-slate-700 mb-2">
                  Página Única de Alta Conversão. Focada em transformar visitantes em pacientes ou clientes qualificados
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  Perfeito para negócios onde estética é parte do produto
                </p>
                <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-[1rem] text-sm px-6 bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-500/30 transition-colors"
                  >
                    <Link href="/sites/implantes-premium" target="_blank" rel="noopener noreferrer">
                      Ver Demo Ao Vivo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-[1rem] text-sm px-6 border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                  >
                    <Link href="/comecar">
                      Quero Este Site
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Template 3: LP Essencial (EMBAIXO Direita) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 shadow-xl shadow-blue-500/5 hover:bg-white/80 transition-colors duration-300 flex flex-col"
            >
              <div
                className="relative h-64 md:h-80 rounded-t-2xl bg-[url('/essencial-pet-full.png')] bg-cover bg-top bg-no-repeat transition-[background-position] duration-\[12000ms\] ease-in-out"
                style={{
                  backgroundPosition: "center top",
                  transition: "background-position 12s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "center bottom";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "center top";
                }}
                aria-label="Página Essencial - Essencial Pet"
              >
                {/* Ícone de toque - apenas mobile */}
                <div className="absolute bottom-4 right-4 md:hidden z-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Hand className="h-4 w-4 text-slate-600" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200">
                    Plano Essencial
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
                  Página Essencial
                </h3>
                <p className="text-slate-700 mb-2">
                  Página Única enxuta com foco total em WhatsApp e chamadas diretas. Preparada para converter visitas em agendamentos imediatos
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  Ideal para clínicas, pet shops e serviços locais
                </p>
                <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-[1rem] text-sm px-6 bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/30 w-fit"
                  >
                    <Link href="/sites/essencial-pet" target="_blank" rel="noopener noreferrer">
                      Ver Demo Ao Vivo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-[1rem] text-sm px-6 border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-fit"
                  >
                    <Link href="/comecar">
                      Quero Este Site
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Recursos Técnicos */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-16"
          >
            Tecnologia das Grandes Empresas. Preço de Pequena Empresa
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Velocidade */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="rounded-[1.25rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-500/10">
                <CardContent className="p-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">Velocidade</h3>
                    <p className="text-lg text-slate-600">
                      Tecnologia moderna. Carrega na hora. O Google ama sites rápidos e coloca eles no topo
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mobile First */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="rounded-[1.25rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-500/10">
                <CardContent className="p-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center">
                      <Smartphone className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">Funciona no Celular</h3>
                    <p className="text-lg text-slate-600">
                      Perfeito em qualquer celular. Onde 90% dos seus clientes estão
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Segurança */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="rounded-[1.25rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-500/10">
                <CardContent className="p-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center">
                      <ShieldCheck className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">Blindado</h3>
                    <p className="text-lg text-slate-600">
                      Certificado de Segurança e Proteção contra ataques inclusos. Seu site nunca sai do ar
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Suporte */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="rounded-[1.25rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-500/10">
                <CardContent className="p-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">Suporte Humanizado</h3>
                    <p className="text-lg text-slate-600">
                      Precisa mudar uma foto ou texto? Chame no WhatsApp. Nós resolvemos
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA após os Benefícios */}
          <div className="mt-12 md:mt-16 text-center">
            <Link
              href="/comecar"
              className="inline-flex items-center justify-center text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 font-semibold rounded-[1rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:from-blue-500 hover:to-indigo-600 hover:shadow-indigo-500/50 hover:shadow-xl hover:brightness-105 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Quero Tecnologia de Grande Empresa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção A Oferta */}
      <div id="planos" className="relative">
        <PricingSection />
      </div>

      {/* Seção FAQ */}
      <section id="faq" className="relative py-20 md:py-24 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-16"
          >
            Perguntas Frequentes
          </motion.h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold">
                O site é meu?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                O domínio (www) e o conteúdo são seus. A estrutura tecnológica é alugada (como uma loja no shopping). Enquanto você assinar, sua loja está aberta e moderna.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Tenho fidelidade?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Nenhuma. Confiamos tanto no nosso serviço que você só fica se estiver tendo resultado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Vocês escrevem os textos?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Temos modelos prontos de alta conversão para o seu nicho, basta preencher com seus dados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Em quanto tempo meu site fica pronto?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Nosso prazo médio é de 5 a 7 dias úteis após o recebimento do seu material (logo e informações). Trabalhamos com agilidade para você não perder tempo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Meu site vai aparecer no Google?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Sim! Desenvolvemos toda a estrutura otimizada para o Google encontrar seu site. Isso facilita que você apareça nas pesquisas da sua região.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                O que vem na mensalidade?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Hospedagem rápida, certificados de segurança (SSL), monitoramento, atualizações contínuas e suporte já estão incluídos. Você não paga nada à parte para manter o site no ar e atualizado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Posso pedir ajustes depois que o site for ao ar?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Sim. Mudou preço, foto ou texto? Manda no WhatsApp e a gente atualiza. Manter o site vivo e correto faz parte da assinatura.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Já tenho domínio. Vocês configuram para mim?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Sim. Se você já tem um domínio, fazemos toda a configuração para ele apontar para o novo site. Se não tiver, ajudamos a registrar em seu nome.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-16 md:mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white to-indigo-50/60" />
        <div className="absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.15),transparent_55%)]" />
        <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="space-y-12 lg:space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 p-8 sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/10" />
              <div className="pointer-events-none absolute -right-12 -top-20 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl" />

              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                <Hand className="h-3.5 w-3.5 text-slate-400" />
                <span>Lumina para sua marca</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-6 mb-4">
                Pronto para um site que vende e evolui com você?
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Fale com um especialista Lumina e descubra o melhor plano para colocar seu negócio na frente com velocidade, segurança e suporte humano.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/comecar"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:from-blue-500 hover:to-indigo-600 hover:shadow-indigo-500/50 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Começar agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#planos"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-slate-700 shadow-sm shadow-indigo-200/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Ver planos
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Site no ar em até 7 dias", "Suporte humano por WhatsApp", "Segurança e performance contínuas"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1.5 text-sm text-slate-600 shadow-sm shadow-indigo-200/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="space-y-4"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="relative inline-flex items-center text-sm sm:text-base text-slate-600 hover:text-slate-900 transition-all duration-200 after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:origin-left after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} Lumina. Sites que vendem, evoluem e permanecem no ar.
            </div>
            <div className="flex items-center gap-3">
              {footerSocials.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, rotate: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-md shadow-indigo-500/10 transition-all duration-200 hover:border-indigo-200 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Icon className="h-5 w-5" />
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-pink-500/0 opacity-0 transition duration-200 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}


