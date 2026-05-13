import { FadeIn } from "@/components/motion/fade-in";
import {
  Section,
  SectionContainer,
} from "@/components/layout/section";
import {
  SectionDescription,
  SectionHeading,
} from "@/components/shared/typography";

import { TaskflowBoard } from "./taskflow-board";
import { TaskflowLifecycle } from "./taskflow-lifecycle";
import { TaskflowFeatures } from "./taskflow-features";

export function TaskflowSection() {
  return (
    <Section className="relative overflow-hidden">
      <SectionContainer>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-emerald-300/70">
              Realtime Collaboration Platform
            </p>

            <SectionHeading className="text-gradient">
              TaskFlow
            </SectionHeading>

            <SectionDescription className="mt-6 text-base md:text-lg">
              Production-focused realtime collaboration SaaS engineered with
              scalable backend architecture, RBAC authorization, lifecycle
              validation, testing infrastructure, and synchronized multi-user
              workflows.
            </SectionDescription>
          </div>
        </FadeIn>

        <div className="mt-24">
          <TaskflowBoard />
        </div>

        <div className="mt-28">
          <TaskflowLifecycle />
        </div>

        <div className="mt-28">
          <TaskflowFeatures />
        </div>
      </SectionContainer>
    </Section>
  );
}