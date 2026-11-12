"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { CtaButton } from "@/components/brand/ui-bits";
import { DotPattern } from "@/components/motion/dot-pattern";
import { NumberTicker } from "@/components/motion/number-ticker";

// Hero images work best at 1600 x 1200 px minimum (4:3), saved as compressed JPG/WebP.
const SLIDES = [
  { path: "/images/hero-1.jpg", label: "Development project exterior" },
  {
    path: "/images/hero-building-02.jpg",
    label: "Contemporary property detail",
  },
  {
    path: "/images/hero-building-03.jpg",
    label: "Property development in context",
  },
  {
    path: "/images/hero-building-04.jpg",
    label: "Built environment detail",
  },
];

const STATS = [
  { value: 20, suffix: "+", label: "Years' Experience" },
  { value: 8, suffix: "-Step", label: "Development Process" },
  { value: 14, suffix: "", label: "Specialist Services" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % SLIDES.length),
      5200
    );
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  const changeSlide = (direction: number) => {
    setSlide(
      (current) => (current + direction + SLIDES.length) % SLIDES.length
    );
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <DotPattern className="opacity-[0.25] [mask-image:radial-gradient(70%_60%_at_70%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[43fr_57fr] lg:gap-20">
          <div className="max-w-xl space-y-6">
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-maroon" />
              Development Management &amp; Advisory
            </motion.span>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-serif text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              Hlela Uthuthuke
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="font-display text-xl font-medium text-pretty text-foreground/90 sm:text-2xl"
            >
              Turning Property Potential into Successful Developments
            </motion.p>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="text-pretty leading-relaxed text-muted-foreground"
            >
              Partnering with property owners, developers, investors, financiers
              and public sector institutions to unlock the full value of land
              and property assets.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-col gap-4 pt-2 sm:flex-row"
            >
              <CtaButton href="/contact" className="w-full sm:w-auto">
                Start a Conversation
              </CtaButton>
              <CtaButton
                href="/#approach"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Explore Our Approach
              </CtaButton>
            </motion.div>
          </div>

          {/* Use a single, calmer frame so the photography reads as one story rather than separate tiles. */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={SLIDES[slide].path}
                  src={SLIDES[slide].path}
                  alt={SLIDES[slide].label}
                  onError={(event) => {
                    if (event.currentTarget.dataset.fallback) return;
                    event.currentTarget.dataset.fallback = "true";
                    event.currentTarget.src =
                      "/placeholder.svg?height=900&width=1200";
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-foreground/75 to-transparent p-5 pt-16 text-background">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em]">
                  {SLIDES[slide].label}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous hero image"
                    onClick={() => changeSlide(-1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/50 bg-foreground/20 backdrop-blur hover:bg-foreground/40"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={
                      paused ? "Play hero slideshow" : "Pause hero slideshow"
                    }
                    onClick={() => setPaused((value) => !value)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/50 bg-foreground/20 backdrop-blur hover:bg-foreground/40"
                  >
                    {paused ? (
                      <Play className="h-4 w-4" />
                    ) : (
                      <Pause className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    aria-label="Next hero image"
                    onClick={() => changeSlide(1)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/50 bg-foreground/20 backdrop-blur hover:bg-foreground/40"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-border bg-card px-5 py-4">
              <div
                className="flex gap-2"
                role="tablist"
                aria-label="Hero images"
              >
                {SLIDES.map((item, index) => (
                  <button
                    key={item.path}
                    type="button"
                    role="tab"
                    aria-selected={index === slide}
                    aria-label={`Show image ${index + 1}`}
                    onClick={() => setSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === slide
                        ? "w-8 bg-maroon"
                        : "w-4 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                0{slide + 1} / 0{SLIDES.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-7xl px-6 lg:mt-20 lg:px-12">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-background px-6 py-8 text-center"
            >
              <span
                className={`font-display text-4xl font-bold lg:text-5xl ${
                  i % 2 === 0 ? "text-maroon" : "text-navy"
                }`}
              >
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Recommended source: 1600 x 1200 px or larger, 4:3 landscape, WebP/JPG, under 400 KB where possible.
// For full-bleed crops, keep the subject near the centre and avoid important text near the edges.
void 0;
