"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
  steps: readonly {
    number: number
    label: string
    nextLabel?: string
  }[]
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  steps,
}: ProgressIndicatorProps) {
  return (
    <>
      {/* Desktop: Barra Horizontal */}
      <div className="hidden md:flex items-center justify-center gap-2 w-full max-w-4xl mx-auto px-4">
        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep
          const isCurrent = step.number === currentStep
          const isUpcoming = step.number > currentStep

          return (
            <div key={step.number} className="flex items-center flex-1">
              {/* Segmento da Barra */}
              <div className="flex items-center flex-1">
                <div
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-all duration-300",
                    isCompleted || isCurrent
                      ? "bg-blue-600"
                      : "bg-slate-200"
                  )}
                />
              </div>

              {/* Indicador do Step */}
              <div className="flex flex-col items-center mx-2 min-w-[80px]">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                    isCompleted
                      ? "bg-blue-600 text-white"
                      : isCurrent
                      ? "bg-blue-600 text-white ring-4 ring-blue-100"
                      : "bg-slate-200 text-slate-500"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium mt-1 text-center",
                    isCurrent
                      ? "text-blue-600"
                      : isCompleted
                      ? "text-slate-700"
                      : "text-slate-400"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Último segmento */}
              {index === steps.length - 1 && (
                <div
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-all duration-300",
                    isCompleted ? "bg-blue-600" : "bg-slate-200"
                  )}
                />
              )}
            </div>
          )
        })}

        {/* Próximo Passo */}
        {steps.find((s) => s.number === currentStep)?.nextLabel && (
          <div className="ml-4 text-sm text-slate-500">
            Próximo: {steps.find((s) => s.number === currentStep)?.nextLabel}
          </div>
        )}
      </div>

      {/* Mobile: Círculo com Número - Versão Header (menor) */}
      <div className="md:hidden flex items-center justify-center gap-2">
        {/* Círculo Menor */}
        <div className="relative w-10 h-10">
          {/* Círculo de Fundo */}
          <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-slate-200"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray={`${(currentStep / totalSteps) * 175.9} 175.9`}
              className="text-blue-600 transition-all duration-500"
              strokeLinecap="round"
            />
          </svg>

          {/* Número no Centro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-slate-900">
              {currentStep}/{totalSteps}
            </span>
          </div>
        </div>
        
        {/* Nome da Etapa */}
        <span className="text-xs font-semibold text-slate-900">
          {steps.find((s) => s.number === currentStep)?.label}
        </span>
      </div>
    </>
  )
}
