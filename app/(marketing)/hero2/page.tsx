"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Sparkles } from "lucide-react";

export default function HeroVariantTwo() {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.14),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(59,130,246,0.1),transparent_35%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-100 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-sm mx-auto"
        >
          <Sparkles className="h-4 w-4 text-indigo-500" />
          <span>Identidade e Presença</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto"
        >
          Coloque sua marca na sua própria casa online.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto"
        >
          Site profissional, no ar em até 7 dias, seguro e com domínio seu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/comecar"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 px-7 sm:px-9 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-indigo-400/40 transition-all duration-200 hover:from-indigo-500 hover:to-blue-500 hover:shadow-indigo-400/60"
          >
            Quero meu site próprio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#planos"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 sm:px-9 py-3 text-sm sm:text-base font-semibold text-slate-700 shadow-sm shadow-indigo-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-indigo-200"
          >
            Ver planos
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 max-w-3xl"
        >
          {[
            "Endereço próprio e domínio seu",
            "No ar em até 7 dias, sem burocracia",
            "Segurança e performance contínuas",
            "Suporte humano para ajustes",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-slate-100 px-3 py-2 shadow-sm shadow-indigo-100 justify-center"
            >
              <ShieldCheck className="h-4 w-4 text-indigo-600" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 rounded-3xl border border-indigo-100 bg-white/85 backdrop-blur-xl shadow-2xl shadow-indigo-200/40 p-6 sm:p-8 max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="h-14 w-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Globe2 className="h-7 w-7" />
            </div>
            <div className="text-left space-y-2 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-500">Presença própria</p>
              <p className="text-lg font-semibold text-slate-900">Identidade + domínio seu, para ser encontrado e confiável.</p>
              <p className="text-sm text-slate-600">
                Controle total da sua marca na web, estrutura pronta para Google e conversão, com assinatura simples e sem entrada alta.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
