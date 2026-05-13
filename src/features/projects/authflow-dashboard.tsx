"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/shared/glass-card";

export function AuthflowDashboard() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

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
        <GlassCard className="overflow-hidden rounded-[2rem] p-0">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
            <div>
              <h3 className="text-lg font-medium">
                Authentication Security Infrastructure
              </h3>

              <p className="mt-1 text-sm text-white/40">
                OAuth PKCE + MFA + JWT lifecycle orchestration
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-sm text-violet-200">
                Secure Session Active
              </span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="grid gap-6 p-6 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Main */}
            <div className="space-y-6">
              {/* JWT System */}
              <GlassCard className="rounded-[1.75rem]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-white/50">
                      Active Session Security
                    </p>

                    <h2 className="mt-5 text-6xl font-semibold">
                      JWT
                    </h2>

                    <p className="mt-3 text-sm text-white/40">
                      Rotation + reuse detection enabled
                    </p>
                  </div>

                  <div className="rounded-full border border-violet-400/20 bg-violet-500/10 px-5 py-3 text-sm text-violet-200">
                    Token Rotation Active
                  </div>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      label: "Refresh Tokens",
                      value: "Secure",
                    },
                    {
                      label: "Blacklist Cache",
                      value: "Redis",
                    },
                    {
                      label: "Session Control",
                      value: "Protected",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/5 bg-black/20 p-4"
                    >
                      <p className="text-xs text-white/40">
                        {item.label}
                      </p>

                      <p className="mt-3 text-lg font-medium">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* MFA */}
              <GlassCard className="rounded-[1.75rem]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium">
                      MFA Infrastructure
                    </h4>

                    <p className="mt-1 text-sm text-white/40">
                      TOTP + recovery code architecture
                    </p>
                  </div>

                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    Verified
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between gap-4">
                  {[
                    "QR Setup",
                    "TOTP",
                    "Recovery",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex flex-1 items-center justify-center rounded-2xl border border-white/5 bg-white/3 px-4 py-6"
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
                  title: "OAuth Providers",
                  value: "2",
                },
                {
                  title: "Security Events",
                  value: "Live",
                },
                {
                  title: "Rate Limiting",
                  value: "Redis",
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
                  Security Layers
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "OAuth PKCE",
                    "MFA Verification",
                    "Session Revocation",
                    "Audit Logging",
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