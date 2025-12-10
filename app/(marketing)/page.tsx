"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Instagram, 
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
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center md:justify-start mb-6"
              >
                <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1.5 text-sm font-semibold rounded-full shadow-md shadow-blue-500/30">
                  PARE DE PERDER VENDAS HOJE
                </Badge>
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
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 20px 40px -15px rgba(37, 99, 235, 0.6), 0 10px 20px -10px rgba(129, 140, 248, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  <Link
                    href="/comecar"
                    className="inline-flex items-center justify-center text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors group"
                  >
                    QUERO VENDER MAIS PELO GOOGLE
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
      <section className="relative py-20 md:py-24 overflow-hidden">
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
              <Card className="h-full rounded-[2rem] bg-red-50/50 backdrop-blur-md border border-red-200 shadow-lg shadow-slate-200/50">
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
                <Card className="h-full rounded-[2rem] bg-white/80 backdrop-blur-md border border-emerald-100 shadow-xl shadow-emerald-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
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
                          className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 font-semibold"
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
                    className="rounded-full text-sm px-6 font-semibold bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 hover:from-amber-400 hover:to-yellow-300 shadow-lg shadow-amber-500/30 transition-colors"
                  >
                    <Link href="/sites/corporativo-nexus" target="_blank" rel="noopener noreferrer">
                      Ver Demo Ao Vivo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full text-sm px-6 font-semibold border-amber-500 text-amber-600 hover:bg-amber-50"
                  >
                    <Link 
                      href="https://wa.me/5516997330113?text=Olá! Vi o modelo Institucional Empresarial e gostei. Quero saber mais sobre o plano de R$ 349,90/mês (ou R$ 199,90/mês no anual)." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Quero Este Site
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Imagem - Lado Direito (60% da largura) */}
              <div
                className="relative w-full md:w-[60%] min-h-[400px] md:min-h-0 md:h-full bg-[url('/corporativo-nexus-full-site.png')] bg-cover bg-no-repeat bg-top rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none overflow-hidden transition-all duration-[6000ms] ease-in-out"
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
                className="relative h-64 md:h-80 bg-[url('/dentista-full.png')] bg-cover bg-top bg-no-repeat rounded-t-2xl group-hover:bg-bottom transition-all duration-[12000ms] ease-in-out"
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
                    className="rounded-full text-sm px-6 bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-500/30 transition-colors"
                  >
                    <Link href="/sites/implantes-premium" target="_blank" rel="noopener noreferrer">
                      Ver Demo Ao Vivo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full text-sm px-6 border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                  >
                    <Link 
                      href="https://wa.me/5516997330113?text=Olá! Vi o modelo Página Profissional (Dentista) e gostei. Quero saber mais sobre o plano de R$ 229,90/mês (ou R$ 129,90/mês no anual)." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
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
                className="relative h-64 md:h-80 rounded-t-2xl bg-[url('/essencial-pet-full.png')] bg-cover bg-top bg-no-repeat transition-[background-position] duration-[12000ms] ease-in-out"
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
                    className="rounded-full text-sm px-6 bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/30 w-fit"
                  >
                    <Link href="/sites/essencial-pet" target="_blank" rel="noopener noreferrer">
                      Ver Demo Ao Vivo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full text-sm px-6 border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-fit"
                  >
                    <Link 
                      href="https://wa.me/5516997330113?text=Olá! Vi o modelo Página Essencial e gostei. Quero saber mais sobre o plano de R$ 189,90/mês (ou R$ 99,90/mês no anual)." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
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
              <Card className="rounded-[2rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-500/10">
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
              <Card className="rounded-[2rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-500/10">
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
              <Card className="rounded-[2rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-500/10">
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
              <Card className="rounded-[2rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-500/10">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 md:mt-16 text-center"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -15px rgba(37, 99, 235, 0.6), 0 10px 20px -10px rgba(129, 140, 248, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <Link
                href="/comecar"
                className="inline-flex items-center justify-center text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors group"
              >
                Quero Tecnologia de Grande Empresa
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seção A Oferta */}
      <PricingSection />

      {/* Seção FAQ */}
      <section className="relative py-20 md:py-24 overflow-hidden">
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
          </Accordion>
        </div>
      </section>
      </main>
    </>
  );
}


