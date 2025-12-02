"use client"

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useTransition,
  type MouseEvent as ReactMouseEvent,
} from "react"
import { AnimatePresence, motion } from "framer-motion"
import { createPortal } from "react-dom"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Loader2,
  Moon,
  Sun,
  X,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { checkDomainAvailability } from "@/app/actions/checkDomain"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

const totalSteps = 4

const styleOptions = [
  {
    id: "clean",
    label: "Clean (Health)",
    description: "Minimalista, arejado e super acolhedor.",
    accent: "from-cyan-200 via-cyan-300 to-sky-400",
    border: "border-cyan-300",
    icon: Sun,
  },
  {
    id: "premium",
    label: "Premium (Dark)",
    description: "Luxo moderno com contrastes elegantes.",
    accent: "from-amber-300 via-amber-200 to-yellow-300",
    border: "border-amber-300",
    icon: Moon,
  },
  {
    id: "tech",
    label: "Tech (Modern)",
    description: "Futurista, com energia e neon suave.",
    accent: "from-violet-300 via-fuchsia-300 to-indigo-400",
    border: "border-violet-300",
    icon: Zap,
  },
]

const nicheOptions = [
  "Saúde & Clínicas",
  "Beleza & Estética",
  "Serviços Administrativos",
  "Comércio & Vendas",
  "Tecnologia & Startups",
  "Educação & Treinamentos",
]
const stepLabels = [
  "Perfil do lead",
  "Estilo visual",
  "Nicho & domínio",
  "Revisão",
]

