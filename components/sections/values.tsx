import { Award, Handshake, Lightbulb, ShieldCheck, Star } from "lucide-react";
import { SectionHeading } from "@/components/brand/section-heading";
import { ImageBand } from "@/components/brand/ui-bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { VALUES } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const ICONS = [ShieldCheck, Award, Handshake, Lightbulb, Star];

export function Values() {
  return (
    <section className="py-20 lg:py-28">
      <ImageBand path="/images/values-band.jpg" label="Our Values band" />

      <div className="mx-auto mt-12 max-w-7xl px-6 lg:mt-16 lg:px-12">
        <Reveal>
          <SectionHeading eyebrow="02" title="Our Values" />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {VALUES.map((value, i) => {
            const Icon = ICONS[i];
            const isMaroon = i % 2 === 0;
            return (
              <StaggerItem
                key={value.title}
                className={cn(i === 0 && "lg:col-span-2")}
              >
                <div
                  className={cn(
                    "group h-full rounded-lg border border-border border-l-4 bg-card p-6 transition-transform md:hover:-translate-y-1",
                    isMaroon ? "border-l-maroon" : "border-l-navy"
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-md",
                      isMaroon
                        ? "bg-maroon/10 text-maroon"
                        : "bg-navy/10 text-navy"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
