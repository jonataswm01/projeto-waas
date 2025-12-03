"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";

export function DentistNavbar() {
  const whatsappUrl =
    "https://wa.me/5516997330113?text=Olá!%20Naveguei%20pelo%20demo%20Dentista%20e%20tenho%20interesse%20no%20*Plano%20Profissional%20(LP%20Avançada)*.";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Altura da navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo (Esquerda) */}
        <Link href="/sites/implantes-premium" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
            <Smile className="h-6 w-6 text-cyan-700" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-800 leading-tight">Dr. André Silva</h1>
            <p className="text-xs text-slate-500">Reabilitação Oral</p>
          </div>
        </Link>

        {/* Links (Centro - Hidden no Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#tratamentos"
            onClick={(e) => handleScroll(e, "#tratamentos")}
            className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer"
          >
            Tratamentos
          </a>
          <a
            href="#clinica"
            onClick={(e) => handleScroll(e, "#clinica")}
            className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer"
          >
            A Clínica
          </a>
          <a
            href="#resultados"
            onClick={(e) => handleScroll(e, "#resultados")}
            className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer"
          >
            Antes e Depois
          </a>
          <a
            href="#duvidas"
            onClick={(e) => handleScroll(e, "#duvidas")}
            className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer"
          >
            Dúvidas
          </a>
        </div>

        {/* CTA (Direita) */}
        <Button asChild className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 shadow-lg shadow-cyan-500/30">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar Consulta
          </a>
        </Button>
      </div>
    </nav>
  );
}

