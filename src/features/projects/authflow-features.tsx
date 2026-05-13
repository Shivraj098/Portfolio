import { GlassCard } from "@/components/shared/glass-card";

const features = [
  {
    title: "OAuth 2.0 + PKCE",
    description:
      "Secure authorization flow implementation with state validation, PKCE verification, and provider integration.",
  },
  {
    title: "JWT Session Architecture",
    description:
      "Access/refresh token infrastructure with rotation workflows, blacklist systems, and session revocation.",
  },
  {
    title: "Redis Security Systems",
    description:
      "Rate limiting, token blacklisting, session state management, and account lockout protection using Redis.",
  },
  {
    title: "Production Security Engineering",
    description:
      "MFA verification, audit logging, timing attack mitigation, secure cookies, and layered authorization systems.",
  },
];

export function AuthflowFeatures() {
  return (
    <div>
      <div className="max-w-2xl">
        <h3 className="text-3xl font-semibold tracking-tight">
          Engineering Highlights
        </h3>

        <p className="mt-5 text-white/50">
          Designed to replicate real-world authentication infrastructure with
          layered backend security, scalable authorization workflows, and
          production-grade session management systems.
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