import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Layout,
  Network,
  Lock,
  Database,
  BarChart3,
  UserCheck,
  Brain,
  Search,
  Bot,
  FileText,
  Car,
  Navigation,
  BatteryCharging,
  Zap,
  Monitor,
  GraduationCap,
  Server,
  Shield,
  PieChart,
  ChevronRight,
  Info,
  Sparkles,
} from 'lucide-react'
import type { ArchitectureStep } from '@/data/projects'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Network,
  Lock,
  Database,
  BarChart3,
  UserCheck,
  Brain,
  Search,
  Bot,
  FileText,
  Car,
  Navigation,
  BatteryCharging,
  Zap,
  Monitor,
  GraduationCap,
  Server,
  Shield,
  PieChart,
}

type ArchitectureDiagramProps = {
  title: string
  description: string
  steps: ArchitectureStep[]
  className?: string
}

export function ArchitectureDiagram({
  title,
  description,
  steps,
  className,
}: ArchitectureDiagramProps) {
  const [activeStepId, setActiveStepId] = useState<string>(steps[0]?.id || '')

  const activeStep = steps.find((s) => s.id === activeStepId) || steps[0]

  return (
    <div className={cn('glass rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden', className)}>
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Sparkles className="size-3.5" />
            Interactive System Flow Diagram
          </div>
          <h4 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
            {title}
          </h4>
          <p className="mt-1 text-xs text-zinc-400">{description}</p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-mono text-zinc-300">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Click Nodes to Inspect Data Contracts</span>
        </div>
      </div>

      {/* Interactive Architecture Flow Nodes */}
      <div className="mt-8 relative pt-4 pb-2">
        {/* Animated Connecting Line Path */}
        <div className="absolute top-1/2 left-4 right-4 hidden lg:block -translate-y-6 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 via-purple-500 to-emerald-400 opacity-30" />

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
          {steps.map((step, index) => {
            const IconComp = ICON_MAP[step.icon] || Server
            const isActive = activeStepId === step.id

            return (
              <div key={step.id} className="relative flex flex-col items-center">
                {/* Node Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStepId(step.id)}
                  type="button"
                  className={cn(
                    'w-full text-left rounded-2xl p-4 border transition-all duration-300 relative group overflow-hidden',
                    isActive
                      ? 'border-cyan-400/60 bg-white/10 shadow-[0_0_25px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/40'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]',
                  )}
                >
                  {/* Step Index Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors">
                      0{index + 1}
                    </span>
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className={cn(
                      'mt-3 grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors',
                      isActive ? 'text-white bg-cyan-500/20 border-cyan-400/40' : 'text-zinc-400',
                    )}
                  >
                    <IconComp className="size-5" style={{ color: step.color }} />
                  </div>

                  {/* Label */}
                  <h5 className="mt-3 font-display text-sm font-semibold text-white leading-snug line-clamp-1">
                    {step.label}
                  </h5>
                  <span className="block mt-0.5 text-[10px] font-mono text-zinc-400">
                    {step.sublabel}
                  </span>
                </motion.button>

                {/* Connector Arrow (Desktop) */}
                {index < steps.length - 1 ? (
                  <ChevronRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-6 translate-x-1/2 size-5 text-cyan-400/40 z-20" />
                ) : null}
              </div>
            )
          })}
        </div>
      </div>

      {/* Active Step Details Panel */}
      <AnimatePresence mode="wait">
        {activeStep ? (
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-blue-950/30 via-zinc-900/60 to-purple-950/30 p-5"
          >
            <div className="flex items-center gap-3">
              <div
                className="grid size-8 place-items-center rounded-lg bg-cyan-500/20 text-cyan-300 shrink-0"
              >
                <Info className="size-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                  Architecture Telemetry • Node Inspection
                </span>
                <h5 className="text-sm font-bold text-white">
                  {activeStep.label} ({activeStep.sublabel})
                </h5>
              </div>
            </div>
            <p className="mt-2.5 text-xs text-zinc-300 leading-relaxed font-sans pl-11">
              {activeStep.details}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
