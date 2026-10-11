import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetcodeIcon, KaggleIcon } from '@/components/ui/icons'
import { SITE } from '@/constants/site'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: SITE.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: SITE.linkedin, Icon: LinkedinIcon },
  { label: 'LeetCode', href: SITE.leetcode, Icon: LeetcodeIcon },
  { label: 'Kaggle', href: SITE.kaggle, Icon: KaggleIcon },
  { label: 'Email', href: `mailto:${SITE.email}`, Icon: Mail },
]

const FOOTER_NAV = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Innovation Hub', href: '#innovation-hub' },
  { label: 'Resume (PDF)', href: '/resume' },
  { label: "Let's Connect", href: '#contact' },
]

export function Footer() {

  return (
    <footer className="relative z-10 border-t border-white/10 bg-canvas/90 backdrop-blur-2xl pt-10 pb-8 sm:pt-12 sm:pb-8 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_65%)] blur-3xl"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-[1fr_auto_auto]">
          {/* Brand Column */}
          <div className="space-y-3.5">
            <a href="#hero" className="inline-flex items-center gap-3 group">
              <div className="relative grid size-10 place-items-center rounded-full border border-white/20 bg-zinc-950 font-bold text-sm text-white group-hover:border-cyan-400/60 transition-colors">
                <span className="relative z-10">{SITE.shortName}</span>
                <span className="absolute -inset-0.5 rounded-full bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {SITE.name}
                </p>
                <p className="text-[11px] font-mono text-cyan-400">{SITE.title}</p>
              </div>
            </a>

            <p className="max-w-xs text-xs font-mono text-zinc-300 leading-relaxed">
              Software • Intelligence • Emerging Technologies
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all hover:border-cyan-400 hover:text-white hover:bg-cyan-500/10"
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <p className="mb-3.5 text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
              Navigation
            </p>
            <ul className="space-y-1.5">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="size-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links Column */}
          <div>
            <p className="mb-3.5 text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
              Connect
            </p>
            <ul className="space-y-1.5">
              {[  
                { label: 'GitHub', href: SITE.github, Icon: GithubIcon },
                { label: 'LinkedIn', href: SITE.linkedin, Icon: LinkedinIcon },
                { label: 'LeetCode', href: SITE.leetcode, Icon: LeetcodeIcon },
                { label: 'Kaggle', href: SITE.kaggle, Icon: KaggleIcon },
                { label: SITE.email, href: `mailto:${SITE.email}`, Icon: Mail },
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-xs text-zinc-400 transition-colors hover:text-white"
                  >
                    <Icon className="size-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-5">
          <p className="text-[11px] font-mono text-zinc-400 text-left">
            &copy; Nikhil Murugan D P · MCA Student at VIT Vellore
          </p>
          <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500">
            <span>Portfolio 2027</span>
            <span className="text-zinc-700">·</span>
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              Available for Opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
