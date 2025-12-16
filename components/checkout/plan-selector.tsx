"use client"

import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCheckoutStore } from "@/app/(checkout)/checkout/store"
import { PLAN_PRICES, type ModelId } from "@/lib/checkout-data"
import { cn } from "@/lib/utils"

interface PlanSelectorProps {
  modelId: ModelId
}

export function PlanSelector({ modelId }: PlanSelectorProps) {
  const { billingCycle, setCycle } = useCheckoutStore()
  const prices = PLAN_PRICES[modelId]

  if (!prices) return null

  const monthlyTotal = prices.monthly * 12
  const annualTotal = prices.annual * 12
  const savings = monthlyTotal - annualTotal
  const savingsPercent = Math.round((savings / monthlyTotal) * 100)

  return (
    <div className="space-y-4">
      {/* Desktop: Mostra título e descrição */}
      <div className="hidden md:block">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">
          Escolha o ciclo de pagamento
        </h3>
        <p className="text-sm text-slate-600">
          Quanto mais longa sua assinatura, mais você economiza
        </p>
      </div>

      {/* Mobile: Esconde os cards (já está no ModelHero) */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        {/* Opção Mensal */}
        <button
          type="button"
          onClick={() => setCycle('monthly')}
          className={cn(
            "relative p-6 rounded-lg border-2 transition-all text-left",
            "hover:shadow-md",
            billingCycle === 'monthly'
              ? "border-blue-500 bg-blue-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          )}
        >
          {billingCycle === 'monthly' && (
            <div className="absolute top-4 right-4">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div>
              <h4 className="text-base font-semibold text-slate-900 mb-1">
                Pagamento Mensal
              </h4>
              <p className="text-sm text-slate-600">
                Renove mensalmente
              </p>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900">
                  R$ {prices.monthly.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-sm text-slate-600">/mês</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Total: R$ {monthlyTotal.toFixed(2).replace('.', ',')}/ano
              </p>
            </div>
          </div>
        </button>

        {/* Opção Anual (Recomendado) */}
        <button
          type="button"
          onClick={() => setCycle('annual')}
          className={cn(
            "relative p-6 rounded-lg border-2 transition-all text-left",
            "hover:shadow-md",
            billingCycle === 'annual'
              ? "border-blue-500 bg-blue-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          )}
        >
          {billingCycle === 'annual' && (
            <div className="absolute top-4 right-4">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          <div className="absolute top-4 left-4">
            <Badge className="bg-emerald-600 text-white hover:bg-emerald-700">
              RECOMENDADO
            </Badge>
          </div>

          <div className="space-y-3 mt-8">
            <div>
              <h4 className="text-base font-semibold text-slate-900 mb-1">
                Pagamento Anual
              </h4>
              <p className="text-sm text-slate-600">
                Ganhe Domínio Grátis + Setup Zero
              </p>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-slate-900">
                  R$ {prices.annual.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-sm text-slate-600">/mês</span>
              </div>
              <p className="text-xs text-slate-500 line-through mb-1">
                R$ {prices.monthly.toFixed(2).replace('.', ',')}/mês
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-emerald-700 border-emerald-200 bg-emerald-50">
                  {savingsPercent}% OFF
                </Badge>
                <span className="text-xs text-slate-600">
                  Economize R$ {savings.toFixed(2).replace('.', ',')}/ano
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
