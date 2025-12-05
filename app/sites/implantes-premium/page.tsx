"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smile, Sparkles, AlignCenter, ShieldCheck, Sparkles as SparklesIcon, MapPin } from "lucide-react";

const treatments = [
  {
    title: "Implantes Dentários",
    description:
      "Tecnologia guiada por computador para um procedimento rápido, seguro e com cicatrização acelerada.",
    Icon: Smile,
  },
  {
    title: "Lentes de Contato Dental",
    description:
      "Facetas ultrafinas com scanners 3D que garantem ajuste perfeito e preservam a estrutura do dente.",
    Icon: Sparkles,
  },
  {
    title: "Invisalign Premium",
    description:
      "Alinhadores transparentes com acompanhamento digital semanal e previsibilidade total do resultado.",
    Icon: AlignCenter,
  },
];

const diferenciais = [
  {
    title: "Raio-X Digital 3D",
    description: "Mapeamento completo da arcada com baixa radiação para diagnósticos precisos.",
    Icon: ShieldCheck,
  },
  {
    title: "Protocolo Sem Dor",
    description: "Sedação consciente e acompanhamento pós-operatório 24h no WhatsApp.",
    Icon: SparklesIcon,
  },
  {
    title: "Estacionamento Exclusivo",
    description: "Vagas reservadas com valet e acesso direto à recepção premium.",
    Icon: MapPin,
  },
];

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80",
    alt: "Mulher jovem com sorriso perfeito e dentes brancos",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
    alt: "Homem sorrindo com confiança mostrando dentes alinhados",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
    alt: "Mulher com sorriso radiante e harmonia facial",
  },
];

const faqs = [
  {
    question: "O implante dói?",
    answer:
      "Com a sedação consciente e anestesia computadorizada, o procedimento é confortável. Acompanhamos você 24h no pós-operatório para garantir tranquilidade total.",
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer:
      "Em média, 3 a 4 meses entre o implante e a prótese definitiva. Utilizamos tecnologias de carga imediata sempre que o diagnóstico permite para acelerar resultados.",
  },
  {
    question: "Aceita convênios?",
    answer:
      "Trabalhamos com reembolso para os principais planos premium e oferecemos condições especiais de financiamento direto na clínica.",
  },
  {
    question: "Qual a garantia do implante?",
    answer:
      "Oferecemos garantia de 5 anos para os implantes e acompanhamento contínuo. Utilizamos apenas sistemas certificados internacionalmente com comprovada taxa de sucesso acima de 98%.",
  },
  {
    question: "Preciso fazer algum exame antes?",
    answer:
      "Sim, realizamos uma tomografia 3D digital na própria clínica no dia da consulta. O exame é incluído na avaliação e permite planejamento preciso do seu caso em tempo real.",
  },
];

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

const whatsappUrl =
  "https://wa.me/5516997330113?text=Olá!%20Vi%20o%20modelo%20Profissional%20(Dentista)%20e%20gostei.%20Quero%20saber%20mais%20sobre%20o%20plano%20de%20R$%20129,90.";

