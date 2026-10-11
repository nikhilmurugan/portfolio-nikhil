import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { fadeUp, stagger } from '@/animations/variants'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

type AnimatedHeadingProps = {
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  children: ReactNode
}

export function AnimatedHeading({
  as: Comp = 'h2',
  className,
  children,
}: AnimatedHeadingProps) {
  const reduced = usePrefersReducedMotion()
  const text = typeof children === 'string' ? children : null

  if (!text || reduced) {
    const Tag = Comp
    return <Tag className={cn('font-display tracking-tight', className)}>{children}</Tag>
  }

  const words = text.split(' ')

  return (
    <Comp className={cn('font-display tracking-tight', className)}>
      <motion.span
        className="inline-flex flex-wrap"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        {words.map((word, index) => (
          <motion.span key={`${word}-${index}`} className="mr-[0.28em] inline-block overflow-hidden">
            <motion.span className="inline-block" variants={fadeUp}>
              {word}
            </motion.span>
          </motion.span>
        ))}
      </motion.span>
    </Comp>
  )
}
