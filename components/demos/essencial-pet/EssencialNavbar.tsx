"use client";

import Link from "next/link";
import { PawPrint } from "lucide-react";

import { Button } from "@/components/ui/button";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Vi%20o%20modelo%20Essencial%20(Vet)%20e%20gostei.%20Quero%20saber%20mais%20sobre%20o%20plano%20de%20R$%2079,90.";

export function EssencialNavbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/sites/essencial-pet" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 transition-colors group-hover:bg-emerald-500/30">
            <PawPrint className="h-5 w-5" />
          </div>
          <span className="text-base font-semibold text-slate-50">Essencial Pet</span>
        </Link>

        <Button
          asChild
          className="rounded-md bg-emerald-500 px-5 py-2 text-sm font-semibold text-[#0f172a] shadow-none hover:bg-emerald-400"
        >
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar
          </a>
        </Button>
      </div>
    </nav>
  );
}

