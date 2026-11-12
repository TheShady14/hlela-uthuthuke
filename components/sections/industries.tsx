import { ArrowRight } from 'lucide-react'
import { SubDivider } from '@/components/brand/section-heading'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { INDUSTRIES } from '@/lib/site-content'
import { cn } from '@/lib/utils'

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SubDivider label="Industries We Serve" />
            <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for the sectors shaping South Africa.
            </h2>
          </div>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground lg:justify-self-end">
            We deliver developments across a broad spectrum of South Africa&apos;s property and infrastructure sectors, bringing the right expertise to every brief.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {INDUSTRIES.map((industry, i) => (
            <StaggerItem key={industry}>
              <div className="group flex min-h-36 flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-colors hover:border-maroon/50 hover:bg-secondary sm:min-h-40">
                <div className="flex items-center justify-between">
                  <span className={cn('font-mono text-xs font-semibold', i % 2 === 0 ? 'text-maroon' : 'text-navy')}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <ArrowRight className="h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                </div>
                <p className="max-w-[14rem] font-display text-lg font-semibold text-foreground">{industry}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
