import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { useMagnetic } from '@/hooks/use-magnetic'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-medium tracking-[-0.01em] transition-[box-shadow,background] duration-300 select-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-white text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_40px_-18px_rgba(255,255,255,0.45)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_0_40px_-8px_rgba(34,211,238,0.35)]',
        secondary: 'glass text-zinc-100 hover:bg-white/10',
        ghost: 'bg-transparent text-zinc-200 hover:bg-white/[0.06]',
        magnetic:
          'bg-gradient-to-r from-cyan-200 via-white to-violet-200 text-zinc-950 shadow-[0_20px_50px_-20px_rgba(34,211,238,0.55)]',
      },
      size: {
        sm: 'h-9 px-4',
        md: 'h-11 px-5',
        lg: 'h-12 px-6 text-[0.95rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const reduced = usePrefersReducedMotion()
  const magnetic = useMagnetic<HTMLButtonElement>(
    variant === 'magnetic' || variant === 'primary' ? 0.2 : 0.1,
  )
  const Comp = asChild ? Slot : 'button'

  return (
    <motion.div
      className="inline-flex"
      whileHover={reduced ? undefined : { y: -2 }}
      whileTap={reduced ? undefined : { scale: 0.985 }}
    >
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={asChild ? undefined : magnetic.ref}
        onPointerMove={reduced || asChild ? undefined : magnetic.onPointerMove}
        onPointerLeave={reduced || asChild ? undefined : magnetic.onPointerLeave}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100"
        />
      </Comp>
    </motion.div>
  )
}

export { buttonVariants }
