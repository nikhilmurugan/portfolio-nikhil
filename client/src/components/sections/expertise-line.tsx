import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { EXPERTISE_LINES } from '@/constants/site'

export function ExpertiseLine() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (EXPERTISE_LINES.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % EXPERTISE_LINES.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="relative h-8 overflow-hidden sm:h-9 flex items-center" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.p
          key={EXPERTISE_LINES[index]}
          initial={{ y: 18, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -18, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-cyan-300 uppercase"
        >
          {EXPERTISE_LINES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
