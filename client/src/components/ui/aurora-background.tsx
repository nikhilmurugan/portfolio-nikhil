export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/4 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28),transparent_62%)] blur-3xl animate-[aurora_22s_ease-in-out_infinite]" />
      <div className="absolute top-10 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22),transparent_64%)] blur-3xl animate-[aurora_26s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-[-20%] left-[10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_66%)] blur-3xl animate-[aurora_30s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#050505_72%)]" />
    </div>
  )
}
