import type { SocialLink } from '@/types'
import { SITE } from '@/constants/site'

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: SITE.github, icon: 'github' },
  { label: 'LinkedIn', href: SITE.linkedin, icon: 'linkedin' },
  { label: 'LeetCode', href: SITE.leetcode, icon: 'leetcode' },
  { label: 'Kaggle', href: SITE.kaggle, icon: 'kaggle' },
  { label: 'Email', href: `mailto:${SITE.email}`, icon: 'mail' },
]
