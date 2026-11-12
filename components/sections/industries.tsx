import { SubDivider } from '@/components/brand/section-heading'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { IndustryCard } from '@/components/sections/industry-card'
import { INDUSTRIES } from '@/lib/site-content'

export function Industries() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SubDivider label="Industries We Serve" />
            <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for the sectors shaping South Africa.
            </h2>
          </div>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground lg:justify-self-end">
            We deliver developments across a broad spectrum of South Africa&apos;s property and infrastructure sectors, bringing the right expertise to every brief. Hover or tap a sector to learn more.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {INDUSTRIES.map((industry, i) => (
            <StaggerItem key={industry.title}>
              <IndustryCard index={i} title={industry.title} description={industry.description} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
