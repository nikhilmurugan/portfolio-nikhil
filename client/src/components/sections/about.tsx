import { useLayoutEffect, useRef, useState } from 'react'
import {
  Code2,
  Layers,
  Cpu,
  Cloud,
  Network,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  MapPin,
  Briefcase,
  Terminal,
  Atom,
  Globe,
  BrainCircuit,
  Server,
  Container,
  Database,
  Shield,
  Palette,
  FileJson,
  FileCode,
  Bot,
  Brain,
  Zap,
  Target,
  Compass,
  ShieldCheck,
  RefreshCw,
  Smartphone,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ABOUT_DATA } from '@/data/about'
import { SectionContainer } from '@/components/ui/section-container'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Cpu,
  Cloud,
  Network,
  GraduationCap,
  Sparkles,
  Terminal,
  Atom,
  Globe,
  BrainCircuit,
  Server,
  Container,
  Database,
  Shield,
  Palette,
  FileJson,
  FileCode,
  Bot,
  Brain,
  Zap,
  Target,
  Compass,
  ShieldCheck,
  RefreshCw,
  Smartphone,
}

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [activePillar, setActivePillar] = useState<string>(ABOUT_DATA.pillars[0].id)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-about-card]', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative z-10 pt-12 pb-20 sm:pt-14 sm:pb-28 overflow-hidden border-t border-white/5 bg-canvas"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-0 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-0 -z-10 size-[600px] translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06),transparent_70%)] blur-3xl"
      />

      <SectionContainer>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <GradientBadge>Engineering Identity</GradientBadge>
          <AnimatedHeading as="h2" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            About &amp; Architecture
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Engineering foundation, architectural philosophy, and core technical proficiencies.
          </p>
        </div>

        {/* WIDE HORIZONTAL PROFESSIONAL SUMMARY & ACADEMIC BACKGROUND */}
        <div
          data-about-card
          className="mt-14 w-full bento-card bento-card-hover p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-cyan-500/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-blue-500/10 blur-3xl"
          />

          <div>
            {/* Header with Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                <Sparkles className="size-3.5" />
                Professional Summary &amp; Trajectory
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-2.5 py-0.5 text-xs text-emerald-300 font-mono">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px]">{ABOUT_DATA.status.state}</span>
              </div>
            </div>

            {/* Main Heading */}
            <h3 className="mt-5 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              {ABOUT_DATA.bio.heading}
            </h3>

            {/* Summary Text per user prompt */}
            <div className="mt-4 space-y-3 max-w-4xl">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                {ABOUT_DATA.bio.description}
              </p>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                {ABOUT_DATA.bio.projectSummary}
              </p>
            </div>
          </div>

          {/* Academic Background Cards Side-by-Side on Desktop */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Academic Background • Vellore Institute of Technology
            </span>

            <div className="grid gap-4 sm:grid-cols-2">
              {ABOUT_DATA.bio.educationSummary.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex items-start gap-3.5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="grid size-10 place-items-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 shrink-0">
                    <GraduationCap className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display text-xs sm:text-sm font-bold text-white leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="mt-2.5 flex items-center gap-2 text-[10px] font-mono text-cyan-300">
                      <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">
                        {edu.period}
                      </span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-emerald-400">{edu.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Location & Education Metadata Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-white/10 text-xs text-zinc-400 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-cyan-400" />
              Ranipet / Vellore, India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="size-3.5 text-purple-400" />
              MCA @ VIT Vellore
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-zinc-500">
              Open for Software Engineering &amp; AI Roles
            </span>
          </div>
        </div>

        {/* SECTION 3: TECHNICAL PILLARS & FOCUS (5 Concise Engineering Pillars) */}
        <div data-about-card className="mt-12 bento-card bento-card-hover p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                Technical Pillars &amp; Focus
              </span>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
                Five Engineering Capability Pillars
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              Interactive capability overview
            </span>
          </div>

          {/* 5 Pillars Responsive Grid (5 cols on lg) */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
            {ABOUT_DATA.pillars.map((pillar) => {
              const IconComp = ICON_MAP[pillar.icon] || Code2
              const isSelected = activePillar === pillar.id

              return (
                <SpotlightCard
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={cn(
                    'cursor-pointer transition-all duration-300 p-5 border flex flex-col justify-between rounded-2xl h-full',
                    isSelected
                      ? 'border-cyan-400/50 bg-cyan-950/20 ring-1 ring-cyan-400/30'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]',
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          'grid size-9 place-items-center rounded-xl border transition-colors',
                          isSelected
                            ? 'border-cyan-400/40 bg-cyan-500/20 text-cyan-300'
                            : 'border-white/10 bg-white/5 text-zinc-400',
                        )}
                      >
                        <IconComp className="size-4" style={{ color: pillar.color }} />
                      </div>
                      {isSelected ? (
                        <CheckCircle2 className="size-4 text-cyan-400" />
                      ) : null}
                    </div>

                    <h4 className="mt-4 font-display text-sm font-bold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5 font-mono">
                      {pillar.subtitle}
                    </p>
                    <p className="mt-2.5 text-xs text-zinc-300 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-2.5 border-t border-white/5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-mono text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              )
            })}
          </div>
        </div>

        {/* SECTION 4: CORE COMPONENTS — CLEAN HORIZONTAL INFORMATION STRIP */}
        <div data-about-card className="mt-12 bento-card bento-card-hover p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                Core Information Strip
              </span>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
                Executive Overview &amp; Focus Areas
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              Compact capability alignment
            </span>
          </div>

          {/* 6 Information Blocks Aligned Horizontally on Wide Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 items-stretch">
            {ABOUT_DATA.coreComponents.map((block) => {
              const IconComp = ICON_MAP[block.icon] || Target

              return (
                <div
                  key={block.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2">
                      <div className="grid size-7 place-items-center rounded-lg border border-white/10 bg-white/5">
                        <IconComp
                          className="size-3.5"
                          style={{ color: block.accentColor }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase rounded bg-white/5 px-1.5 py-0.5">
                        {block.badge}
                      </span>
                    </div>

                    <h4 className="mt-2 font-display text-xs sm:text-sm font-bold text-white">
                      {block.title}
                    </h4>

                    <p className="mt-2 text-xs text-zinc-300 leading-relaxed font-sans">
                      {block.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* SECTION 5: TECHNICAL ARSENAL & ECOSYSTEM (Structured 3x3 Grid of Category Panels) */}
        <div data-about-card className="mt-12 bento-card bento-card-hover p-6 sm:p-8 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              Technical Arsenal &amp; Ecosystem
            </span>
            <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
              Technologies, Frameworks &amp; Engineering Disciplines
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 font-sans">
              Structured engineering matrix categorized by specialization and architectural layers.
            </p>
          </div>

          {/* 3 Columns Desktop (3 rows × 3 columns = 9 category panels), 2 Columns Tablet, 1 Column Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {ABOUT_DATA.arsenalCategories.map((cat) => {
              const IconComp = ICON_MAP[cat.icon] || Code2

              return (
                <SpotlightCard
                  key={cat.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.035] transition-all duration-300"
                >
                  <div>
                    {/* Header: Title and Icon Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="grid size-8 place-items-center rounded-xl border border-white/10 bg-white/5 shrink-0"
                          style={{ borderColor: `${cat.color}33` }}
                        >
                          <IconComp className="size-4" style={{ color: cat.color }} />
                        </div>
                        <h4 className="font-display text-sm font-bold text-white tracking-tight">
                          {cat.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                        {cat.skills.length}
                      </span>
                    </div>

                    {/* Wrapped Technology Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-zinc-300 hover:border-cyan-400/40 hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              )
            })}
          </div>
        </div>

      </SectionContainer>
    </section>
  )
}
