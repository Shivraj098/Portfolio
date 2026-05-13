const specializations = [
  "AI Systems",
  "Realtime Collaboration",
  "Authentication Infrastructure",
  "Scalable Backend Architecture",
  "Type-safe APIs",
  "SaaS Product Engineering",
];

export function SpecializationStrip() {
  return (
    <div className="mt-24 border-y border-white/5 py-6">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {specializations.map((item) => (
          <div
            key={item}
            className="text-sm tracking-wide text-white/50"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}