"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { getOrganizationBySlug } from "@/app/actions/onboarding";

// Links de pagamento do Asaas (TODO: Atualizar com links reais)
const getPaymentLink = (planId: string): string => {
  const links: Record<string, string> = {
    essencial: "", // TODO: Link Asaas para Essencial (R$ 185,90/mês)
    profissional: "", // TODO: Link Asaas para Profissional (R$ 225,90/mês)
    empresarial: "", // TODO: Link Asaas para Empresarial (R$ 345,90/mês)
  };
  return links[planId] || "#";
};

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  subtitle: string;
  audience: string;
  highlights: string[];
  features: string[];
  supportNote: string;
  isPopular?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    monthlyPrice: 185.9,
    annualPrice: 95.9,
    subtitle: "Presença rápida para ser encontrado.",
    audience: "Para quem precisa marcar presença e ter vitrine online.",
    highlights: ["Entrega até 7 dias", "Segurança", "Tecnologia moderna"],
    features: [
      "Site/LP básica (1 página) responsiva",
      "Seção de serviços/produtos + portfólio enxuto",
      "Contato e WhatsApp integrados",
      "SEO inicial básico para ser achado",
      "Performance otimizada e monitorada",
    ],
    supportNote: "Suporte e 1 alteração/ano (planos anuais).",
  },
  {
    id: "profissional",
    name: "Profissional",
    monthlyPrice: 225.9,
    annualPrice: 125.9,
    subtitle: "Mais conversão e imagem robusta.",
    audience: "Para quem quer parecer maior e converter mais.",
    highlights: ["LP avançada", "Animações pro", "Mais conversão"],
    features: [
      "Site multipáginas (até 3–4) ou LP avançada",
      "CTAs fortes, provas sociais e estrutura de conversão",
      "Animações/hover/motion pro",
      "Organização por páginas (sobre, serviços, portfólio)",
      "SEO on-page mais completo e performance otimizada",
    ],
    supportNote: "Suporte e 1 alteração a cada 6 meses (anual).",
    isPopular: true,
    badge: "Recomendado",
  },
  {
    id: "empresarial",
    name: "Empresarial",
    monthlyPrice: 345.9,
    annualPrice: 195.9,
    subtitle: "Escala, conteúdo e suporte VIP.",
    audience:
      "Para quem precisa de mais páginas, conteúdo e atendimento prioritário.",
    highlights: ["Páginas de serviços", "Blog/Notícias", "Suporte prioritário"],
    features: [
      "Site multipáginas completo com serviços individuais",
      "Blog/Notícias para autoridade e SEO contínuo",
      "Efeitos e animações avançadas",
      "Arquitetura pronta para crescer e mais pontos de conversão",
      "Canal de suporte prioritário",
    ],
    supportNote: "Suporte prioritário e 1 alteração a cada 3 meses (anual).",
    badge: "Suporte prioritário",
  },
];

const templates = [
  {
    id: "essencial",
    name: "Página Essencial",
    description: "Modelo de página única focada em WhatsApp e chamadas diretas.",
    image: "/essencial-pet-full.png",
    demoUrl: "/sites/essencial-pet",
    planId: "essencial",
  },
  {
    id: "profissional",
    name: "Institucional Profissional",
    description:
      "Site multipáginas pensado para serviços, depoimentos e autoridade.",
    image: "/corporativo-nexus-full-site.png",
    demoUrl: "/sites/corporativo-nexus",
    planId: "profissional",
  },
  {
    id: "empresarial",
    name: "Página Premium",
    description: "Layout mais avançado, com mais seções e efeitos visuais.",
    image: "/dentista-full.png",
    demoUrl: "/sites/implantes-premium",
    planId: "empresarial",
  },
];

