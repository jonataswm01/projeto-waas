"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function HeroVariantOne() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-100 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-sm"
        >
          <Sparkles className="h-4 w-4 text-indigo-500" />
          <span>Identidade e Presença</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight max-w-3xl"
        >
          Seu negócio precisa de um endereço próprio na internet.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg sm:text-xl text-slate-700 max-w-2xl leading-relaxed"
        >
          Site profissional, no ar em até 7 dias, seguro e no seu domínio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          <Link
            href="/comecar"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:from-blue-500 hover:to-indigo-600 hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Quero meu site próprio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#planos"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-slate-700 shadow-sm shadow-indigo-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Ver planos
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600"
        >
          {[
            "Site no ar em até 7 dias",
            "Domínio e identidade próprios",
            "Segurança e performance contínuas",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-indigo-500" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
