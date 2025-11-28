import { ReactNode } from "react";
import { DemoBar } from "@/components/shared/demo-bar";

export default function SitesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <DemoBar />
    </>
  );
}

