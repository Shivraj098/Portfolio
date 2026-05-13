import { GlassCard } from "@/components/shared/glass-card";

const lifecycle = [
  "PENDING",
  "IN_PROGRESS",
  "DONE",
];

export function TaskflowLifecycle() {
  return (
    <div>
      <div className="max-w-2xl">
        <h3 className="text-3xl font-semibold tracking-tight">
          Lifecycle Enforcement System
        </h3>

        <p className="mt-5 text-white/50">
          Strict backend validation prevents invalid state mutations,
          unauthorized transitions, and inconsistent realtime workflows.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-6 lg:flex-row">
        {lifecycle.map((item, index) => (
          <GlassCard
            key={item}
            className="relative flex flex-1 items-center justify-center rounded-[1.75rem] py-16"
          >
            <div className="absolute left-4 top-4 text-xs text-white/30">
              0{index + 1}
            </div>

            <span className="text-lg font-medium text-white/70">
              {item}
            </span>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}