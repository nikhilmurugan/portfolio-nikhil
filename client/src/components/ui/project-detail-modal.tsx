import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Target,
  Brain,
  Cpu,
  ArrowLeft,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react'
import type { FlagshipProject } from '@/data/projects'
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram'
import { ProjectUiMockup } from '@/components/ui/project-ui-mockup'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { Button } from '@/components/ui/button'

type ProjectDetailModalProps = {
  project: FlagshipProject | null
  onClose: () => void
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/85 backdrop-blur-2xl cursor-pointer"
        />

        {/* Modal Outer Center Wrapper */}
        <div className="min-h-full flex items-center justify-center p-4 sm:p-6 md:p-10 relative z-10 pointer-events-none">
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="my-6 w-full max-w-5xl rounded-3xl border border-white/15 bg-zinc-950/95 p-6 sm:p-10 shadow-2xl backdrop-blur-3xl pointer-events-auto"
          >
          {/* Top Bar Action */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <button
              onClick={onClose}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Projects</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:border-white/30 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* 1. PROJECT TITLE & CATEGORY + 2. EXECUTIVE OVERVIEW */}
          <div className="relative mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 size-80 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: project.accentColor }}
            />

            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 text-xs font-mono font-bold text-cyan-300">
                  {project.category}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-mono text-zinc-300">
                  Status: {project.status}
                </span>
              </div>

              <div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-1.5 font-mono text-sm sm:text-base text-cyan-300">
                  {project.tagline}
                </p>
              </div>

              {/* 2. Executive Overview */}
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                  Executive Overview
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                  {project.summary}
                </p>
              </div>
            </div>
          </div>

          {/* 3. PROBLEM STATEMENT & 4. PROPOSED SOLUTION */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                <AlertTriangle className="size-4 text-amber-400" />
                Problem Statement
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {project.story.problem || project.problemHighlight}
              </p>
            </div>

            <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                <Zap className="size-4 text-emerald-400" />
                Proposed Solution
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {project.story.solution || project.solutionHighlight}
              </p>
            </div>
          </div>

          {/* 5. KEY FEATURES & CAPABILITIES */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-cyan-400" />
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                Key Features &amp; Capabilities
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feat) => (
                <div
                  key={feat.title}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <CheckCircle2 className="size-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display text-sm font-semibold text-white">
                      {feat.title}
                    </h5>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {project.capabilities && project.capabilities.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                  Technical Capabilities Breakdown
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <span className="size-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* UI PREVIEW MOCKUP */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="size-4 text-cyan-400" />
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                Interactive Interface Preview
              </span>
            </div>
            <ProjectUiMockup project={project} />
          </div>

          {/* 6. ARCHITECTURE & WORKFLOW */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="size-4 text-cyan-400" />
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                System Architecture &amp; Execution Workflow
              </span>
            </div>
            <ArchitectureDiagram
              title={project.architecture.title}
              description={project.architecture.description}
              steps={project.architecture.steps}
            />
          </div>

          {/* 7. TECHNOLOGY STACK BREAKDOWN */}
          <div className="mt-8 rounded-3xl p-6 sm:p-8 border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="size-4 text-purple-400" />
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                Technology Stack Breakdown &amp; Selection Rationale
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {project.stack.map((item) => (
                <SpotlightCard key={item.name} className="p-4 bg-white/[0.02]">
                  <div className="flex items-center justify-between">
                    <h5 className="font-display text-sm font-semibold text-white">
                      {item.name}
                    </h5>
                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-cyan-300">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                    <span className="font-mono text-zinc-400">Why selected: </span>
                    {item.why}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* 8. AI / MACHINE LEARNING METHODS (WHERE APPLICABLE) */}
          {project.aiMethods && project.aiMethods.length > 0 && (
            <div className="mt-8 rounded-3xl p-6 sm:p-8 border border-cyan-500/20 bg-cyan-950/[0.08]">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="size-4 text-cyan-400" />
                <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase font-semibold">
                  AI &amp; Machine Learning Methodologies
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.aiMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-zinc-200"
                  >
                    <span className="size-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. IMPLEMENTATION STATUS & PROGRESS */}
          <div className="mt-8 rounded-2xl p-6 border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-3">
              <Target className="size-4 text-cyan-400" />
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                Implementation Status &amp; Engineering Progress
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <strong className="text-white">Current Status:</strong> {project.status}. {project.story.journey}
            </p>
          </div>

          {/* 10. CHALLENGES, LIMITATIONS & FUTURE SCOPE */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Technical Challenges & Learnings */}
            <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                <AlertTriangle className="size-4" />
                Challenges &amp; Key Learnings
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-zinc-200">Key Challenge:</strong> {project.story.challenge}
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-300 font-sans pt-1">
                {project.story.learnings.map((lrn, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span>{lrn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Scope & Roadmap */}
            <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold">
                <Lightbulb className="size-4" />
                Future Scope &amp; Enhancements
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                {project.story.futureEnhancements.map((fut, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>{fut}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Close Button */}
          <div className="mt-10 flex justify-center border-t border-white/10 pt-6">
            <Button
              type="button"
              onClick={onClose}
              variant="secondary"
              size="md"
              className="gap-2 rounded-full px-8 py-2 text-xs font-mono border-white/20 text-zinc-300 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="size-4" />
              <span>Back to Projects</span>
            </Button>
          </div>
        </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}
