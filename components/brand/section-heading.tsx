import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Section title treatment from the CP's title pages:
 * a short MAROON rule sits above the heading, a longer NAVY rule below it.
 */
export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className,
  id,
}: {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
  className?: string
  id?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span
        className="h-1 w-12 rounded-full bg-maroon"
        aria-hidden="true"
      />
      {eyebrow ? (
        <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={id}
        className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      <span
        className="h-1 w-24 rounded-full bg-navy"
        aria-hidden="true"
      />
    </div>
  )
}

/**
 * Lighter continuation treatment from the CP's sub-item pages:
 * the order flips — a NAVY rule first, then a shorter MAROON rule beneath.
 * No large display heading.
 */
export function SubDivider({
  label,
  align = 'left',
  className,
}: {
  label?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2.5',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span className="h-1 w-20 rounded-full bg-navy" aria-hidden="true" />
      <span className="h-1 w-10 rounded-full bg-maroon" aria-hidden="true" />
      {label ? (
        <span className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      ) : null}
    </div>
  )
}
