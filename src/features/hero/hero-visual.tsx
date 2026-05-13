"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/shared/glass-card";

export function HeroVisual() {
  return (
    <div className="relative hidden h-175 flex-1 items-center justify-center lg:flex">
      {/* Background Glow */}
      <div className="absolute h-125 w-125 rounded-full bg-blue-500/20 blur-[90px]" />

      {/* Central Dashboard */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10"
      >
        <GlassCard className="w-130 overflow-hidden p-0">
          {/* Header */}
          <div className="border-b border-white/5 p-4">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
          </div>

          {/* Dashboard */}
          <div className="space-y-6 p-6">
            {/* AI Score */}
            <div className="rounded-3xl border border-white/5 bg-white/3 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">
                    ATS Optimization Score
                  </p>

                  <h3 className="mt-2 text-5xl font-semibold text-white">
                    92
                  </h3>
                </div>

                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10">
                  <span className="text-lg font-medium text-blue-300">
                    +18%
                  </span>
                </div>
              </div>
            </div>

            {/* Analytics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="rounded-3xl">
                <p className="text-sm text-white/50">
                  AI Analyses
                </p>

                <h4 className="mt-4 text-3xl font-semibold">
                  1.2K+
                </h4>
              </GlassCard>

              <GlassCard className="rounded-3xl">
                <p className="text-sm text-white/50">
                  Realtime Sync
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />

                  <span className="text-sm text-white/70">
                    Live
                  </span>
                </div>
              </GlassCard>
            </div>

            {/* AI Pipeline */}
            <GlassCard className="rounded-3xl">
              <p className="mb-6 text-sm text-white/50">
                AI Orchestration Pipeline
              </p>

              <div className="flex items-center justify-between gap-4">
                {[
                  "Resume",
                  "Analysis",
                  "Scoring",
                  "Optimization",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex flex-1 items-center justify-center rounded-2xl border border-white/5 bg-white/3 px-4 py-5 text-sm text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating Cards */}
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className="absolute left-0 top-24"
      >
        <GlassCard className="w-56 rounded-3xl">
          <p className="text-sm text-white/50">
            Authentication Security
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-400" />

            <span className="text-sm text-white/70">
              OAuth PKCE Active
            </span>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
        className="absolute bottom-24 right-0"
      >
        <GlassCard className="w-60 rounded-3xl">
          <p className="text-sm text-white/50">
            Realtime Collaboration
          </p>

          <div className="mt-4 flex -space-x-2">
            <div className="h-10 w-10 rounded-full border border-black bg-blue-400" />
            <div className="h-10 w-10 rounded-full border border-black bg-violet-400" />
            <div className="h-10 w-10 rounded-full border border-black bg-emerald-400" />
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}