"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  children: React.ReactNode;
};

export function TextReveal({
  children,
}: TextRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}