import {
  Code2,
  BrainCircuit,
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { SpotlightCard } from '@/components/ui/spotlight-card'

const CAPABILITY_CARDS = [
  {
    number: '01',
    name: 'Build',
    heading: '01 / Build',
    description:
      'Full-stack and mobile applications, scalable APIs, and maintainable software architecture.',
    techs: ['React', 'Node.js', 'Python', 'Java', 'Flutter'],
    icon: Code2,
    accentColor: '#22d3ee', // Cyan
    glowClass: 'bg-cyan-500/10',
    borderHover: 'hover:border-cyan-400/50',
    badgeClass: 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30',
    tagClass: 'text-cyan-200 border-cyan-500/20 bg-cyan-950/25',
  },
  {
    number: '02',
    name: 'Intelligence',
    heading: '02 / Intelligence',
    description:
      'AI applications and intelligent systems built with machine learning, deep learning, LLMs, RAG, and multi-agent architectures.',
    techs: ['AI', 'ML', 'LLMs', 'RAG', 'Agentic AI'],
    icon: BrainCircuit,
    accentColor: '#a855f7', // Violet
    glowClass: 'bg-purple-500/10',
    borderHover: 'hover:border-purple-400/50',
    badgeClass: 'text-purple-300 bg-purple-950/40 border-purple-500/30',
    tagClass: 'text-purple-200 border-purple-500/20 bg-purple-950/25',
  },
  {
    number: '03',
    name: 'Innovate',
    heading: '03 / Innovate',
    description:
      'Ambient intelligence, digital twins, and cyber-physical systems that connect digital intelligence with real-world decision-making.',
    techs: ['Ambient Intelligence', 'Digital Twins', 'Cyber-Physical Systems'],
    icon: Compass,
    accentColor: '#10b981', // Teal / Green
    glowClass: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-400/50',
    badgeClass: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    tagClass: 'text-emerald-200 border-emerald-500/20 bg-emerald-950/25',
  },
]

export function EngineeringIdentitySection() {
  return (
    <div className="w-full space-y-5 sm:space-y-6">
      {/* ========================================================================= */}
      {/* 1. MAIN HEADING */}
      {/* ========================================================================= */}
      <div className="text-center max-w-3xl lg:max-w-5xl mx-auto space-y-2.5">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-[10px] font-mono tracking-widest text-cyan-300 uppercase shadow-[0_0_20px_rgba(34,211,238,0.12)]">
          <Sparkles className="size-3 text-cyan-400" />
          <span>TECHNICAL VISION &amp; IMPACT</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-4xl font-bold tracking-tight text-white leading-tight lg:whitespace-nowrap">
          Building Intelligent Systems.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Creating Real-World Impact.
          </span>
        </h2>

        <p className="text-xs sm:text-sm font-mono text-cyan-400/90 tracking-wide font-medium">
          Software Development · AI Innovation · Scalable Applications · Intelligent Systems
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 2. THREE CAPABILITY CARDS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4.5 items-stretch">
        {CAPABILITY_CARDS.map((card) => {
          const IconComp = card.icon

          return (
            <SpotlightCard
              key={card.number}
              className={`group bento-card bento-card-hover rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between border border-white/10 h-full transition-all duration-300 bg-zinc-950/75 backdrop-blur-2xl ${card.borderHover} hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] relative overflow-hidden`}
            >
              {/* Subtle ambient lighting */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -top-14 -right-14 size-36 rounded-full ${card.glowClass} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                {/* Card Top Row: Heading & Icon */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {card.heading}
                  </h3>

                  <div
                    className="grid size-8 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ color: card.accentColor }}
                  >
                    <IconComp className="size-4" />
                  </div>
                </div>

                {/* Card Description */}
                <p className="mt-3 text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>

              {/* Technology Labels Row */}
              <div className="mt-5 pt-3 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {card.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-md border px-2 py-0.5 text-[10px] font-mono transition-colors ${card.tagClass}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          )
        })}
      </div>

      {/* ========================================================================= */}
      {/* 3. COMPACT PROFESSIONAL DIRECTION STRIP */}
      {/* ========================================================================= */}
      <SpotlightCard className="bento-card bento-card-hover rounded-2xl px-5 py-4 sm:px-6 sm:py-4.5 border border-white/10 bg-zinc-950/80 backdrop-blur-2xl relative overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 size-72 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-5">
          <div className="space-y-1">
            <h4 className="font-display text-sm sm:text-base font-bold text-white tracking-tight">
              Driven by complex challenges. Focused on intelligent solutions.
            </h4>
            <p className="text-xs sm:text-[13px] text-zinc-300 font-sans leading-relaxed">
              Building scalable software and AI-driven systems that turn ambitious ideas into practical outcomes.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-300 hover:text-white transition-colors group shrink-0"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </SpotlightCard>
    </div>
  )
}
