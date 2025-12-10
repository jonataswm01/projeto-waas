import { ReactNode } from "react";

import { ProfissionalNavbar } from "@/components/demos/profissional/ProfissionalNavbar";
import { DemoBar } from "@/components/shared/demo-bar";

export default function ProfissionalTesteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen scroll-smooth bg-[#0f172a] text-slate-50 antialiased">
      <ProfissionalNavbar />
      {children}
      <DemoBar />
    </div>
  );
}

