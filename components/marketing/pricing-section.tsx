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
  name: string;
  description: string;
}

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: Feature[];
  isPopular: boolean;
  buttonText: string;
}

const plans: Plan[] = [
  {
    id: "essencial",
    name: "ESSENCIAL",
    monthlyPrice: 189.90,
    annualPrice: 99.90,
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
      },
      {
        name: "Entrega Rápida (7 dias)",
        description: "Seu site profissional pronto e no ar em até 7 dias úteis após a aprovação do conteúdo."
      }
    ],
    isPopular: false,
    buttonText: "Começar com o Básico"
  },
  {
    id: "profissional",
    name: "PROFISSIONAL",
    monthlyPrice: 229.90,
    annualPrice: 129.90,
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
        name: "Botão de Agendamento",
        description: "Sistema de agendamento integrado para que seus clientes marquem consultas ou serviços diretamente pelo site."
      },
      {
        name: "Galeria de Fotos e Projetos",
        description: "Galeria profissional para exibir seus trabalhos, projetos e portfólio de forma organizada e atraente."
      }
    ],
    isPopular: true,
    buttonText: "Quero o Site Completo"
  },
  {
    id: "empresarial",
    name: "EMPRESARIAL",
    monthlyPrice: 349.90,
    annualPrice: 199.90,
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
        name: "Páginas de Serviços Individuais",
        description: "Páginas dedicadas para cada serviço ou produto, permitindo apresentação detalhada e otimizada para conversão."
      },
      {
        name: "Integrações Avançadas",
        description: "Integração com ferramentas de CRM, analytics, marketing automation e outras plataformas empresariais."
      }
    ],
    isPopular: false,
    buttonText: "Quero o Plano Empresarial"
  }
];

function BenefitItem({ feature }: { feature: Feature }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: Hover Card com delay suave */}
      <div className="hidden md:flex items-center justify-center gap-3">
        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
        <HoverCard openDelay={300} closeDelay={150}>
          <HoverCardTrigger asChild>
            <button
              type="button"
              className="text-slate-700 underline decoration-dotted decoration-slate-300 underline-offset-4 hover:decoration-slate-500 transition-colors cursor-help"
            >
              {feature.name}
            </button>
          </HoverCardTrigger>
          <HoverCardContent 
            className="w-80 bg-white border border-slate-100 shadow-xl z-50"
            side="top"
            align="center"
            sideOffset={8}
          >
            <p className="text-sm text-slate-700 leading-relaxed">{feature.description}</p>
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* Mobile: Popover com clique/toque */}
      <div className="md:hidden flex items-center justify-center gap-2 flex-wrap">
        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
        <Popover open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="text-slate-700 underline decoration-dotted decoration-slate-300 underline-offset-4 active:decoration-slate-500 transition-colors"
            >
              {feature.name}
            </button>
          </PopoverTrigger>
          <PopoverContent 
            className="w-72 bg-white border border-slate-100 shadow-xl z-50"
            align="center"
            side="top"
            sideOffset={8}
          >
            <p className="text-sm text-slate-700 leading-relaxed">{feature.description}</p>
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center mb-4 md:mb-6"
        >
          Quanto vale dobrar sua visibilidade na região?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-600 text-center mb-8 md:mb-12"
        >
          Site completo + Hospedagem + Manutenção
        </motion.p>
        
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
        </motion.div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const displayPrice = getPrice(plan);

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
                  className={`h-full flex flex-col bg-white/80 backdrop-blur-md border shadow-xl rounded-[2rem] transition-all duration-300 ${
                    plan.isPopular
                      ? "border-2 border-blue-400 shadow-2xl shadow-blue-500/20"
                      : "border border-slate-100 shadow-slate-200/50"
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
                            <div className="flex items-center">
                              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                                {formatPrice(displayPrice)}
                              </span>
                            </div>
                            <span className="text-sm sm:text-base text-slate-600">/mês</span>
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
                              {formatPrice(displayPrice)}
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
                      {plan.features.map((feature, idx) => (
                        <BenefitItem key={idx} feature={feature} />
                      ))}
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

