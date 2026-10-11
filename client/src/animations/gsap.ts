import gsap from 'gsap'

export function fadeInChildren(root: HTMLElement, reduced: boolean) {
  if (reduced) return
  return gsap.from(root.children, {
    y: 24,
    opacity: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: 'power3.out',
  })
}
