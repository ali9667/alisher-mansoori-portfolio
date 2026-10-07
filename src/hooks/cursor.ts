import { motionValue } from 'framer-motion'
// Module-level motion values: pointer position never touches React state.
export const cursorX = motionValue(-200)
export const cursorY = motionValue(-200)
export const EASE = [0.22, 1, 0.36, 1] as const
export const goTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}
