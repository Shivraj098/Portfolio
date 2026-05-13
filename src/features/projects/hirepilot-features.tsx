import { GlassCard } from "@/components/shared/glass-card";

const features = [
  {
    title: "Custom ATS Scoring Engine",
    description:
      "Multi-dimensional resume analysis with synonym matching, keyword intelligence, and section-based scoring.",
  },
  {
    title: "Resume Version Branching",
    description:
      "BASE and TAILORED resume version architecture with automated AI pipelines.",
  },
  {
    title: "AI Infrastructure Layer",
    description:
      "Retry logic, schema validation, caching, orchestration, and anti-hallucination systems.",
  },
  {
    title: "Scalable Backend Architecture",
    description:
      "Service-layer separation with Zod validation, Prisma transactions, and ownership enforcement.",
  },
];

export function HirePilotFeatures() {
  return (
    <div>
      <div className="max-w-2xl">
        <h3 className="text-3xl font-semibold tracking-tight">
          Engineering Highlights
        </h3>

        <p className="mt-5 text-white/50">
          Designed with production-grade architecture principles focused on AI
          reliability, scalability, maintainability, and premium user
          experience.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {features.map((feature) => (
          <GlassCard
            key={feature.title}
            className="rounded-[1.75rem] p-8"
          >
            <h4 className="text-xl font-medium">
              {feature.title}
            </h4>

            <p className="mt-5 leading-relaxed text-white/50">
              {feature.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}