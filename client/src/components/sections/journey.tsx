import { useLayoutEffect, useRef } from 'react'
import {
  BookOpen,
  Code,
  BrainCircuit,
  Server,
  Sparkles,
  ArrowRight,
  Layers,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { JOURNEY_DATA } from '@/data/journey'
import { SectionContainer } from '@/components/ui/section-container'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  Code,
  BrainCircuit,
  Server,
  Sparkles,
}

export function JourneySection() {
  const containerRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-journey-step]', {
        scrollTrigger: {
          trigger: '[data-journey-flow]',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative z-10 py-20 sm:py-28 overflow-hidden border-t border-white/5 bg-canvas"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/3 -z-10 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)] blur-3xl"
      />

      <SectionContainer>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <GradientBadge>Evolutionary Trajectory</GradientBadge>
          <AnimatedHeading as="h2" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Tech Journey &amp; Progression
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            A visual roadmap mapping the transformation from computer science foundations to full-stack platforms, AI intelligence, and future horizons.
          </p>
        </div>

        {/* Desktop Horizontal Stepper Bar */}
        <div className="mt-10 hidden lg:flex items-center justify-between bento-card p-3.5 border border-white/10">
          {JOURNEY_DATA.map((item, index) => {
            const IconComp = ICON_MAP[item.icon] || Code
            return (
              <div key={item.id} className="flex items-center gap-3">
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-2.5 group transition-colors"
                >
                  <div
                    className="grid size-8 place-items-center rounded-xl border border-white/10 bg-white/5 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition-colors text-white"
                    style={{ color: item.accentColor }}
                  >
                    <IconComp className="size-3.5" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-zinc-500 uppercase">
                      {item.stepNumber} • {item.phase}
                    </span>
                    <span className="block text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors truncate max-w-[200px]">
                      {item.title}
                    </span>
                  </div>
                </a>
                {index < JOURNEY_DATA.length - 1 ? (
                  <ArrowRight className="size-3.5 text-zinc-600 ml-1 shrink-0" />
                ) : null}
              </div>
            )
          })}
        </div>

        {/* Connected Bento Roadmap Stream */}
        <div data-journey-flow className="relative mt-12 max-w-5xl mx-auto space-y-8">
          
          {/* Connecting Vertical Line */}
          <div className="absolute left-5 lg:left-7 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(34,211,238,0.3)]" />

          {JOURNEY_DATA.map((item) => {
            const IconComp = ICON_MAP[item.icon] || Code

            return (
              <div
                key={item.id}
                id={item.id}
                data-journey-step
                className="relative pl-12 sm:pl-16 group"
              >
                {/* Node Bullet */}
                <div className="absolute left-5 lg:left-7 top-5 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div
                    className="grid size-9 sm:size-10 place-items-center rounded-xl border border-white/20 bg-zinc-950 p-2 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-transform duration-300 group-hover:scale-110"
                    style={{ borderColor: item.accentColor }}
                  >
                    <IconComp className="size-4" style={{ color: item.accentColor }} />
                  </div>
                </div>

                {/* Milestone Bento Card */}
                <SpotlightCard className="bento-card bento-card-hover p-5 sm:p-7 border border-white/10">
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-mono font-bold text-white">
                        {item.stepNumber}
                      </span>
                      <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                        {item.phase} • {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400">
                      <span>{item.period}</span>
                      <span
                        className={cn(
                          'rounded-full px-2.5 py-0.5 text-[10px] font-mono font-semibold',
                          item.status === 'Completed' &&
                            'border border-emerald-500/30 bg-emerald-950/30 text-emerald-300',
                          item.status === 'In Progress' &&
                            'border border-cyan-500/30 bg-cyan-950/30 text-cyan-300',
                          item.status === 'Upcoming' &&
                            'border border-purple-500/30 bg-purple-950/30 text-purple-300',
                        )}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-4 grid gap-6 lg:grid-cols-12 items-start">
                    <div className="lg:col-span-7 space-y-3">
                      <h3 className="font-display text-xl font-bold text-white tracking-tight sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-300">
                        {item.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-0.5 font-sans">
                        {item.description}
                      </p>

                      {/* Milestone Box */}
                      <div className="pt-1">
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                          <span className="block text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                            Phase Milestone
                          </span>
                          <p className="mt-1 text-xs text-zinc-200 font-medium">
                            {item.milestone}
                          </p>
                        </div>
                      </div>

                      {/* Key Focus Areas */}
                      <div className="pt-1 space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          Key Technical Areas:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.keyAreas.map((area) => (
                            <span
                              key={area}
                              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-300"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stack & Environment Pill Box */}
                    <div className="lg:col-span-5 rounded-2xl p-4 border border-white/10 bg-white/[0.02] flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                            <Layers className="size-3 text-purple-400" />
                            Stack &amp; Environment
                          </div>
                          <span className="text-[9px] font-mono text-cyan-400">
                            {item.workstreams ? `${item.workstreams.length} Workstreams` : 'Core Stack'}
                          </span>
                        </div>

                        {item.workstreams ? (
                          <div className="mt-3 space-y-2 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
                            {item.workstreams.map((ws, i) => (
                              <div
                                key={ws.name}
                                className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
                              >
                                <div className="flex items-center justify-between gap-1.5">
                                  <span className="text-xs font-display font-semibold text-white">
                                    {i + 1}. {ws.name}
                                  </span>
                                  <span className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] font-mono text-cyan-300 border border-white/5 shrink-0">
                                    {ws.tag}
                                  </span>
                                </div>
                                {ws.subtitle ? (
                                  <p className="text-[10px] font-mono text-zinc-400 mt-0.5">
                                    {ws.subtitle}
                                  </p>
                                ) : null}
                                <p className="text-[11px] text-zinc-300 leading-snug mt-1 font-sans">
                                  {ws.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {item.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-mono text-zinc-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                        <span>Phase Alignment</span>
                        <span className="text-cyan-300 font-semibold">{item.badge}</span>
                      </div>
                    </div>
                  </div>

                </SpotlightCard>
              </div>
            )
          })}

        </div>
      </SectionContainer>
    </section>
  )
}
