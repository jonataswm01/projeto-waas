import { ReactNode } from "react";

import { VetNavbar } from "@/components/demos/vet/VetNavbar";
import { DemoBar } from "@/components/shared/demo-bar";

export default function VetcareAuroraLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen scroll-smooth bg-slate-50 text-slate-900 antialiased">
      <VetNavbar />
      {children}
      <DemoBar />
    </div>
  );
}


