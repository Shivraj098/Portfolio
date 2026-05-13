import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-surface rounded-(--radius)",
        "border border-white/8",
        "shadow-[0_10px_50px_rgba(0,0,0,0.28)]",
        "transition-all duration-300",
        "hover:border-white/[0.14]",
        "hover:bg-white/1.5",
        className,
      )}
      {...props}
    />
  );
}
