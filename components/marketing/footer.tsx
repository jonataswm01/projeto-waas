"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Footer() {
  const whatsappLink = "https://wa.me/5516997330113?text=Olá, quero saber mais sobre a assinatura de sites.";

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-lg text-slate-300 max-w-2xl">
            Você tem duas escolhas: Continuar invisível ou dominar sua região por R$ 3,30 ao dia.
          </p>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base px-8 py-6">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com Consultor no WhatsApp
            </Button>
          </Link>
          <div className="pt-8 border-t border-slate-800 w-full">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} WebJ. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

