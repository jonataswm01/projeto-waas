"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Scale, 
  Briefcase, 
  ArrowRight,
  Calendar,
  ShieldCheck,
  Hexagon,
  Triangle,
  Circle,
  Building2
} from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair"
});

const solutions = [
  {
    title: "Fusões & Aquisições",
    description: "Estratégias de M&A que transformam empresas em líderes de mercado.",
    icon: TrendingUp,
    wide: true,
    row: 1,
  },
  {
    title: "Consultoria Jurídica",
    description: "Compliance e estruturação legal para operações globais.",
    icon: Scale,
    wide: false,
    row: 1,
  },
  {
    title: "Gestão de Ativos",
    description: "Otimização de portfólios e maximização de retornos.",
    icon: Briefcase,
    wide: false,
    row: 2,
  },
  {
    title: "Auditoria & Compliance",
    description: "Garantia de conformidade regulatória e excelência operacional.",
    icon: ShieldCheck,
    wide: true,
    row: 2,
  },
];

const partners = [
  { name: "Vortex", icon: Hexagon },
  { name: "GlobalBank", icon: Building2 },
  { name: "Stratis", icon: Triangle },
  { name: "Apex", icon: Circle },
  { name: "Nexus", icon: Hexagon },
  { name: "Prime", icon: Triangle },
];

const partnerAccents = [
  { color: "text-amber-400", shadow: "shadow-amber-500/20", border: "border-amber-400/30" },
  { color: "text-cyan-300", shadow: "shadow-cyan-500/20", border: "border-cyan-400/30" },
  { color: "text-emerald-300", shadow: "shadow-emerald-500/20", border: "border-emerald-400/30" },
  { color: "text-blue-300", shadow: "shadow-blue-500/20", border: "border-blue-400/30" },
  { color: "text-fuchsia-300", shadow: "shadow-fuchsia-500/20", border: "border-fuchsia-400/30" },
  { color: "text-indigo-300", shadow: "shadow-indigo-500/20", border: "border-indigo-400/30" },
];

const leadership = [
  {
    name: "Roberto Mendes",
    role: "CEO & Fundador",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80",
  },
  {
    name: "Ana Paula Silva",
    role: "Diretora de Operações",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
  },
  {
    name: "Mariana Costa",
    role: "Diretora Financeira",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=80",
  },
];

