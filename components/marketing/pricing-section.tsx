"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, Star, HelpCircle, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Feature {
  name: string;
  description: string;
}

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  description: string;
  features: Feature[];
  isPopular: boolean;
  buttonText: string;
}

const plans: Plan[] = [
  {
    id: "essencial",
    name: "ESSENCIAL",
    monthlyPrice: 79.90,
    description: "Página Única simples para começar a vender",
    features: [
      {
        name: "Página Única Otimizada",
        description: "Todo o conteúdo em uma rolagem só, focado em conversão rápida. Design responsivo e otimizado para dispositivos móveis."
      },
      {
        name: "Botão WhatsApp Direto",
        description: "Botão de contato direto via WhatsApp integrado, facilitando a comunicação imediata com seus clientes."
      },
      {
        name: "Hospedagem Inclusa",
        description: "Servidor de alta velocidade garantido pela Lumina, sem custo extra. Seu site sempre no ar e rápido."
      }
    ],
    isPopular: false,
    buttonText: "Começar com o Básico"
  },
  {
    id: "profissional",
    name: "PROFISSIONAL",
    monthlyPrice: 129.90,
    description: "Site completo multi-página para empresas",
    features: [
      {
        name: "Site Multi-páginas (5 pgs)",
        description: "Até 5 páginas internas para organizar todo o conteúdo do seu negócio de forma profissional."
      },
      {
        name: "Otimização Google (SEO)",
        description: "Configuração técnica para seu site aparecer nas pesquisas da sua região. Estrutura otimizada para busca orgânica."
      },
      {
        name: "Formulário de Contato",
        description: "Formulário profissional integrado para capturar leads e informações de contato dos visitantes."
      },
      {
        name: "Painel de Controle",
        description: "Acesso a um painel administrativo para gerenciar conteúdo, visualizar estatísticas e fazer atualizações."
      }
    ],
    isPopular: false,
    buttonText: "Quero o Site Completo"
  },
  {
    id: "corporativo",
    name: "CORPORATIVO",
    monthlyPrice: 199.90,
    description: "Site completo ilimitado para grandes empresas",
    features: [
      {
        name: "Site Completo Ilimitado",
        description: "Número ilimitado de páginas para empresas que precisam de presença digital completa e robusta."
      },
      {
        name: "Seção de Notícias/Blog",
        description: "Sistema completo de blog integrado para publicar artigos, notícias e conteúdo relevante para seu público."
      },
      {
        name: "Área do Cliente",
        description: "Área restrita para clientes acessarem informações exclusivas, documentos e serviços personalizados."
      },
      {
        name: "Integrações Avançadas",
        description: "Integração com ferramentas de CRM, analytics, marketing automation e outras plataformas empresariais."
      }
    ],
    isPopular: true,
    buttonText: "Quero o Plano Corporativo"
  }
];

function FeatureItem({ feature, isMobile = false }: { feature: Feature; isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
        <span className="text-slate-700 text-center">{feature.name}</span>
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label={`Saiba mais sobre ${feature.name}`}
            >
              <HelpCircle className="h-4 w-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-72 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl">
            <p className="text-sm text-slate-700 leading-relaxed">{feature.description}</p>
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
      <HoverCard>
        <HoverCardTrigger asChild>
          <button
            type="button"
            className="text-slate-700 underline decoration-dotted decoration-slate-300 underline-offset-4 hover:decoration-slate-500 transition-colors cursor-help"
          >
            {feature.name}
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl">
          <p className="text-sm text-slate-700 leading-relaxed">{feature.description}</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const discount = 0.17; // 17% de desconto (equivalente a 2 meses grátis)

  const calculatePrice = (monthlyPrice: number) => {
    if (isAnnual) {
      // Retorna o valor mensal com desconto (valor anual / 12)
      return (monthlyPrice * 12 * (1 - discount)) / 12;
    }
    return monthlyPrice;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center mb-8 md:mb-12"
        >
          Quanto vale dobrar sua visibilidade na região?
        </motion.h2>

        {/* Botões Mensal/Anual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-12"
        >
          <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
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
          <AnimatePresence mode="wait">
            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Badge className="bg-green-100 text-green-700 border-green-300 hover:bg-green-200 transition-colors px-4 py-1.5 text-sm font-semibold flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  Economize 2 meses
                </Badge>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const annualPrice = calculatePrice(plan.monthlyPrice);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`relative ${plan.isPopular ? "md:scale-105 z-10" : ""} w-full`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-lg px-4 py-1 flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-white" />
                      MAIS POPULAR
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full flex flex-col bg-white/70 backdrop-blur-xl border shadow-xl rounded-[2rem] transition-all duration-300 ${
                    plan.isPopular
                      ? "border-2 border-blue-400 shadow-2xl shadow-blue-500/20"
                      : "border border-white/60 shadow-indigo-500/10"
                  }`}
                >
                  <CardHeader className="text-center pb-4 pt-6">
                    <CardTitle className="text-2xl md:text-3xl mb-4 text-slate-900 tracking-tight">
                      {plan.name}
                    </CardTitle>

                    {/* Preço */}
                    <div className="flex flex-col items-center gap-2 mb-4">
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
                            <div className="flex flex-col sm:flex-row items-center gap-2">
                              <span className="text-base sm:text-lg text-slate-500 line-through">
                                {formatPrice(plan.monthlyPrice)}
                              </span>
                              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                                {formatPrice(annualPrice)}
                              </span>
                            </div>
                            <span className="text-sm sm:text-base text-slate-600">/mês</span>
                            <span className="text-xs text-green-600 font-semibold text-center px-2">
                              Economia de {formatPrice(plan.monthlyPrice - annualPrice)}/mês
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="monthly"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-baseline gap-2"
                          >
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                              {formatPrice(plan.monthlyPrice)}
                            </span>
                            <span className="text-base sm:text-lg text-slate-600">/mês</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <p className="text-sm text-slate-600">{plan.description}</p>
                    <Badge className="mt-4 mx-auto w-fit bg-green-100 text-green-700 border-green-300 hover:bg-green-200 transition-colors cursor-default">
                      Instalação Grátis
                    </Badge>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col pt-0 px-4 sm:px-6">
                    <div className="flex-1 space-y-3 mb-6">
                      {/* Desktop: Tooltips com hover */}
                      <div className="hidden md:block space-y-3">
                        {plan.features.map((feature, idx) => (
                          <FeatureItem key={idx} feature={feature} isMobile={false} />
                        ))}
                      </div>

                      {/* Mobile: Tooltips com popover */}
                      <div className="md:hidden space-y-3">
                        {plan.features.map((feature, idx) => (
                          <FeatureItem key={idx} feature={feature} isMobile={true} />
                        ))}
                      </div>
                    </div>

                    {/* Botão CTA */}
                    <div className="pt-6">
                      <motion.div
                        whileHover={{
                          scale: plan.isPopular ? 1.05 : 1.02,
                          boxShadow: plan.isPopular
                            ? "0 20px 25px -5px rgba(37, 99, 235, 0.4), 0 10px 10px -5px rgba(37, 99, 235, 0.2)"
                            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Link
                          href="/comecar"
                          className={`w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center ${
                            plan.isPopular
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/40 font-bold"
                              : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          {plan.buttonText}
                        </Link>
                      </motion.div>
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

