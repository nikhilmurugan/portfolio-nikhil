import {
  Bot,
  CheckCircle2,
  Cpu,
  Layers,
  MapPin,
  ShieldCheck,
  Zap,
  BatteryCharging,
  FileText,
  Search,
  FolderGit2,
  Users,
  Briefcase,
  ArrowRight,
  Gauge,
  SlidersHorizontal,
} from 'lucide-react'
import type { FlagshipProject } from '@/data/projects'
import { cn } from '@/lib/utils'

type ProjectUiMockupProps = {
  project: FlagshipProject
  className?: string
}

export function ProjectUiMockup({ project, className }: ProjectUiMockupProps) {
  const { uiMockup } = project

  return (
    <div
      className={cn(
        'relative rounded-2xl border border-white/10 bg-zinc-950/90 p-4 sm:p-5 shadow-2xl backdrop-blur-xl overflow-hidden group flex flex-col justify-between',
        className,
      )}
    >
      {/* Background ambient radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-64 rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* Top Window Bar Controls */}
      <div>
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-zinc-500 truncate max-w-[200px] sm:max-w-none">
              system://{project.id}.preview/telemetry
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
            <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10 truncate max-w-[160px] sm:max-w-none">
              {uiMockup.activeTabLabel}
            </span>
          </div>
        </div>

        {/* Top Metric Header Widget */}
        <div className="mt-3.5 grid grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
            <span className="block text-[9px] font-mono text-zinc-400 uppercase">
              Telemetry Status
            </span>
            <span className="block font-display text-sm sm:text-base font-bold text-white mt-0.5 truncate">
              {uiMockup.primaryStat}
            </span>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
            <span className="block text-[9px] font-mono text-zinc-400 uppercase">
              Operational Metric
            </span>
            <span className="block font-display text-sm sm:text-base font-bold text-cyan-400 mt-0.5 truncate">
              {uiMockup.secondaryStat}
            </span>
          </div>
        </div>

        {/* Dynamic Mockup Body Variant */}
        <div className="mt-3.5">
          {/* 01: ELECTRANAV PREVIEW */}
          {uiMockup.type === 'electranav' ? (
            <div className="space-y-3">
              {/* Route Map Simulation */}
              <div className="relative h-28 w-full rounded-xl border border-cyan-500/30 bg-zinc-900/90 p-2.5 overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-[radial-gradient(#22d3ee15_1px,transparent_1px)] [background-size:12px_12px]" />
                
                {/* Simulated Route Vector */}
                <svg className="absolute inset-0 h-full w-full stroke-cyan-400/70 fill-none" strokeWidth="2.5">
                  <path d="M 20 85 Q 120 20, 220 60 T 380 25" />
                </svg>

                {/* Waypoints */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-300">
                  <span className="flex items-center gap-1 rounded bg-black/70 px-2 py-0.5 border border-white/10">
                    <MapPin className="size-3 text-cyan-400" /> Start: Origin (SoC: 84%)
                  </span>
                  <span className="flex items-center gap-1 rounded bg-black/70 px-2 py-0.5 border border-white/10">
                    <MapPin className="size-3 text-emerald-400" /> Destination: Hub (SoC: 22%)
                  </span>
                </div>

                {/* Charging Station & Battery Indicator */}
                <div className="relative z-10 flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-zinc-950/90 px-2.5 py-0.5 text-[10px] text-amber-300">
                    <Zap className="size-3 text-amber-400" />
                    <span>Station #04 En Route • 18 min Fast Charge</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-950/80 px-2 py-0.5 text-[10px] text-cyan-300 font-mono">
                    <BatteryCharging className="size-3" />
                    <span>Digital Twin SoC Mirror</span>
                  </div>
                </div>
              </div>

              {/* Energy Analysis Mini Bar */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div className="rounded-lg border border-white/5 bg-white/5 p-2 flex items-center justify-between">
                  <span className="text-zinc-400">Elevation Factor</span>
                  <span className="text-cyan-300">+420m Climb (Factor 1.14x)</span>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/5 p-2 flex items-center justify-between">
                  <span className="text-zinc-400">Regen Braking</span>
                  <span className="text-emerald-400">+3.8 kWh Recaptured</span>
                </div>
              </div>
            </div>
          ) : null}

          {/* 02: RESEARCHPILOTAI PREVIEW */}
          {uiMockup.type === 'researchpilot' ? (
            <div className="space-y-2.5 rounded-xl border border-purple-500/30 bg-purple-950/15 p-3">
              <div className="flex items-center justify-between text-xs font-mono text-purple-300">
                <span className="flex items-center gap-1.5 font-bold">
                  <Bot className="size-3.5 text-purple-400" />
                  Multi-Agent Orchestration Flow
                </span>
                <span className="text-[10px] text-cyan-400 font-mono">AGENT SWARM ACTIVE</span>
              </div>

              <div className="space-y-1.5 pt-0.5">
                {[
                  { name: 'Query Decomposer Agent', status: 'Sub-queries Generated', icon: Search, color: 'text-blue-400' },
                  { name: 'RAG Document Retrieval', status: 'Technical Papers Indexed', icon: FileText, color: 'text-cyan-400' },
                  { name: 'Critic & Verification Agent', status: 'Claims Validated Against Source', icon: ShieldCheck, color: 'text-amber-400' },
                  { name: 'Synthesis & Summary Agent', status: 'Structured Output Compiled', icon: CheckCircle2, color: 'text-emerald-400' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-zinc-900/80 px-2.5 py-1.5 text-xs text-zinc-300"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className={cn('size-3.5', item.color)} />
                      <span className="font-mono text-[11px] text-white">{item.name}</span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-400 truncate max-w-[140px]">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* 03: TWINSPHERE PREVIEW */}
          {uiMockup.type === 'twinsphere' ? (
            <div className="space-y-2.5 rounded-xl border border-blue-500/30 bg-blue-950/15 p-3">
              <div className="flex items-center justify-between text-xs font-mono text-blue-300">
                <span className="flex items-center gap-1.5 font-bold">
                  <Layers className="size-3.5 text-cyan-400" />
                  Cyber-Physical Intelligence Pipeline
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">ASSET MIRROR SYNCED</span>
              </div>

              {/* 7-Stage Pipeline Visual Tracker */}
              <div className="rounded-lg border border-white/10 bg-zinc-900/90 p-2 overflow-x-auto scrollbar-none">
                <div className="flex items-center gap-1 min-w-[340px] text-[8px] font-mono text-zinc-400">
                  {['Perception', 'Representation', 'Analysis', 'Prediction', 'Decision', 'Optimization', 'Response'].map((step, idx) => (
                    <div key={step} className="flex items-center gap-1 shrink-0">
                      <span className={cn(
                        'rounded px-1.5 py-0.5 border',
                        idx <= 4
                          ? 'border-cyan-400/40 bg-cyan-950/60 text-cyan-300 font-bold'
                          : 'border-white/10 bg-white/5 text-zinc-400',
                      )}>
                        {step}
                      </span>
                      {idx < 6 && <ArrowRight className="size-2 text-zinc-600" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Twin Status & Predictive Anomaly Insight Cards */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-0.5">
                <div className="rounded-lg border border-white/5 bg-zinc-900/80 p-2">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-1"><Gauge className="size-3 text-cyan-400" /> Asset Health</span>
                    <span className="text-emerald-400 font-bold">98.4% Normal</span>
                  </div>
                  <span className="block mt-1 text-[9px] text-zinc-400">Vibration & thermal trends stable</span>
                </div>

                <div className="rounded-lg border border-white/5 bg-zinc-900/80 p-2">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-1"><SlidersHorizontal className="size-3 text-purple-400" /> Optimization</span>
                    <span className="text-cyan-300 font-bold">Auto-Tuned</span>
                  </div>
                  <span className="block mt-1 text-[9px] text-zinc-400">Load balancing routine dispatched</span>
                </div>
              </div>
            </div>
          ) : null}

          {/* 04: NEXORA PREVIEW */}
          {uiMockup.type === 'nexora' ? (
            <div className="space-y-2.5 rounded-xl border border-cyan-500/30 bg-zinc-900/80 p-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                <span className="flex items-center gap-1.5 font-bold">
                  <FolderGit2 className="size-3.5 text-blue-400" />
                  Multi-Tenant Workspace & Kanban Pipeline
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">TENANT ISOLATED</span>
              </div>

              {/* Kanban Column Preview */}
              <div className="grid grid-cols-3 gap-1.5 text-[9px] font-mono">
                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-1.5 space-y-1">
                  <span className="text-zinc-400 uppercase block font-bold">Backlog</span>
                  <div className="rounded bg-white/5 p-1 text-zinc-300 border border-white/5">Sprint Auth UI</div>
                  <div className="rounded bg-white/5 p-1 text-zinc-300 border border-white/5">API Rate Limiter</div>
                </div>

                <div className="rounded-lg border border-cyan-500/20 bg-cyan-950/20 p-1.5 space-y-1">
                  <span className="text-cyan-400 uppercase block font-bold">In Progress</span>
                  <div className="rounded bg-cyan-950/50 p-1 text-cyan-200 border border-cyan-500/20">CRM Pipeline</div>
                  <div className="rounded bg-cyan-950/50 p-1 text-cyan-200 border border-cyan-500/20">Doc Upload</div>
                </div>

                <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-1.5 space-y-1">
                  <span className="text-emerald-400 uppercase block font-bold">Completed</span>
                  <div className="rounded bg-emerald-950/50 p-1 text-emerald-200 border border-emerald-500/20">RBAC Guard</div>
                  <div className="rounded bg-emerald-950/50 p-1 text-emerald-200 border border-emerald-500/20">Tenant Config</div>
                </div>
              </div>

              {/* Team & CRM Leads Footer */}
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-0.5">
                <span className="flex items-center gap-1">
                  <Users className="size-3 text-cyan-400" /> Team: 8 Members Active
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="size-3 text-blue-400" /> CRM Leads: 12 Active Deals
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* System Footer Bar */}
      <div className="mt-3.5 flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-white/5 pt-2">
        <span className="flex items-center gap-1">
          <Cpu className="size-3 text-cyan-400" />
          ARCHITECTURE: MODULAR ARCHITECTURE
        </span>
        <span className="text-zinc-400">ENGINEERED BY NIKHIL</span>
      </div>
    </div>
  )
}
