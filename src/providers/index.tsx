"use client";

import type { ReactNode } from "react";

import { LenisProvider } from "./lenis-provider";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({
  children,
}: ProvidersProps) {
  return (
    <LenisProvider>
      {children}
    </LenisProvider>
  );
}