import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Wrench,
  Sparkles,
  Search,
  Bot,
  Terminal,
  FileCode,
  FileJson,
  Cpu,
  Atom,
  Palette,
  Flame,
  Globe,
  Zap,
  Network,
  Layers,
  FolderTree,
  Brain,
  Box,
  CloudRain,
  GitBranch,
  ShieldAlert,
  KeyRound,
  Lock,
  GitPullRequest,
  Code,
  Send,
  Target,
  X,
  Compass,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SKILL_CATEGORIES, type SkillItem } from '@/data/skills'
import { SectionContainer } from '@/components/ui/section-container'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Wrench,
  Sparkles,
  Bot,
  Terminal,
  FileCode,
  FileJson,
  Cpu,
  Atom,
  Palette,
  Flame,
  Globe,
  Zap,
  Network,
  Layers,
  FolderTree,
  Brain,
  Box,
  CloudRain,
  GitBranch,
  ShieldAlert,
  KeyRound,
  Lock,
  GitPullRequest,
  Code,
  Send,
  Target,
}

type DisplaySkill = SkillItem & {
  categoryShort?: string
  categoryColor?: string
}

export function SkillsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].id)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchScope, setSearchScope] = useState<'category' | 'all'>('category')
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null)
  const reduced = usePrefersReducedMotion()

  const query = searchQuery.trim().toLowerCase()

  const matchesSkill = (sk: SkillItem, q: string) => {
    if (!q) return true
    return (
      sk.name.toLowerCase().includes(q) ||
      sk.description.toLowerCase().includes(q) ||
      sk.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  // Exact matching counters for each category reflecting visible skills
  const categoryMatchCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    SKILL_CATEGORIES.forEach((cat) => {
      counts[cat.id] = query
        ? cat.skills.filter((sk) => matchesSkill(sk, query)).length
        : cat.skills.length
    })
    return counts
  }, [query])

  // Total matches across all 11 categories
  const totalMatchesAll = useMemo(() => {
    if (!query) return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)
    return SKILL_CATEGORIES.reduce(
      (acc, cat) => acc + cat.skills.filter((sk) => matchesSkill(sk, query)).length,
      0
    )
  }, [query])

  const currentCategory =
    SKILL_CATEGORIES.find((c) => c.id === activeCategory) || SKILL_CATEGORIES[0]
  const currentCategoryMatches = categoryMatchCounts[currentCategory.id] || 0

  // Categories that have matches when searching
  const otherCategoriesWithMatches = useMemo(() => {
    if (!query) return []
    return SKILL_CATEGORIES.filter(
      (cat) => cat.id !== activeCategory && categoryMatchCounts[cat.id] > 0
    )
  }, [query, activeCategory, categoryMatchCounts])

  // Filtered skills based on scope and search
  const displayedSkills: DisplaySkill[] = useMemo(() => {
    if (query && searchScope === 'all') {
      return SKILL_CATEGORIES.flatMap((cat) =>
        cat.skills
          .filter((sk) => matchesSkill(sk, query))
          .map((sk) => ({
            ...sk,
            categoryShort: cat.shortTitle,
            categoryColor: cat.color,
          }))
      )
    }

    return currentCategory.skills
      .filter((sk) => matchesSkill(sk, query))
      .map((sk) => ({
        ...sk,
        categoryShort: currentCategory.shortTitle,
        categoryColor: currentCategory.color,
      }))
  }, [query, searchScope, currentCategory])

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId)
    setSearchScope('category')
    const tabEl = document.getElementById(`skill-tab-${catId}`)
    if (tabEl) {
      tabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  useLayoutEffect(() => {
    if (reduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-skill-card]', {
        scrollTrigger: {
          trigger: '[data-skills-grid]',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [activeCategory, searchScope, reduced])

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative z-10 py-20 sm:py-28 overflow-hidden border-t border-white/5 bg-canvas/60 backdrop-blur-3xl"
    >
      {/* Background ambient light */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)] blur-3xl"
      />

      <SectionContainer>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <GradientBadge>AI Operating System</GradientBadge>
          <AnimatedHeading as="h2" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Skills Intelligence Matrix
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            An interactive OS dashboard mapping programming languages, frameworks, cloud infrastructure, AI models, and cybersecurity capabilities.
          </p>
        </div>

        {/* AI OS RADAR ORBIT & CONTROL CENTER BENTO */}
        <div className="mt-14 bento-card p-6 sm:p-8 border border-white/10 relative overflow-hidden space-y-6">
          
          {/* Top Control Bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-mono text-cyan-300">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                SYSTEM STATUS: ACTIVE
              </div>
              <span className="hidden text-xs font-mono text-zinc-500 sm:inline-block">
                11 CATEGORIES • {SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)} CAPABILITIES
              </span>
            </div>

            {/* Live Search Bar */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search across all 11 categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-white/[0.04] pl-9 pr-8 py-1.5 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </div>
          </div>

          {/* Search Scope Toggle (appears when actively searching) */}
          {query ? (
            <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-xl border border-cyan-500/20 bg-cyan-950/20 px-4 py-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Compass className="size-3.5 text-cyan-400" />
                <span>
                  Search results for &ldquo;<strong className="text-white">{searchQuery}</strong>&rdquo;:
                </span>
                <span className="font-mono text-cyan-300 font-semibold">
                  {totalMatchesAll} matching {totalMatchesAll === 1 ? 'skill' : 'skills'} found
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-zinc-400">View Scope:</span>
                <button
                  type="button"
                  onClick={() => setSearchScope('category')}
                  className={cn(
                    'rounded-lg px-2.5 py-1 text-xs font-mono transition-colors',
                    searchScope === 'category'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                  )}
                >
                  {currentCategory.shortTitle} ({currentCategoryMatches})
                </button>
                <button
                  type="button"
                  onClick={() => setSearchScope('all')}
                  className={cn(
                    'rounded-lg px-2.5 py-1 text-xs font-mono transition-colors',
                    searchScope === 'all'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                  )}
                >
                  All 11 Categories ({totalMatchesAll})
                </button>
              </div>
            </div>
          ) : null}

          {/* Category Tabs Node Selector */}
          <div
            role="tablist"
            aria-label="Skill Categories"
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const IconComp = ICON_MAP[cat.icon] || Code2
              const isActive = activeCategory === cat.id && searchScope === 'category'
              const count = categoryMatchCounts[cat.id] ?? 0

              return (
                <button
                  key={cat.id}
                  id={`skill-tab-${cat.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="skills-grid"
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  className={cn(
                    'group relative flex items-center gap-2 rounded-2xl border px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-all duration-300 shrink-0',
                    isActive
                      ? 'border-cyan-500/50 bg-white/10 text-white shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                      : query && count === 0
                        ? 'border-white/5 bg-white/[0.01] text-zinc-500 opacity-60 hover:opacity-100'
                        : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="active-skill-tab"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <IconComp className="relative z-10 size-4" style={{ color: cat.color }} />
                  <span className="relative z-10 font-display">{cat.shortTitle}</span>
                  <span
                    className={cn(
                      'relative z-10 rounded-full px-1.5 py-0.5 text-[10px] font-mono transition-colors',
                      query && count > 0
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                        : 'bg-white/10 text-zinc-300'
                    )}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Radar / Constellation Interactive Header */}
          <div className="grid gap-6 lg:grid-cols-12 items-center">
            
            {/* Left: Radar HUD Visual */}
            <div className="lg:col-span-4 relative flex items-center justify-center p-5 bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden min-h-[200px]">
              <div aria-hidden className="absolute size-44 rounded-full border border-cyan-500/20 animate-pulse-soft" />
              <div aria-hidden className="absolute size-28 rounded-full border border-purple-500/20" />
              <div aria-hidden className="absolute size-14 rounded-full border border-blue-500/20" />
              <div aria-hidden className="absolute h-full w-px bg-white/5" />
              <div aria-hidden className="absolute w-full h-px bg-white/5" />

              <div
                aria-hidden
                className="absolute inset-0 rounded-full animate-[spin_10s_linear_infinite]"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(34,211,238,0.25) 360deg)',
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className="grid size-12 place-items-center rounded-2xl border border-white/20 bg-zinc-950 shadow-2xl"
                  style={{
                    borderColor:
                      searchScope === 'all' && query ? '#38bdf8' : currentCategory.color,
                  }}
                >
                  {(() => {
                    const CatIcon =
                      searchScope === 'all' && query
                        ? Compass
                        : ICON_MAP[currentCategory.icon] || Code2
                    return (
                      <CatIcon
                        className="size-6"
                        style={{
                          color:
                            searchScope === 'all' && query ? '#38bdf8' : currentCategory.color,
                        }}
                      />
                    )
                  })()}
                </div>
                <h4 className="mt-2.5 font-display text-xs font-bold text-white tracking-wide">
                  {searchScope === 'all' && query
                    ? 'Global Search Matrix'
                    : currentCategory.title}
                </h4>
                <span className="mt-0.5 text-[9px] font-mono text-cyan-400">
                  {displayedSkills.length} MODULES LOADED
                </span>
              </div>
            </div>

            {/* Right: Active Category Telemetry */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-cyan-400" />
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                  {searchScope === 'all' && query
                    ? 'Cross-Category Search Telemetry'
                    : 'Category Intelligence Telemetry'}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                {searchScope === 'all' && query
                  ? `All Matching Capabilities across 11 Categories`
                  : currentCategory.title}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {searchScope === 'all' && query
                  ? `Aggregated view showing ${displayedSkills.length} matching skills filtered by query "${searchQuery}" across all 11 technical domains.`
                  : currentCategory.description}
              </p>

              <div className="pt-1 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  Proficiency Assessment:{' '}
                  <span className="font-bold text-white">Applied &amp; Defensible</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-cyan-400" />
                  Execution Domain:{' '}
                  <span className="font-bold text-white">
                    {searchScope === 'all' && query
                      ? 'All Categories'
                      : currentCategory.shortTitle}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS CARDS BENTO GRID */}
          <div
            id="skills-grid"
            data-skills-grid
            className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {displayedSkills.map((skill) => {
                const SkillIcon = ICON_MAP[skill.icon] || Code2
                const isHovered = hoveredSkill?.id === skill.id

                return (
                  <motion.div
                    key={`${skill.id}-${skill.categoryShort ?? ''}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SpotlightCard
                      data-skill-card
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={cn(
                        'group relative h-full bento-card bento-card-hover p-4 sm:p-5 flex flex-col justify-between border transition-all duration-300',
                        isHovered
                          ? 'border-cyan-400/60 bg-white/[0.08] shadow-[0_0_25px_rgba(34,211,238,0.18)]'
                          : 'border-white/10 bg-white/[0.02]'
                      )}
                    >
                      <div>
                        {/* Top Header */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-cyan-400 transition-colors group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10">
                              <SkillIcon className="size-4" />
                            </div>
                            <div>
                              <h4 className="font-display text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                {skill.name}
                              </h4>
                              <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                                <span
                                  className={cn(
                                    'inline-flex items-center rounded-md border px-2 py-0.5 text-[9px] font-mono font-medium',
                                    skill.level === 'Working Knowledge' &&
                                      'border-emerald-500/30 bg-emerald-950/30 text-emerald-300',
                                    skill.level === 'Familiar' &&
                                      'border-cyan-500/30 bg-cyan-950/30 text-cyan-300',
                                    skill.level === 'Currently Exploring' &&
                                      'border-amber-500/30 bg-amber-950/30 text-amber-300'
                                  )}
                                >
                                  {skill.level}
                                </span>

                                {searchScope === 'all' && skill.categoryShort ? (
                                  <span
                                    className="inline-flex items-center rounded-md border px-1.5 py-0.5 text-[8px] font-mono"
                                    style={{
                                      borderColor: `${skill.categoryColor ?? '#38bdf8'}40`,
                                      backgroundColor: `${skill.categoryColor ?? '#38bdf8'}15`,
                                      color: skill.categoryColor ?? '#38bdf8',
                                    }}
                                  >
                                    {skill.categoryShort}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          {skill.badge ? (
                            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[8px] font-mono text-cyan-300 whitespace-nowrap">
                              {skill.badge}
                            </span>
                          ) : null}
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-xs text-zinc-300 leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      </div>

                      {/* Tag list */}
                      <div className="mt-3 flex flex-wrap gap-1 pt-2 border-t border-white/5">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] font-mono text-zinc-400 group-hover:border-cyan-500/20 group-hover:text-zinc-300 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Empty search results state */}
          {displayedSkills.length === 0 ? (
            <div className="mt-8 text-center py-10 border border-dashed border-white/10 rounded-2xl bg-white/[0.01] px-4">
              <Search className="size-6 mx-auto text-zinc-500" />
              <p className="mt-2 text-sm text-zinc-300 font-medium">
                No skills match &ldquo;{searchQuery}&rdquo; in {currentCategory.title}
              </p>

              {otherCategoriesWithMatches.length > 0 ? (
                <div className="mt-4 max-w-lg mx-auto">
                  <p className="text-xs text-zinc-400">
                    Found <strong className="text-cyan-300">{totalMatchesAll}</strong> matching{' '}
                    {totalMatchesAll === 1 ? 'skill' : 'skills'} in other categories:
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {otherCategoriesWithMatches.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategory(cat.id)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                      >
                        <span>{cat.shortTitle}</span>
                        <span className="rounded-full bg-cyan-400/20 px-1.5 py-0.2 text-[10px]">
                          {categoryMatchCounts[cat.id]}
                        </span>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setSearchScope('all')}
                      className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-mono text-purple-300 hover:bg-purple-500/20 transition-colors"
                    >
                      <span>View All ({totalMatchesAll})</span>
                    </button>
                  </div>
                </div>
              ) : (
                <p className="mt-1 text-xs text-zinc-500">
                  Try searching another keyword or clear the search filter.
                </p>
              )}

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setSearchScope('category')
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-mono text-zinc-300 hover:bg-white/10 transition-colors"
                >
                  Clear Search Filter
                </button>
              </div>
            </div>
          ) : null}

        </div>
      </SectionContainer>
    </section>
  )
}

