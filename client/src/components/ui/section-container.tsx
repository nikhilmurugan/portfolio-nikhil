import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div' | 'header' | 'footer'
  narrow?: boolean
}

export function SectionContainer({
  as: Comp = 'section',
  className,
  children,
  narrow = false,
  ...props
}: SectionContainerProps) {
  return (
    <Comp
      className={cn(
        'relative mx-auto w-full px-5 sm:px-8',
        narrow ? 'max-w-4xl' : 'max-w-[1280px]',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
