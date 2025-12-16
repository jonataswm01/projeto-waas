"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Hand,
  Instagram,
  LifeBuoy,
  Linkedin,
  Mail,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Sparkles,
  XCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ScrollProgress } from "@/components/marketing/scroll-progress";
import { PainPointsSection } from "@/components/marketing/pain-points-section";

type FaqCategory = "plano" | "implantacao" | "google" | "conteudo" | "suporte";

const FAQ_CATEGORIES: { key: FaqCategory; label: string }[] = [
  { key: "plano", label: "Planos e valor" },
  { key: "implantacao", label: "Prazo e setup" },
  { key: "google", label: "Google e SEO" },
  { key: "conteudo", label: "Conteúdo e marca" },
  { key: "suporte", label: "Suporte e evoluções" },
];

const FAQ_ITEMS: { question: string; answer: string; category: FaqCategory }[] = [
  {
    question: "O site é meu?",
    answer:
      "O domínio e o conteúdo são seus. A infraestrutura é uma assinatura para manter a performance, segurança e evolução contínua. Se cancelar, você pode apontar o domínio para outro destino a qualquer momento.",
    category: "plano",
  },
  {
    question: "Tenho fidelidade?",
    answer:
      "Nenhuma. Trabalhamos mês a mês. Ficamos porque entregamos resultado, não porque prendemos você em contrato.",
    category: "plano",
  },
  {
    question: "O que vem na mensalidade?",
    answer:
      "Hospedagem premium, certificados SSL, monitoramento, atualizações, design otimizado para conversão e suporte humano no WhatsApp. Sem taxas extras escondidas para manter o site no ar.",
    category: "plano",
  },
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer:
      "Entrega média de 5 a 7 dias úteis após receber logo e informações-chave. Se precisar de algo especial, avisamos antes para alinhar prazos.",
    category: "implantacao",
  },
  {
    question: "Já tenho domínio. Vocês configuram para mim?",
    answer:
      "Sim. Ajustamos DNS, SSL e e-mails associados. Se ainda não tiver domínio, ajudamos a registrar em seu nome.",
    category: "implantacao",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer:
      "Estruturamos SEO técnico (velocidade, tags, sitemap, SSL) e copy focada em buscas locais. Após publicar, acompanhamos os primeiros índices para garantir que o Google encontre você.",
    category: "google",
  },
  {
    question: "Posso integrar com WhatsApp, Google Meu Negócio e redes sociais?",
    answer: "Sim. Configuramos botões, links e acompanhamos se tudo está funcionando.",
    category: "google",
  },
  {
    question: "Vocês escrevem os textos?",
    answer:
      "Sim. Usamos modelos testados de conversão e personalizamos com a voz da sua marca. Você revisa e aprova antes de subir ao ar.",
    category: "conteudo",
  },
  {
    question: "Posso pedir ajustes depois que o site for ao ar?",
    answer:
      "Sim. Cada plano inclui um número limitado de pedidos de ajuste por mês (texto, imagem ou CTA). Se precisar de algo fora da franquia, alinhamos antes de executar.",
    category: "suporte",
  },
];

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
        { label: "Por que a LoveSite", href: "#solucao" },
        { label: "Planos e preços", href: "#planos" },
        { label: "Perguntas frequentes", href: "#faq" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Site rápido e seguro", href: "#recursos-tecnologia" },
        { label: "Suporte humanizado", href: "#recursos-tecnologia" },
        { label: "Atualizações contínuas", href: "#recursos-tecnologia" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre a LoveSite", href: "#solucao" },
        { label: "Suporte e ajuda", href: "https://wa.me/5544920012310" },
      ],
    },
    {
      title: "Contato",
      links: [
        { label: "Falar com especialista", href: "https://wa.me/5544920012310" },
        { label: "WhatsApp prioritário", href: "https://wa.me/5544920012310" },
        { label: "Central de ajuda", href: "https://wa.me/5544920012310" },
      ],
    },
  ];

  const footerSocials = [
    { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
    { label: "E-mail", href: "mailto:contato@lovesite.com", icon: Mail },
    { label: "Fale com a LoveSite", href: "/comecar", icon: PhoneCall },
  ];

  const filteredFaqs = FAQ_ITEMS;

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
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center pt-2 pb-12 sm:pb-20 md:pt-6">
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
                  <span>Endereço próprio online</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.25] px-2 sm:px-0"
              >
                Seu negócio precisa de um endereço próprio na internet.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-6 max-w-3xl mx-auto md:mx-0 leading-relaxed"
              >
                Site profissional, no ar em até 7 dias, seguro e no seu domínio.
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
                    Quero meu site próprio
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
                    LoveSite
                  </p>
                  <p className="text-lg font-semibold text-slate-900 mb-1">
                    Seu site sempre atualizado
                  </p>
                  <p className="text-sm text-slate-700">
                    Tecnologia de ponta sem investimento inicial, pensada para gerar vendas reais.
                  </p>
                </div>

                <motion.div
                  className="hidden md:block absolute -top-24 -right-16 w-44 sm:w-48 rounded-[1.5rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg shadow-sky-500/20 p-4"
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-medium text-slate-500 mb-1">Presença validada</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-900">Site confiável que passa segurança</p>
                  <p className="text-[11px] text-slate-600">Domínio próprio, SSL e reputação melhor aos olhos do cliente.</p>
                </motion.div>

                <motion.div
                  className="hidden md:block absolute -bottom-32 -left-16 w-44 sm:w-52 rounded-[1.75rem] bg-indigo-600/90 backdrop-blur-xl border border-white/40 shadow-xl shadow-indigo-500/40 p-4 text-white"
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
          Ter um site profissional custava R$ 3.000. Agora você paga a partir de R$ 95 por mês
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            Quebramos o modelo das agências com assinatura simples, site pronto rápido, manutenção e suporte incluídos. Sem entrada alta, sem burocracia.
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

            {/* Card Modelo LoveSite - Gain (Destaque Premium) */}
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
                      <CardTitle className="text-2xl tracking-tight text-slate-900">O Jeito LoveSite</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">Zero entrada, a partir de R$ 95,90/mês</p>
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
      <section id="recursos-tecnologia" className="relative py-20 md:py-24 overflow-hidden">
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
                <Badge className="bg-amber-100 text-amber-700 border border-amber-200 shadow-none">
                  Plano Empresarial
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
                    className="rounded-[1rem] text-sm px-6 font-semibold bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-white hover:from-amber-500 hover:via-amber-500 hover:to-amber-600 shadow-lg shadow-amber-500/30 transition-colors"
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
                    className="w-full sm:w-auto rounded-[1rem] text-sm px-6 bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/30"
                  >
                    <Link href="/sites/essencial-pet" target="_blank" rel="noopener noreferrer">
                      Ver Demo Ao Vivo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto rounded-[1rem] text-sm px-6 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
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
            className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-16"
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
                <CardContent className="p-6 flex gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 mb-3">Velocidade</h3>
                    <p className="text-sm md:text-base text-slate-600">
                      Tecnologia que carrega em segundos e mantém seus visitantes conectados
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
                <CardContent className="p-6 flex gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center">
                      <Smartphone className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 mb-3">Responsividade</h3>
                    <p className="text-sm md:text-base text-slate-600">
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
                <CardContent className="p-6 flex gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center">
                      <ShieldCheck className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 mb-3">Blindado</h3>
                    <p className="text-sm md:text-base text-slate-600">
                      Monitoramento e atualizações mantêm o site protegido o tempo todo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visibilidade no Google */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="rounded-[1.25rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-500/10">
                  <CardContent className="p-6 flex gap-6 items-center">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-rose-100 flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-rose-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 mb-3">Visibilidade no Google</h3>
                    <p className="text-sm md:text-base text-slate-600">
                        SEO técnico, velocidade e estrutura ajudam o Google a destacar seu negócio
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
                Quero ter meu site no ar agora
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
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/70 via-white to-pink-50/60" />
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-5"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Perguntas frequentes
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tire dúvidas rápido, veja o que está incluso.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2">
              {["Site no ar em até 7 dias", "Suporte humano por WhatsApp", "SEO técnico incluído"].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 text-sm text-slate-600"
                >
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            {/* Coluna esquerda: cards rápidos + CTA (desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 shadow-md shadow-indigo-200/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-indigo-600" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Tempo médio</p>
                      <p className="text-lg font-semibold text-slate-900">Respostas em minutos</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Suporte humano com fila prioritária para clientes.</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 shadow-md shadow-indigo-200/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Confiança</p>
                      <p className="text-lg font-semibold text-slate-900">Infra segura & rápida</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">SSL, monitoramento e updates contínuos inclusos na mensalidade.</p>
                </motion.div>
              </div>

              {/* CTA desktop */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="hidden lg:block rounded-3xl border border-indigo-100 bg-indigo-50/70 backdrop-blur-xl p-6 sm:p-7 shadow-lg shadow-indigo-200/50 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-white text-indigo-600 p-3 shadow-sm">
                    <LifeBuoy className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-slate-900">Não achou sua dúvida?</p>
                    <p className="text-sm text-slate-700">
                      Fale com um especialista LoveSite agora mesmo. Respondemos rápido e sem robôs.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href="https://wa.me/5511973492382?text=Quero%20falar%20com%20um%20especialista%20LoveSite"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-400/40 transition-all duration-200 hover:from-blue-500 hover:to-indigo-600 hover:shadow-lg w-full sm:w-auto"
                      >
                        Chamar especialista
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-3xl border border-white/70 bg-white/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-indigo-500/10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Resultados</p>
                  </div>
                </div>

                {filteredFaqs.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-6 text-left">
                    <p className="font-semibold text-slate-800 mb-1">Ainda sem perguntas aqui.</p>
                    <p className="text-sm text-slate-600">
                      Fale com a gente pelo botão “Chamar especialista” e respondemos na hora.
                    </p>
                  </div>
                ) : (
                  <Accordion type="multiple" className="w-full space-y-2">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem
                        key={faq.question}
                        value={`faq-${index}`}
                        className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm px-4"
                      >
                        <AccordionTrigger className="relative group text-left text-lg font-semibold py-4 pb-5 gap-3 no-underline focus-visible:outline-none focus-visible:ring-0 after:pointer-events-none after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:rounded-full after:scale-x-0 after:origin-left after:bg-gradient-to-r after:from-blue-500 after:to-blue-600 after:opacity-0 after:transition-[transform,opacity] after:duration-250 group-hover:after:scale-x-100 group-hover:after:opacity-100 group-focus-visible:after:scale-x-100 group-focus-visible:after:opacity-100">
                          <span className="text-slate-900 group-hover:text-slate-900">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </div>
            </motion.div>

            {/* CTA móvel (após perguntas) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="lg:hidden"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="rounded-3xl border border-indigo-100 bg-indigo-50/70 backdrop-blur-xl p-6 sm:p-7 shadow-lg shadow-indigo-200/50 transition-all duration-200"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <p className="text-lg font-semibold text-slate-900">Não achou sua dúvida?</p>
                  <p className="text-sm text-slate-700">
                    Fale com um especialista LoveSite agora mesmo. Respondemos rápido e sem robôs.
                  </p>
                  <div className="mt-4 w-full flex flex-col gap-3">
                    <Link
                      href="https://wa.me/5511973492382?text=Quero%20falar%20com%20um%20especialista%20LoveSite"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-400/40 transition-all duration-200 hover:from-blue-500 hover:to-indigo-600 hover:shadow-lg w-full"
                    >
                      Chamar especialista
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
              className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 p-8 sm:p-10 my-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/10" />
              <div className="pointer-events-none absolute -right-12 -top-20 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl" />

              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                <Hand className="h-3.5 w-3.5 text-slate-400" />
                <span>LoveSite para sua marca</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-6 mb-4">
                Pronto para um site que vende e evolui com você?
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Fale com um especialista LoveSite e descubra o melhor plano para colocar seu negócio na frente com velocidade e segurança.
              </p>

              <div className="flex flex-row flex-wrap items-center gap-3">
                <Link
                  href="/comecar"
                  className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 sm:px-8 py-3.5 text-[15px] sm:text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:from-blue-500 hover:to-indigo-600 hover:shadow-indigo-500/50 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
                >
                  Começar agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#planos"
                  className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 sm:px-7 py-3 text-[13px] sm:text-sm md:text-base font-semibold text-slate-700 shadow-sm shadow-indigo-200/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
                >
                  Ver planos
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Site no ar em até 7 dias", "Suporte humano por WhatsApp", "Segurança e performance contínuas"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-sm text-slate-600 px-2 py-1"
                  >
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span>{item}</span>
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
              © {new Date().getFullYear()} LoveSite. Sites que vendem, evoluem e permanecem no ar.
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


