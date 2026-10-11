import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

type Particle = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  a: number
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let frame = 0
    let particles: Particle[] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = window.innerWidth < 768 ? 36 : 78
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        a: Math.random() * 0.45 + 0.12,
      }))
    }

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = window.innerWidth
        if (p.x > window.innerWidth) p.x = 0
        if (p.y < 0) p.y = window.innerHeight
        if (p.y > window.innerHeight) p.y = 0
        ctx.beginPath()
        ctx.fillStyle = `rgba(186, 230, 253, ${p.a})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      frame = requestAnimationFrame(tick)
    }

    resize()
    frame = requestAnimationFrame(tick)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [reduced])

  if (reduced) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full"
    />
  )
}
