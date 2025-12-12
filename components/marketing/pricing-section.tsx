"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, Star, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Feature {
  label: string;
  help?: string;
}

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  subtitle: string;
  audience: string;
  highlights: string[];
  includesFrom?: string;
  features: Feature[];
  supportNote: string;
  isPopular?: boolean;
  badge?: string;
  buttonText: string;
}

const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    monthlyPrice: 185.9,
    annualPrice: 95.9, // valor mensal no plano anual
    subtitle: "Presença rápida para ser encontrado.",
    audience: "Para quem precisa marcar presença e ter vitrine online.",
    highlights: ["Entrega até 7 dias", "Segurança", "Tecnologia moderna"],
    features: [
      { label: "Site/LP básica (1 página) responsiva" },
      { label: "Seção de serviços/produtos + portfólio enxuto" },
      { label: "Contato e WhatsApp integrados" },
      { label: "SEO inicial básico para ser achado" },
      { label: "Performance otimizada e monitorada" }
    ],
    supportNote: "Suporte e 1 alteração/ano (planos anuais).",
    buttonText: "Começar agora"
  },
  {
    id: "profissional",
    name: "Profissional",
    monthlyPrice: 225.9,
    annualPrice: 125.9, // valor mensal no plano anual
    subtitle: "Mais conversão e imagem robusta.",
    audience: "Para quem quer parecer maior e converter mais.",
    highlights: ["LP avançada", "Animações pro", "Mais conversão"],
    includesFrom: "Essencial",
    features: [
      { label: "Site multipáginas (até 3–4) ou LP avançada" },
      {
        label: "CTAs fortes, provas sociais e estrutura de conversão",
        help: "Layout pensado para gerar contato/pedido com CTAs visíveis e provas sociais."
      },
      {
        label: "Animações/hover/motion pro",
        help: "Microinterações modernas sem pesar a performance."
      },
      { label: "Organização por páginas (sobre, serviços, portfólio)" },
      {
        label: "SEO on-page mais completo e performance otimizada",
        help: "Heading/meta, URLs amigáveis e ajustes de performance para Google."
      }
    ],
    supportNote: "Suporte e 1 alteração a cada 6 meses (anual).",
    isPopular: true,
    badge: "Recomendado",
    buttonText: "Quero este plano"
  },
  {
    id: "empresarial",
    name: "Empresarial",
    monthlyPrice: 345.9,
    annualPrice: 195.9, // valor mensal no plano anual
    subtitle: "Escala, conteúdo e suporte VIP.",
    audience: "Para quem precisa de mais páginas, conteúdo e atendimento prioritário.",
    highlights: ["Páginas de serviços", "Blog/Notícias", "Suporte prioritário"],
    includesFrom: "Profissional",
    features: [
      {
        label: "Site multipáginas completo com serviços individuais",
        help: "Cada serviço com página própria, rankeável e com CTA dedicado."
      },
      {
        label: "Blog/Notícias para autoridade e SEO contínuo",
        help: "Conteúdo para ranquear e construir autoridade."
      },
      { label: "Efeitos e animações avançadas" },
      {
        label: "Arquitetura pronta para crescer e mais pontos de conversão",
        help: "Base preparada para adicionar páginas sem perder performance."
      },
      {
        label: "Canal de suporte prioritário",
        help: "Fila VIP e respostas mais rápidas."
      }
    ],
    supportNote: "Suporte prioritário e 1 alteração a cada 3 meses (anual).",
    badge: "Suporte prioritário",
    buttonText: "Quero o Empresarial"
  }
];

