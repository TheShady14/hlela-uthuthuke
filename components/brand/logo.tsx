import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <Image
        src="/brand/hlela-icon.svg"
        alt=""
        aria-hidden="true"
        width={48}
        height={40}
        className="h-9 w-auto shrink-0 sm:h-10"
        priority
      />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-display text-sm font-bold uppercase tracking-tight sm:text-base">
            <span className="text-brand-hlela">Hlela</span>{' '}
            <span className="text-brand-uthuthuke">Uthuthuke</span>
          </span>
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
            Development Management
          </span>
        </span>
      ) : (
        <span className="sr-only">Hlela Uthuthuke</span>
      )}
    </span>
  )
}
