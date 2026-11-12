"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { SectionHeading, SubDivider } from "@/components/brand/section-heading";
import { ImageBand } from "@/components/brand/ui-bits";
import { Reveal } from "@/components/motion/reveal";
import { APPROACH } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Approach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="approach" className="scroll-mt-24 py-20 lg:py-28">
      <ImageBand path="/images/approach-band.jpg" label="Our Approach band" />

      <div className="mx-auto mt-12 max-w-7xl px-6 lg:mt-16 lg:px-12">
        <Reveal>
          <SectionHeading eyebrow="03" title="Our Approach" />
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            An end-to-end, eight-step development process &mdash; from first
            feasibility through to long-term asset management.
          </p>
        </Reveal>

        <div ref={containerRef} className="relative mt-14 lg:mt-20">
          {/* central / left timeline track */}
          <div className="absolute top-0 bottom-0 left-6 w-0.5 -translate-x-1/2 bg-border lg:left-1/2">
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-maroon to-navy"
              style={{
                scaleY: reduce ? 1 : lineScale,
                bottom: 0,
              }}
            />
          </div>

          <ol className="space-y-10 lg:space-y-14">
            {APPROACH.map((step, i) => {
              const number = i + 1;
              const isLeft = i % 2 === 0;
              const isMaroon = i % 2 === 0;
              return (
                <li key={step.title} className="relative">
                  {/* number badge on the line */}
                  <div
                    className={cn(
                      "absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full font-display text-lg font-bold text-white shadow-md lg:left-1/2",
                      isMaroon ? "bg-maroon" : "bg-navy"
                    )}
                  >
                    {number}
                  </div>

                  <Reveal from={isLeft ? "left" : "right"}>
                    <div
                      className={cn(
                        "ml-16 lg:ml-0 lg:w-[calc(50%-3rem)]",
                        isLeft ? "lg:mr-auto lg:pr-6" : "lg:ml-auto lg:pl-6"
                      )}
                    >
                      <div className="rounded-lg border border-border bg-card p-6 lg:p-7">
                        <SubDivider
                          className={cn(
                            "mb-4",
                            !isLeft && "lg:items-end lg:text-right"
                          )}
                        />
                        <h3 className="font-display text-xl font-semibold lg:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                          {step.intro}
                        </p>
                        {step.items.length > 0 ? (
                          <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-foreground/80">
                            {step.items.map((item, j) => (
                              <li
                                key={item}
                                className="flex items-center gap-2"
                              >
                                <span
                                  className={cn(
                                    "inline-block h-1.5 w-1.5 rounded-full",
                                    j % 2 === 0 ? "bg-maroon" : "bg-navy"
                                  )}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
