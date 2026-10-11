import { Link } from 'react-router-dom'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'

type PlaceholderPageProps = {
  title: string
  kicker: string
  copy: string
}

export function PlaceholderPage({ title, kicker, copy }: PlaceholderPageProps) {
  return (
    <main id="content" className="flex min-h-[100svh] items-center pt-28 pb-20">
      <SectionContainer narrow>
        <GlassCard className="p-8 sm:p-12">
          <p className="font-accent text-xs tracking-[0.22em] text-cyan-200/80 uppercase">{kicker}</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-zinc-400">{copy}</p>
          <Link to="/" className="mt-8 inline-flex text-sm text-zinc-200 underline-offset-4 hover:underline">
            Return home
          </Link>
        </GlassCard>
      </SectionContainer>
    </main>
  )
}
