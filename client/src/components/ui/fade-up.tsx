import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp } from '@/animations/variants'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

type FadeUpProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
