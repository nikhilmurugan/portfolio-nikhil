import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/use-mouse-position'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function MouseGlow() {
  const { x, y } = useMousePosition()
  const reduced = usePrefersReducedMotion()

  if (reduced) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-30 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_68%)] blur-2xl md:block"
      style={{ x, y }}
    />
  )
}
