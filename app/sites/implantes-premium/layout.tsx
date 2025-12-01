import { ReactNode } from "react";
import { DentistNavbar } from "@/components/demos/dentist/DentistNavbar";

export default function ImplantesPremiumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative bg-slate-50 min-h-screen">
      <DentistNavbar />
      {children}
    </main>
  );
}

