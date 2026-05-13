import { GlassCard } from "@/components/shared/glass-card";

const features = [
  {
    title: "Realtime Synchronization",
    description:
      "Pusher-powered realtime collaboration architecture with isolated project channels and synchronized state propagation.",
  },
  {
    title: "Layered Service Architecture",
    description:
      "Controller-service separation with RBAC enforcement, transactional workflows, and scalable business logic orchestration.",
  },
  {
    title: "Production Testing Infrastructure",
    description:
      "Vitest and Playwright coverage for lifecycle validation, RBAC workflows, realtime behavior, and API testing.",
  },
  {
    title: "Scalable SaaS Engineering",
    description:
      "Modular frontend architecture with reusable systems, responsive UX, and production-grade workflow management.",
  },
];

export function TaskflowFeatures() {
  return (
    <div>
      <div className="max-w-2xl">
        <h3 className="text-3xl font-semibold tracking-tight">
          Engineering Highlights
        </h3>

        <p className="mt-5 text-white/50">
          Designed to simulate modern collaborative SaaS systems with realtime
          architecture, scalable workflows, testing maturity, and backend
          reliability.
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