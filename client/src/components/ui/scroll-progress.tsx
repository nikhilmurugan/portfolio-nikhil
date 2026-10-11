import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/use-scroll-progress'

export function ScrollProgressBar() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500"
      style={{ scaleX }}
    />
  )
}
