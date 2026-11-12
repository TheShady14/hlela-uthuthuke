import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

/**
 * A slim travelling light that runs around a rounded container's border.
 * Masked to a 1px ring so it never paints over the container's content.
 * Place inside a `relative` element. Decorative only.
 */
export function BorderBeam({
  className,
  duration = 6,
}: {
  className?: string
  duration?: number
}) {
  return (
    <div
      aria-hidden="true"
      style={{ '--beam-duration': `${duration}s` } as CSSProperties}
      className={cn(
        'border-beam pointer-events-none absolute inset-0 rounded-[inherit] motion-reduce:hidden',
        className,
      )}
    />
  )
}
