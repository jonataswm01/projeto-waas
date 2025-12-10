"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Vi%20o%20modelo%20Profissional%20(Dentista)%20e%20gostei.%20Quero%20saber%20mais%20sobre%20o%20plano%20de%20R$%20129,90.";

export function DentistFooter() {
  return (
    <footer className="border-t border-white/60 bg-white/80 backdrop-blur-2xl py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Sobre */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900">Sobre</h3>
            <p className="text-sm text-slate-600">
              Clínica boutique especializada em reabilitações com tecnologia de ponta, ambientação acolhedora e uma
              equipe focada em cada detalhe da jornada do paciente.
            </p>
            <p className="text-sm text-slate-600">
              Transformamos sorrisos através de protocolos personalizados, planejamento digital e atendimento
              humanizado.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/sites/implantes-premium"
                className="text-sm text-slate-600 transition-colors hover:text-cyan-600"
              >
                Início
              </Link>
              <Link
                href="/sites/implantes-premium/servicos"
                className="text-sm text-slate-600 transition-colors hover:text-cyan-600"
              >
                Tratamentos
              </Link>
              <Link
                href="/sites/implantes-premium/sobre"
                className="text-sm text-slate-600 transition-colors hover:text-cyan-600"
              >
                Sobre
              </Link>
              <Link
                href="/sites/implantes-premium/contato"
                className="text-sm text-slate-600 transition-colors hover:text-cyan-600"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:11999999999"
                className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-cyan-600"
              >
                <Phone className="h-4 w-4" />
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@auroramedical.com"
                className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-cyan-600"
              >
                <Mail className="h-4 w-4" />
                contato@auroramedical.com
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-cyan-600"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Av. Paulista, 1500 - Bela Vista
                  <br />
                  São Paulo - SP
                </span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Horário */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900">Horário</h3>
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 mt-0.5" />
              <div>
                <p>Segunda a Sexta · 8h às 21h</p>
                <p className="mt-1">Sábados · 9h às 14h</p>
                <p className="mt-3 text-cyan-600 font-semibold">Emergências 24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Aurora Medical · Todos os direitos reservados
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Site desenvolvido por{" "}
            <a
              href="https://lumina.com.br"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cyan-600 transition hover:text-cyan-700"
            >
              Lumina
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

