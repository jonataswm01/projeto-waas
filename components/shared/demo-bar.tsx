"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function DemoBar() {
  const pathname = usePathname();
  
  // Detectar qual site está sendo visualizado e gerar mensagem apropriada
  const getWhatsAppMessage = () => {
    if (pathname?.includes("vetcare-aurora")) {
      return "Olá! Vi o modelo Essencial (Vet) e gostei. Quero saber mais sobre o plano de R$ 79,90.";
    }
    if (pathname?.includes("implantes-premium")) {
      return "Olá! Vi o modelo Profissional (Dentista) e gostei. Quero saber mais sobre o plano de R$ 129,90.";
    }
    if (pathname?.includes("corporativo-nexus")) {
      return "Olá! Vi o modelo Corporativo e gostei. Quero saber mais sobre o plano de R$ 199,90.";
    }
    // Fallback genérico
    return "Olá! Vi um modelo da Lumina e gostei. Quero saber mais.";
  };

  const whatsappLink = `https://wa.me/5516997330113?text=${encodeURIComponent(getWhatsAppMessage())}`;

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-auto max-w-xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl shadow-blue-900/10 rounded-full px-6 py-3 pointer-events-auto"
      >
        <div className="flex items-center gap-2 sm:gap-6 text-[11px] sm:text-sm whitespace-nowrap">
          {/* Texto à esquerda */}
          <p className="font-medium text-slate-700">
            Demo Lumina
          </p>

          {/* Botões à direita */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Link href="/comecar">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/50 px-2.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-1.5 sm:mr-2" />
                Ver Outros Modelos
              </Button>
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm"
              >
                Quero Este Site 🚀
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

