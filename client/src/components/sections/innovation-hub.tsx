import { useLayoutEffect, useRef } from 'react'
import {
  Sparkles,
  Compass,
  Map,
  Layers,
  Lightbulb,
  ArrowUpRight,
  Cpu,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionContainer } from '@/components/ui/section-container'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

gsap.registerPlugin(ScrollTrigger)

const INNOVATION_CARDS = [
  {
    id: 'future-vision',
    title: 'Future Vision',
    subtitle: 'Next-Gen Software Horizons',
    description:
      'Pioneering human-centric software, intelligent autonomous agents, low-latency cloud systems, and zero-trust security platforms that empower digital ecosystems.',
    icon: Compass,
    color: '#3b82f6',
    status: 'Horizon 2027+',
    badge: 'Strategic Vision',
  },
  {
    id: 'research-interests',
    title: 'Research Interests',
    subtitle: 'Core Explorations & Deep Dives',
    description:
      'Exploring neural network optimization, vector search indexing, retrieval-augmented generation (RAG), and agentic workflow orchestration.',
    icon: Lightbulb,
    color: '#8b5cf6',
    status: 'Active Exploration',
    badge: 'AI & Systems',
  },
  {
    id: 'technology-roadmap',
    title: 'Technology Roadmap',
    subtitle: 'Evolutionary Stack Trajectory',
    description:
      'Advancing from full-stack React and Python microservices toward distributed cloud-native systems, edge compute runtimes, and high-performance server architectures.',
    icon: Map,
    color: '#22d3ee',
    status: 'In Progress',
    badge: 'Roadmap',
  },
  {
    id: 'architecture-gallery',
    title: 'Architecture Gallery',
    subtitle: 'System Design Patterns',
    description:
      'Blueprints and system flow diagrams for multi-tenant database isolation, real-time WebSocket telemetry, and predictive machine learning pipelines.',
    icon: Layers,
    color: '#ec4899',
    status: 'System Blueprints',
    badge: 'Gallery',
  },
]

export function InnovationHubSection() {
  const containerRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-hub-card]', {
        scrollTrigger: {
          trigger: '[data-hub-grid]',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={containerRef}
      id="innovation-hub"
      className="relative z-10 py-20 sm:py-28 overflow-hidden border-t border-white/5 bg-canvas"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/3 -z-10 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-1/4 -z-10 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08),transparent_70%)] blur-3xl"
      />

      <SectionContainer>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <GradientBadge>Next-Gen Frontiers</GradientBadge>
          <AnimatedHeading as="h2" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Innovation Hub
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            A futuristic showcase outlining technical research, system architecture blueprints, technology roadmaps, and emerging software visions.
          </p>
        </div>

        {/* BENTO GRID OF INNOVATION CARDS */}
        <div data-hub-grid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {INNOVATION_CARDS.map((card) => {
            const IconComp = card.icon

            return (
              <SpotlightCard
                key={card.id}
                data-hub-card
                className="group relative bento-card bento-card-hover p-6 sm:p-7 flex flex-col justify-between border border-white/10 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              >
                <div>
                  {/* Top Badge Bar */}
                  <div className="flex items-center justify-between">
                    <div
                      className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition-colors group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10"
                      style={{ color: card.color }}
                    >
                      <IconComp className="size-5" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-cyan-300">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-5">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-cyan-400">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                {/* Footer Status Pill */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                    {card.status}
                  </span>
                  <ArrowUpRight className="size-4 text-zinc-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </SpotlightCard>
            )
          })}
        </div>

        {/* INNOVATION HUB FEATURED ROADMAP BANNER */}
        <div className="mt-10 bento-card p-6 sm:p-8 border border-cyan-500/30 bg-gradient-to-r from-blue-950/30 via-zinc-900/60 to-purple-950/30 relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 size-52 rounded-full bg-cyan-500/10 blur-3xl" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl border border-cyan-400/40 bg-cyan-500/20 text-cyan-300 shrink-0">
                <Cpu className="size-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                  Innovation Hub Telemetry
                </span>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  Continuous Engineering & Emerging Tech Exploration
                </h4>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 text-xs font-mono text-emerald-300 shrink-0">
              <Sparkles className="size-3.5 text-emerald-400" />
              VIT Vellore MCA Research Focus
            </span>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