const insights = [
  {
    title: "O futuro das fusões em 2024",
    category: "Mercado",
    date: "15 Jan 2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    title: "Compliance digital: novas regulamentações",
    category: "Legal",
    date: "10 Jan 2024",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    title: "Tendências de investimento ESG",
    category: "Estratégia",
    date: "5 Jan 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

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

export default function CorporativoNexusPage() {
  return (
    <div className="relative bg-slate-950 text-slate-50">
      {/* Background Texture & Depth Layers */}
      {/* 1. Granulação - Opacidade Aumentada */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          opacity: 0.12,
        }}
      />
      
      {/* 2. Combinação Híbrida - Granulação + Mesh Gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0), radial-gradient(at 0% 0%, rgba(245, 158, 11, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(30, 58, 138, 0.08) 0px, transparent 50%)',
          backgroundSize: '20px 20px, 100% 100%, 100% 100%',
          opacity: 0.1,
        }}
      />
      
      {/* 3. Recomendação - Paper Texture Premium */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)',
          opacity: 0.06,
        }}
      />
      
      {/* Spotlight Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dourado Queimado Orb - Top Right */}
        <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px]" />
        
        {/* Azul Profundo Orb - Bottom Left */}
        <div className="absolute bottom-0 left-[15%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
        
        {/* Dourado Sutil Orb - Center Left */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[80px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden z-10">
        {/* Spotlight Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.1) 0%, rgb(2, 6, 23) 50%, rgb(2, 6, 23) 100%)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.h1
            {...fadeUp}
            className={`${playfair.variable} font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 leading-tight`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Elevando o padrão do seu negócio para o nível global.
          </motion.h1>
          
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto"
          >
            Consultoria estratégica para empresas que lideram o mercado.
          </motion.p>

          {/* Authority Stats */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-2">+10</div>
              <div className="text-slate-400 text-lg">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-2">$500M</div>
              <div className="text-slate-400 text-lg">Geridos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-2">20</div>
              <div className="text-slate-400 text-lg">Países</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separador de Seção */}
      <div className="relative z-10 border-t border-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/30 to-transparent h-px" />
      </div>

      {/* Trusted Partners - Logos de Clientes */}
      <section className="relative py-16 px-6 z-10 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...scrollAnimation}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">
              Confiança de líderes globais
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              const accent = partnerAccents[index % partnerAccents.length];
              return (
                <motion.div
                  key={partner.name}
                  {...scrollAnimation}
                  transition={{ ...scrollAnimation.transition, delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800/60 backdrop-blur-md shadow-lg ${accent.shadow} transition-all duration-300`}
                >
                  <div className={`p-2 rounded-full border ${accent.border} bg-white/5`}>
                    <Icon className={`h-6 w-6 ${accent.color} transition-colors duration-300`} strokeWidth={1.6} />
                  </div>
                  <span className={`font-semibold text-sm tracking-wide ${accent.color} transition-colors duration-300`}>
                    {partner.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Separador de Seção */}
      <div className="relative z-10 border-t border-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/30 to-transparent h-px" />
      </div>

      {/* Nossas Soluções - Bento Grid */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...scrollAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Nossas Soluções
            </h2>
            <p className="text-slate-400 text-lg">
              Expertise que transforma desafios em oportunidades
            </p>
          </motion.div>

          {/* Grid Reorganizado - Padrão Tijolo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Linha 1: Card Largo + Card Pequeno */}
            {solutions.filter(s => s.row === 1).map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  {...scrollAnimation}
                  transition={{ ...scrollAnimation.transition, delay: index * 0.1 }}
                  className={`group relative h-64 md:h-auto bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300 ${
                    solution.wide ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent rounded-lg transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors">
                      <Icon className="h-7 w-7 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Linha 2: Card Pequeno + Card Largo */}
            {solutions.filter(s => s.row === 2).map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  {...scrollAnimation}
                  transition={{ ...scrollAnimation.transition, delay: (index + 2) * 0.1 }}
                  className={`group relative h-64 md:h-auto bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300 ${
                    solution.wide ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent rounded-lg transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:border-amber-500/30 transition-colors">
                      <Icon className="h-7 w-7 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Separador de Seção */}
      <div className="relative z-10 border-t border-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/30 to-transparent h-px" />
      </div>

      {/* A Equipe - Board of Directors */}
      <section className="relative py-24 px-6 bg-slate-900/50 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...scrollAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Liderança em Ação
            </h2>
            <p className="text-slate-400 text-lg">
              Executivos com histórico comprovado de transformar desafios em crescimento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                {...scrollAnimation}
                transition={{ ...scrollAnimation.transition, delay: index * 0.1 }}
                className="group relative h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-950/40"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
                    {person.role}
                  </p>
                  <h3 className="text-3xl font-semibold text-white leading-tight">
                    {person.name}
                  </h3>
                  <div className="mt-4 h-px w-16 bg-amber-400/70" />
                  <p className="mt-4 text-sm text-slate-300">
                    Liderando frentes estratégicas que movem mercados globais.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador de Seção */}
      <div className="relative z-10 border-t border-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/30 to-transparent h-px" />
      </div>

      {/* Insights - Blog Preview */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...scrollAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Mercado & Tendências
            </h2>
            <p className="text-slate-400 text-lg">
              Análises estratégicas e insights exclusivos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.article
                key={insight.title}
                {...scrollAnimation}
                transition={{ ...scrollAnimation.transition, delay: index * 0.1 }}
                className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wider text-amber-500/80 font-medium">
                      {insight.category}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {insight.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2 group-hover:text-amber-500 transition-colors">
                    {insight.title}
                  </h3>
                  <div className="flex items-center text-amber-500/80 text-sm font-medium group-hover:text-amber-500 transition-colors">
                    Ler mais
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Separador de Seção */}
      <div className="relative z-10 border-t border-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/30 to-transparent h-px" />
      </div>

      {/* CTA Final - Antes do Footer */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...scrollAnimation}
            className="relative bg-gradient-to-br from-yellow-600/20 via-amber-500/15 to-yellow-600/20 border border-amber-500/30 rounded-2xl p-6 md:p-12 text-center overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                  backgroundSize: '30px 30px',
                }}
              />
            </div>
            
            {/* Dourado Glow Sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-yellow-500/5 pointer-events-none" />
            
            <div className="relative z-10">
              <motion.h2
                {...scrollAnimation}
                className={`${playfair.variable} font-playfair text-2xl md:text-5xl font-bold text-slate-50 mb-6`}
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Pronto para o próximo nível?
              </motion.h2>
              
              <motion.p
                {...scrollAnimation}
                transition={{ ...scrollAnimation.transition, delay: 0.1 }}
                className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
              >
                Agende uma reunião estratégica com nosso board e descubra como podemos elevar sua empresa.
              </motion.p>
              
              <motion.div
                {...scrollAnimation}
                transition={{ ...scrollAnimation.transition, delay: 0.2 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 hover:from-amber-400 hover:to-yellow-400 rounded-md w-full md:w-auto px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold shadow-xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <a 
                    href="https://wa.me/5516997330113?text=Olá!%20Vi%20o%20modelo%20Corporativo%20e%20gostei.%20Quero%20saber%20mais%20sobre%20o%20plano%20de%20R$%20199,90." 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Agendar Reunião de Board
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

