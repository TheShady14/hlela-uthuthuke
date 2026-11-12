import { PlaceholderImage } from "@/components/brand/placeholder-image";
import { CtaButton } from "@/components/brand/ui-bits";
import { Reveal } from "@/components/motion/reveal";

export function Difference() {
  return (
    <section className="relative grain flex flex-col overflow-hidden md:min-h-[80vh] md:items-center md:justify-center md:px-6 md:py-20">
      {/* Mobile: image header above the box. Desktop: full-bleed background. */}
      <div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:aspect-auto">
        <PlaceholderImage
          path="/images/difference-band.jpg"
          label="The Hlela Difference band (green facade)"
        />
      </div>

      <div className="relative w-full bg-background px-6 py-12 text-center text-foreground md:max-w-3xl md:rounded-2xl md:border md:border-border md:px-12 md:py-14 md:shadow-xl lg:max-w-4xl lg:px-16">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            The Hlela Difference
          </p>
          <p className="mt-4 text-pretty text-lg text-foreground/85">
            At Hlela, we don&apos;t simply advise on developments.
          </p>
          <p className="mt-2 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            We lead them.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-foreground/85">
            We bring together the right professionals, structure the right
            solutions, coordinate every stage of implementation and remain
            accountable until our clients achieve successful project delivery.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-foreground/85">
            <span className="font-semibold text-foreground">
              Our purpose is simple:
            </span>{" "}
            to transform property opportunities into sustainable, financially
            viable and successful developments that create lasting value for our
            clients and investors.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/contact" size="lg">
              Get in Touch
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
