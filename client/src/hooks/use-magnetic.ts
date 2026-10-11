import { useRef } from 'react'
import gsap from 'gsap'
import type { PointerEvent } from 'react'

export function useMagnetic<T extends HTMLElement>(strength = 0.28) {
  const ref = useRef<T | null>(null)

  const onPointerMove = (event: PointerEvent<T>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const dx = event.clientX - (rect.left + rect.width / 2)
    const dy = event.clientY - (rect.top + rect.height / 2)
    gsap.to(node, {
      x: dx * strength,
      y: dy * strength,
      duration: 0.45,
      ease: 'power3.out',
    })
  }

  const onPointerLeave = () => {
    const node = ref.current
    if (!node) return
    gsap.to(node, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.4)' })
  }

  return { ref, onPointerMove, onPointerLeave }
}
