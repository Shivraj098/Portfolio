import { cn } from "@/lib/utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export function SectionHeading({
  className,
  ...props
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight md:text-5xl",
        className
      )}
      {...props}
    />
  );
}

export function SectionDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-2xl text-base leading-[1.8] text-white/72 md:text-lg",
        className
      )}
      {...props}
    />
  );
}