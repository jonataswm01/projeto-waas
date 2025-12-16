"use client"

import { Suspense, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ProgressIndicator } from "@/components/checkout/progress-indicator"
import { ModelHero } from "@/components/checkout/model-hero"
import { PlanSelector } from "@/components/checkout/plan-selector"
import { DomainSetup } from "@/components/checkout/domain-setup"
import { OrderSummary } from "@/components/checkout/order-summary"
import { useCheckoutStore } from "@/app/(checkout)/checkout/store"
import { CHECKOUT_STEPS, type ModelId } from "@/lib/checkout-data"

function Step1Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { selectedModelId, setModel, isStepComplete } = useCheckoutStore()

  // Identificar modelo da URL ou usar o selecionado
  useEffect(() => {
    const modelParam = searchParams.get('model') as ModelId | null
    
    if (modelParam && ['essencial', 'profissional', 'empresarial'].includes(modelParam)) {
      if (selectedModelId !== modelParam) {
        setModel(modelParam)
      }
    }
  }, [searchParams, selectedModelId, setModel])

  // Se não tiver modelo, redirecionar para home ou mostrar seleção
  if (!selectedModelId) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Selecione um modelo
          </h1>
          <p className="text-slate-600 mb-6">
            Por favor, escolha um modelo na página inicial.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    )
  }

  const handleContinue = () => {
    if (isStepComplete(1)) {
      router.push('/checkout/step-2')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Progress Indicator - Desktop Only */}
      <div className="hidden md:block bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgressIndicator
            currentStep={1}
            totalSteps={CHECKOUT_STEPS.length}
            steps={CHECKOUT_STEPS}
          />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 md:pb-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Configure sua Assinatura
          </h1>
          <p className="text-slate-600">
            Escolha o ciclo de pagamento e configure seu domínio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ESQUERDA: Configuração (col-span-2) */}
          <div className="lg:col-span-2 space-y-6">
            <ModelHero modelId={selectedModelId} />
            <PlanSelector modelId={selectedModelId} />
            <DomainSetup />
          </div>

          {/* DIREITA: Resumo (col-span-1 - Sticky) */}
          <div className="lg:col-span-1">
            <OrderSummary
              onContinue={handleContinue}
              continueLabel="Continuar para Revisão"
              continueDisabled={!isStepComplete(1)}
              showContinueButton={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Step1Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Carregando...</p>
        </div>
      </div>
    }>
      <Step1Content />
    </Suspense>
  )
}
