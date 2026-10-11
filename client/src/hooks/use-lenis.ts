import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function useLenis() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.1,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [reduced])
}
