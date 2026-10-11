import { type PointerEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'
import type { FlagshipProject } from '@/data/projects'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { ProjectUiMockup } from '@/components/ui/project-ui-mockup'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: FlagshipProject
  onSelectCaseStudy?: (project: FlagshipProject) => void
}

export function ProjectCard({ project, onSelectCaseStudy }: ProjectCardProps) {
  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  const isElectraNav = project.id === 'electranav'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="group relative w-full"
    >
      <SpotlightCard
        onPointerMove={handlePointerMove}
        className={cn(
          'relative w-full overflow-hidden rounded-3xl border bg-zinc-950/85 p-6 sm:p-8 lg:p-9 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]',
          isElectraNav
            ? 'border-cyan-500/25 shadow-[0_0_30px_rgba(34,211,238,0.06)]'
            : 'border-white/10',
        )}
      >
        {/* Subtle Ambient Project Accent */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute -top-40 -right-40 size-80 rounded-full opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-30',
            project.id === 'electranav' && 'bg-cyan-500',
            project.id === 'researchpilot-ai' && 'bg-purple-500',
            project.id === 'twinsphere' && 'bg-blue-500',
            project.id === 'nexora' && 'bg-emerald-500',
          )}
        />

        {/* Horizontal 2-Column Layout on Desktop (~55% Left Info, ~45% Right Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Project Details & Context (~55% width on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Status Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono font-medium text-cyan-300 backdrop-blur-md">
                  <Sparkles className="size-3 text-cyan-400" />
                  {project.category}
                </span>

                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 text-[11px] font-mono text-cyan-200">
                  {project.status}
                </span>

                {isElectraNav && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-950/40 px-2.5 py-0.5 text-[11px] font-mono text-amber-300">
                    Flagship 01
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div className="mt-4">
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1.5 font-mono text-xs sm:text-sm text-cyan-400/90 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Concise Overview */}
              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-300 font-sans">
                {project.summary}
              </p>

              {/* Problem Addressed & Key Solution */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-2.5">
                <div className="flex items-start gap-2 text-xs">
                  <AlertCircle className="size-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    <span className="font-mono text-amber-300 font-semibold">Problem: </span>
                    {project.problemHighlight}
                  </p>
                </div>
                <div className="flex items-start gap-2 text-xs pt-2 border-t border-white/5">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    <span className="font-mono text-emerald-300 font-semibold">Solution: </span>
                    {project.solutionHighlight}
                  </p>
                </div>
              </div>

              {/* Key Features Preview */}
              {project.features && project.features.length > 0 && (
                <div className="mt-4">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Key Capabilities & Features
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((f) => (
                      <div
                        key={f.title}
                        className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.015] px-3 py-1.5 text-xs text-zinc-300"
                      >
                        <span className="size-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate">{f.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Stack & Primary Action */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* Technology Stack Chips */}
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item.name}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-zinc-300 hover:border-cyan-400/30 transition-colors"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Single Prominent Action Button: View Project Details */}
              <div className="pt-2">
                <Link
                  to={`/projects/${project.id}`}
                  onClick={() => onSelectCaseStudy?.(project)}
                  className={cn(
                    buttonVariants({ variant: 'primary', size: 'md' }),
                    'w-full sm:w-auto px-6 py-2.5 gap-2 rounded-full font-display text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300',
                  )}
                >
                  <span>View Project Details</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: High-Quality UI Preview (~45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center w-full">
            <ProjectUiMockup project={project} />
          </div>

        </div>
      </SpotlightCard>
    </motion.div>
  )
}
