import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Photo header used at the top of most CP sections (client component, lives in its own file). */
export { ImageBand } from "@/components/brand/image-band";

/** Primary marketing CTA — larger than the base UI button, brand maroon. */
export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon",
        size === "lg" ? "h-14 px-10 text-lg" : "h-12 px-7 text-base",
        variant === "primary"
          ? "bg-maroon text-maroon-foreground"
          : "border border-border bg-background text-foreground hover:bg-accent",
        className
      )}
    >
      {children}
    </Link>
  );
}

/** Alternating maroon/navy accent dot matching the CP's bullet pattern. */
export function AccentDot({ index }: { index: number }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "mt-2 inline-block h-2 w-2 shrink-0 rounded-full",
        index % 2 === 0 ? "bg-maroon" : "bg-navy"
      )}
    />
  );
}

export function accentClass(index: number) {
  return index % 2 === 0 ? "maroon" : "navy";
}
