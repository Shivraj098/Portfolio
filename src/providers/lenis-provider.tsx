"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({
  children,
}: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}