const whatsappNumber = "5516997330113"

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    style: "clean",
    niche: "",
    domain: "",
  })
  const [domainStatus, setDomainStatus] = useState<
    "idle" | "checking" | "available" | "unavailable"
  >("idle")
  const [checkedDomain, setCheckedDomain] = useState("")
  const [domainMessage, setDomainMessage] = useState("")
  const [skipDomainCheck, setSkipDomainCheck] = useState(false)
  const [isCheckingDomain, startDomainCheck] = useTransition()
  const domainInputId = useId()
  const skipDomainCheckboxId = useId()
  const [isNicheMenuOpen, setIsNicheMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [nicheMenuPosition, setNicheMenuPosition] = useState<{
    top: number
    left: number
    width: number
  } | null>(null)
  const nicheDropdownRef = useRef<HTMLDivElement | null>(null)
  const nicheButtonRef = useRef<HTMLButtonElement | null>(null)
  const nicheMenuRef = useRef<HTMLUListElement | null>(null)

  const progress = useMemo(
    () => ((step + 1) / totalSteps) * 100,
    [step]
  )

  const isVerifyingDomain = domainStatus === "checking" || isCheckingDomain

  const stepMotion = {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -60, opacity: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  }

  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0))
  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps - 1))

  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleDomainInputChange = (value: string) => {
    handleInputChange("domain", value)
    setDomainStatus("idle")
    setDomainMessage("")
    setCheckedDomain("")
    setSkipDomainCheck(false)
  }

  const handleDomainCheck = () => {
    if (!formData.domain.trim()) {
      setDomainMessage("Digite um domínio para verificar.")
      setDomainStatus("idle")
      return
    }

    setSkipDomainCheck(false)
    setDomainMessage("")
    setDomainStatus("checking")

    startDomainCheck(async () => {
      try {
        const result = await checkDomainAvailability(formData.domain)
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

  const handleSkipDomainToggle = (checked: boolean) => {
    setSkipDomainCheck(checked)
    if (checked) {
      setDomainStatus("idle")
      setDomainMessage("")
      setCheckedDomain("")
    }
  }

  const isNextDisabled = useMemo(() => {
    if (step !== 2) return false
    if (skipDomainCheck) return false
    if (!formData.domain.trim()) return true
    return domainStatus !== "available"
  }, [domainStatus, formData.domain, skipDomainCheck, step])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isNicheMenuOpen) {
      setNicheMenuPosition(null)
      return
    }

    const updatePosition = () => {
      if (!nicheButtonRef.current) return
      const rect = nicheButtonRef.current.getBoundingClientRect()
      setNicheMenuPosition({
        top: rect.bottom + 6,
        left: rect.left,
        width: rect.width,
      })
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        nicheDropdownRef.current?.contains(target) ||
        nicheMenuRef.current?.contains(target)
      ) {
        return
      }
      setIsNicheMenuOpen(false)
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    window.addEventListener("scroll", updatePosition, true)
    window.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("resize", updatePosition)
      window.removeEventListener("scroll", updatePosition, true)
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isNicheMenuOpen])

  useEffect(() => {
    setIsNicheMenuOpen(false)
  }, [step])

  const onOverlayClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  const handleFinish = () => {
    const styleLabel =
      styleOptions.find((option) => option.id === formData.style)?.label ??
      "Clean"
    const message = [
      "Olá! Acabei de preencher o onboarding da Lumina 🚀",
      `Nome: ${formData.name || "Não informado"}`,
      `Empresa: ${formData.company || "Não informado"}`,
      `Estilo: ${styleLabel}`,
      `Nicho: ${formData.niche || "Não definido"}`,
      `Domínio: ${
        skipDomainCheck ? "Em definição" : formData.domain || "Não definido"
      }`,
      "",
      "Quero finalizar o projeto pelo WhatsApp.",
    ].join("\n")

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    }
    onClose()
  }

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-2 pr-8 sm:pr-12 md:pr-16">
              <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
                Vamos começar. Como te chamamos?
              </h2>
              <p className="text-lg text-slate-500">
                Personalize a experiência com o seu nome e o da empresa.
              </p>
            </div>
            <div className="grid gap-6">
              <label className="space-y-3 text-slate-600">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Seu Nome
                </span>
                <div className="rounded-[1.75rem] border-2 border-white/70 bg-white/70 px-1 py-1 shadow-xl shadow-slate-200/60 transition focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-400/50">
                  <input
                    value={formData.name}
                    onChange={(event) =>
                      handleInputChange("name", event.target.value)
                    }
                    placeholder="Ex: Jonathan Silva"
                    className="h-12 w-full rounded-[1.5rem] border-none bg-white/60 px-6 text-base text-slate-900 outline-none shadow-inner shadow-white/70 placeholder:text-sm placeholder:text-slate-400 md:h-14 md:text-lg md:placeholder:text-base"
                  />
                </div>
              </label>
              <label className="space-y-3 text-slate-600">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Nome da Empresa
                </span>
                <div className="rounded-[1.75rem] border-2 border-white/70 bg-white/70 px-1 py-1 shadow-xl shadow-slate-200/60 transition focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-400/50">
                  <input
                    value={formData.company}
                    onChange={(event) =>
                      handleInputChange("company", event.target.value)
                    }
                    placeholder="Ex: Aurora Clinic"
                    className="h-12 w-full rounded-[1.5rem] border-none bg-white/60 px-6 text-base text-slate-900 outline-none shadow-inner shadow-white/70 placeholder:text-sm placeholder:text-slate-400 md:h-14 md:text-lg md:placeholder:text-base"
                  />
                </div>
              </label>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2 pr-8 sm:pr-12 md:pr-16">
              <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
                Qual vibe combina com a{" "}
                {formData.company || "sua empresa"}?
              </h2>
              <p className="text-lg text-slate-500">
                Escolha um mood para guiar a direção visual do projeto.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {styleOptions.map((option) => {
                const Icon = option.icon
                const isSelected = formData.style === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleInputChange("style", option.id)}
                    aria-pressed={isSelected}
                    className={cn(
                      "group relative rounded-3xl border-2 bg-white/40 p-5 text-left transition-all duration-300",
                      "hover:bg-white/70 hover:shadow-xl hover:shadow-cyan-100/40",
                      isSelected &&
                        "border-4 bg-blue-50 shadow-2xl shadow-blue-200/70",
                      isSelected ? option.border : "border-white/40"
                    )}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 blur-2xl transition",
                        `bg-gradient-to-br ${option.accent}`,
                        isSelected && "opacity-60"
                      )}
                    />
                    <div className="relative flex flex-col gap-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-white/70 text-slate-900 shadow-lg transition",
                          isSelected && "scale-105"
                        )}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-slate-900">
                          {option.label}
                        </p>
                        <p className="text-sm text-slate-500">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2 pr-8 sm:pr-12 md:pr-16">
              <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
                Detalhes finais...
              </h2>
              <p className="text-lg text-slate-500">
                Conte pra gente o nicho e o domínio desejado para a sua marca.
              </p>
            </div>
            <div className="rounded-[2.25rem] border border-white/70 bg-white/50 p-6 shadow-xl shadow-slate-200/60">
              <div className="space-y-6">
                <label className="space-y-3 text-slate-600">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Nicho
                  </span>
                  <div ref={nicheDropdownRef} className="relative">
                    <button
                      type="button"
                      ref={nicheButtonRef}
                      onClick={() => setIsNicheMenuOpen((prev) => !prev)}
                      aria-haspopup="listbox"
                      aria-expanded={isNicheMenuOpen}
                      className={cn(
                        "flex h-12 w-full items-center justify-between rounded-[1.8rem] border-2 border-white/70 bg-white/70 px-6 text-left text-base text-slate-900 shadow-lg shadow-slate-200/50 transition focus:outline-none focus:ring-2 focus:ring-sky-400/50 md:h-14 md:text-lg",
                        !formData.niche && "text-slate-400"
                      )}
                    >
                      <span>
                        {formData.niche || "Selecione um nicho"}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-slate-400 transition",
                          isNicheMenuOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </div>
                </label>
                <div className="space-y-3 text-slate-600">
                  <label
                    htmlFor={domainInputId}
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                  >
                    Domínio
                  </label>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-3 md:flex-row">
                      <div className="flex h-12 w-full items-center rounded-[1.8rem] border-2 border-white/70 bg-white/70 px-6 text-base text-slate-900 shadow-lg shadow-slate-200/60 transition focus-within:border-transparent focus-within:ring-2 focus-within:ring-sky-400/50 md:h-14 md:flex-1 md:text-lg">
                        <input
                          id={domainInputId}
                          value={formData.domain}
                          onChange={(event) =>
                            handleDomainInputChange(event.target.value)
                          }
                          placeholder="ex: minhaloja.com.br"
                          className="h-full w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-sm placeholder:text-slate-400 md:placeholder:text-base"
                        />
                      </div>
                      <Button
                        type="button"
                        onClick={handleDomainCheck}
                        disabled={
                          isVerifyingDomain || !formData.domain.trim().length
                        }
                        className="h-12 w-full rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:scale-[1.01] hover:shadow-blue-500/60 disabled:cursor-not-allowed disabled:opacity-60 md:h-14 md:w-auto"
                      >
                        {isVerifyingDomain ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Verificando
                          </span>
                        ) : (
                          "Verificar"
                        )}
                      </Button>
                    </div>
                    {domainStatus === "available" && (
                      <p className="text-sm font-semibold text-emerald-600">
                        Oba! {checkedDomain || formData.domain} está livre. Vamos
                        registrar para você.
                      </p>
                    )}
                    {domainStatus === "unavailable" && (
                      <p className="text-sm font-semibold text-amber-600">
                        Poxa, {checkedDomain || formData.domain} já tem dono.
                        Tente outro nome.
                      </p>
                    )}
                    {domainMessage && (
                      <p className="text-sm text-rose-500">{domainMessage}</p>
                    )}
                    <label
                      htmlFor={skipDomainCheckboxId}
                      className="flex items-center gap-3 text-sm font-medium text-slate-600"
                    >
                      <input
                        type="checkbox"
                        id={skipDomainCheckboxId}
                        className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500"
                        checked={skipDomainCheck}
                        onChange={(event) =>
                          handleSkipDomainToggle(event.target.checked)
                        }
                      />
                      <span>Ainda não tenho nome definido</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2 pr-8 sm:pr-12 md:pr-16">
              <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
                Tudo pronto!
              </h2>
              <p className="text-lg text-slate-500">
                Confira o resumo e finalize pelo WhatsApp para entrar em produção.
              </p>
            </div>
            {(() => {
              const summaryItems = [
                {
                  label: "Quem é você",
                  value: formData.name || "Nome ainda não informado",
                },
                {
                  label: "Empresa & Estilo",
                  value:
                    (formData.company || "Sua empresa") +
                    " • " +
                    (styleOptions.find(
                      (option) => option.id === formData.style
                    )?.label ?? ""),
                },
                {
                  label: "Nicho",
                  value: formData.niche || "Selecione o nicho ideal",
                },
                {
                  label: "Domínio",
                  value: skipDomainCheck
                    ? "Vamos definir juntos"
                    : formData.domain || "minhapagina.com.br",
                },
              ]
              return (
                <div className="rounded-3xl border border-white/40 bg-white/40 p-6 text-slate-600 backdrop-blur-xl md:p-8">
                  <dl className="divide-y divide-slate-200/40">
                    {summaryItems.map((item) => (
                      <div key={item.label} className="space-y-1 pt-4 first:pt-0">
                        <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {item.label}
                        </dt>
                        <dd className="text-lg font-semibold text-slate-900">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )
            })()}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-3 sm:p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onOverlayClick}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="glass-scrollbar relative mx-auto w-[94%] max-w-2xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] border border-white/50 bg-white/90 p-1.5 shadow-2xl shadow-blue-900/20 backdrop-blur-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative rounded-[2.3rem] bg-gradient-to-br from-white/80 via-white/50 to-white/40 p-5 md:p-10">
              <div className="pointer-events-none absolute -left-10 top-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-2xl border border-white/50 bg-white/70 p-2 text-slate-500 shadow-lg transition hover:text-slate-900 md:right-8 md:top-8"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative space-y-8">
                <header className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Passo {step + 1} de {totalSteps}</span>
                    <span className="pr-10 sm:pr-12 md:pr-16">{stepLabels[step]}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/40">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/40"
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </header>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    className="min-h-[260px]"
                    {...stepMotion}
                  >
                    {renderStepContent()}
                  </motion.div>
                </AnimatePresence>

                <footer className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <Button
                    variant="ghost"
                    className="order-2 md:order-1"
                    onClick={handlePrev}
                    disabled={step === 0}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar
                  </Button>
                  {step < totalSteps - 1 ? (
                    <Button
                      className="order-1 md:order-2 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:scale-[1.01] hover:shadow-blue-500/60 disabled:cursor-not-allowed disabled:opacity-60 md:px-8 md:py-6"
                      onClick={handleNext}
                      disabled={isNextDisabled}
                    >
                      Próximo passo
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <button
                      onClick={handleFinish}
                      className="order-1 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-500/40 transition hover:scale-[1.02] hover:shadow-emerald-500/60 md:px-10 md:py-5"
                    >
                      Finalizar no WhatsApp 🚀
                    </button>
                  )}
                </footer>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
      {isClient &&
        createPortal(
          <AnimatePresence>
            {isNicheMenuOpen && nicheMenuPosition && (
              <motion.ul
                ref={nicheMenuRef}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                style={{
                  top: nicheMenuPosition.top,
                  left: nicheMenuPosition.left,
                  width: nicheMenuPosition.width,
                }}
                className="glass-scrollbar fixed z-[9999] max-h-52 overflow-y-auto rounded-2xl border border-white/80 bg-white/95 p-2 shadow-2xl shadow-slate-200/70 backdrop-blur-xl"
                role="listbox"
              >
                {nicheOptions.map((option) => {
                  const isActive = formData.niche === option
                  return (
                    <li key={option}>
                      <button
                        type="button"
                        className={cn(
                          "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base text-slate-600 transition hover:bg-slate-100/70",
                          isActive &&
                            "bg-gradient-to-r from-blue-50 to-indigo-50 text-slate-900 shadow-inner shadow-blue-100"
                        )}
                        onClick={() => {
                          handleInputChange("niche", option)
                          setIsNicheMenuOpen(false)
                        }}
                      >
                        <span>{option}</span>
                        {isActive && (
                          <Check className="h-4 w-4 text-slate-600" />
                        )}
                      </button>
                    </li>
                  )
                })}
              </motion.ul>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}


