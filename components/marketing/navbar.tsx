"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const whatsappLink = "https://wa.me/5516997330113?text=Olá, quero saber mais sobre a assinatura de sites.";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-slate-900">
            WebJ
          </Link>
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
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Falar no WhatsApp
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

