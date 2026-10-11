import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, FileText, Sparkles } from 'lucide-react'
import { SITE } from '@/constants/site'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ResumePreviewModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function ResumePreviewModal({ isOpen, onClose }: ResumePreviewModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll and register escape key when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative z-10 flex flex-col w-full max-w-5xl h-[92vh] max-h-[950px] rounded-2xl sm:rounded-3xl border border-white/15 bg-zinc-950 shadow-2xl overflow-hidden"
          >
            {/* Header Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-zinc-900/90 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="grid size-9 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 shrink-0">
                  <FileText className="size-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm font-bold text-white truncate">
                      Nikhil Murugan D P — Resume
                    </h3>
                    <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2 py-0.5 text-[10px] font-mono text-cyan-300">
                      <Sparkles className="size-2.5" />
                      Official PDF
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-zinc-400 truncate">
                    {SITE.resumeDownloadName}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={SITE.resumePath}
                  download={SITE.resumeDownloadName}
                  className={cn(
                    buttonVariants({ variant: 'primary', size: 'sm' }),
                    'rounded-full gap-1.5 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-xs',
                  )}
                >
                  <Download className="size-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <a
                  href={SITE.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'secondary', size: 'sm' }),
                    'rounded-full gap-1.5 border-white/10 bg-white/5 text-xs hover:border-white/20 text-zinc-300 hover:text-white',
                  )}
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="size-3.5" />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:border-white/25 hover:text-white transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Document Viewer Body */}
            <div className="relative flex-1 bg-zinc-900/60 overflow-hidden flex flex-col">
              <iframe
                src={`${SITE.resumePath}#toolbar=1`}
                title="Nikhil Murugan D P Resume"
                className="w-full flex-1 border-0 bg-white"
              />

              {/* Subtle Mobile/Fallback Helper Bar */}
              <div className="sm:hidden px-4 py-2 border-t border-white/10 bg-zinc-950/90 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Mobile view not rendering?</span>
                <a
                  href={SITE.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 underline font-semibold"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
