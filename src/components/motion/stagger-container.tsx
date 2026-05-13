"use client";

import { motion } from "framer-motion";

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      variants={{
        hidden: {},

        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}