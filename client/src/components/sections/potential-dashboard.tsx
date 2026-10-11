import { useLayoutEffect, useRef } from 'react'
import {
  BrainCircuit,
  Layers,
  Cloud,
  Cpu,
  Award,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Target,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionContainer } from '@/components/ui/section-container'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { buttonVariants } from '@/components/ui/button'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export function PotentialDashboardSection() {
  const containerRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-potential-panel]', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.85,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={containerRef}
      id="potential"
      className="relative z-10 py-20 sm:py-28 overflow-hidden border-t border-white/5 bg-canvas/60 backdrop-blur-3xl"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.07),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-1/4 -z-10 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.06),transparent_70%)] blur-3xl"
      />

      <SectionContainer>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <GradientBadge>Personal Potential Dashboard</GradientBadge>
          <AnimatedHeading as="h2" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Technical Capabilities &amp; <span className="text-gradient-cyan">Trajectory</span>
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            A comprehensive overview of technical competencies, engineering philosophy, academic milestones, and professional readiness.
          </p>
        </div>

        {/* 4 NUMBERED HORIZONTAL PANELS STACKED VERTICALLY */}
        <div className="mt-14 flex flex-col gap-8 w-full">

          {/* ========================================================================= */}
          {/* PANEL 01 — TECHNICAL STRENGTHS */}
          {/* ========================================================================= */}
          <div data-potential-panel className="w-full">
            <SpotlightCard className="w-full rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 lg:p-9 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* Panel Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-cyan-400 px-2.5 py-1 rounded-md border border-cyan-500/30 bg-cyan-950/40">
                    01
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Technical Strengths
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  Four Core Capability Groups
                </span>
              </div>

              {/* Four Compact Capability Groups */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* 1. AI & Machine Learning */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 flex flex-col justify-between hover:border-cyan-400/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                      <div className="grid size-8 place-items-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                        <BrainCircuit className="size-4" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-white">
                        AI &amp; Machine Learning
                      </h4>
                    </div>
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {['ML', 'DL', 'Neural Networks', 'LLMs', 'RAG', 'Multi-Agent AI'].map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-zinc-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Application Development */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 flex flex-col justify-between hover:border-cyan-400/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                      <div className="grid size-8 place-items-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        <Layers className="size-4" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-white">
                        Application Development
                      </h4>
                    </div>
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {['React', 'Node.js', 'Angular', 'Java', 'Python', 'PHP', 'Flutter'].map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-zinc-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Cloud & Data */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 flex flex-col justify-between hover:border-cyan-400/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                      <div className="grid size-8 place-items-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                        <Cloud className="size-4" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-white">
                        Cloud &amp; Data
                      </h4>
                    </div>
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {['AWS', 'Supabase', 'SQL', 'MongoDB', 'MySQL', 'PostgreSQL'].map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-zinc-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Systems & Innovation */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 flex flex-col justify-between hover:border-cyan-400/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                      <div className="grid size-8 place-items-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                        <Cpu className="size-4" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-white">
                        Systems &amp; Innovation
                      </h4>
                    </div>
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {['Digital Twins', 'Cyber-Physical Systems', 'System Architecture', 'Resource Optimization'].map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-zinc-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* ========================================================================= */}
          {/* PANEL 02 — VISION & AMBITION */}
          {/* ========================================================================= */}
          <div data-potential-panel className="w-full">
            <SpotlightCard className="w-full rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 lg:p-9 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-cyan-500/10 blur-3xl"
              />

              {/* Panel Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-cyan-400 px-2.5 py-1 rounded-md border border-cyan-500/30 bg-cyan-950/40">
                    02
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Vision &amp; Ambition
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Guiding Engineering Philosophy
                </span>
              </div>

              {/* Prominent Headline & Supporting Text */}
              <div className="mt-7 max-w-4xl space-y-4">
                <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                  &ldquo;Build with purpose. Learn without limits. Create technology that matters.&rdquo;
                </blockquote>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans max-w-3xl pt-1">
                  My ambition is to turn strong technical foundations and continuous learning into reliable software, intelligent systems, and meaningful real-world solutions.
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* ========================================================================= */}
          {/* PANEL 03 — CAREER TRAJECTORY */}
          {/* ========================================================================= */}
          <div data-potential-panel className="w-full">
            <SpotlightCard className="w-full rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 lg:p-9 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* Panel Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-cyan-400 px-2.5 py-1 rounded-md border border-cyan-500/30 bg-cyan-950/40">
                    03
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Career Trajectory
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  Academic &amp; Professional Progression
                </span>
              </div>

              {/* Connected Milestone Timeline (Horizontal Desktop, Vertical Mobile) */}
              <div className="mt-8 relative">
                {/* Connecting Line on Desktop */}
                <div
                  aria-hidden
                  className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-emerald-500/40 via-cyan-500/50 to-purple-500/40 z-0"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  {/* Milestone 1: BCA */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="grid size-11 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                          <Award className="size-5" />
                        </div>
                        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-mono text-emerald-300">
                          Graduated
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-bold text-white">
                        BCA — Bachelor of Computer Applications
                      </h4>
                      <p className="font-mono text-xs text-cyan-400 mt-1">
                        2022–2025 • VIT Vellore
                      </p>
                      <p className="mt-3 text-xs text-zinc-300 leading-relaxed font-sans">
                        Graduated with strong foundations in computer applications, programming, algorithms, database systems, and full-stack software development.
                      </p>
                    </div>
                  </div>

                  {/* Milestone 2: MCA */}
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/15 p-5 flex flex-col justify-between hover:border-cyan-400/50 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.06)]">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="grid size-11 place-items-center rounded-xl border border-cyan-500/40 bg-cyan-500/15 text-cyan-300 shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                          <GraduationCap className="size-5" />
                        </div>
                        <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          Currently Pursuing
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-bold text-white">
                        MCA — Master of Computer Applications
                      </h4>
                      <p className="font-mono text-xs text-cyan-400 mt-1">
                        2025–2027 • VIT Vellore
                      </p>
                      <p className="mt-3 text-xs text-zinc-300 leading-relaxed font-sans">
                        Currently pursuing advanced coursework in software architecture, intelligent systems, machine learning, cloud engineering, and enterprise computing.
                      </p>
                    </div>
                  </div>

                  {/* Milestone 3: Next Milestone */}
                  <div className="rounded-2xl border border-purple-500/25 bg-purple-950/10 p-5 flex flex-col justify-between hover:border-purple-500/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="grid size-11 place-items-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                          <Sparkles className="size-5" />
                        </div>
                        <span className="rounded-full bg-purple-500/10 border border-purple-500/30 px-2.5 py-0.5 text-[10px] font-mono text-purple-300">
                          Active Target
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-bold text-white">
                        Next Milestone
                      </h4>
                      <p className="font-mono text-xs text-purple-300 mt-1">
                        Internship &amp; Entry-Level Roles
                      </p>
                      <p className="mt-3 text-xs text-zinc-300 leading-relaxed font-sans">
                        Secure an internship or suitable entry-level opportunity, contribute to real-world software projects, and continue developing production-quality engineering skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* ========================================================================= */}
          {/* PANEL 04 — OPEN TO OPPORTUNITIES */}
          {/* ========================================================================= */}
          <div data-potential-panel className="w-full">
            <SpotlightCard className="w-full rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 lg:p-9 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* Panel Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-cyan-400 px-2.5 py-1 rounded-md border border-cyan-500/30 bg-cyan-950/40">
                    04
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Open to Opportunities
                  </h3>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3 py-1 text-xs text-emerald-300 font-mono">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>Status: Open to suitable opportunities</span>
                </div>
              </div>

              {/* Content Split: Target Areas & CTA */}
              <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="space-y-4 max-w-2xl">
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      Target Focus Areas
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Software Development',
                        'AI / ML',
                        'Web & Mobile Development',
                        'Cloud Technologies',
                      ].map((area) => (
                        <span
                          key={area}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-500/25 bg-cyan-950/20 px-3 py-1 text-xs font-mono font-medium text-cyan-200"
                        >
                          <Target className="size-3 text-cyan-400" />
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans">
                    Ready to contribute, collaborate, and grow through meaningful technical work.
                  </p>
                </div>

                {/* Let's Connect Action */}
                <div className="shrink-0 pt-2 lg:pt-0">
                  <a
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: 'primary', size: 'lg' }),
                      'rounded-full gap-2 px-8 py-3 font-display font-semibold text-sm shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all',
                    )}
                  >
                    <span>Let&apos;s Connect</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </SectionContainer>
    </section>
  )
}
