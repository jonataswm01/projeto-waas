"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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

export default function SobrePage() {
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
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Sobre a Clínica</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Clínica boutique especializada em reabilitações
            </h1>
          </motion.div>

          {/* História */}
          <motion.div
            {...scrollAnimation}
            className="grid gap-12 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] mb-16"
          >
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="space-y-5">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Nossa História</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Tecnologia e cuidado em cada etapa</h2>
              <p className="text-lg text-slate-600">
                A Aurora Medical nasceu da vontade de fazer diferente. Um espaço onde tecnologia de ponta se encontra
                com atendimento humanizado, criando uma experiência única para cada paciente.
              </p>
              <p className="text-slate-600">
                Fundada em 2015, a clínica se consolidou como referência em reabilitações complexas, combinando
                planejamento digital, protocolos minimamente invasivos e uma equipe multidisciplinar focada em cada
                detalhe da jornada do paciente.
              </p>
              <p className="text-slate-600">
                Hoje, atendemos pacientes de todo o Brasil e do exterior, sempre mantendo o compromisso com excelência,
                conforto e resultados que transformam vidas.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-12 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-200/60 to-blue-300/30 blur-[110px]" />
              <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] shadow-[0_25px_90px_rgba(8,112,184,0.18)] backdrop-blur-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1100&q=80"
                  alt="Clínica Aurora Medical"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Missão e Visão */}
          <motion.div
            {...scrollAnimation}
            className="grid gap-6 md:grid-cols-2 mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_15px_50px_rgba(8,112,184,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-700 mb-4">Nossa Missão</p>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Transformar sorrisos, transformar vidas</h3>
              <p className="text-slate-600">
                Oferecer reabilitações orais de excelência através de tecnologia de ponta, protocolos personalizados e
                atendimento humanizado, sempre priorizando o conforto e a satisfação do paciente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_15px_50px_rgba(8,112,184,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-700 mb-4">Nossa Visão</p>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Referência nacional em odontologia premium</h3>
              <p className="text-slate-600">
                Ser reconhecida como a clínica de referência em reabilitações complexas, combinando inovação tecnológica,
                expertise clínica e uma experiência de atendimento que supera expectativas.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...scrollAnimation}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_25px_90px_rgba(8,112,184,0.14)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40 sm:px-10 lg:px-16 lg:py-16"
          >
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute -top-3 right-8 h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="absolute bottom-0 left-16 h-40 w-40 rounded-full bg-blue-200/40 blur-[120px]" />
            </div>
            <div className="relative text-center space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Quer conhecer mais?</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Fale com a gente pelo WhatsApp e agende uma visita. Vamos conversar sobre o seu caso e mostrar como
                podemos ajudar você a alcançar o sorriso dos seus sonhos.
              </p>
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

