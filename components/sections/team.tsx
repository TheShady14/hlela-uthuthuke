import { Building2, ClipboardList, HardHat, Leaf, MessageSquare, Ruler, UserRound } from 'lucide-react'
import { LinkedInIcon } from '@/components/brand/linkedin-icon'
import { SectionHeading } from '@/components/brand/section-heading'
import { BorderBeam } from '@/components/motion/border-beam'
import { Reveal } from '@/components/motion/reveal'
import { TEAM } from '@/lib/site-content'
import { cn } from '@/lib/utils'

const SPECIALISTS = [
  { label: 'Architects', icon: Building2 },
  { label: 'Quantity Surveyors', icon: Ruler },
  { label: 'Engineers', icon: HardHat },
  { label: 'Project Managers', icon: ClipboardList },
  { label: 'Environmentalists', icon: Leaf },
  { label: 'Communications', icon: MessageSquare },
]

export function Team() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="flex flex-col items-center"><SectionHeading eyebrow="06" title="The Right Team for Every Solution" align="center" /><p className="mt-6 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">Hlela will provide the right team for your specific needs — tailored for every solution and every stage of development.</p></Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:mt-16">
          {TEAM.slice(0, 1).map((member) => <div key={member.role} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm"><BorderBeam className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" /><div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-muted"><UserRound className="h-20 w-20 text-muted-foreground/50" aria-hidden="true" /><span className="absolute bottom-3 left-0 right-0 text-center font-mono text-[10px] text-muted-foreground/70">{member.image} · 800 x 1000 px</span></div><div className="mt-5"><h3 className="font-display text-xl font-semibold">{member.name}</h3><p className="text-sm font-medium text-maroon">{member.role}</p><p className="mt-2 text-sm text-muted-foreground">{member.bio}</p><a href="#" aria-label="Director on LinkedIn" className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-maroon hover:text-maroon"><LinkedInIcon className="h-4 w-4" /></a></div></div>)}
          <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-8"><p className="max-w-xl text-lg leading-relaxed text-foreground/90 sm:text-xl">From the first feasibility assessment to final delivery, we bring together the specialists needed to move your project forward with confidence.</p><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">{SPECIALISTS.map(({ label, icon: Icon }, index) => <div key={label} className={cn('rounded-xl border border-border bg-background p-4', index % 2 === 0 ? 'text-maroon' : 'text-navy')}><Icon className="h-5 w-5" aria-hidden="true" /><p className="mt-3 text-sm font-semibold text-foreground">{label}</p></div>)}</div></div>
        </div>
      </div>
    </section>
  )
}
