import { Reveal } from '@/components/motion/reveal'
import { MISSION, VISION } from '@/lib/site-content'
import { cn } from '@/lib/utils'

const CARDS = [
  {
    eyebrow: '01 \u00b7 Vision',
    body: VISION,
    accent: 'maroon' as const,
  },
  {
    eyebrow: '02 \u00b7 Mission',
    body: MISSION,
    accent: 'navy' as const,
  },
]

export function VisionMission() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {CARDS.map((card, i) => (
            <Reveal key={card.eyebrow} from={i === 0 ? 'left' : 'right'}>
              <div
                className={cn(
                  'flex h-full flex-col justify-center rounded-lg border border-border border-t-4 bg-card p-10 lg:p-12',
                  card.accent === 'maroon'
                    ? 'border-t-maroon'
                    : 'border-t-navy',
                )}
              >
                <span
                  className={cn(
                    'font-display text-sm font-semibold uppercase tracking-[0.18em]',
                    card.accent === 'maroon' ? 'text-maroon' : 'text-navy',
                  )}
                >
                  {card.eyebrow}
                </span>
                <p className="mt-6 text-balance font-serif text-xl leading-relaxed text-foreground lg:text-2xl">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