export default function ImplantesPremiumPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 text-slate-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-16 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-[150px]" />
        <div className="absolute top-32 -left-10 h-[360px] w-[360px] rounded-full bg-blue-200/40 blur-[140px]" />
        <div className="absolute bottom-24 right-8 h-[320px] w-[320px] rounded-full bg-indigo-200/30 blur-[140px]" />
        <div className="absolute -bottom-36 left-1/4 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-[180px]" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-white/80 backdrop-blur-2xl shadow-[0_25px_90px_rgba(8,112,184,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40">
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute -top-24 left-14 h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl" />
                <div className="absolute bottom-0 right-4 h-56 w-56 rounded-full bg-blue-300/40 blur-[120px]" />
              </div>
              <div className="relative grid gap-12 px-6 py-10 sm:px-10 lg:px-16 lg:py-16 lg:grid-cols-2 items-center">
                <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-700">Aurora Medical</p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Seu novo sorriso{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                      começa aqui.
                    </span>
                  </h1>
                  <p className="text-lg text-slate-600 max-w-xl">
                    Clínica boutique especializada em reabilitações com tecnologia de ponta, ambientação acolhedora e
                    uma equipe focada em cada detalhe da jornada do paciente.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      asChild
                      className="rounded-full px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/70 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noreferrer">
                        Agendar Avaliação
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      className="rounded-full border border-white/70 bg-white/60 px-8 py-4 text-base font-semibold text-cyan-800 shadow-inner shadow-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noreferrer">
                        Ver Estrutura
                      </a>
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.2 }}
                  className="relative h-[420px] overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(8,112,184,0.2)]"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
                    alt="Mulher sorrindo feliz em ambiente iluminado"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-6 left-6 rounded-[1.5rem] bg-white/90 px-5 py-3 shadow-lg shadow-cyan-500/20 backdrop-blur-lg">
                    <p className="text-sm font-semibold text-slate-800">Scanner Intraoral 4K</p>
                    <p className="text-xs text-slate-500">Planejamento digital em tempo real</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Tratamentos */}
        <section id="tratamentos" className="py-16 lg:py-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...scrollAnimation} className="space-y-12">
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="text-center"
              >
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Tratamentos</p>
                <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Transformações sob medida</h2>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                  Protocolos personalizados com acompanhamento contínuo e tecnologia de precisão para resultados
                  naturais.
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-3">
                {treatments.map(({ title, description, Icon }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="group flex flex-col rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_15px_50px_rgba(8,112,184,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 via-blue-100 to-white text-cyan-700 shadow-inner shadow-white/60">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-slate-900">{title}</h3>
                    <p className="flex-1 text-slate-600">{description}</p>
                    <span className="mt-4 text-sm font-semibold text-cyan-600 transition-colors group-hover:text-blue-600">
                      Saiba mais
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diferenciais */}
        <section
          id="clinica"
          className="relative w-full bg-slate-900/95 py-20 lg:py-24 text-white scroll-mt-20 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 left-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-[140px]" />
            <div className="absolute bottom-0 right-16 h-72 w-72 rounded-full bg-indigo-500/20 blur-[160px]" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...scrollAnimation} className="space-y-12">
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="max-w-3xl"
              >
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90">Experiência Aurora</p>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold">Tecnologia e cuidado em cada etapa</h2>
                <p className="mt-4 text-slate-200">
                  Um fluxo integrado que combina diagnóstico digital, conforto absoluto e logística inteligente para
                  pacientes exigentes.
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-3">
                {diferenciais.map(({ title, description, Icon }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(8,112,184,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
                    <p className="text-slate-200">{description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Galeria */}
        <section id="resultados" className="py-16 lg:py-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...scrollAnimation}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_25px_90px_rgba(8,112,184,0.14)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40 sm:px-10 lg:px-16 lg:py-16"
            >
              <div className="pointer-events-none absolute inset-0 opacity-50">
                <div className="absolute -top-3 right-8 h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl" />
                <div className="absolute bottom-0 left-16 h-40 w-40 rounded-full bg-blue-200/40 blur-[120px]" />
              </div>
              <div className="relative">
                <motion.div
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.1 }}
                  className="mb-12 text-center"
                >
                  <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Resultados</p>
                  <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">Resultados que falam por si.</h2>
                  <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                    Cada sorriso é planejado digitalmente para entregar harmonia facial, funcionalidade e autoestima.
                  </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                  {galleryItems.map(({ src, alt }, index) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                      className="flex flex-col rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_18px_60px_rgba(8,112,184,0.1)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40"
                    >
                      <div className="relative h-72 overflow-hidden rounded-[1.75rem]">
                        <Image src={src} alt={alt} fill className="object-cover" />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-cyan-700">Reabilitação com Lentes</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Especialista */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...scrollAnimation}
              className="grid gap-12 items-center lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            >
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -left-12 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-200/60 to-blue-300/30 blur-[110px]" />
                <div className="absolute -bottom-10 -right-6 h-48 w-48 rounded-full opacity-60 bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_55%)]" />
                <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] shadow-[0_25px_90px_rgba(8,112,184,0.18)] backdrop-blur-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1100&q=80"
                    alt="Dr. André Silva"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-slate-700 shadow-lg shadow-cyan-500/20 backdrop-blur">
                  CRO-SP 23456
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="space-y-5"
              >
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Conheça o especialista</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Dr. André Silva</h2>
                <p className="text-lg text-slate-600">
                  Especialista em Harmonização Orofacial e Implantodontia com mais de 15 anos de experiência em
                  reabilitações complexas. Professor convidado em programas internacionais e membro da American Academy
                  of Cosmetic Dentistry.
                </p>
                <p className="text-slate-600">
                  Lidera uma equipe multidisciplinar focada em procedimentos minimamente invasivos, planejamento digital
                  e atendimento humanizado.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Harvard Dental CE", "ITI Member", "Digital Smile Design"].map((badge) => (
                    <div
                      key={badge}
                      className="rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-inner shadow-white/50"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="py-16 lg:py-20 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...scrollAnimation}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_25px_90px_rgba(8,112,184,0.14)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40 sm:px-10 lg:px-16 lg:py-16"
            >
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute top-10 right-16 h-32 w-32 rounded-full bg-cyan-200/50 blur-[100px]" />
              </div>
              <div className="relative">
                <motion.div
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.1 }}
                  className="mb-10 text-center"
                >
                  <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Dúvidas frequentes</p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">Tudo que você precisa saber</h2>
                  <p className="mt-4 text-slate-600">
                    Transparência total antes de você agendar. Nosso time está pronto para personalizar o tratamento.
                  </p>
                </motion.div>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map(({ question, answer }, index) => (
                    <motion.div
                      key={question}
                      {...fadeUp}
                      transition={{ ...fadeUp.transition, delay: 0.12 * (index + 1) }}
                    >
                      <AccordionItem
                        value={`faq-${index}`}
                        className="rounded-[1.75rem] border border-white/70 bg-white/80 px-6 shadow-[0_12px_40px_rgba(8,112,184,0.08)] backdrop-blur-xl"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-slate-900">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-base text-slate-600">{answer}</AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.footer
              {...scrollAnimation}
              className="rounded-[2.5rem] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_25px_80px_rgba(8,112,184,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40 sm:px-10 lg:px-16"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Clínica</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">Dr. André Silva</h3>
                  <p className="mt-1 text-slate-500">CRO-SP 23456 | Implantes & Estética Avançada</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600">Endereço</p>
                  <p className="text-slate-500">Av. Paulista, 1500 - Bela Vista, São Paulo</p>
                  <p className="text-slate-500">Estacionamento e Valet no local</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600">Horários</p>
                  <p className="text-slate-500">Segunda a Sexta · 8h às 21h</p>
                  <p className="text-slate-500">Sábados · 9h às 14h</p>
                </div>
              </div>
            </motion.footer>
          </div>
        </section>
      </div>
    </main>
  );
}
