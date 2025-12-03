"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, PawPrint, Stethoscope, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Naveguei%20pelo%20demo%20Vet%20e%20tenho%20interesse%20no%20*Plano%20Essencial%20(LP%20Simples)*.";

const services = [
  {
    title: "Consultas Integradas",
    description: "Acompanhamento completo com diagnóstico por imagem, nutricionista pet e orientações personalizadas.",
    image: "https://images.unsplash.com/photo-1558944351-c1bfe5d6ecb6?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Vacinas no Tempo Certo",
    description: "Agenda inteligente com alertas no WhatsApp e aplicação delicada em salas aromaterapêuticas.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Centro Cirúrgico Clean",
    description: "Procedimentos seguros, anestesia monitorada e leitos aquecidos para recuperação tranquila.",
    image: "https://images.unsplash.com/photo-1583912086096-8a152e38f658?w=900&q=80&auto=format&fit=crop",
  },
];

const diferenciais = [
  {
    title: "Tecnologia de Ponta",
    description: "Ultrassom, raio-x digital e prontuário 100% online.",
    Icon: Stethoscope,
  },
  {
    title: "Amor aos Animais",
    description: "Equipe empática treinada em comportamento pet.",
    Icon: HeartHandshake,
  },
  {
    title: "Plantão 24h",
    description: "Emergências com monitoramento constante.",
    Icon: Sun,
  },
];

