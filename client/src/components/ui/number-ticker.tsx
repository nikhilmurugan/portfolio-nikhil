import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

type NumberTickerProps = {
  value: string
  className?: string
}

export function NumberTicker({ value, className }: NumberTickerProps) {
  const numeric = Number.parseFloat(value.replace(/[^\d.]/g, ''))
  const suffix = value.replace(/[\d.]/g, '')
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 70, damping: 22 })

  useEffect(() => {
    if (inView && !Number.isNaN(numeric)) motionValue.set(numeric)
  }, [inView, motionValue, numeric])

  useEffect(() => {
    const unsub = spring.on('change', (latest) => {
      if (!ref.current) return
      const formatted = Number.isInteger(numeric)
        ? Math.round(latest).toString()
        : latest.toFixed(1)
      ref.current.textContent = `${formatted}${suffix}`
    })
    return unsub
  }, [numeric, spring, suffix])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