function FeatureItem({ feature }: { feature: Feature }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const hasHelp = Boolean(feature.help);

  const content = (
    <div className="flex items-start gap-2">
      <Check className="h-4 w-4 text-emerald-600 mt-0.5" />
      <div className="flex items-start gap-1.5 text-sm text-slate-700 leading-relaxed">
        <span>{feature.label}</span>
        {hasHelp && (
          <button
            type="button"
            className="text-slate-500 hover:text-slate-700 transition-colors"
            aria-label={`Saiba mais: ${feature.label}`}
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );

  if (!hasHelp) {
    return content;
  }

  return (
    <>
      {/* Desktop hover */}
      <div className="hidden md:block">
        <HoverCard openDelay={200} closeDelay={120}>
          <HoverCardTrigger asChild>{content}</HoverCardTrigger>
          <HoverCardContent side="top" align="start" className="w-72 text-sm">
            {feature.help}
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* Mobile tap */}
      <div className="md:hidden">
        <Popover open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <PopoverTrigger asChild>{content}</PopoverTrigger>
          <PopoverContent side="top" align="start" className="w-72 text-sm">
            {feature.help}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const getPrice = (plan: Plan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const formatNumber = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center mb-4 md:mb-6"
        >
          Planos Lumina para cada fase do seu negócio
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-600 text-center mb-8 md:mb-12"
        >
          Pague menos no anual. Fique no mensal se precisar de flexibilidade.
        </motion.p>
        
        {/* Botões Mensal/Anual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-3 mb-8 md:mb-12"
        >
          <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1 shadow-inner">
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-4 sm:px-6 py-2 text-sm font-medium transition-all duration-200 ${
                isAnnual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 bg-transparent hover:text-slate-900 active:bg-slate-200"
              }`}
            >
              Anual
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 sm:px-6 py-2 text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 bg-transparent hover:text-slate-900 active:bg-slate-200"
              }`}
            >
              Mensal
            </button>
          </div>
          <p className="text-xs text-slate-500">Melhor valor no plano anual.</p>
        </motion.div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const displayPrice = getPrice(plan);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`relative w-full flex justify-center ${plan.isPopular ? "md:scale-[1.02] z-10" : ""}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-lg px-4 py-1 flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-white" />
                      {plan.badge || "Recomendado"}
                    </Badge>
                  </div>
                )}

                <Card
                  className={`max-w-[360px] w-full h-full flex flex-col bg-white/85 backdrop-blur-md border shadow-xl rounded-[1.6rem] transition-all duration-300 ${
                    plan.isPopular
                      ? "border-2 border-blue-400/70 shadow-2xl shadow-blue-500/15"
                      : "border border-slate-200/80 shadow-slate-200/60"
                  }`}
                >
                  <CardHeader className="text-center pb-3 pt-6 space-y-3">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl md:text-3xl text-slate-900 tracking-tight">
                      {plan.name}
                    </CardTitle>
                      <p className="text-sm text-slate-600">{plan.subtitle}</p>
                      <p className="text-xs text-slate-500">{plan.audience}</p>
                    </div>

                    {/* Preço com hierarquia */}
                    <div className="flex flex-col items-center gap-1">
                      <AnimatePresence mode="wait">
                        {isAnnual ? (
                          <motion.div
                            key="annual"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center gap-1"
                          >
                            <div className="flex items-start gap-1">
                              <span className="text-sm font-semibold text-slate-500 mt-1">R$</span>
                              <span className="text-4xl md:text-5xl font-bold text-slate-900 leading-none">
                                {formatNumber(displayPrice)}
                              </span>
                            </div>
                            <span className="text-sm sm:text-base text-slate-600">/mês</span>
                            <span className="text-[11px] text-slate-500">no plano anual</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="monthly"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center gap-1"
                          >
                            <div className="flex items-start gap-1">
                              <span className="text-sm font-semibold text-slate-500 mt-1">R$</span>
                              <span className="text-4xl md:text-5xl font-bold text-slate-900 leading-none">
                                {formatNumber(displayPrice)}
                            </span>
                            </div>
                            <span className="text-sm sm:text-base text-slate-600">/mês</span>
                            <span className="text-[11px] text-slate-500">plano mensal</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-600">
                      {plan.highlights.map((item) => (
                        <span key={item} className="leading-relaxed">
                          • {item}
                        </span>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col pt-0 px-5 sm:px-6 pb-6 gap-4">
                    {/* Botão CTA logo após os diferenciais */}
                    <div className="pt-2">
                      <motion.div
                        whileHover={{
                          scale: plan.isPopular ? 1.02 : 1.01,
                          y: -2,
                          boxShadow: plan.isPopular
                            ? "0 18px 30px -8px rgba(37, 99, 235, 0.38)"
                            : "0 12px 20px -10px rgba(0,0,0,0.12)",
                        }}
                        whileTap={{ scale: 0.985, y: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 18 }}
                      >
                        <Link
                          href="/comecar"
                          className={`w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-[1.2rem] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center ${
                            plan.isPopular
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/40 font-bold"
                              : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          {plan.buttonText}
                        </Link>
                      </motion.div>
                    </div>

                    {plan.includesFrom && (
                      <div className="pt-3 text-xs uppercase tracking-[0.12em] text-slate-500 text-left">
                        Tudo do {plan.includesFrom} +
                      </div>
                    )}

                    <div className="flex-1 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <FeatureItem key={idx} feature={feature} />
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-200/80">
                      <p className="text-sm text-slate-600 text-center">{plan.supportNote}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

