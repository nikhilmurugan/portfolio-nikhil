import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import {
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  CheckCircle2,
  Book,
  Trophy,
  Zap,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EDUCATION_DATA } from '@/data/education'
import { SectionContainer } from '@/components/ui/section-container'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
}

export function EducationSection() {
  const containerRef = useRef<HTMLElement>(null)
  const timelineLineRef = useRef<HTMLDivElement>(null)
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'mca-vit': true,
  })
  const reduced = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 85%'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  useLayoutEffect(() => {
    if (reduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-edu-card]', {
        scrollTrigger: {
          trigger: '[data-edu-timeline]',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={containerRef}
      id="education"
      className="relative z-10 py-20 sm:py-28 overflow-hidden border-t border-white/5 bg-canvas"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 -z-10 size-[500px] translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1),transparent_70%)] blur-3xl"
      />

      <SectionContainer>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <GradientBadge>Academic Foundations</GradientBadge>
          <AnimatedHeading as="h2" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Academic Journey & Foundations
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Academic background, computer science foundations, and continuous technical growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div data-edu-timeline className="relative mt-14 max-w-4xl mx-auto">
          
          {/* Central Connecting Backdrop Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-white/10" />

          {/* Animated Scroll Progress Line */}
          <motion.div
            ref={timelineLineRef}
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-600 shadow-[0_0_12px_#3b82f6]"
          />

          {/* Timeline Nodes List */}
          <div className="space-y-8 sm:space-y-10">
            {EDUCATION_DATA.map((item, index) => {
              const IconComp = ICON_MAP[item.icon] || GraduationCap
              const isExpanded = !!expandedNodes[item.id]
              const isEven = index % 2 === 0

              return (
                <div
                  key={item.id}
                  data-edu-card
                  className={cn(
                    'relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8',
                    isEven ? 'sm:flex-row-reverse' : '',
                  )}
                >
                  {/* Timeline Center Node Button */}
                  <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 z-20 flex flex-col items-center">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleNode(item.id)}
                      type="button"
                      aria-label={`Toggle details for ${item.degree}`}
                      className="grid size-9 sm:size-11 place-items-center rounded-full border border-white/20 bg-zinc-950 p-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-colors hover:border-cyan-400"
                      style={{ borderColor: item.accentColor }}
                    >
                      <IconComp className="size-4 sm:size-5 text-white" style={{ color: item.accentColor }} />
                    </motion.button>
                  </div>

                  {/* Compact Milestone Bento Card */}
                  <div
                    className={cn(
                      'w-full pl-11 sm:pl-0 sm:w-[calc(50%-2rem)]',
                      isEven ? 'sm:text-right' : 'sm:text-left',
                    )}
                  >
                    <SpotlightCard className="bento-card bento-card-hover p-5 sm:p-6 transition-all duration-300">
                      {/* Top Meta Bar */}
                      <div
                        className={cn(
                          'flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400',
                          isEven ? 'sm:justify-end' : 'sm:justify-start',
                        )}
                      >
                        <span className="inline-flex items-center gap-1 text-cyan-400">
                          <Calendar className="size-3.5" />
                          {item.period}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-300">
                          {item.status}
                        </span>
                        <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                          {item.badgeText}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-2.5 font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div
                        className={cn(
                          'mt-1 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-300',
                          isEven ? 'sm:justify-end' : 'sm:justify-start',
                        )}
                      >
                        <span>{item.institution}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="inline-flex items-center gap-1 text-zinc-400">
                          <MapPin className="size-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-2.5 text-xs text-zinc-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Stats Pills */}
                      {item.stats ? (
                        <div
                          className={cn(
                            'mt-3.5 flex flex-wrap gap-2',
                            isEven ? 'sm:justify-end' : 'sm:justify-start',
                          )}
                        >
                          {item.stats.map((st) => (
                            <div
                              key={st.label}
                              className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-center"
                            >
                              <span className="block text-[8px] font-mono text-zinc-400 uppercase">
                                {st.label}
                              </span>
                              <span className="block text-xs font-bold text-white">
                                {st.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {/* Expand Button */}
                      <button
                        onClick={() => toggleNode(item.id)}
                        type="button"
                        className={cn(
                          'mt-4 flex items-center gap-1 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors',
                          isEven ? 'sm:ml-auto' : '',
                        )}
                      >
                        <span>{isExpanded ? 'Collapse' : 'Expand Details'}</span>
                        {isExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                      </button>

                      {/* Expandable Coursework & Highlights Panel */}
                      <AnimatePresence>
                        {isExpanded ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden border-t border-white/10 pt-3.5 mt-3.5 space-y-3 text-left"
                          >
                            <div>
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                                <Book className="size-3.5 text-cyan-400" />
                                Key Coursework & Modules
                              </div>
                              <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                                {item.coursework.map((course) => (
                                  <div
                                    key={course}
                                    className="flex items-center gap-1.5 rounded-md border border-white/5 bg-white/[0.02] p-1.5 text-[11px] text-zinc-300"
                                  >
                                    <CheckCircle2 className="size-3 text-cyan-400 shrink-0" />
                                    <span className="line-clamp-1">{course}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                                <Trophy className="size-3.5 text-amber-400" />
                                Key Highlights
                              </div>
                              <ul className="mt-1.5 space-y-1 text-xs text-zinc-400">
                                {item.achievements.map((ach, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5">
                                    <span className="text-cyan-400 mt-0.5">•</span>
                                    <span>{ach}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                                <Zap className="size-3.5 text-purple-400" />
                                Acquired Skills
                              </div>
                              <div className="mt-1.5 flex flex-wrap gap-1">
                                {item.skillsGained.map((sk) => (
                                  <span
                                    key={sk}
                                    className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[9px] font-mono text-purple-300"
                                  >
                                    {sk}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </SpotlightCard>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
