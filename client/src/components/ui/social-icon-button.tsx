import { Mail, Phone, Globe } from 'lucide-react'
import type { SocialLink } from '@/types'
import { cn } from '@/lib/utils'
import { useMagnetic } from '@/hooks/use-magnetic'
import { GithubIcon, LinkedinIcon, LeetcodeIcon, KaggleIcon } from '@/components/ui/icons'

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
  kaggle: KaggleIcon,
  mail: Mail,
  phone: Phone,
  globe: Globe,
} as const

type SocialIconButtonProps = {
  social: SocialLink
  className?: string
}

export function SocialIconButton({ social, className }: SocialIconButtonProps) {
  const Icon = icons[social.icon] || Globe
  const magnetic = useMagnetic<HTMLAnchorElement>(0.35)

  return (
    <a
      ref={magnetic.ref}
      href={social.href}
      target={social.href.startsWith('http') ? '_blank' : undefined}
      rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={social.label}
      title={social.label}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
      className={cn(
        'grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_28px_-8px_rgba(34,211,238,0.7)]',
        className,
      )}
    >
      <Icon className="size-4" />
    </a>
  )
}
