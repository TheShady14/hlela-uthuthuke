import { cn } from '@/lib/utils'

/** Low-opacity decorative dot grid. Purely decorative, aria-hidden. */
export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 [background-image:radial-gradient(color-mix(in_oklab,var(--muted-foreground)_35%,transparent)_1px,transparent_1px)] [background-size:16px_16px]',
        className,
      )}
    />
  )
}
