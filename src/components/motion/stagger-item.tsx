"use client";

import { motion } from "framer-motion";

import {
  DURATIONS,
  TRANSITION,
} from "@/lib/motion";

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 14,
        },

        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: DURATIONS.medium,
        ease: TRANSITION.smooth,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}