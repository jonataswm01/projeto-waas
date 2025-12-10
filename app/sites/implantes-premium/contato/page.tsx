"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Phone, MapPin, Clock, Mail } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Vi%20o%20modelo%20Profissional%20(Dentista)%20e%20gostei.%20Quero%20saber%20mais%20sobre%20o%20plano%20de%20R$%20129,90.";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scrollAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function ContatoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 text-slate-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-16 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-[150px]" />
        <div className="absolute top-32 -left-10 h-[360px] w-[360px] rounded-full bg-blue-200/40 blur-[140px]" />
        <div className="absolute bottom-24 right-8 h-[320px] w-[320px] rounded-full bg-indigo-200/30 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/sites/implantes-premium"
            className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-700 hover:text-cyan-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          <motion.div {...fadeUp} className="mb-12 space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Entre em Contato</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Fale direto, sem burocracia
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Estamos prontos para atender você. Escolha a forma de contato que preferir e vamos conversar sobre o seu
              caso.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] mb-12">
            {/* Informações de Contato */}
            <motion.div
              {...scrollAnimation}
              className="space-y-6 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_15px_50px_rgba(8,112,184,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-700 mb-6">Informações de Contato</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 via-blue-100 to-white text-cyan-700 shadow-inner shadow-white/60">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600">Telefone</p>
                    <a href="tel:11999999999" className="text-slate-900 hover:text-cyan-600 transition-colors">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 via-blue-100 to-white text-cyan-700 shadow-inner shadow-white/60">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600">Email</p>
                    <a
                      href="mailto:contato@auroramedical.com"
                      className="text-slate-900 hover:text-cyan-600 transition-colors"
                    >
                      contato@auroramedical.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 via-blue-100 to-white text-cyan-700 shadow-inner shadow-white/60">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600">Endereço</p>
                    <p className="text-slate-900">
                      Av. Paulista, 1500 - Bela Vista
                      <br />
                      São Paulo - SP
                      <br />
                      <span className="text-sm text-slate-600">Estacionamento e Valet no local</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 via-blue-100 to-white text-cyan-700 shadow-inner shadow-white/60">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600">Horários</p>
                    <p className="text-slate-900">
                      Segunda a Sexta · 8h às 21h
                      <br />
                      Sábados · 9h às 14h
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Destaque */}
            <motion.div
              {...scrollAnimation}
              transition={{ delay: 0.1 }}
              className="space-y-6 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_15px_50px_rgba(8,112,184,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-700 mb-6">Forma mais rápida</p>
              <div className="space-y-4">
                <p className="text-lg text-slate-900">
                  O WhatsApp é a forma mais rápida de falar com a gente. Retorno em até 5 minutos (sim, de verdade).
                </p>
                <Button
                  asChild
                  className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300"
                >
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Formulário de Contato */}
          <motion.div
            {...scrollAnimation}
            className="mb-12 rounded-[2.5rem] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_25px_90px_rgba(8,112,184,0.14)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40 sm:px-10 lg:px-16 lg:py-16"
          >
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute -top-3 right-8 h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="absolute bottom-0 left-16 h-40 w-40 rounded-full bg-blue-200/40 blur-[120px]" />
            </div>
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-700 mb-6">Ou envie uma mensagem</p>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-slate-700">
                    Nome completo *
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome completo"
                    className="rounded-md border-slate-200 bg-white/80 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="rounded-md border-slate-200 bg-white/80 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-slate-700">
                      Telefone *
                    </Label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="rounded-md border-slate-200 bg-white/80 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-slate-700">
                    Mensagem *
                  </Label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    placeholder="Como podemos ajudar?"
                    className="flex w-full rounded-md border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300"
                >
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Emergências */}
          <motion.div
            {...scrollAnimation}
            className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_15px_50px_rgba(8,112,184,0.12)] backdrop-blur-2xl"
          >
            <p className="text-sm text-slate-600">
              <strong className="text-slate-900">Emergências 24h:</strong> Ligue direto ou mande mensagem no WhatsApp.
              Atendimento imediato para casos de urgência.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

