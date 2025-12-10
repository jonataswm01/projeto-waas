"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Smile, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function DentistNavbar() {
  const whatsappUrl =
    "https://wa.me/5516997330113?text=Olá!%20Naveguei%20pelo%20demo%20Dentista%20e%20tenho%20interesse%20no%20*Plano%20Profissional%20(LP%20Avançada)*.";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Início", href: "/sites/implantes-premium" },
    { label: "Tratamentos", href: "/sites/implantes-premium/servicos" },
    { label: "Sobre", href: "/sites/implantes-premium/sobre" },
    { label: "Contato", href: "/sites/implantes-premium/contato" },
  ];

  return (
    <nav className="sticky top-4 z-40 w-full px-5">
      <div className="mx-auto max-w-7xl">
        {/* Card flutuante com efeito glass */}
        <div className="rounded-md border border-cyan-100/50 bg-white/70 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
          <div className="flex h-16 items-center justify-between px-6">
            {/* Logo com hover scale */}
            <Link href="/sites/implantes-premium" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-cyan-100 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-cyan-200">
                <Smile className="h-6 w-6 text-cyan-700" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-800 leading-tight">Dr. André Silva</h1>
                <p className="text-xs text-slate-500">Reabilitação Oral</p>
              </div>
            </Link>

            {/* Links (Desktop) */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Botão CTA com hover scale */}
              <Button
                asChild
                className="hidden md:inline-flex rounded-md bg-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform hover:bg-cyan-600 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Agendar Consulta
                </a>
              </Button>

              {/* Mobile Toggle */}
              <button
                className="md:hidden text-slate-700 p-2"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu com efeito glass */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-5 right-5 mt-2 rounded-md border border-cyan-100/50 bg-white/90 backdrop-blur-xl shadow-lg shadow-cyan-500/10 md:hidden"
          >
            <div className="flex flex-col divide-y divide-cyan-100/30">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-4 text-center text-base text-slate-600 transition-colors hover:text-cyan-600 hover:bg-cyan-50/50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="p-4">
                <Button
                  asChild
                  className="w-full rounded-md bg-cyan-500 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/30 hover:bg-cyan-600"
                >
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                    Agendar Consulta
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

