import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { SOCIALS } from '@/data/socials'
import { SocialIconButton } from '@/components/ui/social-icon-button'

type FloatingDockProps = {
  className?: string
}

export function FloatingDock({ className }: FloatingDockProps) {
  const y = useSpring(0, { stiffness: 80, damping: 20 })
  const opacity = useTransform(y, [0, 24], [1, 0.85])

  useEffect(() => {
    const onScroll = () => {
      y.set(Math.min(window.scrollY * 0.04, 18))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [y])

  return (
    <motion.nav
      aria-label="Social"
      style={{ y, opacity }}
      className={cn(
        'pointer-events-auto fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 md:flex',
        className,
      )}
    >
      <div className="glass flex items-center gap-2 rounded-full px-2 py-2">
        {SOCIALS.map((social) => (
          <SocialIconButton key={social.label} social={social} className="size-10" />
        ))}
      </div>
    </motion.nav>
  )
}
