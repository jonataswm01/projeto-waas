"use client"

import { useState, useTransition, useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Loader2,
  Eye,
  Sparkles,
  Lock,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { checkDomainAvailability } from "@/app/actions/checkDomain"
import { createLead, type CreateLeadData } from "@/app/actions/createLead"
import { niches } from "@/lib/niches"

const templates = [
  {
    id: "profissional",
    name: "Clean Health",
    style: "Clean/Health",
    image: "/vet-full.jpg",
    price: "R$ 97",
    demoUrl: "/sites/vetcare-aurora",
    isPopular: false,
  },
  {
    id: "essencial",
    name: "Premium Aesthetic",
    style: "Dark/Luxo",
    image: "/dentista-full.png",
    price: "R$ 197",
    demoUrl: "/sites/implantes-premium",
    isPopular: false,
  },
  {
    id: "corporativo",
    name: "Tech Modern",
    style: "Tech/Modern",
    image: "/corporativo-nexus-full.png",
    price: "R$ 297",
    demoUrl: "/sites/corporativo-nexus",
    isPopular: true,
  },
]

const templatePrices: Record<string, string> = {
  essencial: "R$ 197",
  profissional: "R$ 97",
  corporativo: "R$ 297",
}

// Função para gerar link de pagamento baseado no template
const getPaymentLink = (templateId: string): string => {
  const links: Record<string, string> = {
    essencial: "https://www.asaas.com/c/euwhgag6l2q9sx31", // Premium Aesthetic/Dentista (R$ 197,00)
    profissional: "https://www.asaas.com/c/ym608it4mcpm55qs", // Clean Health (R$ 97,00)
    corporativo: "https://www.asaas.com/c/w139k1zm43qs7x0h", // Plano Corporativo (R$ 247,00)
  }
  return links[templateId] || "#"
}

type WizardStep = 0 | 1 | 2

export default function ComecarPage() {
  const [step, setStep] = useState<WizardStep>(0)
  const [formData, setFormData] = useState<CreateLeadData>({
    template: "",
    empresa: "",
    nicho: "",
    dominio: "",
    nome: "",
    whatsapp: "",
    email: "",
    cnpj: "",
  })
  const [domainStatus, setDomainStatus] = useState<
    "idle" | "checking" | "available" | "unavailable"
  >("idle")
  const [checkedDomain, setCheckedDomain] = useState("")
  const [domainMessage, setDomainMessage] = useState("")
  const [isCheckingDomain, startDomainCheck] = useTransition()
  const [isCreatingLead, startCreateLead] = useTransition()
  const [createError, setCreateError] = useState<string | null>(null)
  const [leadId, setLeadId] = useState<string | null>(null)
  const [isNicheComboboxOpen, setIsNicheComboboxOpen] = useState(false)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  const isVerifyingDomain = domainStatus === "checking" || isCheckingDomain

  const getStepMotion = (dir: number) => ({
    initial: {
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    },
    animate: { x: 0, opacity: 1 },
    exit: {
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    },
    transition: { duration: 0.4, ease: "easeOut" },
  })

  const [direction, setDirection] = useState(1)

  const handleInputChange = (field: keyof CreateLeadData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setCreateError(null)
  }

  const handleDomainInputChange = (value: string) => {
    handleInputChange("dominio", value)
    setDomainStatus("idle")
    setDomainMessage("")
    setCheckedDomain("")
  }

  const handleDomainCheck = () => {
    if (!formData.dominio.trim()) {
      setDomainMessage("Digite um domínio para verificar.")
      setDomainStatus("idle")
      return
    }

    setDomainMessage("")
    setDomainStatus("checking")

    startDomainCheck(async () => {
      try {
        const result = await checkDomainAvailability(formData.dominio)
        setCheckedDomain(result.domain)
        setDomainStatus(result.available ? "available" : "unavailable")
      } catch (error) {
        setDomainStatus("idle")
        setDomainMessage(
          error instanceof Error
            ? error.message
            : "Não conseguimos verificar agora. Tente de novo."
        )
      }
    })
  }

  const handleTemplateSelect = (templateId: string) => {
    handleInputChange("template", templateId)
    setDirection(1)
    setTimeout(() => setStep(1), 300)
  }

  const handleNext = () => {
    if (step === 1) {
      // Validação antes de avançar do passo 2 para o 3
      if (!formData.dominio.trim()) {
        setDomainMessage("Por favor, informe um domínio.")
        return
      }

      if (domainStatus !== "available") {
        setDomainMessage(
          "Por favor, verifique se o domínio está disponível antes de continuar."
        )
        return
      }

      // Criar o lead antes de avançar
      setCreateError(null)
      setDirection(1)
      startCreateLead(async () => {
        const result = await createLead({
          ...formData,
          dominio: checkedDomain || formData.dominio,
        })

        if (result.success && result.leadId) {
          setLeadId(result.leadId)
          setShowSuccessAnimation(true)
          setTimeout(() => {
            setStep(2)
            setTimeout(() => setShowSuccessAnimation(false), 2000)
          }, 500)
        } else {
          setCreateError(result.error || "Erro ao salvar os dados.")
        }
      })
      return
    }

    setDirection(1)
    const nextStep = Math.min(step + 1, 2) as WizardStep
    setStep(nextStep)
  }

  const handlePrev = () => {
    setDirection(-1)
    const prevStep = Math.max(step - 1, 0) as WizardStep
    setStep(prevStep)
  }

  const isNextDisabled = useMemo(() => {
    if (step === 0) {
      return !formData.template
    }
    if (step === 1) {
      if (
        !formData.nome ||
        !formData.whatsapp ||
        !formData.email ||
        !formData.empresa ||
        !formData.nicho ||
        !formData.dominio.trim()
      ) {
        return true
      }
      return domainStatus !== "available"
    }
    return false
  }, [step, formData, domainStatus])

  const selectedTemplate = templates.find((t) => t.id === formData.template)
  const selectedNiche = niches.find((n) => n.value === formData.nicho)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            {step === 0 && "Escolha seu design"}
            {step === 1 && "Seus dados"}
            {step === 2 && "Finalizar pedido"}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {step === 0 && "Selecione o template perfeito para o seu negócio"}
            {step === 1 && "Preencha suas informações para continuar"}
            {step === 2 && "Revise e confirme seu pedido"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
            <span>Passo {step + 1} de 3</span>
            <span>
              {step === 0 && "Seleção do Design"}
              {step === 1 && "Seus Dados"}
              {step === 2 && "Checkout"}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
              animate={{ width: `${((step + 1) / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card className="border-2 border-slate-200 shadow-xl">
          <CardContent className="p-6 pt-8 sm:p-8 sm:pt-10 md:p-10 md:pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                {...getStepMotion(direction)}
                className="min-h-[500px]"
              >
                {step === 0 && (
                  <div className="space-y-8">
                    <div className="text-center space-y-2 mb-8">
                      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        Nossa Galeria de Templates
                      </h2>
                      <p className="text-slate-600">
                        Cada design foi criado com atenção aos detalhes
                      </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                      {templates.map((template) => {
                        const isSelected = formData.template === template.id
                        return (
                          <motion.div
                            key={template.id}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="group relative"
                          >
                            <Card
                              className={cn(
                                "relative overflow-hidden cursor-pointer transition-all duration-300",
                                "border-2",
                                isSelected
                                  ? "border-blue-500 shadow-2xl shadow-blue-500/20 ring-4 ring-blue-500/20"
                                  : "border-slate-200 hover:border-blue-300 hover:shadow-xl"
                              )}
                              onClick={() => handleTemplateSelect(template.id)}
                            >
                              {/* Image Container with Fixed Height and Scroll on Hover */}
                              <div className="relative h-[450px] w-full overflow-hidden">
                                <div
                                  className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-[background-position] duration-[12000ms] ease-in-out"
                                  style={{
                                    backgroundImage: `url(${template.image})`,
                                    backgroundPosition: "center top",
                                    transition: "background-position 12s ease-in-out",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundPosition = "center bottom"
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundPosition = "center top"
                                  }}
                                  aria-label={`Scroll automático do site ${template.name}`}
                                />
                                {/* Demo Button */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                  <Button
                                    variant="secondary"
                                    size="sm"
                                    className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      window.open(template.demoUrl, "_blank")
                                    }}
                                  >
                                    <Eye className="h-4 w-4 mr-2" />
                                    Ver ao vivo
                                  </Button>
                                </div>
                                {/* Selected Indicator */}
                                {isSelected && (
                                  <div className="absolute top-3 left-3 z-10">
                                    <div className="rounded-full bg-blue-500 p-2 shadow-lg">
                                      <Check className="h-5 w-5 text-white" />
                                    </div>
                                  </div>
                                )}

                                {/* Footer with Glass Effect - Fixed at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-md p-4 z-10">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h3 className="font-bold text-white text-lg">
                                        {template.name}
                                      </h3>
                                      <div className="flex items-center gap-2 mt-1">
                                        <Badge
                                          variant="secondary"
                                          className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
                                        >
                                          {template.style}
                                        </Badge>
                                        {template.isPopular && (
                                          <Badge className="bg-amber-500 text-white border-amber-400">
                                            Popular
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Action Button */}
                              <div className="p-4 bg-white">
                                <Button
                                  className={cn(
                                    "w-full",
                                    isSelected
                                      ? "bg-blue-500 hover:bg-blue-600"
                                      : "bg-slate-900 hover:bg-slate-800"
                                  )}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleTemplateSelect(template.id)
                                  }}
                                >
                                  {isSelected ? (
                                    <>
                                      <Check className="mr-2 h-4 w-4" />
                                      Selecionado
                                    </>
                                  ) : (
                                    "Quero Este Site"
                                  )}
                                </Button>
                              </div>
                            </Card>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-8">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        Complete seus dados
                      </h2>
                      <p className="text-slate-600">
                        Preencha as informações para continuar
                      </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      {/* Coluna Esquerda - Você */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                            Você
                          </h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="nome" className="text-slate-700">
                                Nome Completo *
                              </Label>
                              <Input
                                id="nome"
                                type="text"
                                value={formData.nome}
                                onChange={(e) =>
                                  handleInputChange("nome", e.target.value)
                                }
                                placeholder="Seu nome completo"
                                className="w-full"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="whatsapp" className="text-slate-700">
                                WhatsApp *
                              </Label>
                              <Input
                                id="whatsapp"
                                type="tel"
                                value={formData.whatsapp}
                                onChange={(e) =>
                                  handleInputChange("whatsapp", e.target.value)
                                }
                                placeholder="(00) 00000-0000"
                                className="w-full"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-slate-700">
                                Email *
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  handleInputChange("email", e.target.value)
                                }
                                placeholder="seu@email.com"
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Coluna Direita - Empresa */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                            Empresa
                          </h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="niche" className="text-slate-700">
                                Nicho *
                              </Label>
                              <Popover open={isNicheComboboxOpen} onOpenChange={setIsNicheComboboxOpen}>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={isNicheComboboxOpen}
                                    className={cn(
                                      "w-full justify-between h-10 rounded-md border border-input bg-background px-3 py-2 text-sm font-normal",
                                      !formData.nicho && "text-muted-foreground"
                                    )}
                                  >
                                    {selectedNiche ? selectedNiche.label : "Selecione seu nicho..."}
                                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[400px] p-0" align="start">
                                  <Command>
                                    <CommandInput placeholder="Buscar nicho..." />
                                    <CommandList>
                                      <CommandEmpty>Nenhum nicho encontrado.</CommandEmpty>
                                      <CommandGroup>
                                        {niches.map((niche) => (
                                          <CommandItem
                                            key={niche.value}
                                            value={niche.label}
                                            onSelect={() => {
                                              handleInputChange("nicho", niche.value)
                                              setIsNicheComboboxOpen(false)
                                            }}
                                            className="cursor-pointer"
                                          >
                                            <Check
                                              className={cn(
                                                "mr-2 h-4 w-4",
                                                formData.nicho === niche.value
                                                  ? "opacity-100"
                                                  : "opacity-0"
                                              )}
                                            />
                                            {niche.label}
                                          </CommandItem>
                                        ))}
                                      </CommandGroup>
                                    </CommandList>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="empresa" className="text-slate-700">
                                Nome da Empresa *
                              </Label>
                              <Input
                                id="empresa"
                                type="text"
                                value={formData.empresa}
                                onChange={(e) =>
                                  handleInputChange("empresa", e.target.value)
                                }
                                placeholder="Nome da sua empresa"
                                className="w-full"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="cnpj" className="text-slate-700">
                                CNPJ (Opcional)
                              </Label>
                              <Input
                                id="cnpj"
                                type="text"
                                value={formData.cnpj || ""}
                                onChange={(e) =>
                                  handleInputChange("cnpj", e.target.value)
                                }
                                placeholder="00.000.000/0000-00"
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Domínio - Full Width */}
                    <div className="space-y-4 pt-6 border-t-2 border-slate-200">
                      <div>
                        <Label htmlFor="dominio" className="text-lg font-semibold text-slate-900">
                          Domínio do seu site *
                        </Label>
                        <p className="text-sm text-slate-600 mt-1">
                          Verifique se o domínio está disponível
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Input
                          id="dominio"
                          type="text"
                          value={formData.dominio}
                          onChange={(e) => handleDomainInputChange(e.target.value)}
                          placeholder="ex: minhaloja.com.br"
                          className="flex-1 text-base h-12"
                        />
                        <Button
                          type="button"
                          onClick={handleDomainCheck}
                          disabled={isVerifyingDomain || !formData.dominio.trim()}
                          className="whitespace-nowrap h-12 px-6"
                        >
                          {isVerifyingDomain ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Verificando
                            </>
                          ) : (
                            "Verificar"
                          )}
                        </Button>
                      </div>
                      {domainStatus === "available" && (
                        <p className="text-sm font-semibold text-green-600 flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          {checkedDomain || formData.dominio} está disponível!
                        </p>
                      )}
                      {domainStatus === "unavailable" && (
                        <p className="text-sm font-semibold text-red-600 flex items-center gap-2">
                          <span>✗</span>
                          {checkedDomain || formData.dominio} já está em uso. Tente outro.
                        </p>
                      )}
                      {domainMessage && (
                        <p className="text-sm text-red-600">{domainMessage}</p>
                      )}
                    </div>

                    {createError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-lg bg-red-50 border border-red-200 p-4 flex items-start gap-3"
                      >
                        <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-red-800 mb-1">
                            Erro ao salvar
                          </p>
                          <p className="text-sm text-red-600">{createError}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    {/* Success Animation */}
                    {showSuccessAnimation && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="bg-white rounded-2xl p-8 shadow-2xl text-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                          >
                            <Check className="h-8 w-8 text-white" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            Pedido Salvo!
                          </h3>
                          <p className="text-slate-600">
                            Redirecionando para o resumo...
                          </p>
                        </motion.div>
                      </motion.div>
                    )}

                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        Quase lá! Confira seu plano.
                      </h2>
                      <p className="text-slate-600">
                        Revise os detalhes antes de finalizar
                      </p>
                    </div>

                    <Card className="bg-white border-2 border-slate-200 shadow-xl">
                      <CardHeader className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-blue-500" />
                          Resumo do Pedido
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-6">
                        {/* Item Principal - Template */}
                        <div className="flex items-start gap-4 pb-6 border-b border-slate-200">
                          <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                            <div
                              className="absolute inset-0 bg-cover bg-top bg-no-repeat"
                              style={{
                                backgroundImage: `url(${selectedTemplate?.image})`,
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-slate-900 text-lg mb-1">
                              {selectedTemplate?.name}
                            </h3>
                            <Badge variant="outline" className="mb-2">
                              {selectedTemplate?.style}
                            </Badge>
                            <p className="text-sm text-slate-600">
                              Template profissional completo
                            </p>
                          </div>
                        </div>

                        {/* Detalhes */}
                        <div className="space-y-3 pb-6 border-b border-slate-200">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">Domínio:</span>
                            <span className="font-semibold text-slate-900">
                              {checkedDomain || formData.dominio}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">Nicho:</span>
                            <span className="font-semibold text-slate-900">
                              {selectedNiche?.label || formData.nicho}
                            </span>
                          </div>
                        </div>

                        {/* Pricing Table */}
                        <div className="space-y-3 pb-6 border-b border-slate-200">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-600">Setup & Instalação:</span>
                              <span className="text-sm text-slate-400 line-through">
                                R$ 500,00
                              </span>
                            </div>
                            <Badge className="bg-green-500 text-white border-0">
                              Grátis
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600 font-medium">
                              Assinatura Mensal:
                            </span>
                            <span className="text-xl font-bold text-blue-600">
                              {selectedTemplate?.price || templatePrices[formData.template] || "R$ 0"}
                            </span>
                          </div>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-bold text-slate-900">
                            Total a pagar:
                          </span>
                          <span className="text-3xl font-bold text-blue-600">
                            {selectedTemplate?.price || templatePrices[formData.template] || "R$ 0"}
                            <span className="text-base font-normal text-slate-500">
                              /mês
                            </span>
                          </span>
                        </div>

                        {/* Footer Text */}
                        <p className="text-xs text-center text-slate-500 pt-4 border-t border-slate-100">
                          Cobrança recorrente. Cancele quando quiser.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="text-center space-y-4">
                      <Button
                        asChild
                        size="lg"
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-6 text-lg shadow-lg"
                      >
                        <a
                          href={getPaymentLink(formData.template)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Lock className="h-5 w-5" />
                          Finalizar e Ativar Site 🔒
                        </a>
                      </Button>
                      {leadId && (
                        <p className="text-sm text-slate-500">
                          Pedido salvo com sucesso. ID: {leadId}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={step === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>

              {step < 2 && (
                <Button
                  onClick={handleNext}
                  disabled={isNextDisabled || isCreatingLead}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600"
                >
                  {step === 1 && isCreatingLead ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Salvando...
                    </>
                  ) : (
                    <>
                      {step === 0 ? "Continuar" : "Ir para Resumo"}
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
