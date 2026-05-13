"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/shared/glass-card";

export function HirePilotDashboard() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <GlassCard className="overflow-hidden rounded-[2rem] border border-white/10 p-0">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
            <div>
              <h3 className="text-lg font-medium">
                Resume Intelligence Dashboard
              </h3>

              <p className="mt-1 text-sm text-white/40">
                AI orchestration + ATS optimization system
              </p>
            </div>

            <div className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              GPT-4o-mini Active
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="grid gap-6 p-6 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Main Analytics */}
            <div className="space-y-6">
              {/* ATS Score */}
              <GlassCard className="rounded-[1.75rem] border border-white/5 bg-white/03">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-white/50">
                      ATS Optimization Score
                    </p>

                    <div className="mt-4 flex items-end gap-3">
                      <h2 className="text-7xl font-semibold">
                        92
                      </h2>

                      <span className="mb-3 text-lg text-emerald-300">
                        +18%
                      </span>
                    </div>
                  </div>

                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                    <div className="h-16 w-16 rounded-full border border-blue-300/20" />
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      label: "Keyword Match",
                      value: "96%",
                    },
                    {
                      label: "Resume Health",
                      value: "89%",
                    },
                    {
                      label: "Skill Alignment",
                      value: "91%",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/5 bg-black/20 p-4"
                    >
                      <p className="text-xs text-white/40">
                        {item.label}
                      </p>

                      <p className="mt-3 text-2xl font-medium">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Resume Versioning */}
              <GlassCard className="rounded-[1.75rem]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium">
                      Resume Version Intelligence
                    </h4>

                    <p className="mt-1 text-sm text-white/40">
                      BASE → TAILORED branching architecture
                    </p>
                  </div>

                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    Active
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between gap-4">
                  {[
                    "BASE",
                    "TAILORED",
                    "OPTIMIZED",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex flex-1 items-center justify-center rounded-2xl border border-white/5 bg-white/03 px-4 py-6"
                    >
                      <span className="text-sm text-white/70">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Side Metrics */}
            <div className="space-y-6">
              {[
                {
                  title: "AI Analyses",
                  value: "1.2K+",
                },
                {
                  title: "Prompt Pipelines",
                  value: "10+",
                },
                {
                  title: "Cache Efficiency",
                  value: "78%",
                },
              ].map((item) => (
                <GlassCard
                  key={item.title}
                  className="rounded-[1.75rem]"
                >
                  <p className="text-sm text-white/50">
                    {item.title}
                  </p>

                  <h3 className="mt-6 text-4xl font-semibold">
                    {item.value}
                  </h3>
                </GlassCard>
              ))}

              <GlassCard className="rounded-[1.75rem]">
                <p className="text-sm text-white/50">
                  AI Pipeline Status
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "Schema Enforcement",
                    "Retry Logic",
                    "AI Caching",
                    "Prompt Validation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-white/70">
                        {item}
                      </span>

                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}