import { GlassCard } from "@/components/shared/glass-card";

import {
  Section,
  SectionContainer,
} from "@/components/layout/section";

export function GithubSection() {
  return (
    <Section>
      <SectionContainer>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.6fr]">
          <GlassCard className="rounded-[2rem] p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Open Source & Engineering
            </p>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight">
              Building production-focused systems with modern full-stack
              architecture.
            </h2>

            <p className="mt-8 max-w-2xl leading-relaxed text-white/50">
              Focused on scalable backend systems, AI-native applications,
              realtime collaboration infrastructure, authentication security,
              and premium frontend engineering.
            </p>
          </GlassCard>

          <GlassCard className="rounded-[2rem] p-10">
            <p className="text-sm text-white/40">
              GitHub Activity
            </p>

            <div className="mt-10 space-y-4">
              {[
                "AI Infrastructure",
                "Realtime Systems",
                "Authentication Security",
                "SaaS Architecture",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-white/3 px-4 py-5 text-sm text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </SectionContainer>
    </Section>
  );
}