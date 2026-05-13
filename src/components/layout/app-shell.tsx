import type { ReactNode } from "react";

import { Navbar } from "./navbar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      <div className="relative">
        {children}
      </div>
    </div>
  );
}
