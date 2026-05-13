import { Button } from "@/components/ui/button";
import {
  SectionDescription,
  SectionHeading,
} from "@/components/shared/typography";
import { Magnetic } from "@/components/motion/magnetic";
export function HeroContent() {
  return (
    <div className="relative z-10 max-w-3xl">
      <p className="mb-6 text-xs tracking-[0.3em] text-white/40 uppercase md:text-sm">
        AI & Full-Stack Systems Engineer
      </p>

      <SectionHeading className="text-gradient text-5xl leading-[0.92] md:text-7xl xl:text-[7.5rem]">
        Building cinematic AI-native SaaS systems.
      </SectionHeading>

      <SectionDescription className="mt-8 max-w-2xl text-base md:text-lg">
        Production-grade full-stack engineering focused on scalable AI systems,
        realtime collaboration platforms, authentication infrastructure, and
        premium digital product experiences.
      </SectionDescription>

      <div className="mt-10 flex flex-wrap gap-4">
        <Magnetic>
          <Button size="lg">View Projects</Button>
        </Magnetic>
        <Magnetic>
          <Button variant="secondary" size="lg">
            Resume
          </Button>
        </Magnetic>
      </div>
    </div>
  );
}
