import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type TextRevealProps = {
  text: string
  className?: string
}

export function TextReveal({ text, className }: TextRevealProps) {
  return (
    <span className={cn('inline-block overflow-hidden', className)}>
      <motion.span
        className="inline-block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  )
}
