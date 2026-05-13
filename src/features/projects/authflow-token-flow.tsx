import { GlassCard } from "@/components/shared/glass-card";

const flow = [
  "Authentication",
  "JWT Issuance",
  "Refresh Rotation",
  "Reuse Detection",
  "Revocation",
];

export function AuthflowTokenFlow() {
  return (
    <div>
      <div className="max-w-2xl">
        <h3 className="text-3xl font-semibold tracking-tight">
          JWT Lifecycle & Session Security
        </h3>

        <p className="mt-5 text-white/50">
          Production-grade session architecture with refresh token rotation,
          blacklist management, secure revocation workflows, and Redis-backed
          session security systems.
        </p>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-5">
        {flow.map((item, index) => (
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