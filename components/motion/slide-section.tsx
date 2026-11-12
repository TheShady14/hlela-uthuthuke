"use client";

import {
  motion,
  motionValue,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

/**
 * Each slide exposes a MotionValue representing how much
 * the slide above it has covered it.
 */
type StackContextValue = (index: number) => MotionValue<number>;

const StackContext = createContext<StackContextValue | null>(null);

/**
 * Container for all stacked slide sections.
 */
export function SlideStack({ children }: { children: ReactNode }) {
  const covers = useRef(new Map<number, MotionValue<number>>());

  const getCover = useRef<StackContextValue>((index: number) => {
    let value = covers.current.get(index);

    if (!value) {
      value = motionValue(0);
      covers.current.set(index, value);
    }

    return value;
  });

  return (
    <StackContext.Provider value={getCover.current}>
      {children}
    </StackContext.Provider>
  );
}

type SlideSectionProps = {
  children: ReactNode;

  /**
   * Stack order.
   * Later sections appear above earlier sections.
   */
  index: number;

  /**
   * Optional navigation anchor.
   */
  anchorId?: string;

  /**
   * The first slide doesn't receive rounded corners
   * or the top border.
   */
  first?: boolean;

  className?: string;
};

/**
 * Individual slide section.
 */
export function SlideSection({
  children,
  index,
  anchorId,
  first = false,
  className,
}: SlideSectionProps) {
  const getCover = useContext(StackContext);

  const anchorRef = useRef<HTMLDivElement>(null);

  const sectionRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();

  const [top, setTop] = useState(0);

  /*
   * Track this section entering the viewport.
   *
   * 0 = section starts below viewport
   * 1 = section reaches the top of viewport
   */
  const { scrollYProgress: entering } = useScroll({
    target: anchorRef,
    offset: ["start end", "start start"],
  });

  /*
   * Tell the section underneath us how much
   * it is currently being covered.
   */
  const previousCover = getCover && index > 0 ? getCover(index - 1) : null;

  useMotionValueEvent(entering, "change", (value) => {
    previousCover?.set(value);
  });

  /*
   * Every slide gets its own MotionValue.
   *
   * If the context isn't available for any reason,
   * use a local fallback value.
   */
  const fallbackCover = useMotionValue(0);

  const cover = getCover ? getCover(index) : fallbackCover;

  /*
   * Convert the cover progress into opacity.
   *
   * We deliberately use the callback form of useTransform
   * rather than the input/output array form. This avoids
   * the runtime issue with the value-mapping overload.
   */
  const veil = useTransform(() => {
    const value = cover.get();

    return value * 0.7;
  });

  /*
   * Calculate the sticky position.
   *
   * Short sections:
   *   top: 0
   *
   * Tall sections:
   *   stop when their bottom reaches the viewport bottom.
   */
  useEffect(() => {
    const element = sectionRef.current;

    if (!element || reduceMotion) {
      return;
    }

    const updatePosition = () => {
      const nextTop = Math.min(
        0,
        Math.round(window.innerHeight - element.offsetHeight)
      );

      setTop(nextTop);
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(updatePosition);

    resizeObserver.observe(element);

    window.addEventListener("resize", updatePosition);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("resize", updatePosition);
    };
  }, [reduceMotion]);

  return (
    <>
      {/*
        Navigation anchor.

        This sits outside the sticky section so the navbar
        can accurately determine which section is active.
      */}
      <div
        ref={anchorRef}
        id={anchorId}
        data-slide-anchor=""
        aria-hidden="true"
        className="scroll-mt-16"
      />

      {/*
        Sticky slide.
      */}
      <div
        ref={sectionRef}
        style={{
          position: reduceMotion ? "relative" : "sticky",

          top: reduceMotion ? undefined : top,

          zIndex: index + 1,
        }}
        className={cn(
          "relative overflow-hidden bg-background",

          !first && [
            "rounded-t-2xl",
            "border-t border-border/50",
            "shadow-[0_-10px_30px_-18px_rgb(0_0_0/0.18)]",
            "lg:rounded-t-3xl",
          ],

          className
        )}
      >
        {children}

        {/*
          The veil fades the section underneath as the
          next section slides over it.
        */}
        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 bg-background"
            style={{
              opacity: veil,
            }}
          />
        )}
      </div>
    </>
  );
}
