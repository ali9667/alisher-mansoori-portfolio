import { useEffect, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import { cursorX, cursorY } from '../hooks/cursor'

/** Bubble cursor. Position = MotionValues, mode = dataset toggle (no React re-render). */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(cursorX, { stiffness: 520, damping: 42, mass: 0.35 })
  const y = useSpring(cursorY, { stiffness: 520, damping: 42, mass: 0.35 })
  useEffect(() => {
    const move = (e: PointerEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY) }
    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]')
      if (ref.current) ref.current.dataset.mode = t?.dataset.cursor ?? ''
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerover', over) }
  }, [])
  return (
    <motion.div ref={ref} className="cursor" style={{ x, y }} aria-hidden="true">
      <span className="cursor-b">↗</span>
    </motion.div>
  )
}
