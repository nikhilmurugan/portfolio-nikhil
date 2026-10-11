import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function HeroPortrait() {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-[min(100%,400px)]">
      {/* Outer subtle celestial orbital dots */}
      <div className="absolute inset-[-4%] animate-[spin_36s_linear_infinite] opacity-60">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            aria-hidden
            className="absolute top-1/2 left-1/2 size-1 rounded-full bg-cyan-200/60 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-50%) translateX(calc(50% * 0.94))`,
              opacity: i % 2 === 0 ? 0.8 : 0.3,
            }}
          />
        ))}
      </div>

      {/* Restrained Luxury Conic Accent Ring */}
      <motion.div
        aria-hidden
        className="absolute inset-[6%] rounded-full opacity-70"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, #22d3ee 12%, transparent 25%, transparent 55%, #3b82f6 70%, transparent 85%)',
        }}
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      />

      {/* Tonal Depth Ring */}
      <div className="absolute inset-[9.5%] rounded-full bg-[#07090d] shadow-inner" />

      {/* Circular Profile Image Container */}
      <div className="absolute inset-[13%] overflow-hidden rounded-full border border-white/15 bg-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_40px_80px_-36px_rgba(34,211,238,0.45)] backdrop-blur-2xl">
        <img
          src="/nikhil-profile.png"
          alt="Nikhil Murugan D P"
          className="h-full w-full object-cover object-center select-none"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.12),transparent_40%)]" />
      </div>
    </div>
  )
}
