import type { SVGProps } from 'react'

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="GitHub"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="LinkedIn"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function LeetcodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="LeetCode"
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 4.735 5.26 5.26 0 0 0 2.296 2.164 5.342 5.342 0 0 0 2.408.563c.63 0 1.25-.108 1.832-.32a5.367 5.367 0 0 0 2.18-1.554l5.363-5.74a1.376 1.376 0 0 0-.031-1.938 1.376 1.376 0 0 0-1.938.031l-5.363 5.74a2.613 2.613 0 0 1-1.063.757 2.607 2.607 0 0 1-.893.156 2.593 2.593 0 0 1-1.17-.273 2.556 2.556 0 0 1-1.116-1.05 2.686 2.686 0 0 1-.132-2.3 2.555 2.555 0 0 1 .587-1.022l3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0z" />
      <path d="M9.827 10.609a1.376 1.376 0 0 0-1.938-.031l-3.854 4.126a1.376 1.376 0 1 0 2.008 1.874l3.854-4.126a1.376 1.376 0 0 0-.07-1.843z" fill="#FFA116" />
      <path d="M14.717 12.396a1.376 1.376 0 0 0-1.938.031l-1.026 1.098a1.376 1.376 0 1 0 2.008 1.874l1.026-1.098a1.376 1.376 0 0 0-.07-1.905z" fill="#FFA116" />
      <path d="M22.08 11.562h-9.155a1.376 1.376 0 1 0 0 2.752h9.155a1.376 1.376 0 1 0 0-2.752z" fill="#FFA116" />
    </svg>
  )
}

export function KaggleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Kaggle"
      {...props}
    >
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.342-.246.534-.246h3.369c.164 0 .258.05.281.151.023.113-.024.212-.141.298l-7.399 7.307 7.551 7.625c.105.105.152.205.141.302z" />
    </svg>
  )
}
