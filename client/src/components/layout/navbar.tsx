import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '@/constants/nav'
import { SITE } from '@/constants/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ResumePreviewModal } from '@/components/ui/resume-preview-modal'

export function Navbar() {
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (value) => {
    setCompact(value > 24)
  })

  // IntersectionObserver to detect currently active section during scroll
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', '')).filter(Boolean)
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0.1,
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    if (href.startsWith('#')) {
      e.preventDefault()
      if (location.pathname !== '/') {
        window.location.href = `/${href}`
        return
      }
      const targetId = href.replace('#', '')
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(href)
      }
    }
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <motion.nav
        aria-label="Primary Navigation"
        animate={{
          width: compact ? 'min(980px, 95%)' : 'min(1120px, 97%)',
          paddingTop: compact ? 6 : 8,
          paddingBottom: compact ? 6 : 8,
          backgroundColor: compact ? 'rgba(7, 9, 13, 0.94)' : 'rgba(13, 17, 24, 0.85)',
        }}
        transition={{ type: 'spring', stiffness: 160, damping: 24 }}
        className="pointer-events-auto glass-elevated flex items-center justify-between gap-3 rounded-full px-3.5 sm:px-5 border border-white/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.85)]"
      >
        {/* Brand Logo / Avatar */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 rounded-full py-1 pr-3 pl-1 group"
        >
          <div className="relative grid size-9 place-items-center rounded-full border border-white/20 bg-zinc-950 text-[11px] font-bold tracking-widest text-white shadow-inner group-hover:border-cyan-400/60 transition-colors">
            <span className="relative z-10">{SITE.shortName}</span>
            <span className="absolute -inset-0.5 rounded-full bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="font-display text-xs font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              {SITE.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400">
              MCA @ VIT Vellore
            </span>
          </div>
        </a>

        {/* Navigation Items (Desktop) */}
        <ul className="relative hidden items-center gap-1 xl:gap-1.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.href

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'relative rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-300',
                    active ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white',
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 via-cyan-500/25 to-purple-600/30 border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsResumePreviewOpen(true)}
            className={cn(
              buttonVariants({ variant: 'primary', size: 'sm' }),
              'hidden sm:inline-flex rounded-full gap-1.5 shadow-[0_0_20px_rgba(59,130,246,0.35)]',
            )}
            title="Preview & Download Resume"
          >
            <Sparkles className="size-3 text-cyan-300" />
            Resume
          </button>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300 lg:hidden hover:border-white/20 hover:text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between px-6 pt-24 pb-10 overflow-y-auto"
          >
            <div className="space-y-1">
              {NAV_ITEMS.map((item, index) => {
                const active = activeSection === item.href
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * index, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        'block border-b border-white/10 py-3.5 font-display text-xl font-bold tracking-tight transition-colors',
                        active ? 'text-cyan-400 pl-2' : 'text-zinc-400 hover:text-white',
                      )}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                )
              })}
            </div>

            <div className="space-y-3 pt-6">
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  setIsResumePreviewOpen(true)
                }}
                className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'w-full rounded-full justify-center gap-2')}
              >
                <Sparkles className="size-4 text-cyan-300" />
                Preview Resume (PDF)
              </button>

              <a
                href={SITE.resumePath}
                download={SITE.resumeDownloadName}
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'w-full rounded-full justify-center gap-2 border-white/15 bg-white/5 text-white')}
              >
                Download Resume PDF
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* In-Page Resume Preview Modal */}
      <ResumePreviewModal
        isOpen={isResumePreviewOpen}
        onClose={() => setIsResumePreviewOpen(false)}
      />
    </header>
  )
}
