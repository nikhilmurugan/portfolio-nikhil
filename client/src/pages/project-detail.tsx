import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Brain,
  Cpu,
  Target,
  Lightbulb,
} from 'lucide-react'
import { PROJECTS_DATA } from '@/data/projects'
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram'
import { ProjectUiMockup } from '@/components/ui/project-ui-mockup'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()

  const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === projectId)
  const project = projectIndex !== -1 ? PROJECTS_DATA[projectIndex] : null

  const prevProject = projectIndex > 0 ? PROJECTS_DATA[projectIndex - 1] : null
  const nextProject =
    projectIndex !== -1 && projectIndex < PROJECTS_DATA.length - 1
      ? PROJECTS_DATA[projectIndex + 1]
      : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (project) {
      document.title = `${project.title} — Nikhil Murugan D P`
    }
  }, [project, projectId])

  if (!project) {
    return (
      <main id="content" className="min-h-[85vh] pt-32 pb-20 px-4 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 sm:p-12 backdrop-blur-2xl">
          <AlertTriangle className="size-10 text-amber-400 mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-white">Project Not Found</h1>
          <p className="mt-2 text-sm text-zinc-400 max-w-md mx-auto">
            The requested project identifier does not match any current portfolio systems.
          </p>
          <div className="mt-6">
            <Link
              to="/#projects"
              className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'rounded-full gap-2')}
            >
              <ArrowLeft className="size-4" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main id="content" className="relative min-h-screen pt-28 sm:pt-36 pb-24 overflow-x-hidden">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 left-1/2 -z-10 size-[800px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ========================================================================= */}
        {/* TOP BREADCRUMB & BACK ACTION BAR */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Projects</span>
            </Link>
            <span className="text-zinc-600 font-mono">/</span>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono text-cyan-200">
              <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {project.status}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. PROJECT TITLE, CATEGORY & 2. EXECUTIVE OVERVIEW */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-10 backdrop-blur-2xl overflow-hidden shadow-2xl">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 size-96 rounded-full blur-3xl opacity-25"
            style={{ backgroundColor: project.accentColor }}
          />

          <div className="relative z-10 space-y-5">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono font-medium text-cyan-300 backdrop-blur-md">
                <Sparkles className="size-3 text-cyan-400" />
                {project.category}
              </span>
              {project.filterCategories.map((sub) => (
                <span
                  key={sub}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-mono text-zinc-400"
                >
                  {sub}
                </span>
              ))}
            </div>

            {/* Title & Tagline */}
            <div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {project.title}
              </h1>
              <p className="mt-2.5 font-mono text-sm sm:text-base text-cyan-400">
                {project.tagline}
              </p>
            </div>

            {/* Executive Overview */}
            <div className="pt-2 border-t border-white/5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                Executive Overview
              </span>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans max-w-4xl">
                {project.summary}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. PROBLEM STATEMENT & 4. PROPOSED SOLUTION (Balanced 2-Column Desktop) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Statement */}
          <SpotlightCard className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold pb-2 border-b border-white/5">
                <AlertTriangle className="size-4 text-amber-400 shrink-0" />
                Problem Statement
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans pt-1">
                {project.story.problem || project.problemHighlight}
              </p>
            </div>
          </SpotlightCard>

          {/* Proposed Solution */}
          <SpotlightCard className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold pb-2 border-b border-white/5">
                <Zap className="size-4 text-emerald-400 shrink-0" />
                Proposed Solution
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans pt-1">
                {project.story.solution || project.solutionHighlight}
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE INTERFACE ARCHITECTURE PREVIEW */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
            <Sparkles className="size-4 text-cyan-400" />
            <h2 className="text-xs font-mono tracking-widest text-zinc-300 uppercase font-semibold">
              Interactive Interface Preview
            </h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-4 sm:p-6 backdrop-blur-2xl shadow-xl">
            <ProjectUiMockup project={project} />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. KEY FEATURES & CAPABILITIES */}
        {/* ========================================================================= */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
            <ShieldCheck className="size-4 text-cyan-400" />
            <h2 className="text-xs font-mono tracking-widest text-zinc-300 uppercase font-semibold">
              Key Features &amp; Engineering Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat) => (
              <SpotlightCard
                key={feat.title}
                className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 flex items-start gap-3.5 hover:border-cyan-400/30 transition-colors"
              >
                <CheckCircle2 className="size-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    {feat.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-300 leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {project.capabilities && project.capabilities.length > 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                Granular Technical Capabilities
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

        {/* ========================================================================= */}
        {/* 6. ARCHITECTURE & WORKFLOW */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
            <Cpu className="size-4 text-cyan-400" />
            <h2 className="text-xs font-mono tracking-widest text-zinc-300 uppercase font-semibold">
              System Architecture &amp; Execution Pipeline
            </h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-2xl shadow-xl">
            <ArchitectureDiagram
              title={project.architecture.title}
              description={project.architecture.description}
              steps={project.architecture.steps}
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 7. TECHNOLOGY STACK BREAKDOWN & SELECTION RATIONALE */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
            <Layers className="size-4 text-purple-400" />
            <h2 className="text-xs font-mono tracking-widest text-zinc-300 uppercase font-semibold">
              Technology Stack Breakdown &amp; Selection Rationale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.stack.map((item) => (
              <SpotlightCard
                key={item.name}
                className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <h3 className="font-display text-sm font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="rounded-md border border-cyan-500/20 bg-cyan-950/30 px-2 py-0.5 text-[10px] font-mono text-cyan-300">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-zinc-300 leading-relaxed font-sans">
                    <span className="font-mono text-zinc-400">Why selected: </span>
                    {item.why}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 8. AI & MACHINE LEARNING METHODS (WHERE APPLICABLE) */}
        {/* ========================================================================= */}
        {project.aiMethods && project.aiMethods.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-white/5">
              <Brain className="size-4 text-cyan-400" />
              <h2 className="text-xs font-mono tracking-widest text-cyan-300 uppercase font-semibold">
                AI &amp; Machine Learning Methodologies
              </h2>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-950/[0.08] p-6 sm:p-8 backdrop-blur-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.aiMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs text-zinc-200"
                  >
                    <span className="size-2 rounded-full bg-cyan-400 mt-1 shrink-0" />
                    <span className="leading-relaxed">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 9. IMPLEMENTATION STATUS & PROGRESS */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
            <Target className="size-4 text-cyan-400" />
            <h2 className="text-xs font-mono tracking-widest text-zinc-300 uppercase font-semibold">
              Implementation Status &amp; Engineering Progress
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-2xl space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Current Status: {project.status}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {project.story.journey}
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 10. CHALLENGES, LIMITATIONS & FUTURE SCOPE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical Challenges & Learnings */}
          <SpotlightCard className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold pb-2 border-b border-white/5">
              <AlertTriangle className="size-4" />
              Technical Challenges &amp; Learnings
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              <strong className="text-white">Primary Challenge:</strong> {project.story.challenge}
            </p>
            <div className="pt-2">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Key Takeaways:
              </span>
              <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                {project.story.learnings.map((lrn, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span>{lrn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>

          {/* Future Scope & Roadmap */}
          <SpotlightCard className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold pb-2 border-b border-white/5">
              <Lightbulb className="size-4" />
              Future Scope &amp; Roadmap
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Planned architectural enhancements &amp; feature extensions:
            </p>
            <ul className="space-y-2.5 text-xs text-zinc-300 font-sans pt-1">
              {project.story.futureEnhancements.map((fut, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">•</span>
                  <span>{fut}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM PAGINATION & NAVIGATION */}
        {/* ========================================================================= */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            {prevProject ? (
              <button
                type="button"
                onClick={() => navigate(`/projects/${prevProject.id}`)}
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                <span>Prev: {prevProject.title.split('—')[0].trim()}</span>
              </button>
            ) : (
              <span className="text-xs font-mono text-zinc-600">First Project</span>
            )}
          </div>

          <div>
            <Link
              to="/#projects"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'md' }),
                'rounded-full gap-2 border-white/15 bg-white/5 text-xs font-mono hover:text-white',
              )}
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          <div>
            {nextProject ? (
              <button
                type="button"
                onClick={() => navigate(`/projects/${nextProject.id}`)}
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
              >
                <span>Next: {nextProject.title.split('—')[0].trim()}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <span className="text-xs font-mono text-zinc-600">Last Project</span>
            )}
          </div>
        </div>

      </div>
    </main>
  )
}
