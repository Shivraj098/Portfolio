import { Button } from "@/components/ui/button";

import {
  Section,
  SectionContainer,
} from "@/components/layout/section";

export function ContactSection() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden"
    >
      <SectionContainer>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/40">
            Contact
          </p>

          <h2 className="text-gradient text-5xl font-semibold tracking-tight md:text-7xl">
            Let’s build something exceptional.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
            Open to full-stack engineering opportunities focused on scalable
            systems, AI-native products, realtime collaboration, and premium
            digital experiences.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">
              Email Me
            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              Resume
            </Button>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}