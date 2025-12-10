import { ReactNode } from "react";
import { DentistNavbar } from "@/components/demos/dentist/DentistNavbar";
import { DentistFooter } from "@/components/demos/dentist/DentistFooter";
import { DemoBar } from "@/components/shared/demo-bar";

export default function ImplantesPremiumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative bg-slate-50 min-h-screen">
      <DentistNavbar />
      {children}
      <DentistFooter />
      <DemoBar />
    </main>
  );
}

