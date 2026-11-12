'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Lightweight CSS marquee with pause-on-hover. Content is duplicated so the
 * scroll loops seamlessly. Respects prefers-reduced-motion (falls back to a
 * static, wrapped row via globals.css motion-reduce rules).
 */
export function Marquee({
  children,
  className,
  duration = 40,
}: {
  children: ReactNode
  className?: string
  duration?: number
}) {
  return (
    <div
      className={cn(
        'group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className,
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="flex shrink-0 items-center gap-4 pr-4 [animation:marquee_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none] motion-reduce:flex-wrap"
          style={{ animationDuration: `${duration}s` }}
        >
          {children}
        </div>
      ))}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
