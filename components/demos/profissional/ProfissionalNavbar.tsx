"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PawPrint, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

const navLinks = [
  { label: "Início", href: "/sites/profissional-teste" },
  { label: "Serviços", href: "/sites/profissional-teste/servicos" },
  { label: "Sobre", href: "/sites/profissional-teste/sobre" },
  { label: "Contato", href: "/sites/profissional-teste/contato" },
];

export function ProfissionalNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-4 z-40 w-full px-5">
      <div className="mx-auto max-w-6xl">
        {/* Card flutuante */}
        <div className="rounded-md border border-white/10 bg-[#0f172a]/90 backdrop-blur-md shadow-none">
          <div className="flex h-16 items-center justify-between px-6">
            {/* Logo com hover scale */}
            <Link href="/sites/profissional-teste" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 transition-transform group-hover:scale-110">
                <PawPrint className="h-5 w-5" />
              </div>
              <span className="text-base font-semibold text-slate-50">Aurora Pet</span>
            </Link>

        {/* Menu de navegação (Desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
              >
                {link.label}
                {/* Indicador de página ativa (linha inferior) */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {/* Botão CTA com hover scale */}
          <Button
            asChild
            className="hidden md:inline-flex rounded-md bg-emerald-500 px-5 py-2 text-sm font-semibold text-[#0f172a] shadow-none transition-transform hover:bg-emerald-400 hover:scale-105"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Agendar
            </a>
          </Button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-50 p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-5 right-5 mt-2 rounded-md border border-white/10 bg-[#0f172a]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col divide-y divide-white/10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleMobileLinkClick}
                    className={`block py-4 text-center text-base transition-colors ${
                      isActive
                        ? "text-emerald-400 font-semibold"
                        : "text-slate-300 hover:text-emerald-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="p-4">
                <Button
                  asChild
                  className="w-full rounded-md bg-emerald-500 py-3 text-base font-semibold text-[#0f172a] shadow-none hover:bg-emerald-400"
                >
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={handleMobileLinkClick}>
                    Agendar
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

