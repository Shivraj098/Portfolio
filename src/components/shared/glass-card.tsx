import { cn } from "@/lib/utils";

type GlassCardProps =
  React.HTMLAttributes<HTMLDivElement>;

export function GlassCard({
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-surface rounded-[var(--radius)]",
        "border border-white/5",
        "shadow-2xl shadow-black/10",
        "transition-all duration-500",
        "hover:-translate-y-1",
        "hover:border-white/10",
        className
      )}
      {...props}
    />
  );
}