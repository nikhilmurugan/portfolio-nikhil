import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { FloatingDock } from '@/components/ui/floating-dock'
import { ScrollProgressBar } from '@/components/ui/scroll-progress'
import { MouseGlow } from '@/components/ui/mouse-glow'
import { CursorSpotlight } from '@/components/ui/cursor-spotlight'
import { AnimatedGridBackground } from '@/components/ui/animated-grid'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { NoiseTextureLayer } from '@/components/ui/noise-texture'
import { ParticleField } from '@/components/ui/particle-field'
import { pageTransition } from '@/animations/variants'
import { useLenis } from '@/hooks/use-lenis'

export function RootLayout() {
  useLenis()
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-canvas text-fog">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-zinc-950"
      >
        Skip to content
      </a>
      <AuroraBackground />
      <AnimatedGridBackground />
      <ParticleField />
      <CursorSpotlight />
      <MouseGlow />
      <NoiseTextureLayer />
      <ScrollProgressBar />
      <Navbar />
      <FloatingDock />
      <div className="relative z-[2]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
