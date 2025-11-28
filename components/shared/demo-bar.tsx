"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";

export function DemoBar() {
  const whatsappLink = "https://wa.me/5516997330113?text=Olá, quero saber mais sobre a assinatura de sites.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-center sm:text-left">
            Este é um site de demonstração criado pela <span className="font-semibold">WebJ</span>.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Portfólio
              </Button>
            </Link>
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Quero um site assim
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

