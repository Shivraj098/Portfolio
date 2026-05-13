"use client";

import Lenis from "lenis";

import {
  ReactNode,
  useEffect,
} from "react";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({
  children,
}: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,

      smoothWheel: true,

      wheelMultiplier: 0.9,

      touchMultiplier: 1.2,

      lerp: 0.08,
    });

    let frame: number;

    function raf(time: number) {
      lenis.raf(time);

      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}