import { SectionHeading } from "@/components/brand/section-heading";
import { ImageBand } from "@/components/brand/ui-bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { WHY_HLELA } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function WhyHlela() {
  return (
    <section id="why-hlela" className="scroll-mt-24 py-20 lg:py-28">
      <ImageBand
        path="/images/contact-band.jpg"
        label="Why Hlela band (rooftop garden)"
      />

      <div className="mx-auto mt-12 max-w-7xl px-6 lg:mt-16 lg:px-12">
        <Reveal>
          <SectionHeading eyebrow="05" title="Why Hlela?" />
        </Reveal>

        <StaggerGroup className="mx-auto mt-10 max-w-3xl space-y-6 lg:mt-14 lg:space-y-8">
          {WHY_HLELA.map((item, i) => {
            const isMaroon = i % 2 === 0;
            return (
              <StaggerItem key={item.title}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold text-white",
                      isMaroon ? "bg-maroon" : "bg-navy"
                    )}
                  >
                    {i + 1}
                  </span>
                  <div
                    className={cn(
                      "border-l-2 pl-5 sm:border-l-0 sm:pl-0",
                      isMaroon ? "border-maroon" : "border-navy"
                    )}
                  >
                    <h3 className="font-display text-lg font-semibold lg:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-pretty leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
