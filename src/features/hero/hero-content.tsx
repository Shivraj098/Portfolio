import { Button } from "@/components/ui/button";
import {
  SectionDescription,
  SectionHeading,
} from "@/components/shared/typography";

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-3xl">
      <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40 md:text-sm">
        AI & Full-Stack Systems Engineer
      </p>

      <SectionHeading className="text-gradient text-6xl leading-[0.95] md:text-8xl xl:text-[9rem]">
        Building cinematic AI-native SaaS systems.
      </SectionHeading>

      <SectionDescription className="mt-8 max-w-2xl text-base md:text-lg">
        Production-grade full-stack engineering focused on scalable AI systems,
        realtime collaboration platforms, authentication infrastructure, and
        premium digital product experiences.
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
    </div>
  );
}