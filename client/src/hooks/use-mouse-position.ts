import { useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function useMousePosition() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 80, damping: 22, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 80, damping: 22, mass: 0.4 })

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  return { x: sx, y: sy, rawX: x, rawY: y }
}
