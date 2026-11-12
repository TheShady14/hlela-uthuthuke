'use client'

import {
  Briefcase,
  Building,
  Factory,
  GraduationCap,
  House,
  Landmark,
  Layers,
  LayoutGrid,
  Plus,
  RefreshCcw,
  Route,
  ShoppingBag,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/lib/utils'

const ICONS: Record<string, LucideIcon> = {
  'Affordable Housing': House,
  'Social Housing': Users,
  'Residential Developments': Building,
  'Mixed-Use Developments': Layers,
  'Commercial Property': Briefcase,
  'Retail Developments': ShoppingBag,
  'Industrial Developments': Factory,
  'Student Accommodation': GraduationCap,
  'Public Infrastructure': Route,
  'Urban Regeneration': RefreshCcw,
  'Precinct Development': LayoutGrid,
  'Municipal and Government Infrastructure Projects': Landmark,
}

export function IndustryCard({
  index,
  title,
  description,
}: {
  index: number
  title: string
  description: string
}) {
  const [open, setOpen] = useState(false)
  const descriptionId = useId()
  const Icon = ICONS[title] ?? Building
  const tone = index % 2 === 0 ? 'maroon' : 'navy'

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={descriptionId}
      onClick={() => setOpen((value) => !value)}
      data-open={open}
      className="group flex h-full w-full flex-col rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-maroon/50 hover:bg-secondary focus-visible:border-maroon/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 data-[open=true]:border-maroon/50 data-[open=true]:bg-secondary"
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-lg',
            tone === 'maroon' ? 'bg-maroon/10 text-maroon' : 'bg-navy/10 text-navy',
          )}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-muted-foreground">
            {String(index + 1).padStart(2, '0')}
          </span>
          <Plus
            className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-45 group-data-[open=true]:rotate-45"
            aria-hidden="true"
          />
        </span>
      </div>

      <p className="mt-6 font-display text-lg font-semibold leading-snug text-foreground text-balance">{title}</p>

      <p
        id={descriptionId}
        className="mt-2 translate-y-1 text-sm leading-relaxed text-muted-foreground opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100 motion-reduce:transition-none"
      >
        {description}
      </p>
    </button>
  )
}
