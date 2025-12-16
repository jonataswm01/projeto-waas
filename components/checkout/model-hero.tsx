"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, ChevronDown, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useCheckoutStore } from "@/app/(checkout)/checkout/store"
import { MODELS, PLAN_PRICES, PLAN_FEATURES, type ModelId } from "@/lib/checkout-data"
import { cn } from "@/lib/utils"

interface ModelHeroProps {
  modelId: ModelId
}

export function ModelHero({ modelId }: ModelHeroProps) {
  const model = MODELS[modelId]
  const { billingCycle, setCycle } = useCheckoutStore()
  const prices = PLAN_PRICES[modelId]
  const features = PLAN_FEATURES[modelId]
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  if (!model || !prices || !features) return null

  const currentPrice = prices[billingCycle]
  const monthlyTotal = prices.monthly * 12
  const annualTotal = prices.annual * 12
  const savings = monthlyTotal - annualTotal
  const savingsPercent = Math.round((savings / monthlyTotal) * 100)

  const cycleOptions = [
    {
      value: 'monthly' as const,
      label: '1 mês',
      price: prices.monthly,
      total: prices.monthly,
      badge: null,
    },
    {
      value: 'annual' as const,
      label: '1 ano',
      price: prices.annual,
      total: annualTotal,
      badge: `${savingsPercent}% OFF`,
    },
  ]

  const selectedCycle = cycleOptions.find(opt => opt.value === billingCycle) || cycleOptions[1]

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Imagem */}
          <div className="relative w-full md:w-64 h-40 md:h-48 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
            <Image
              src={model.image}
              alt={model.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header com título e link demo */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Você escolheu o {model.name}
                  </h3>
                  <p className="text-sm text-slate-600">{model.style}</p>
                </div>
                <Link
                  href={model.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Ver demo
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {model.description}
              </p>

              {/* Mobile: Dropdown de Ciclo + Features integrados */}
              <div className="md:hidden space-y-4 pt-4 border-t border-slate-200">
                {/* Nome do Plano e Preço */}
                <div>
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    Plano {model.name.split(' - ')[0]}
                  </p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-slate-900">
                      R$ {currentPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-sm text-slate-600">/mês</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {billingCycle === 'annual' 
                      ? `Total: R$ ${annualTotal.toFixed(2).replace('.', ',')}/ano`
                      : `Valor estimado de renovação R$ ${(prices.monthly * 6).toFixed(2).replace('.', ',')}`}
                  </p>
                </div>

                {/* Dropdown de Ciclo */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Ciclo de pagamento
                  </label>
                  <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between p-3 border border-slate-300 rounded-lg bg-white hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-900">
                            {selectedCycle.label}
                          </span>
                          {selectedCycle.badge && (
                            <Badge className="bg-emerald-600 text-white text-xs px-2 py-0.5">
                              {selectedCycle.badge}
                            </Badge>
                          )}
                        </div>
                        <ChevronDown className={cn(
                          "w-4 h-4 text-slate-500 transition-transform",
                          isPopoverOpen && "rotate-180"
                        )} />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[calc(100vw-2rem)] p-0 border-slate-200 shadow-lg" align="start">
                      <div className="py-1">
                        {cycleOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setCycle(option.value)
                              setIsPopoverOpen(false)
                            }}
                            className={cn(
                              "w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0",
                              billingCycle === option.value && "bg-blue-50"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm font-medium text-slate-900">
                                    {option.label}
                                  </span>
                                  {option.badge && (
                                    <Badge className="bg-emerald-600 text-white text-xs px-2 py-0.5">
                                      {option.badge}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-xs text-slate-600">
                                  R$ {option.price.toFixed(2).replace('.', ',')}/mês
                                </p>
                              </div>
                              {billingCycle === option.value && (
                                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 ml-2">
                                  <div className="w-2 h-2 rounded-full bg-white" />
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Seu plano inclui */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">
                    Seu plano inclui:
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {features.join(', ')} e mais.
                  </p>
                </div>

                {/* Banner Domínio Grátis (se anual) */}
                {billingCycle === 'annual' && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <p className="text-xs font-semibold text-emerald-900">
                      Quer um domínio grátis? Selecione um ciclo de 1 ano ou mais.
                    </p>
                  </div>
                )}
              </div>

              {/* Desktop: Link demo */}
              <Link
                href={model.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Ver demo
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            {/* Link para trocar modelo */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Trocar modelo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
