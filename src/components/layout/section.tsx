import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export function Section({
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative border-t border-white/4 py-28 md:py-40",
        className
      )}
      {...props}
    />
  );
}

export function SectionContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl container-padding",
        className
      )}
      {...props}
    />
  );
}