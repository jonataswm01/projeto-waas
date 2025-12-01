import { ReactNode } from "react";
import { DemoBar } from "@/components/shared/demo-bar";

export default function SitesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-slate-50 font-sans antialiased">
      {/* O conteúdo do site específico (Dentista, Advogado...) */}
      {children}

      {/* A barra flutuante que aparece em todos */}
      <DemoBar />
    </div>
  );
}

