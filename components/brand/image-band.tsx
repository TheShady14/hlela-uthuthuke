"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type CSSProperties } from "react";
import { PlaceholderImage } from "@/components/brand/placeholder-image";
import { cn } from "@/lib/utils";

type ImageBandProps = {
  path: string;
  label: string;
  /** CSS object-position: where the subject sits, e.g. "50% 30%" */
  focal?: string;
  /** "full" = edge-to-edge slide header, "inset" = rounded photo in the content column */
  variant?: "full" | "inset";
  className?: string;
};

/**
 * Photo header for a section.
 * - full: pulls up into the section's top padding so the photo becomes the
 *   header of the slide (matches sections using py-20 lg:py-28).
 * - inset: rounded photo inside the content column.
 */
export function ImageBand({
  path,
  label,
  focal = "50% 50%",
  variant = "full",
  className,
}: ImageBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const isFull = variant === "full";

  const frame = (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        isFull
          ? "h-[55svh] max-h-[640px] min-h-[320px] w-full lg:h-[70svh]"
          : "aspect-[4/3] rounded-2xl sm:aspect-[16/9] lg:aspect-[21/9]",
        className
      )}
    >
      {/* Oversized by 20% so the parallax never exposes an edge */}
      <motion.div
        className="absolute inset-x-0 -inset-y-[10%] [&_img]:[object-position:var(--focal)]"
        style={
          {
            "--focal": focal,
            y: reduce ? 0 : y,
          } as CSSProperties
        }
      >
        <PlaceholderImage path={path} label={label} />
      </motion.div>

      {/* Soft fade into the content below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-black/10"
      />
    </div>
  );

  if (isFull) return <div className="-mt-20 lg:-mt-28">{frame}</div>;

  return <div className="mx-auto max-w-7xl px-6 lg:px-12">{frame}</div>;
}
