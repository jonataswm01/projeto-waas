"use client";

import Link from "next/link";
import { useCallback, type MouseEvent } from "react";
import { PawPrint } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá! Gostei muito do layout *Vetcare Aurora* e quero um site assim para minha clínica.";

export function VetNavbar() {
  const handleAnchorClick = useCallback((event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const section = document.querySelector(href);
    if (!section) return;

    const offset = 80; // altura aproximada da navbar
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }, []);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-emerald-100 bg-white/70 backdrop-blur-2xl shadow-sm shadow-emerald-500/10">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/sites/vetcare-aurora" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
            <PawPrint className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <span className="text-base font-semibold text-slate-800">Aurora Pet</span>
            <p className="text-xs text-emerald-600">Clínica Veterinária</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          asChild
          className="rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700"
        >
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar (WhatsApp)
          </a>
        </Button>
      </div>
    </nav>
  );
}


