import { cn } from '@/lib/utils'

/**
 * A travelling light beam that runs around a rounded container's border.
 * Place inside a `relative` element. Decorative only.
 */
export function BorderBeam({
  className,
  duration = 6,
  size = 90,
}: {
  className?: string
  duration?: number
  size?: number
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] [border:1px_solid_transparent] [mask:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-clip:padding-box,border-box] [mask-composite:intersect] motion-reduce:hidden',
        className,
      )}
    >
      <div
        className="absolute aspect-square bg-[linear-gradient(to_left,var(--color-maroon),var(--color-navy),transparent)] [offset-anchor:90%_50%] [offset-path:rect(0_auto_auto_0_round_var(--radius))]"
        style={{
          width: size,
          offsetDistance: '0%',
          animation: `border-beam ${duration}s linear infinite`,
        }}
      />
    </div>
  )
}