export default function PricingPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [isAnnual, setIsAnnual] = useState(true);
  const [organization, setOrganization] = useState<{
    id: string;
    name: string;
    slug: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const templatesCarouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      if (!slug) {
        router.replace("/organizacoes");
        return;
      }

      const org = await getOrganizationBySlug(slug);
      if (!org) {
        router.replace("/organizacoes");
        return;
      }

      setOrganization(org);
      setLoading(false);
    })();
  }, [slug, router]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(price);
  };

  const handleSelectPlan = (planId: string) => {
    const paymentLink = getPaymentLink(planId);
    if (paymentLink && paymentLink !== "#") {
      window.open(paymentLink, "_blank");
    } else {
      alert("Link de pagamento ainda não configurado. Entre em contato conosco.");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="text-sm text-slate-500">Carregando...</div>
      </main>
    );
  }

  if (!organization) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8 bg-slate-50">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col items-center mb-8">
          <div className="h-10 w-10 rounded-full bg-orange-600/90 flex items-center justify-center text-sm font-semibold mb-3">
            <span className="tracking-tight text-white">Lu</span>
          </div>
          <p className="text-sm font-medium tracking-[0.18em] uppercase text-slate-500">
            LoveSite
          </p>
        </div>

        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Escolha o plano ideal para {organization.name}
          </h1>
          <p className="text-lg text-slate-600">
            Pague menos no anual. Fique no mensal se precisar de flexibilidade.
          </p>
        </div>

        {/* Seção de modelos */}
        <section className="mt-10 md:mt-14 max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
              Escolha um modelo para começar
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Esses são alguns dos modelos que você pode usar como base. Eles já
              seguem o padrão de cada plano e podem ser personalizados para a sua
              marca.
            </p>
          </div>

          <div className="relative">
            <div
              ref={templatesCarouselRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-2 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
            >
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className="snap-start shrink-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[32%] overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 flex flex-col"
                >
                  <div
                    className="h-60 md:h-72 bg-slate-900/5 bg-cover bg-top"
                    style={{ backgroundImage: `url(${template.image})` }}
                  />
                  <CardContent className="p-4 md:p-5 flex-1 flex flex-col gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 mb-1">
                        Plano{" "}
                        {template.planId.charAt(0).toUpperCase() +
                          template.planId.slice(1)}
                      </p>
                      <CardTitle className="text-base md:text-lg text-slate-900 mb-1">
                        {template.name}
                      </CardTitle>
                      <p className="text-sm text-slate-600">
                        {template.description}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-col gap-2">
                      <Button
                        variant="outline"
                        className="w-full text-xs md:text-sm rounded-full"
                        onClick={() =>
                          window.open(
                            template.demoUrl,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        Ver demo ao vivo
                      </Button>
                      <Button
                        className="w-full text-xs md:text-sm rounded-full bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={() => handleSelectPlan(template.planId)}
                      >
                        Escolher este modelo
                      </Button>
                      <p className="text-[11px] text-slate-400 text-center">
                        Você pode pedir ajustes visuais depois da contratação.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Setas do carrossel - visíveis apenas em telas médias+ */}
            <button
              type="button"
              onClick={() => {
                if (templatesCarouselRef.current) {
                  templatesCarouselRef.current.scrollBy({
                    left: -templatesCarouselRef.current.clientWidth * 0.7,
                    behavior: "smooth",
                  });
                }
              }}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 hover:bg-slate-50"
              aria-label="Ver modelos anteriores"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                if (templatesCarouselRef.current) {
                  templatesCarouselRef.current.scrollBy({
                    left: templatesCarouselRef.current.clientWidth * 0.7,
                    behavior: "smooth",
                  });
                }
              }}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 hover:bg-slate-50"
              aria-label="Ver mais modelos"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Separador entre modelos e planos */}
        <div className="mt-10 md:mt-14 mb-8 md:mb-10 border-t border-slate-200/80" />

        {/* Toggle Mensal/Anual - mesmo estilo da landing */}
        <div className="flex justify-center mb-8 md:mb-10">
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
        </div>

        {/* Cards de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto mb-8">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const savings = isAnnual
              ? ((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) *
                100
              : 0;

            return (
              <Card
                key={plan.id}
                className={`relative max-w-[360px] w-full h-full flex flex-col bg-white/85 backdrop-blur-md border shadow-xl rounded-[1.6rem] transition-all duration-300 ${
                  plan.isPopular
                    ? "border-2 border-blue-400/70 shadow-2xl shadow-blue-500/15 md:scale-[1.02] z-10"
                    : "border border-slate-200/80 shadow-slate-200/60"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge
                      className={`${
                        plan.isPopular
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-3 pt-6 space-y-3">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl md:text-3xl text-slate-900 tracking-tight">
                      {plan.name}
                    </CardTitle>
                    <p className="text-sm text-slate-600">{plan.subtitle}</p>
                    <p className="text-xs text-slate-500">{plan.audience}</p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-start gap-1">
                      <span className="text-sm font-semibold text-slate-500 mt-1">
                        R$
                      </span>
                      <span className="text-4xl md:text-5xl font-bold text-slate-900 leading-none">
                        {formatPrice(price)}
                      </span>
                    </div>
                    <span className="text-sm sm:text-base text-slate-600">
                      /mês
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {isAnnual ? "no plano anual" : "plano mensal"}
                    </span>
                    {isAnnual && (
                      <>
                        <p className="text-[10px] text-slate-400 text-center">
                          Valor total:{" "}
                          <span className="font-medium">
                            {formatPrice(plan.annualPrice * 12)}
                          </span>{" "}
                          em 12x
                        </p>
                        {savings > 0 && (
                          <span className="text-[11px] text-emerald-600">
                            Economize {Math.round(savings)}% no anual
                          </span>
                        )}
                      </>
                    )}
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
                  <div className="pt-2">
                    <Button
                      onClick={() => handleSelectPlan(plan.id)}
                      className={`w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-[1.2rem] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center ${
                        plan.isPopular
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/40 font-bold"
                          : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      Escolher {plan.name}
                    </Button>
                  </div>

                  <div className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 list-none"
                      >
                        <Check className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200/80">
                    <p className="text-sm text-slate-600 text-center">
                      {plan.supportNote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Seção de modelos */}
        <section className="mt-10 md:mt-14 max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
              Escolha um modelo para começar
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Esses são alguns dos modelos que você pode usar como base. Eles já
              seguem o padrão de cada plano e podem ser personalizados para a sua
              marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 flex flex-col"
              >
                <div
                  className="h-40 md:h-44 bg-slate-900/5 bg-cover bg-top"
                  style={{ backgroundImage: `url(${template.image})` }}
                />
                <CardContent className="p-4 md:p-5 flex-1 flex flex-col gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 mb-1">
                      Plano {template.planId.charAt(0).toUpperCase() + template.planId.slice(1)}
                    </p>
                    <CardTitle className="text-base md:text-lg text-slate-900 mb-1">
                      {template.name}
                    </CardTitle>
                    <p className="text-sm text-slate-600">
                      {template.description}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        className="w-full text-xs md:text-sm rounded-full"
                        onClick={() =>
                          window.open(template.demoUrl, "_blank", "noopener,noreferrer")
                        }
                      >
                        Ver demo ao vivo
                      </Button>
                      <Button
                        className="w-full text-xs md:text-sm rounded-full bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={() => handleSelectPlan(template.planId)}
                      >
                        Escolher este modelo
                      </Button>
                    </div>
                    <p className="text-[11px] text-slate-400 text-center">
                      Você pode pedir ajustes visuais depois da contratação.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            onClick={() => router.push("/organizacoes")}
            className="rounded-full"
          >
            ← Voltar para organizações
          </Button>
        </div>
      </div>
    </main>
  );
}

