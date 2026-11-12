import { SectionHeading } from "@/components/brand/section-heading";
import { ImageBand } from "@/components/brand/ui-bits";
import { DotPattern } from "@/components/motion/dot-pattern";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { WHO_WE_ARE } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function WhoWeAre() {
  return (
    <section className="py-20 lg:py-28">
      <ImageBand path="/images/who-we-are.jpg" label="Who We Are band" />

      <div className="mx-auto mt-12 max-w-7xl px-6 lg:mt-16 lg:px-12">
        <Reveal>
          <SectionHeading eyebrow="01" title="Who We Are" />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {WHO_WE_ARE.map((para, i) => (
            <StaggerItem key={i} className={cn(i === 0 && "lg:col-span-2")}>
              <div className="relative h-full overflow-hidden rounded-lg border border-border bg-card p-6 lg:p-8">
                <DotPattern className="opacity-[0.25] [mask-image:radial-gradient(50%_60%_at_100%_0%,black,transparent)]" />
                <p
                  className={cn(
                    "relative text-pretty leading-relaxed text-foreground/90",
                    i === 0 &&
                      "font-display text-lg font-medium text-foreground lg:text-xl"
                  )}
                >
                  {para}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
