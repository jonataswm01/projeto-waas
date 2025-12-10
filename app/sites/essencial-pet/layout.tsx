import { ReactNode } from "react";

import { EssencialNavbar } from "@/components/demos/essencial-pet/EssencialNavbar";
import { DemoBar } from "@/components/shared/demo-bar";

export default function EssencialPetLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen scroll-smooth bg-[#0f172a] text-slate-50 antialiased">
      <EssencialNavbar />
      {children}
      <DemoBar />
    </div>
  );
}

