"use client"

import Link from "next/link"
import { Outfit } from "next/font/google"
import { Shield, Lock } from "lucide-react"
import { ProgressIndicator } from "@/components/checkout/progress-indicator"
import { CHECKOUT_STEPS } from "@/lib/checkout-data"
import { usePathname } from "next/navigation"

const outfit = Outfit({ subsets: ["latin"] })

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Determinar o step atual baseado na rota
  const getCurrentStep = () => {
    if (pathname?.includes('/step-1')) return 1
    if (pathname?.includes('/step-2')) return 2
    if (pathname?.includes('/step-3')) return 3
    if (pathname?.includes('/step-4')) return 4
    return 1
  }

  const currentStep = getCurrentStep()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Clean */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0 z-10">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:shadow-[0_0_20px_rgba(59,130,246,1)] transition-shadow duration-300" />
              <span
                className={`${outfit.className} text-xl font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600`}
              >
                LUMINA
              </span>
            </Link>

            {/* Mobile: Indicador de Progresso Centralizado */}
            <div className="md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <ProgressIndicator
                currentStep={currentStep}
                totalSteps={CHECKOUT_STEPS.length}
                steps={CHECKOUT_STEPS}
              />
            </div>

            {/* Selo de Segurança */}
            <div className="flex items-center gap-2 md:gap-3 text-sm text-slate-600 flex-shrink-0 z-10">
              {/* Mobile: Apenas ícones */}
              <div className="flex items-center gap-2 md:hidden">
                <Shield className="w-4 h-4 text-emerald-600" />
                <Lock className="w-4 h-4 text-slate-500" />
              </div>
              
              {/* Desktop: Ícones + Textos */}
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium">Ambiente Seguro</span>
                </div>
                <div className="h-4 w-px bg-slate-300" />
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-slate-500" />
                  <span>SSL Criptografado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="pb-12">{children}</main>

      {/* Footer Mínimo */}
      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} Lumina. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <Link
                href="/termos"
                className="hover:text-slate-900 transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="/privacidade"
                className="hover:text-slate-900 transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
