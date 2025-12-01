"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CorporateFooter() {
  return (
    <footer className="bg-black border-t border-slate-900 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/sites/corporativo-nexus" className="inline-flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
            <span className="text-xl font-bold tracking-widest text-white uppercase">
              NEXUS
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 max-w-xs">
            Consultoria global especializada em M&A, reestruturação e estratégias de expansão com rigor executivo.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white uppercase tracking-[0.3em] mb-4">
            Institucional
          </p>
          <ul className="space-y-2 text-sm">
            {["Sobre Nós", "Carreiras", "Imprensa"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white uppercase tracking-[0.3em] mb-4">
            Legal
          </p>
          <ul className="space-y-2 text-sm">
            {["Termos de Uso", "Privacidade", "Compliance"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white uppercase tracking-[0.3em] mb-4">
            Newsletter
          </p>
          <p className="text-sm text-slate-500 mb-4">
            Receba insights exclusivos montados pelo nosso time de inteligência.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Seu e-mail corporativo"
              className="flex-1 bg-slate-900 border border-slate-800 rounded-md px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm"
            />
            <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-md px-4 py-3 text-sm font-semibold flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Enviar
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2024 Nexus Consultoria. Todos os direitos reservados.
      </div>
    </footer>
  );
}

