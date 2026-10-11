import { ArrowDownRight, ArrowUpRight, Download, Sparkles, FileText } from 'lucide-react'
import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SITE } from '@/constants/site'
import { buttonVariants } from '@/components/ui/button'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { SectionContainer } from '@/components/ui/section-container'
import { ExpertiseLine } from '@/components/sections/expertise-line'
import { HeroPortrait } from '@/components/sections/hero-portrait'
import { EngineeringIdentitySection } from '@/components/sections/engineering-identity'
import { ResumePreviewModal } from '@/components/ui/resume-preview-modal'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false)

  useLayoutEffect(() => {
    if (reduced || !rootRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-copy] > *', {
        y: 30,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
      })
      gsap.from('[data-hero-portrait]', {
        scale: 0.9,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.12,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className="relative pt-24 pb-8 sm:pt-32 sm:pb-10 overflow-hidden">
      {/* Background Specular Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -z-10 size-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent_65%)] blur-3xl"
      />

      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-10">
          
          {/* Left Column Copy */}
          <div data-hero-copy className="max-w-2xl">
            <GradientBadge>Available for internships & collaborations</GradientBadge>
            
            <p className="mt-6 font-mono text-xs tracking-widest text-cyan-400 uppercase">
              {SITE.greeting}
            </p>
            
            <h1 className="mt-2 font-display text-[clamp(2.8rem,7.5vw,5.5rem)] leading-[0.94] font-bold tracking-tight text-white">
              Nikhil
              <span className="block text-gradient-cyan">
                Murugan D P
              </span>
            </h1>
            
            <p className="mt-4 font-display text-lg sm:text-xl font-semibold text-zinc-200">
              {SITE.title}
            </p>
            
            <div className="mt-3">
              <ExpertiseLine />
            </div>
            
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-300 font-sans text-pretty">
              {SITE.intro}
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ variant: 'primary', size: 'lg' }),
                  'rounded-full gap-2 shadow-[0_0_30px_rgba(59,130,246,0.4)]',
                )}
              >
                Explore Portfolio
                <ArrowUpRight className="size-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsResumePreviewOpen(true)}
                className={cn(
                  buttonVariants({ variant: 'secondary', size: 'lg' }),
                  'rounded-full gap-2 border-white/15 bg-white/5 hover:border-white/25 hover:bg-white/10 text-white',
                )}
              >
                <FileText className="size-4 text-cyan-400" />
                Preview Resume
              </button>
              
              <a
                href={SITE.resumePath}
                download={SITE.resumeDownloadName}
                className={cn(
                  buttonVariants({ variant: 'secondary', size: 'lg' }),
                  'rounded-full gap-2 border-white/15 bg-white/5 hover:border-white/25 hover:bg-white/10 text-white',
                )}
              >
                <Download className="size-4 text-cyan-400" />
                Download Resume
              </a>
              
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'lg' }),
                  'rounded-full gap-2 text-zinc-400 hover:text-white',
                )}
              >
                <Sparkles className="size-4 text-purple-400" />
                Let&apos;s Connect
              </a>
            </div>
          </div>

          {/* Right Column Portrait Frame */}
          <div data-hero-portrait className="relative flex justify-center">
            <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_65%)] blur-3xl animate-pulse-soft" />
            <HeroPortrait />
          </div>
        </div>

        {/* Engineering Identity & Impact Section */}
        <div className="mt-10 sm:mt-12 w-full">
          <EngineeringIdentitySection />
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="group mx-auto mt-6 sm:mt-8 flex w-fit flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase transition-colors hover:text-cyan-400"
        >
          Scroll Down
          <span className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/5 transition duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10">
            <ArrowDownRight className="size-3.5 transition duration-300 group-hover:translate-y-0.5" />
          </span>
        </a>
      </SectionContainer>

      {/* Dedicated Resume Preview Modal */}
      <ResumePreviewModal
        isOpen={isResumePreviewOpen}
        onClose={() => setIsResumePreviewOpen(false)}
      />
    </section>
  )
}
