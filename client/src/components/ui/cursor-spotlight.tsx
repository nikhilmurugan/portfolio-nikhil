import { motion, useMotionTemplate } from 'framer-motion'
import { useMousePosition } from '@/hooks/use-mouse-position'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function CursorSpotlight() {
  const { x, y } = useMousePosition()
  const reduced = usePrefersReducedMotion()
  const background = useMotionTemplate`radial-gradient(560px circle at ${x}px ${y}px, rgba(99,102,241,0.1), transparent 42%)`

  if (reduced) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 hidden mix-blend-screen md:block"
      style={{ background }}
    />
  )
}
