"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export function Footer() {
  const whatsappLink = "https://wa.me/5516997330113?text=Olá, quero saber mais sobre a assinatura de sites.";

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-lg text-slate-300 max-w-2xl">
            Você tem duas escolhas: Continuar invisível ou dominar sua região por R$ 3,30 ao dia.
          </p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              x: 4,
              opacity: 0.9
            }}
            whileTap={{ x: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center justify-center text-base px-8 py-6 font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar com Consultor no WhatsApp
          </motion.a>
          <div className="pt-8 border-t border-slate-800 w-full">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
              <span className={`${outfit.className} text-sm font-bold tracking-wider uppercase text-white`}>
                LUMINA
              </span>
            </div>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Lumina. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

