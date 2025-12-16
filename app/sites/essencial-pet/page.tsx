"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Stethoscope, HeartHandshake, Syringe } from "lucide-react";

import { Button } from "@/components/ui/button";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Vi%20o%20modelo%20Essencial%20(Vet)%20e%20gostei.%20Quero%20saber%20mais%20sobre%20o%20plano%20de%20R$%2079,90.";

const services = [
  {
    title: "Consultas Integradas",
    description: "Acompanhamento completo com diagnóstico por imagem, nutricionista pet e orientações personalizadas.",
    Icon: Stethoscope,
  },
  {
    title: "Vacinas no Tempo Certo",
    description: "Agenda inteligente com alertas no WhatsApp e aplicação delicada em salas preparadas.",
    Icon: Syringe,
  },
  {
    title: "Centro Cirúrgico",
    description: "Procedimentos seguros, anestesia monitorada e leitos aquecidos para recuperação tranquila.",
    Icon: HeartHandshake,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function EssencialPetPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-50">
      {/* Hero - Impactante e visual */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-emerald-950/20 to-[#0f172a]" />
        
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80&auto=format&fit=crop"
            alt="Veterinária cuidando de pets"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Conteúdo - Menos texto, mais impacto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="h-1.5 w-20 rounded-sm bg-emerald-400" />
                <h1 className="text-5xl font-bold leading-tight text-slate-50 sm:text-6xl lg:text-7xl">
                  Cuidado veterinário <span className="text-emerald-400">sem complicação.</span>
                </h1>
              </div>
              
              <p className="text-xl text-slate-300 sm:text-2xl">
                Atendimento direto, resposta rápida e carinho genuíno. Tudo pelo WhatsApp.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-md bg-emerald-500 px-8 py-4 text-lg font-semibold text-[#0f172a] shadow-none hover:bg-emerald-400"
                >
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Agendar agora
                  </a>
                </Button>
                <p className="text-base text-emerald-200">Retorno em até 5 minutos.</p>
              </div>
            </motion.div>

            {/* Imagem destacada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[500px] w-full overflow-hidden rounded-md lg:h-[600px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80&auto=format&fit=crop"
                alt="Veterinária cuidando de um cachorro"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços - Bento Grid assimétrico */}
      <section className="bg-slate-50 py-24 text-slate-900 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <motion.div {...fadeUp} className="mb-16 space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">O que resolvemos</p>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">Do check-up ao pós-operatório.</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-700">
              Linha completa de cuidado: prevenção, procedimentos e acompanhamento.
            </p>
          </motion.div>

          {/* Bento Grid - Layout assimétrico */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 - Ocupa 2 colunas, deslocado */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="rounded-md border border-slate-200 bg-white p-8 shadow-none sm:col-span-2 lg:col-span-2 sm:translate-y-4"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">{services[0].title}</h3>
              <p className="mt-3 text-base text-slate-600">{services[0].description}</p>
            </motion.div>

            {/* Card 2 - Ocupa 1 coluna, normal */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="rounded-md border border-slate-200 bg-white p-8 shadow-none sm:col-span-1 lg:col-span-1"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <Syringe className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">{services[1].title}</h3>
              <p className="mt-3 text-base text-slate-600">{services[1].description}</p>
            </motion.div>

            {/* Card 3 - Ocupa 1 coluna, deslocado para cima */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3 }}
              className="rounded-md border border-slate-200 bg-white p-8 shadow-none sm:col-span-1 lg:col-span-1 sm:-translate-y-4"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">{services[2].title}</h3>
              <p className="mt-3 text-base text-slate-600">{services[2].description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#0f172a] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-md border border-white/10 bg-white/5 p-12 shadow-none sm:p-16"
          >
            {/* Decorative element */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
            
            <div className="relative z-10 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-4">
                <div className="h-1.5 w-20 rounded-sm bg-emerald-400" />
                <h2 className="text-4xl font-bold text-white sm:text-5xl">Pronto para agendar?</h2>
                <p className="max-w-xl text-lg text-slate-300">
                  Fala com a gente pelo WhatsApp. Sem formulário, sem espera. A conversa já começa resolvendo.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="rounded-md bg-emerald-500 px-10 py-5 text-lg font-semibold text-[#0f172a] shadow-none transition hover:bg-emerald-400"
                >
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato - Grid 2 colunas */}
      <section className="bg-slate-50 py-24 text-slate-900 sm:py-32">
        <div className="mx-auto max-w-6xl grid gap-12 px-5 sm:grid-cols-[1fr_1fr] sm:items-center">
          <motion.div {...fadeUp} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Detalhes rápidos</p>
            <h3 className="text-4xl font-bold text-slate-900 sm:text-5xl">Fale direto, sem burocracia.</h3>
            <p className="text-lg text-slate-700">
              Se preferir passar na clínica, só avisar antes. A gente organiza o horário para não deixar você e o pet
              esperando.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="space-y-6 rounded-md border border-slate-200 bg-white p-8 shadow-none"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <Phone className="h-6 w-6" />
              </div>
              <span className="text-lg text-slate-800">(16) 99999-9999</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="text-lg text-slate-800">Rua Exemplo, 123 - Centro</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <Clock className="h-6 w-6" />
              </div>
              <span className="text-lg text-slate-800">Segunda a Sexta: 8h às 18h</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Simples */}
      <footer className="border-t border-white/10 bg-[#0f172a] pt-12 pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Essencial Pet · Todos os direitos reservados
            </p>
            <p className="text-sm text-slate-500">
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
    </main>
  );
}

