import { cn } from '@/lib/utils'

type BorderBeamProps = {
  className?: string
}

export function BorderBeam({ className }: BorderBeamProps) {
  return (
    <span
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]',
        className,
      )}
    >
      <span className="absolute inset-[-1px] rounded-[inherit] [background:conic-gradient(from_var(--beam,0deg),transparent_0%,rgba(34,211,238,0.9)_8%,transparent_18%)] opacity-70 [animation:spin_6s_linear_infinite]" />
    </span>
  )
}
