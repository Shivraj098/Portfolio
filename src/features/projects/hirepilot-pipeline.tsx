import { GlassCard } from "@/components/shared/glass-card";

const pipeline = [
  "Resume Parsing",
  "AI Analysis",
  "ATS Scoring",
  "Skill Gap Detection",
  "Resume Tailoring",
  "Interview Preparation",
];

export function HirePilotPipeline() {
  return (
    <div>
      <div className="max-w-2xl">
        <h3 className="text-3xl font-semibold tracking-tight">
          AI Orchestration Pipeline
        </h3>

        <p className="mt-5 text-white/50">
          Custom-engineered AI infrastructure with orchestration, retry logic,
          schema enforcement, intelligent caching, and production-grade prompt
          pipelines.
        </p>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-6">
        {pipeline.map((item, index) => (
          <GlassCard
            key={item}
            className="relative flex min-h-45 items-center justify-center rounded-[1.75rem]"
          >
            <div className="absolute left-4 top-4 text-xs text-white/30">
              0{index + 1}
            </div>

            <span className="text-center text-sm text-white/70">
              {item}
            </span>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}