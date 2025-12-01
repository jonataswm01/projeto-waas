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

export default function ImplantesPremiumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-16 h-72 w-72 bg-cyan-200/40 blur-3xl rounded-full" />
          <div className="absolute top-40 -left-20 h-64 w-64 bg-blue-100/60 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid gap-12 lg:grid-cols-2 items-center">
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Aurora Medical</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Seu novo sorriso <span className="text-cyan-700">começa aqui.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              Clínica boutique especializada em reabilitações com tecnologia de ponta, ambientação acolhedora e uma
              equipe focada em cada detalhe da jornada do paciente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-8 py-6 bg-cyan-600 hover:bg-cyan-700 text-white text-base shadow-lg shadow-cyan-500/30">
                Agendar Avaliação
              </Button>
              <Button variant="ghost" className="rounded-full px-8 text-slate-700 hover:bg-slate-100">
                Ver Estrutura
              </Button>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="relative h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-cyan-500/20"
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
              alt="Mulher sorrindo feliz em ambiente iluminado"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-lg rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-sm font-semibold text-slate-800">Scanner Intraoral 4K</p>
              <p className="text-xs text-slate-500">Planejamento digital em tempo real</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="py-16 lg:py-20 scroll-mt-20">
        <motion.div {...scrollAnimation} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Tratamentos</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3">Transformações sob medida</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              Protocolos personalizados com acompanhamento contínuo e tecnologia de precisão para resultados naturais.
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
                className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl shadow-slate-200/40 p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 flex-1">{description}</p>
                <span className="text-sm font-semibold text-cyan-700 mt-4">Saiba mais</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Diferenciais */}
      <section id="clinica" className="py-16 lg:py-20 bg-slate-900 text-white scroll-mt-20">
        <motion.div {...scrollAnimation} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">Experiência Aurora</p>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Tecnologia e cuidado em cada etapa</h2>
            <p className="text-slate-200 mt-4">
              Um fluxo integrado que combina diagnóstico digital, conforto absoluto e logística inteligente para
              pacientes exigentes.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {diferenciais.map(({ title, description, Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="rounded-3xl bg-white/5 border border-white/10 p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/15 text-cyan-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-slate-200">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Galeria */}
      <section id="resultados" className="py-16 lg:py-20 scroll-mt-20">
        <motion.div {...scrollAnimation} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Resultados</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3">Resultados que falam por si.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
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
                className="rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/30 p-4 flex flex-col"
              >
                <div className="relative h-72 rounded-[1.5rem] overflow-hidden">
                  <Image src={src} alt={alt} fill className="object-cover" />
                </div>
                <p className="text-sm font-semibold text-cyan-700 mt-4">Reabilitação com Lentes</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Especialista */}
      <section className="py-16 lg:py-20">
        <motion.div {...scrollAnimation} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="relative rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-2xl shadow-cyan-500/10 p-4"
          >
            <div className="relative h-[420px] rounded-[1.5rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1100&q=80"
                alt="Dr. André Silva"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-lg text-sm font-semibold text-slate-700">
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
              Especialista em Harmonização Orofacial e Implantodontia com mais de 15 anos de experiência em reabilitações
              complexas. Professor convidado em programas internacionais e membro da American Academy of Cosmetic Dentistry.
            </p>
            <p className="text-slate-600">
              Lidera uma equipe multidisciplinar focada em procedimentos minimamente invasivos, planejamento digital e
              atendimento humanizado.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600">
                Harvard Dental CE
              </div>
              <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600">
                ITI Member
              </div>
              <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600">
                Digital Smile Design
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 scroll-mt-20">
        <motion.div {...scrollAnimation} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-center mb-10"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-700">Dúvidas frequentes</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-3">Tudo que você precisa saber</h2>
            <p className="text-slate-600 mt-4">
              Transparência total antes de você agendar. Nosso time está pronto para personalizar o tratamento.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map(({ question, answer }, index) => (
              <motion.div
                key={question}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 * (index + 1) }}
              >
                <AccordionItem value={`faq-${index}`} className="border border-slate-200/60 rounded-2xl px-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base pb-4">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* Footer simples */}
      <motion.footer {...scrollAnimation} className="py-10 pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Clínica</p>
            <h3 className="text-2xl font-semibold text-slate-900 mt-2">Dr. André Silva</h3>
            <p className="text-slate-500 mt-1">CRO-SP 23456 | Implantes & Estética Avançada</p>
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
    </main>
  );
}
