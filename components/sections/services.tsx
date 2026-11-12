"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/brand/section-heading";
import { ImageBand } from "@/components/brand/ui-bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { SERVICE_GROUPS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Services() {
  const [activeGroup, setActiveGroup] = useState(0);
  const group = SERVICE_GROUPS[activeGroup];

  const move = (direction: number) =>
    setActiveGroup(
      (current) =>
        (current + direction + SERVICE_GROUPS.length) % SERVICE_GROUPS.length
    );

  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-28">
      <ImageBand path="/images/services-band.jpg" label="Our Services band" />
      <div className="mx-auto mt-12 max-w-7xl px-6 lg:mt-16 lg:px-12">
        <Reveal>
          <SectionHeading eyebrow="04" title="Our Services" />
        </Reveal>
        <div className="mt-10 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:mt-14">
          <div className="flex flex-col gap-6 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Service group {activeGroup + 1} of {SERVICE_GROUPS.length}
              </p>
              <h3 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                {group.label}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous service group"
                onClick={() => move(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-maroon hover:text-maroon"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next service group"
                onClick={() => move(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-maroon hover:text-maroon"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div
            className="mt-5 flex gap-2"
            role="tablist"
            aria-label="Service groups"
          >
            {SERVICE_GROUPS.map((item, index) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={index === activeGroup}
                onClick={() => setActiveGroup(index)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                  index === activeGroup
                    ? "border-maroon bg-maroon text-maroon-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerGroup
                className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                stagger={0.05}
              >
                {group.services.map((service, index) => (
                  <StaggerItem key={service.title}>
                    <div className="group flex min-h-[170px] h-full flex-col rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-maroon hover:shadow-md">
                      <div className="mb-4 flex items-start justify-between">
                        <span
                          className={cn(
                            "inline-flex h-9 w-9 items-center justify-center rounded-md",
                            index % 2 === 0
                              ? "bg-maroon/10 text-maroon"
                              : "bg-navy/10 text-navy"
                          )}
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          0{index + 1}
                        </span>
                      </div>
                      <h4 className="font-display text-base font-semibold leading-snug">
                        {service.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
