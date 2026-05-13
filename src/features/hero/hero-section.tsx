import { FadeIn } from "@/components/motion/fade-in";
import {
  Section,
  SectionContainer,
} from "@/components/layout/section";

import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";
import { SpecializationStrip } from "./specialization-strip";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-40">
      <SectionContainer>
        <div className="flex flex-col gap-20 lg:flex-row lg:items-center lg:justify-between">
          <FadeIn>
            <HeroContent />
          </FadeIn>

          <HeroVisual />
        </div>

        <SpecializationStrip />
      </SectionContainer>
    </Section>
  );
}