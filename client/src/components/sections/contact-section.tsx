import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  MessageSquare,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetcodeIcon, KaggleIcon } from '@/components/ui/icons'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'
import { SITE } from '@/constants/site'
import { SectionContainer } from '@/components/ui/section-container'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { buttonVariants } from '@/components/ui/button'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

type FormState = 'idle' | 'loading' | 'success' | 'error'

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

const CONNECT_CARDS = [
  {
    id: 'phone',
    title: 'Phone',
    label: 'Direct Line',
    identifier: SITE.phone,
    rawCopy: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s+/g, '')}`,
    actionLabel: 'Call / WhatsApp',
    icon: Phone,
    color: '#22d3ee',
    description: 'Direct call or WhatsApp',
    badge: 'Available',
  },
  {
    id: 'email',
    title: 'Email',
    label: 'Primary Outreach',
    identifier: SITE.email,
    rawCopy: SITE.email,
    href: `mailto:${SITE.email}`,
    actionLabel: 'Send Email',
    icon: Mail,
    color: '#3b82f6',
    description: 'Direct email channel',
    badge: 'Preferred',
  },
  {
    id: 'github',
    title: 'GitHub',
    label: 'Code & Projects',
    identifier: '@nikhilmurugan',
    rawCopy: SITE.github,
    href: SITE.github,
    actionLabel: 'View GitHub',
    icon: GithubIcon,
    color: '#f4f4f5',
    description: 'Open-source repositories',
    badge: 'Code',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    label: 'Professional Network',
    identifier: 'in/nikhil-murugan-d-p',
    rawCopy: SITE.linkedin,
    href: SITE.linkedin,
    actionLabel: 'Connect',
    icon: LinkedinIcon,
    color: '#0a66c2',
    description: 'Professional networking',
    badge: 'Network',
  },
  {
    id: 'leetcode',
    title: 'LeetCode',
    label: 'DSA Practice',
    identifier: '@Nikhil_-24',
    rawCopy: SITE.leetcode,
    href: SITE.leetcode,
    actionLabel: 'View LeetCode',
    icon: LeetcodeIcon,
    color: '#ffa116',
    description: 'Algorithms & problem solving',
    badge: 'Algorithms',
  },
  {
    id: 'kaggle',
    title: 'Kaggle',
    label: 'Data Science',
    identifier: '@nikhilmurugandp',
    rawCopy: SITE.kaggle,
    href: SITE.kaggle,
    actionLabel: 'View Kaggle',
    icon: KaggleIcon,
    color: '#20beff',
    description: 'ML datasets & notebooks',
    badge: 'Data Science',
  },
]

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', honeypot: '' })
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-connect-card]', {
        scrollTrigger: {
          trigger: '[data-connect-grid]',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reduced])

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    // Basic spam bot rejection via honeypot field
    if (form.honeypot) {
      setFormState('success')
      return
    }

    const trimmedName = form.name.trim()
    const trimmedEmail = form.email.trim()
    const trimmedMessage = form.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage('Please fill in all required fields.')
      setFormState('error')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please provide a valid email address.')
      setFormState('error')
      return
    }

    setFormState('loading')
    setErrorMessage(null)

    const isEmailJsConfigured = Boolean(
      EMAILJS_CONFIG.serviceId &&
      EMAILJS_CONFIG.templateId &&
      EMAILJS_CONFIG.publicKey &&
      !EMAILJS_CONFIG.serviceId.includes('your_') &&
      !EMAILJS_CONFIG.templateId.includes('your_') &&
      !EMAILJS_CONFIG.publicKey.includes('your_')
    )

    if (!isEmailJsConfigured) {
      setErrorMessage(
        'Email service is not yet configured. Please add your EmailJS credentials to environment variables, or use the direct contact links above.'
      )
      setFormState('error')
      return
    }

    try {
      const templateParams = {
        name: trimmedName,
        from_name: trimmedName,
        user_name: trimmedName,
        email: trimmedEmail,
        from_email: trimmedEmail,
        user_email: trimmedEmail,
        reply_to: trimmedEmail,
        subject: form.subject.trim() || 'Portfolio Inquiry',
        message: trimmedMessage,
        to_email: SITE.email, // nikhilmurugan24@gmail.com
      }

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )

      if (response.status === 200 || response.text === 'OK') {
        setFormState('success')
        setForm({ name: '', email: '', subject: '', message: '', honeypot: '' })
      } else {
        throw new Error(`EmailJS responded with status: ${response.status}`)
      }
    } catch (err: unknown) {
      console.error('EmailJS submission error:', err)
      const errorText =
        err instanceof Error ? err.message : 'Unknown network error'
      setErrorMessage(
        `Failed to send message (${errorText}). Please verify your connection or try again.`
      )
      setFormState('error')
    }
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative z-10 pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden border-t border-white/5 bg-canvas/80 backdrop-blur-3xl"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1),transparent_70%)] blur-3xl"
      />

      <SectionContainer>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <GradientBadge>Open for Opportunities</GradientBadge>
          <AnimatedHeading as="h2" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s Connect
          </AnimatedHeading>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Reach out for internships, software engineering roles, project inquiries, or technical collaborations.
          </p>
        </div>

        {/* BENTO CONNECT CARDS GRID (Priority 10) */}
        <div data-connect-grid className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 items-stretch">
          {CONNECT_CARDS.map((card) => {
            const IconComp = card.icon
            const isCopied = copiedId === card.id

            return (
              <SpotlightCard
                key={card.id}
                data-connect-card
                className="group relative bento-card bento-card-hover p-4 sm:p-5 flex flex-col justify-between border border-white/10 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] bg-zinc-950/70"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white"
                      style={{ color: card.color }}
                    >
                      <IconComp className="size-5" />
                    </motion.div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-mono text-zinc-300">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Clean Identifier */}
                  <div className="mt-4">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                      {card.label}
                    </span>
                    <h3 className="mt-1 font-display text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-cyan-400/90 truncate" title={card.identifier}>
                      {card.identifier}
                    </p>
                    <p className="mt-1.5 text-[11px] text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions Bar: Copy + Destination Link */}
                <div className="mt-5 flex items-center justify-between gap-2 pt-3 border-t border-white/10">
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCopy(card.id, card.rawCopy)
                    }}
                    aria-label={`Copy ${card.title} contact detail`}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-mono text-zinc-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="size-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>

                  <a
                    href={card.href}
                    target={card.id === 'phone' || card.id === 'email' ? '_self' : '_blank'}
                    rel="noreferrer"
                    aria-label={`Open ${card.actionLabel} in new tab`}
                    title={`Open ${card.actionLabel}`}
                    className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                  >
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </SpotlightCard>
            )
          })}
        </div>

        {/* DIRECT OUTREACH FORM CONTAINER */}
        <div className="mt-12 max-w-3xl mx-auto bento-card p-6 sm:p-8 border border-white/10 relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 size-56 rounded-full bg-cyan-500/10 blur-3xl" />
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                Send a Direct Message
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-0.5">
                Contact Form
              </h3>
            </div>
            <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
              <MessageSquare className="size-4" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center gap-2.5"
              >
                <div className="grid size-12 place-items-center rounded-full bg-emerald-500/20 border border-emerald-500/30">
                  <CheckCircle2 className="size-6 text-emerald-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white">Message sent successfully.</h4>
                <p className="text-xs text-zinc-300 max-w-sm">
                  Thank you for reaching out! Your message has been received and Nikhil will respond shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormState('idle')
                    setErrorMessage(null)
                    setForm({ name: '', email: '', subject: '', message: '', honeypot: '' })
                  }}
                  className="mt-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                {/* Honeypot field hidden from users for spam protection */}
                <div aria-hidden="true" className="hidden">
                  <input
                    type="text"
                    name="bot_field"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => setForm((f) => ({ ...f, honeypot: e.target.value }))}
                  />
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Internship / Collaboration"
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 resize-none"
                  />
                </div>

                {formState === 'error' && (
                  <div className="rounded-xl border border-red-500/30 bg-red-950/30 p-3 text-xs text-red-200 space-y-1.5">
                    <div className="flex items-center gap-2 font-medium">
                      <AlertCircle className="size-4 shrink-0 text-red-400" />
                      <span>{errorMessage || 'Unable to deliver message at this time.'}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans pl-6">
                      You can also reach out directly via{' '}
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-cyan-300 underline underline-offset-2 hover:text-white"
                      >
                        {SITE.email}
                      </a>{' '}
                      or through the social channels above.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className={cn(
                    buttonVariants({ variant: 'primary', size: 'md' }),
                    'w-full rounded-xl gap-2 shadow-[0_0_25px_rgba(59,130,246,0.3)] disabled:opacity-60',
                  )}
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </SectionContainer>
    </section>
  )
}
