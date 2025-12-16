"use client"

import { useState, useRef, useEffect } from "react"
import { useCheckoutStore } from "@/app/(checkout)/checkout/store"
import { MODELS, PLAN_PRICES, DOMAIN_PRICE_MONTHLY } from "@/lib/checkout-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Shield, Lock, ChevronUp, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface OrderSummaryProps {
  onContinue?: () => void
  continueLabel?: string
  continueDisabled?: boolean
  showContinueButton?: boolean
}

export function OrderSummary({
  onContinue,
  continueLabel = "Continuar",
  continueDisabled = false,
  showContinueButton = true,
}: OrderSummaryProps) {
  const {
    selectedModelId,
    billingCycle,
    domain,
    domainValidated,
    domainOwnership,
    getTotalPrice,
    getDomainPrice,
    getSavings,
  } = useCheckoutStore()

  const [isExpanded, setIsExpanded] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const handleRef = useRef<HTMLDivElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  const model = selectedModelId ? MODELS[selectedModelId] : null
  const prices = selectedModelId ? PLAN_PRICES[selectedModelId] : null

  // Handlers para drag
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartY(e.touches[0].clientY)
    setCurrentY(e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setCurrentY(e.touches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    
    const deltaY = startY - currentY
    const threshold = 50 // pixels para considerar como drag válido
    
    if (deltaY > threshold && !isExpanded) {
      // Arrastou para cima e estava colapsado -> expandir
      setIsExpanded(true)
    } else if (deltaY < -threshold && isExpanded) {
      // Arrastou para baixo e estava expandido -> colapsar
      setIsExpanded(false)
    }
    
    setIsDragging(false)
    setStartY(0)
    setCurrentY(0)
  }

  // Mouse handlers para desktop (caso queira testar)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartY(e.clientY)
    setCurrentY(e.clientY)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setCurrentY(e.clientY)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    
    const deltaY = startY - currentY
    const threshold = 50
    
    if (deltaY > threshold && !isExpanded) {
      setIsExpanded(true)
    } else if (deltaY < -threshold && isExpanded) {
      setIsExpanded(false)
    }
    
    setIsDragging(false)
    setStartY(0)
    setCurrentY(0)
  }

  // Adicionar listeners globais para mouse quando está arrastando
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        setCurrentY(e.clientY)
      }
      
      const handleGlobalMouseUp = () => {
        if (!isDragging) return
        
        const deltaY = startY - currentY
        const threshold = 50
        
        if (deltaY > threshold && !isExpanded) {
          setIsExpanded(true)
        } else if (deltaY < -threshold && isExpanded) {
          setIsExpanded(false)
        }
        
        setIsDragging(false)
        setStartY(0)
        setCurrentY(0)
      }

      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove)
        document.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isDragging, startY, currentY, isExpanded])

  if (!model || !prices) {
    return (
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Resumo do Pedido</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600">
            Selecione um modelo para ver o resumo
          </p>
        </CardContent>
      </Card>
    )
  }

  const planPrice = prices[billingCycle]
  const domainPrice = getDomainPrice()
  const total = getTotalPrice()
  const savings = getSavings()
  const isAnnual = billingCycle === 'annual'

  // Conteúdo detalhado (para versão expandida)
  const DetailedContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={cn("space-y-3", isMobile && "space-y-2.5")}>
      {/* Lista de Itens */}
      <div className={cn("space-y-2", isMobile && "space-y-2")}>
        {/* Assinatura */}
        <div className={cn("flex items-start justify-between gap-3 pb-2 border-b border-slate-200", isMobile && "gap-2 pb-2")}>
          <div className="flex-1 min-w-0">
            <p className={cn("font-medium text-slate-900", isMobile ? "text-sm" : "text-sm")}>
              Assinatura Lumina ({isAnnual ? 'Anual' : 'Mensal'})
            </p>
            <p className={cn("text-slate-500 mt-0.5", isMobile ? "text-xs" : "text-xs")}>
              {model.name}
            </p>
            <p className={cn("text-slate-500 mt-0.5", isMobile ? "text-xs" : "text-xs")}>
              {isAnnual ? 'Pago anualmente' : 'Pago mensalmente'}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className={cn("font-semibold text-slate-900", isMobile ? "text-sm" : "text-sm")}>
              R$ {planPrice.toFixed(2).replace('.', ',')}
            </p>
            <p className={cn("text-slate-500", isMobile ? "text-xs" : "text-xs")}>/mês</p>
            {isAnnual && (
              <p className={cn("text-slate-500 line-through mt-0.5", isMobile ? "text-xs" : "text-xs")}>
                R$ {prices.monthly.toFixed(2).replace('.', ',')}/mês
              </p>
            )}
          </div>
        </div>

        {/* Modelo */}
        <div className={cn("flex items-start justify-between gap-3 pb-2 border-b border-slate-200", isMobile && "gap-2 pb-2")}>
          <div className="flex-1 min-w-0">
            <p className={cn("font-medium text-slate-900", isMobile ? "text-sm" : "text-sm")}>
              Modelo {model.name.split(' - ')[0]}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className={cn("text-slate-600", isMobile ? "text-sm" : "text-sm")}>Grátis</p>
          </div>
        </div>

        {/* Domínio */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className={cn("font-medium text-slate-900", isMobile ? "text-sm" : "text-sm")}>
              Domínio
            </p>
            {domain && domainValidated ? (
              <p className={cn("text-slate-500 mt-0.5 flex items-center gap-1", isMobile ? "text-xs" : "text-xs")}>
                <Check className={cn("text-emerald-600", isMobile ? "w-3 h-3" : "w-3 h-3")} />
                {domain}
                {domainOwnership === 'existing' && (
                  <span className="text-slate-400 ml-1">(existente)</span>
                )}
              </p>
            ) : (
              <p className={cn("text-slate-500 mt-0.5", isMobile ? "text-xs" : "text-xs")}>
                {isAnnual ? 'Incluído no plano anual' : 'Não configurado'}
              </p>
            )}
          </div>
          <div className="text-right flex-shrink-0">
            {domainValidated ? (
              <p className={cn("text-slate-600", isMobile ? "text-sm" : "text-sm")}>
                {domainPrice === 0 ? 'Grátis' : `R$ ${domainPrice.toFixed(2).replace('.', ',')}/mês`}
              </p>
            ) : (
              <p className={cn("text-slate-400", isMobile ? "text-sm" : "text-sm")}>-</p>
            )}
          </div>
        </div>
      </div>

      {/* Economia (se anual) */}
      {isAnnual && savings > 0 && (
        <div className={cn("bg-emerald-50 border border-emerald-200 rounded-lg", isMobile ? "p-2.5" : "p-3")}>
          <p className={cn("font-medium text-emerald-900", isMobile ? "text-sm" : "text-sm")}>
            Você economiza
          </p>
          <p className={cn("font-bold text-emerald-700", isMobile ? "text-base" : "text-lg")}>
            -R$ {savings.toFixed(2).replace('.', ',')}
          </p>
        </div>
      )}

      {/* Banner Domínio Grátis (se mensal) */}
      {!isAnnual && (
        <div className={cn("bg-emerald-50 border border-emerald-200 rounded-lg", isMobile ? "p-2.5" : "p-3")}>
          <p className={cn("font-semibold text-emerald-900", isMobile ? "text-xs leading-snug" : "text-xs")}>
            Aumente o seu ciclo de pagamento para 1 ano e ganhe 1 ano de domínio grátis!{" "}
            <button className="underline">Veja as condições</button>
          </p>
        </div>
      )}

      {/* Total */}
      <div className={cn("border-t border-slate-200", isMobile ? "pt-2.5" : "pt-4")}>
        <div className="flex items-center justify-between mb-1">
          <span className={cn("font-semibold text-slate-900", isMobile ? "text-base" : "text-base")}>Total</span>
          <div className="text-right">
            <p className={cn("font-bold text-slate-900", isMobile ? "text-xl" : "text-xl")}>
              R$ {total.toFixed(2).replace('.', ',')}
            </p>
            <p className={cn("text-slate-500", isMobile ? "text-xs" : "text-xs")}>/mês</p>
          </div>
        </div>
        {isAnnual && (
          <p className={cn("text-slate-500 text-right", isMobile ? "text-xs" : "text-xs")}>
            Total anual: R$ {(total * 12).toFixed(2).replace('.', ',')}
          </p>
        )}
      </div>

      {/* Selos de Segurança */}
      <div className={cn("border-t border-slate-200", isMobile ? "pt-2.5" : "pt-4")}>
        <div className={cn("flex flex-col gap-1.5 text-slate-600", isMobile ? "gap-1.5" : "gap-2")}>
          <div className="flex items-center gap-1.5">
            <Shield className={cn("text-emerald-600", isMobile ? "w-3.5 h-3.5" : "w-4 h-4")} />
            <span className={isMobile ? "text-xs" : "text-xs"}>Compra 100% Segura</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className={cn("text-slate-500", isMobile ? "w-3.5 h-3.5" : "w-4 h-4")} />
            <span className={isMobile ? "text-xs" : "text-xs"}>SSL Criptografado</span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={cn("text-slate-500", isMobile ? "text-xs" : "text-xs")}>7 dias para reembolso</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop: Versão Original (Sticky Sidebar) */}
      <Card className="hidden md:block border-slate-200 shadow-sm sticky top-8">
        <CardHeader>
          <CardTitle className="text-lg">Resumo do Pedido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <DetailedContent isMobile={false} />

          {/* Botão de Continuar */}
          {showContinueButton && (
            <Button
              onClick={onContinue}
              disabled={continueDisabled}
              className="w-full h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-medium"
            >
              {continueLabel}
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Mobile: Bottom Sheet */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-2">
        <div
          ref={sheetRef}
          className={cn(
            "bg-white border-t border-slate-200 rounded-t-xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out flex flex-col",
            isExpanded ? "max-h-[85vh]" : "",
            isDragging && "transition-none"
          )}
        >
          {/* Conteúdo Expandido (Acima do Header) */}
          <div
            className={cn(
              "transition-all duration-300 ease-out",
              isExpanded 
                ? "opacity-100 overflow-y-auto max-h-[calc(85vh-140px)]" 
                : "max-h-0 overflow-hidden opacity-0"
            )}
          >
            {isExpanded && (
              <>
                {/* Handle no topo do conteúdo expandido (para fechar) */}
                <div
                  ref={handleRef}
                  className="px-4 pt-3 pb-2 cursor-grab active:cursor-grabbing select-none"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                >
                  {/* Handle Visual */}
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-1 bg-slate-300 rounded-full" />
                  </div>
                </div>
                
                {/* Conteúdo Detalhado */}
                <div className="px-4 pb-3">
                  <DetailedContent isMobile={true} />
                </div>
              </>
            )}
          </div>

          {/* Header Fixo (Sempre Visível) */}
          <div className="flex-shrink-0 border-t border-slate-200 bg-white">
            {/* Handle e Resumo */}
            <div
              className={cn(
                "px-4 pt-3 pb-2 cursor-grab active:cursor-grabbing select-none",
                isExpanded && "cursor-pointer"
              )}
              onClick={() => !isDragging && setIsExpanded(!isExpanded)}
              onTouchStart={!isExpanded ? handleTouchStart : undefined}
              onTouchMove={!isExpanded ? handleTouchMove : undefined}
              onTouchEnd={!isExpanded ? handleTouchEnd : undefined}
              onMouseDown={!isExpanded ? handleMouseDown : undefined}
            >
              {/* Handle Visual (só aparece quando fechado) */}
              {!isExpanded && (
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-1 bg-slate-300 rounded-full" />
                </div>
              )}

              {/* Resumo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    Resumo do pedido:
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <ChevronUp
                  className={cn(
                    "w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0",
                    isExpanded && "rotate-180"
                  )}
                />
              </div>
            </div>

            {/* Botão (Sempre Visível) */}
            {showContinueButton && (
              <div className="px-4 pb-3 pt-2 bg-white">
                <Button
                  onClick={onContinue}
                  disabled={continueDisabled}
                  className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-slate-900 font-semibold shadow-sm transition-colors"
                >
                  <span className="text-sm">{continueLabel}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )
}
