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
        "glass-surface rounded-(--radius) p-6 shadow-2xl shadow-black/10",
        className
      )}
      {...props}
    />
  );
}