const testimonials = [
  {
    quote: "A Aurora Pet salvou o Rex em plena madrugada. Atendimento rápido e cheio de carinho!",
    author: "Maria Fernandes",
    pet: "Tutora do Rex",
  },
  {
    quote: "Nunca vi uma clínica tão organizada. Recebo tudo por WhatsApp e a Luna ama vir aqui.",
    author: "João e Luna",
    pet: "Família Luna",
  },
  {
    quote: "A Dra. Aurora explica cada detalhe e passa muita segurança. Recomendo para todos os tutores.",
    author: "Camila Moura",
    pet: "Tutora do Nico",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function VetcareAuroraPage() {
  return (
    <main className="relative overflow-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute top-40 -left-10 h-80 w-80 rounded-full bg-teal-200/40 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-100/30 blur-[120px]" />
      </div>

      <div className="relative">
        {/* Hero */}
        <section
          id="inicio"
          className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 pt-24 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:py-28 lg:pb-24"
        >
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">Plano Essencial</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Seu pet merece o melhor cuidado. <span className="text-emerald-600">Sem filas. Sem espera.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Clínica veterinária moderna com toque humanizado, protocolos preventivos e atendimento acolhedor que
              transforma cada visita em carinho.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-full bg-emerald-600 px-8 py-6 text-base font-semibold text-white shadow-xl shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Agendar agora
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="rounded-full border border-emerald-200 bg-white/60 px-8 py-6 text-base text-emerald-700 shadow-sm shadow-emerald-500/10 backdrop-blur-md hover:bg-white"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Conhecer estrutura
                </a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 rounded-2xl bg-white/70 p-4 backdrop-blur-xl shadow-lg shadow-emerald-500/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <PawPrint className="h-6 w-6" />
              </div>
              <p className="text-sm text-slate-600">
                Atendimento integrado com exames, pet wellness e concierge para agendamentos rápidos.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative h-[420px] w-full rounded-[2.5rem] border border-white/60 bg-white/60 shadow-2xl shadow-emerald-500/20 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80&auto=format&fit=crop"
                alt="Veterinária sorrindo cuidando de um cachorro"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/60 bg-white/80 px-5 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-500/20 backdrop-blur-lg">
              Atendimento acolhedor todos os dias.
            </div>
          </motion.div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="scroll-mt-32 py-20">
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-2xl text-center px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">Nossos serviços</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Cuidado total em um só lugar</h2>
            <p className="mt-4 text-slate-600">
              Protocolos personalizados com equipe multidisciplinar, trazendo transparência, prevenção e carinho para cada
              fase da vida do seu pet.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-xl shadow-emerald-500/10 backdrop-blur-2xl transition hover:-translate-y-2"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/80 shadow-lg shadow-emerald-500/20">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="64px" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-emerald-600">Equipe Aurora Pet</p>
                  </div>
                </div>
                <p className="text-slate-600">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Diferenciais */}
        <section className="scroll-mt-32 py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2.5rem] border border-white/70 bg-white/70 px-6 py-12 text-slate-800 shadow-xl shadow-teal-500/10 backdrop-blur-2xl sm:px-10">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-teal-600">Por que Aurora Pet?</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Diferenciais que cuidam de verdade</h2>
              <p className="mt-4 text-slate-600">
                Integramos tecnologia de diagnóstico, prontuários digitais e um time apaixonado por pets para oferecer
                respostas rápidas e carinho genuíno.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {diferenciais.map(({ title, description, Icon }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-slate-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section
          id="sobre"
          className="scroll-mt-32 py-20"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2.5rem] border border-white/70 bg-white/70 px-6 py-10 shadow-2xl shadow-emerald-500/10 backdrop-blur-2xl sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/80 shadow-emerald-500/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1100&q=80&auto=format&fit=crop"
                alt="Dra. Aurora cuidando de um gato"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">Sobre a Dra.</p>
              <h2 className="text-3xl font-bold text-slate-900">Dra. Aurora Menezes</h2>
              <p className="text-lg text-slate-600">
                Especialista em clínica geral e emergências com mais de 12 anos de experiência. Fundou a Aurora Pet para
                oferecer cuidado individualizado e acompanhamento preventivo em todas as fases da vida dos pets.
              </p>
              <p className="text-slate-600">
                Lidera um time interdisciplinar com foco em medicina integrativa, protocolos de bem-estar e educação dos
                tutores. Cada plano é desenhado junto com a família do pet.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700">
                  CRMV-SP 25478
                </span>
                <span className="rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700">
                  Emergências 24h
                </span>
                <span className="rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700">
                  Terapias integrativas
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="scroll-mt-32 py-20">
          <motion.div {...fadeUp} className="mx-auto mb-10 max-w-2xl px-4 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-teal-600">Prova social</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Tutore(a)s que confiam</h2>
            <p className="mt-4 text-slate-600">
              Histórias reais de quem já vivenciou o cuidado Aurora Pet com total transparência e carinho.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl border border-white/70 bg-white/80 p-6 text-slate-700 shadow-lg shadow-emerald-500/10 backdrop-blur-xl"
              >
                <p className="text-lg font-medium text-slate-800">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-4 text-sm font-semibold text-emerald-700">{testimonial.author}</div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{testimonial.pet}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Final + Footer */}
        <section className="pb-24">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2.5rem] bg-emerald-900 px-8 py-12 text-white shadow-2xl shadow-emerald-800/40">
            <div className="space-y-4 text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">Pronto para cuidar melhor?</p>
              <h2 className="text-3xl font-bold">
                Fale com a Aurora Pet e descubra como podemos transformar a rotina do seu pet.
              </h2>
              <p className="text-emerald-100">
                Atendimento imediato via WhatsApp. Retorno em até 5 minutos e primeira orientação gratuita.
              </p>
              <Button
                asChild
                className="mx-auto mt-4 w-fit rounded-full bg-white/20 px-8 py-6 text-base font-semibold text-white shadow-lg backdrop-blur-xl transition hover:bg-white/30"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm text-emerald-200 sm:flex-row">
              <div>&copy; {new Date().getFullYear()} Aurora Pet · Todos os direitos reservados</div>
              <div className="flex gap-6 text-emerald-100">
                <a href="#servicos" className="hover:text-white">
                  Serviços
                </a>
                <a href="#sobre" className="hover:text-white">
                  Sobre
                </a>
                <a href="#depoimentos" className="hover:text-white">
                  Depoimentos
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


