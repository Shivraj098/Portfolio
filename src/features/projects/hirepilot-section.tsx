import { FadeIn } from "@/components/motion/fade-in";
import {
  Section,
  SectionContainer,
} from "@/components/layout/section";
import {
  SectionDescription,
  SectionHeading,
} from "@/components/shared/typography";

import { HirePilotDashboard } from "./hirepilot-dashboard";
import { HirePilotFeatures } from "./hirepilot-features";
import { HirePilotPipeline } from "./hirepilot-pipeline";

export function HirePilotSection() {
  return (
    <Section
      id="projects"
      className="relative overflow-hidden"
    >
      <SectionContainer>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-blue-300/70">
              Flagship Project
            </p>

            <SectionHeading className="text-gradient">
              HirePilot
            </SectionHeading>

            <SectionDescription className="mt-6 text-base md:text-lg">
              AI-powered career intelligence SaaS engineered with scalable
              orchestration pipelines, ATS optimization systems, intelligent
              resume versioning, and production-grade full-stack architecture.
            </SectionDescription>
          </div>
        </FadeIn>

        <div className="mt-24">
          <HirePilotDashboard />
        </div>

        <div className="mt-28">
          <HirePilotPipeline />
        </div>

        <div className="mt-28">
          <HirePilotFeatures />
        </div>
      </SectionContainer>
    </Section>
  );
}