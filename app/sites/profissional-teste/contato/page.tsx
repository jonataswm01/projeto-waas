"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Phone, MapPin, Clock, Mail } from "lucide-react";
import { ProfissionalFooter } from "@/components/demos/profissional/ProfissionalFooter";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-50">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <Link
          href="/sites/profissional-teste"
          className="mb-8 inline-flex items-center gap-2 text-sm text-emerald-200 hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao início
        </Link>

        <div className="mb-12 space-y-3">
          <div className="h-1.5 w-16 rounded-sm bg-emerald-400" />
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">Entre em Contato</p>
          <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">
            Fale direto, sem burocracia.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Se preferir passar na clínica, só avisar antes. A gente organiza o horário para não deixar você e o pet
            esperando.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-[1fr_1fr] mb-12">
          <div className="space-y-6 rounded-md border border-white/10 bg-white/5 p-6 shadow-none">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-4">Informações de Contato</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-200">(16) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-200">contato@aurorapet.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <span className="text-slate-200">Rua Exemplo, 123 - Centro<br />São Paulo - SP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-200">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-md border border-white/10 bg-white/5 p-6 shadow-none">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-4">Forma mais rápida</p>
              <p className="text-base text-slate-200 mb-4">
                O WhatsApp é a forma mais rápida de falar com a gente. Retorno em até 5 minutos (sim, de verdade).
              </p>
              <Button
                asChild
                className="rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-[#0f172a] shadow-none hover:bg-emerald-400 w-full"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="mb-12 rounded-md border border-white/10 bg-white/5 p-6 shadow-none">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-4">Ou envie uma mensagem</p>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-slate-200">
                Nome *
              </Label>
              <Input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                className="rounded-md border-white/10 bg-white/10 text-slate-50 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="rounded-md border-white/10 bg-white/10 text-slate-50 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-slate-200">
                  Telefone *
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="rounded-md border-white/10 bg-white/10 text-slate-50 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensagem" className="text-slate-200">
                Mensagem *
              </Label>
              <textarea
                id="mensagem"
                rows={4}
                placeholder="Como podemos ajudar?"
                className="flex w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
                required
              />
            </div>
            <Button
              type="submit"
              className="rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-[#0f172a] shadow-none hover:bg-emerald-400 w-full"
            >
              Enviar mensagem
            </Button>
          </form>
        </div>

        <div className="rounded-md border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-300 mb-2">
            <strong className="text-white">Emergências 24h:</strong> Ligue direto ou mande mensagem no WhatsApp.
            Atendimento imediato.
          </p>
        </div>
      </div>
      <ProfissionalFooter />
    </main>
  );
}

