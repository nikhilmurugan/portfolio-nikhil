import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function GradientBadge({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="size-1.5 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
      />
      {children}
    </span>
  )
}
