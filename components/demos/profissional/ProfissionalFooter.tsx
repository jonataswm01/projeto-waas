"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

export function ProfissionalFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0f172a] py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Sobre */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-50">Sobre</h3>
            <p className="text-sm text-slate-400">
              Clínica veterinária feita por quem vive rotina de pet. Atendimento direto, sem burocracia e com carinho genuíno.
            </p>
            <p className="text-sm text-slate-400">
              Nada de fila, nada de formalidade dura. A gente conversa olhando no olho e resolve junto.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-50">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/sites/profissional-teste"
                className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
              >
                Início
              </Link>
              <Link
                href="/sites/profissional-teste/servicos"
                className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
              >
                Serviços
              </Link>
              <Link
                href="/sites/profissional-teste/sobre"
                className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
              >
                Sobre
              </Link>
              <Link
                href="/sites/profissional-teste/contato"
                className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-50">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:16999999999"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-400"
              >
                <Phone className="h-4 w-4" />
                (16) 99999-9999
              </a>
              <a
                href="mailto:contato@aurorapet.com"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-400"
              >
                <Mail className="h-4 w-4" />
                contato@aurorapet.com
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-400"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Rua Exemplo, 123 - Centro<br />São Paulo - SP</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Horário */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-50">Horário</h3>
            <div className="flex items-start gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4 mt-0.5" />
              <div>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p className="mt-1">Sábado: 8h às 12h</p>
                <p className="mt-2 text-emerald-400 font-semibold">Emergências 24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Aurora Pet · Todos os direitos reservados
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Site desenvolvido por{" "}
            <a
              href="https://lovesite.com.br"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-400 transition hover:text-emerald-300"
            >
              LoveSite
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

