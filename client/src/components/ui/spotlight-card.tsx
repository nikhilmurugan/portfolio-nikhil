import { useRef, type HTMLAttributes, type PointerEvent } from 'react'
import { cn } from '@/lib/utils'

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  spotlightColor?: string
}

export function SpotlightCard({
  className,
  children,
  spotlightColor = 'rgba(34, 211, 238, 0.18)',
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    node.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn(
        'group relative overflow-hidden bento-card bento-card-hover p-6 sm:p-7',
        className,
      )}
      {...props}
    >
      {/* Specular Radial Spotlight Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[inherit]"
        style={{
          background: `radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlightColor}, transparent 60%)`,
        }}
      />

      {/* Subtle Border Glow Highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[inherit] border border-cyan-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
