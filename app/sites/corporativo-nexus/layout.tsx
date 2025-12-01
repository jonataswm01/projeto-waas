import { ReactNode } from "react";
import { CorporateNavbar } from "@/components/demos/corporate/CorporateNavbar";
import { CorporateFooter } from "@/components/demos/corporate/CorporateFooter";
import { DemoBar } from "@/components/shared/demo-bar";

export default function CorporativoNexusLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative bg-slate-950 min-h-screen">
      <CorporateNavbar />
      {children}
      <CorporateFooter />
      <DemoBar />
    </main>
  );
}

