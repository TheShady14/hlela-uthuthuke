import { cn } from '@/lib/utils'

/**
 * Placeholder logo: a roofline/house mark + the HLELA UTHUTHUKE wordmark.
 * Swap the mark for /public/logo/logo-mark.svg and the wordmark styling once
 * the real brand assets are supplied (see build brief §8).
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-maroon text-maroon-foreground"
      >
        {/* roofline mark placeholder */}
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10.5V20h14v-9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-display text-base font-bold uppercase tracking-tight">
            Hlela Uthuthuke
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Development Management
          </span>
        </span>
      ) : (
        <span className="sr-only">Hlela Uthuthuke</span>
      )}
    </span>
  )
}
