"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import {
  DURATIONS,
  TRANSITION,
} from "@/lib/motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
};

export function FadeIn({
  children,
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: DURATIONS.slow,
        ease: TRANSITION.gentle,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}