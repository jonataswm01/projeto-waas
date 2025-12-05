"use client";

import { motion } from "framer-motion";
import { Lock, UserX, TrendingDown } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Lock,
      title: "O Instagram não é sua propriedade.",
      description: "Você construiu seu negócio em um terreno alugado. Se sua conta cair amanhã, sua empresa deixa de existir. Um site é sua Propriedade Digital.",
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500",
      borderHover: "hover:border-pink-200",
      shadowHover: "hover:shadow-xl hover:shadow-pink-100/50",
    },
    {
      icon: UserX,
      title: "Sem site, você pode parecer amador.",
      description: "Ter um site profissional mostra que você é sério. Antes de comprar, o cliente te pesquisa no Google. Se ele não te acha, mas encontra o concorrente... adivinhe quem leva o dinheiro?",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      borderHover: "hover:border-orange-200",
      shadowHover: "hover:shadow-xl hover:shadow-orange-100/50",
    },
    {
      icon: TrendingDown,
      title: "Dinheiro na Mesa.",
      description: "Existem pessoas procurando seu serviço agora na sua cidade. Sem otimização para o Google, você é invisível para esse lucro recorrente.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      borderHover: "hover:border-blue-200",
      shadowHover: "hover:shadow-xl hover:shadow-blue-100/50",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-slate-50/50">
      {/* Background Aurora Blobs - Tons Pastéis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Purple Blob - Left */}
        <div className="absolute top-1/2 -left-32 md:-left-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
        
        {/* Cyan Blob - Right */}
        <div className="absolute top-1/2 -right-32 md:-right-20 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-16"
        >
          Você está perdendo vendas todos os dias
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`
                    relative h-full p-6 md:p-8 rounded-2xl
                    bg-white
                    border border-slate-100
                    shadow-lg shadow-slate-200/50
                    transition-all duration-300
                    ${point.borderHover}
                    ${point.shadowHover}
                  `}
                >
                  {/* Icon Container */}
                  <motion.div
                    className={`
                      w-14 h-14 rounded-xl
                      ${point.iconBg}
                      flex items-center justify-center mb-6
                    `}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon className={`h-7 w-7 ${point.iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

