"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hexagon, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function CorporateNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileLinks = [
    { label: "A Empresa", href: "/sites/corporativo-nexus/sobre" },
    { label: "Soluções", href: "/sites/corporativo-nexus/solucoes" },
    { label: "Insights", href: "/sites/corporativo-nexus/insights" },
    { label: "Carreiras", href: "/sites/corporativo-nexus/sobre" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo (Esquerda) */}
        <Link href="/sites/corporativo-nexus" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center group-hover:opacity-80 transition-opacity">
            <Hexagon className="h-7 w-7 text-slate-50" strokeWidth={2} />
          </div>
          <span className="text-xl font-bold tracking-wider text-slate-50 uppercase">
            NEXUS
          </span>
        </Link>

        {/* Links (Centro - Hidden no Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/sites/corporativo-nexus/sobre"
            className="text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors"
          >
            A Empresa
          </Link>
          
          <Link
            href="/sites/corporativo-nexus/solucoes"
            className="text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors"
          >
            Soluções
          </Link>

          <Link
            href="/sites/corporativo-nexus/insights"
            className="text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/sites/corporativo-nexus/sobre"
            className="text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors"
          >
            Carreiras
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* CTA (Desktop) */}
          <Button asChild className="hidden md:inline-flex bg-white text-slate-900 hover:bg-slate-100 rounded-md px-6 font-medium shadow-lg">
            <Link href="/sites/corporativo-nexus/contato">
              Falar com Consultor
            </Link>
          </Button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
            className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 md:hidden"
          >
            <div className="flex flex-col divide-y divide-slate-900">
              {mobileLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                  className="block py-4 text-center text-lg text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="p-4">
                <Button asChild className="w-full bg-white text-slate-900 hover:bg-slate-100 rounded-md py-3 font-semibold">
                  <Link href="/sites/corporativo-nexus/contato" onClick={handleMobileLinkClick}>
                    Falar com Consultor
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

