import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionContainer,
} from "@/components/layout/section";
import {
  SectionDescription,
  SectionHeading,
} from "@/components/shared/typography";

export default function HomePage() {
  return (
    <main>
      <Section className="min-h-screen flex items-center">
        <SectionContainer>
          <FadeIn className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-white/40">
              AI & Full-Stack Systems Engineer
            </p>

            <SectionHeading className="text-6xl md:text-8xl">
              Building premium AI-native SaaS systems.
            </SectionHeading>

            <SectionDescription className="mt-8 text-base md:text-lg">
              Production-grade full-stack engineering focused on scalable AI
              systems, realtime collaboration, authentication infrastructure,
              and cinematic product experiences.
            </SectionDescription>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
              >
                Resume
              </Button>
            </div>
          </FadeIn>
        </SectionContainer>
      </Section>
    </main>
  );
}