import { Link } from 'react-router-dom'
import { ArrowLeft, Download, ExternalLink, FileText, Sparkles } from 'lucide-react'
import { SITE } from '@/constants/site'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ResumePage() {

  return (
    <main id="content" className="relative min-h-[100svh] pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </Link>
          <span className="text-zinc-600">/</span>
          <div className="flex items-center gap-2">
            <FileText className="size-4 text-cyan-400" />
            <h1 className="font-display text-sm sm:text-base font-bold text-white">
              Official Resume
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2 py-0.5 text-[10px] font-mono text-cyan-300">
              <Sparkles className="size-2.5" />
              PDF Document
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <a
            href={SITE.resumePath}
            download={SITE.resumeDownloadName}
            className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), 'rounded-full gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]')}
          >
            <Download className="size-3.5" />
            Download PDF
          </a>

          <a
            href={SITE.resumePath}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'rounded-full gap-2 border-white/15 bg-white/5')}
          >
            <ExternalLink className="size-3.5" />
            Open in New Tab
          </a>
        </div>
      </div>

      {/* PDF View Container */}
      <div className="flex-1 w-full min-h-[75vh] rounded-2xl border border-white/15 bg-zinc-950/90 shadow-2xl overflow-hidden relative flex flex-col">
        <iframe
          src={`${SITE.resumePath}#toolbar=1`}
          title="Nikhil Murugan D P Resume"
          className="w-full flex-1 min-h-[75vh] border-0 bg-white"
        />
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
    </main>
  )
}
