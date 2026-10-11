import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function TechBadge({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1 font-mono text-[11px] tracking-wide text-zinc-300',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
