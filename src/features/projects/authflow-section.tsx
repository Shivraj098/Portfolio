import { FadeIn } from "@/components/motion/fade-in";
import {
  Section,
  SectionContainer,
} from "@/components/layout/section";
import {
  SectionDescription,
  SectionHeading,
} from "@/components/shared/typography";

import { AuthflowDashboard } from "./authflow-dashboard";
import { AuthflowFeatures } from "./authflow-features";
import { AuthflowTokenFlow } from "./authflow-token-flow";

export function AuthflowSection() {
  return (
    <Section className="relative overflow-hidden">
      <SectionContainer>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-violet-300/70">
              Security Infrastructure Platform
            </p>

            <SectionHeading className="text-gradient">
              AuthFlow
            </SectionHeading>

            <SectionDescription className="mt-6 text-base md:text-lg">
              Production-style authentication and authorization platform
              engineered with OAuth PKCE, MFA systems, JWT rotation, Redis
              security infrastructure, RBAC authorization, and advanced session
              lifecycle management.
            </SectionDescription>
          </div>
        </FadeIn>

        <div className="mt-24">
          <AuthflowDashboard />
        </div>

        <div className="mt-28">
          <AuthflowTokenFlow />
        </div>

        <div className="mt-28">
          <AuthflowFeatures />
        </div>
      </SectionContainer>
    </Section>
  );
}