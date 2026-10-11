export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'leetcode' | 'phone' | 'globe' | 'kaggle'
}

export type StatItem = {
  label: string
  value: string
  hint?: string
}

export type ExpertiseLine = string

export type ApiEnvelope<T> = {
  success: boolean
  data: T
  message?: string
}
