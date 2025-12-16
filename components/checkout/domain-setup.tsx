"use client"

import { useState, useEffect, useTransition } from "react"
import { Check, X, Loader2, Globe, Search, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useCheckoutStore, type DomainOwnership } from "@/app/(checkout)/checkout/store"
import { checkDomainAvailability } from "@/app/actions/checkDomain"
import { cn } from "@/lib/utils"

export function DomainSetup() {
  const { domain, domainValidated, domainOwnership: storeDomainOwnership, setDomain, billingCycle } = useCheckoutStore()
  const [inputValue, setInputValue] = useState(domain || "")
  const [domainOwnership, setDomainOwnership] = useState<DomainOwnership>(storeDomainOwnership || "new")
  const [isChecking, startCheck] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(!domainValidated)

  // Sincronizar inputValue com domain do store
  useEffect(() => {
    if (domain && !isEditing) {
      setInputValue(domain)
    }
  }, [domain, isEditing])

  const validateExistingDomain = (domain: string): boolean => {
    // Validação básica: deve ter pelo menos um ponto (ex: exemplo.com.br)
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
    return domainRegex.test(domain.trim())
  }

  const handleCheck = async () => {
    if (!inputValue.trim()) {
      setError("Por favor, informe um domínio.")
      return
    }

    setError(null)

    // Se for domínio existente, apenas valida formato
    if (domainOwnership === "existing") {
      if (validateExistingDomain(inputValue)) {
        setDomain(inputValue.trim(), true, "existing")
        setIsEditing(false)
      } else {
        setError("Por favor, digite um domínio válido (ex: meusite.com.br)")
      }
      return
    }

    // Se for domínio novo, verifica disponibilidade
    startCheck(async () => {
      try {
        const result = await checkDomainAvailability(inputValue)
        
        if (result.available) {
          setDomain(result.domain, true, "new")
          setIsEditing(false)
        } else {
          setError("Este domínio não está disponível. Tente outro.")
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Não conseguimos verificar agora. Tente novamente."
        )
      }
    })
  }

  const handleEdit = () => {
    setIsEditing(true)
    setError(null)
  }

  const handleOwnershipChange = (ownership: DomainOwnership) => {
    setDomainOwnership(ownership)
    setError(null)
    setInputValue("")
    setDomain("", false, ownership)
  }

  // Preço do domínio: 0 se for existente, 0 se anual, 10 se mensal
  const domainPrice = domainOwnership === 'existing' ? 0 : (billingCycle === 'annual' ? 0 : 10)

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-4 md:p-6">
        <div className="space-y-4 md:space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  Configure seu domínio
                </h3>
                <p className="text-xs md:text-sm text-slate-600 mt-0.5">
                  {domainOwnership === 'existing'
                    ? "Use seu domínio existente sem custo adicional"
                    : billingCycle === 'annual' 
                    ? "Domínio grátis incluído no plano anual"
                    : "Adicione um domínio por apenas R$ 10,00/mês"}
                </p>
              </div>
            </div>
          </div>

          {!isEditing && domainValidated && domain ? (
            // Domínio validado - modo visualização
            <div className="p-3 md:p-5 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200 rounded-lg md:rounded-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-600 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900 text-sm md:text-base mb-0.5 truncate">
                      {domain}
                    </p>
                    <p className="text-xs md:text-sm text-emerald-700 font-medium">
                      {domainOwnership === "existing" 
                        ? "Domínio validado" 
                        : "Domínio disponível e validado"}
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleEdit}
                  className="border-slate-300 hover:bg-slate-50 flex-shrink-0 text-xs md:text-sm"
                >
                  Editar
                </Button>
              </div>
            </div>
          ) : (
            // Modo edição/validação
            <div className="space-y-4 md:space-y-6">
              {/* Radio Buttons - Sempre lado a lado */}
              <div className="flex items-center gap-4 md:gap-6 pb-4 border-b border-slate-200">
                {/* Opção 1: Registrar novo domínio */}
                <label className="flex items-center gap-2 cursor-pointer group flex-1 min-w-0">
                  <input
                    type="radio"
                    name="domainOwnership"
                    value="new"
                    checked={domainOwnership === "new"}
                    onChange={() => handleOwnershipChange("new")}
                    className="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-2 cursor-pointer accent-blue-600 flex-shrink-0"
                  />
                  <span className={cn(
                    "text-xs md:text-sm font-medium transition-colors",
                    domainOwnership === "new" 
                      ? "text-blue-600" 
                      : "text-slate-700 group-hover:text-slate-900"
                  )}>
                    Registrar novo domínio
                  </span>
                </label>

                {/* Separador */}
                <div className="h-4 w-px bg-slate-300 flex-shrink-0" />

                {/* Opção 2: Usar domínio existente */}
                <label className="flex items-center gap-2 cursor-pointer group flex-1 min-w-0">
                  <input
                    type="radio"
                    name="domainOwnership"
                    value="existing"
                    checked={domainOwnership === "existing"}
                    onChange={() => handleOwnershipChange("existing")}
                    className="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-2 cursor-pointer accent-blue-600 flex-shrink-0"
                  />
                  <span className={cn(
                    "text-xs md:text-sm font-medium transition-colors",
                    domainOwnership === "existing" 
                      ? "text-blue-600" 
                      : "text-slate-700 group-hover:text-slate-900"
                  )}>
                    Usar um domínio que já tenho
                  </span>
                </label>
              </div>

              {/* Campos de Input */}
              <div className="space-y-3 md:space-y-4">
                {domainOwnership === "new" ? (
                  <>
                    <div>
                      <Label htmlFor="domain" className="text-sm md:text-base font-semibold text-slate-900 mb-1 md:mb-2 block">
                        Busque seu novo domínio
                      </Label>
                      <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4 leading-relaxed">
                        Ele é o nome do seu site na internet e será o domínio principal da sua conta.
                      </p>
                      
                      {/* Mobile: Input + Botão empilhados | Desktop: Tudo em linha */}
                      <div className="space-y-2 md:space-y-0 md:flex md:gap-3">
                        {/* Input com www. prefixo */}
                        <div className="flex-1 flex border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                          {/* Prefixo www. */}
                          <div className="px-3 md:px-4 py-2.5 md:py-3 bg-slate-50 border-r border-slate-300 flex items-center flex-shrink-0">
                            <span className="text-xs md:text-sm font-medium text-slate-600">www.</span>
                          </div>
                          
                          {/* Input principal */}
                          <Input
                            id="domain"
                            type="text"
                            value={inputValue}
                            onChange={(e) => {
                              setInputValue(e.target.value)
                              setError(null)
                            }}
                            placeholder="seudominio"
                            className={cn(
                              "h-11 md:h-12 text-sm md:text-base border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 min-w-0",
                              error && "text-red-600"
                            )}
                            disabled={isChecking}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !isChecking) {
                                handleCheck()
                              }
                            }}
                          />
                          
                          {/* Dropdown TLD - Apenas Desktop */}
                          <div className="hidden md:flex px-4 py-3 bg-slate-50 border-l border-slate-300 items-center cursor-pointer hover:bg-slate-100 transition-colors flex-shrink-0">
                            <span className="text-sm font-medium text-slate-700 mr-2">.com.br</span>
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                          </div>
                        </div>
                        
                        {/* Botão Buscar - Mobile: abaixo, Desktop: ao lado */}
                        <Button
                          type="button"
                          onClick={handleCheck}
                          disabled={isChecking || !inputValue.trim()}
                          className="h-11 md:h-12 px-4 md:px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium shadow-sm rounded-lg w-full md:w-auto md:min-w-[120px]"
                        >
                          {isChecking ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              <span className="hidden md:inline">Verificando...</span>
                              <span className="md:hidden">Verificando</span>
                            </>
                          ) : (
                            <>
                              <Search className="w-4 h-4 mr-2" />
                              Buscar
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Label htmlFor="domain" className="text-sm md:text-base font-semibold text-slate-900 mb-1 md:mb-2 block">
                        Digite o domínio que você já possui
                      </Label>
                      <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4 leading-relaxed">
                        Informe o domínio completo que você já possui e deseja usar.
                      </p>
                      
                      {/* Mobile: Input + Botão empilhados | Desktop: Tudo em linha */}
                      <div className="space-y-2 md:space-y-0 md:flex md:gap-3">
                        <Input
                          id="domain"
                          type="text"
                          value={inputValue}
                          onChange={(e) => {
                            setInputValue(e.target.value)
                            setError(null)
                          }}
                          placeholder="meusite.com.br"
                          className={cn(
                            "h-11 md:h-12 text-sm md:text-base flex-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500",
                            error && "border-red-300 focus:ring-red-500 focus:border-red-500"
                          )}
                          disabled={isChecking}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !isChecking) {
                              handleCheck()
                            }
                          }}
                        />
                        <Button
                          type="button"
                          onClick={handleCheck}
                          disabled={isChecking || !inputValue.trim()}
                          className="h-11 md:h-12 px-4 md:px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium shadow-sm rounded-lg w-full md:w-auto"
                        >
                          {isChecking ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              <span className="hidden md:inline">Validando...</span>
                              <span className="md:hidden">Validando</span>
                            </>
                          ) : (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Validar
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {error && (
                  <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-red-50 border-2 border-red-200 rounded-lg md:rounded-xl">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm text-red-700 font-medium leading-relaxed">{error}</p>
                  </div>
                )}

                {/* Informações Adicionais */}
                <div className="pt-1 md:pt-2 space-y-1.5 md:space-y-2">
                  {domainOwnership === "new" && domainPrice > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm text-slate-600">
                      <Badge variant="outline" className="text-xs md:text-sm text-slate-700 border-slate-300 bg-slate-50">
                        + R$ {domainPrice.toFixed(2).replace('.', ',')}/mês
                      </Badge>
                      <span>O domínio será adicionado ao seu plano</span>
                    </div>
                  )}

                  {domainOwnership === "existing" && (
                    <div className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-slate-600">
                      <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                      <span>Você continuará gerenciando este domínio através do seu registrador atual.</span>
                    </div>
                  )}

                  {billingCycle === 'annual' && domainOwnership === "new" && (
                    <div className="flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm text-emerald-700 font-medium">
                      <Badge className="bg-emerald-600 text-white text-xs md:text-sm">
                        Grátis
                      </Badge>
                      <span>Domínio incluído no plano anual</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
