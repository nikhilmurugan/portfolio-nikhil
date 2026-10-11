import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Search } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS_DATA, type FlagshipProject } from '@/data/projects'
import { SectionContainer } from '@/components/ui/section-container'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { ProjectCard } from '@/components/ui/project-card'
import { ProjectDetailModal } from '@/components/ui/project-detail-modal'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const CATEGORIES = [
  'All',
  'AI',
  'Full Stack',
  'Enterprise',
  'Smart Systems',
] as const

type CategoryType = (typeof CATEGORIES)[number]

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<FlagshipProject | null>(null)
  const reduced = usePrefersReducedMotion()

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCategory =
      activeCategory === 'All' || proj.filterCategories.includes(activeCategory)

    const matchesSearch =
      !searchQuery.trim() ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.stack.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  useLayoutEffect(() => {
    if (reduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-project-item]', {
        scrollTrigger: {
          trigger: '[data-projects-list]',
          start: 'top 85%',
        },
        y: 28,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [activeCategory, reduced])

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative z-10 py-20 sm:py-28 overflow-hidden border-t border-white/5 bg-canvas/80 backdrop-blur-3xl"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/4 -z-10 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-1/4 -z-10 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08),transparent_70%)] blur-3xl"
      />

      <SectionContainer>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <GradientBadge>Engineering Showcase</GradientBadge>
          <AnimatedHeading as="h2" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Technology Projects &amp; <span className="text-gradient-cyan">Innovation</span>
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Explore intelligent applications, AI research systems, cyber-physical platforms, and enterprise software built to address practical challenges.
          </p>
        </div>

        {/* CATEGORY FILTER TABS & SEARCH BAR */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-5">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mr-1 shrink-0">
              <Filter className="size-3.5 text-cyan-400" />
              <span>Filter:</span>
            </div>

            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'relative rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-300',
                    isActive
                      ? 'border border-cyan-400/50 bg-white/10 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)]'
                      : 'border border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200',
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="active-project-tab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-purple-600/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10 font-display">{cat}</span>
                </button>
              )
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/[0.04] pl-9 pr-4 py-1.5 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
            />
          </div>
        </div>

        {/* PROJECTS CONTAINER: One Horizontal Project Per Row */}
        <div
          data-projects-list
          className="mt-8 flex flex-col gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <div key={project.id} data-project-item className="w-full">
                <ProjectCard
                  project={project}
                  onSelectCaseStudy={(p) => setSelectedCaseStudy(p)}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-10 text-center py-12 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
            <Search className="size-6 mx-auto text-zinc-600" />
            <p className="mt-2 text-xs text-zinc-400">
              No projects found matching filter &ldquo;{activeCategory}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
              className="mt-3 text-xs font-mono text-cyan-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : null}

        {/* INTERACTIVE CASE STUDY DEEP DIVE MODAL */}
        <ProjectDetailModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      </SectionContainer>
    </section>
  )
}
