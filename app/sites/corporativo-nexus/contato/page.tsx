 "use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Naveguei%20pelo%20demo%20Nexus%20e%20tenho%20interesse%20no%20*Plano%20Corporativo%20(Institucional)*.";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export default function CorporativoContatoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeUp}
          className="mb-12 text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            Contato Corporativo
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-white mt-4">
            Conduzindo parcerias com rigor executivo.
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Fale diretamente com nosso board para destravar oportunidades de expansão, fusões ou reestruturações estratégicas.
          </p>
        </motion.div>

        <div className="flex flex-col-reverse md:flex-row gap-10">
          {/* Formulário */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex-1 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-black/40"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              Inicie uma conversa estratégica.
            </h2>
            <p className="text-slate-400 mb-8 text-sm md:text-base">
              Nossos consultores sênior estão prontos para analisar seu cenário.
            </p>

            <div className="space-y-5">
              <div>
                <label className="text-sm text-slate-300 block mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  placeholder="Ex: Carolina Moraes"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300 block mb-2">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  placeholder="voce@suaempresa.com"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300 block mb-2">
                  Cargo / Empresa
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  placeholder="Diretor de Estratégia - Vertex Group"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300 block mb-2">
                  Tamanho da Empresa
                </label>
                <select
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                >
                  <option value="">Selecione</option>
                  <option>{"<50 colaboradores"}</option>
                  <option>50 - 200 colaboradores</option>
                  <option>200 - 500 colaboradores</option>
                  <option>{">500 colaboradores"}</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-300 block mb-2">
                  Mensagem
                </label>
                <textarea
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 min-h-[140px]"
                  placeholder="Compartilhe o contexto do desafio ou projeto."
                />
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-lg py-4 rounded-xl transition-colors shadow-xl shadow-amber-500/30 text-center"
              >
                Solicitar Contato Executivo
              </a>
            </div>
          </motion.div>

          {/* Info + Mapa */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-black/40 space-y-5">
              <h3 className="text-xl font-semibold text-white">
                Fale diretamente com nosso board.
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="p-2 rounded-full bg-slate-800 border border-slate-700">
                    <Mail className="h-4 w-4 text-amber-500" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                      Comercial
                    </p>
                    <p>comercial@nexus.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="p-2 rounded-full bg-slate-800 border border-slate-700">
                    <Mail className="h-4 w-4 text-amber-500" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                      Imprensa
                    </p>
                    <p>imprensa@nexus.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="p-2 rounded-full bg-slate-800 border border-slate-700">
                    <Phone className="h-4 w-4 text-amber-500" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                      Linha Executiva
                    </p>
                    <p>+55 11 4000-2000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="p-2 rounded-full bg-slate-800 border border-slate-700">
                    <MapPin className="h-4 w-4 text-amber-500" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                      Escritórios
                    </p>
                    <p>São Paulo • Nova York • Londres</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="relative bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80')] bg-cover bg-center rounded-3xl border border-slate-800 overflow-hidden h-[320px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/50 to-transparent" />
              <div className="absolute inset-0">
                {/* Pontos de presença */}
                <span className="absolute top-1/3 left-1/4 w-3 h-3 bg-amber-500 rounded-full blur-[1px] animate-pulse" />
                <span className="absolute top-1/2 right-1/3 w-3 h-3 bg-amber-500 rounded-full blur-[1px] animate-pulse delay-150" />
                <span className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-amber-500 rounded-full blur-[1px] animate-pulse delay-300" />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
                <p className="text-sm uppercase tracking-[0.4em] text-amber-300 mb-3">Presença Global</p>
                <h4 className="text-2xl font-semibold text-white">Operações conectadas nos cinco continentes.</h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

