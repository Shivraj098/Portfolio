import type { ReactNode } from "react";
import { CommandMenu } from "@/features/command-menu/command-menu";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <CommandMenu />

      <div className="relative">
        {children}
      </div>
      <Footer />
    </div>
  );
}
