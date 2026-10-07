import { ReactNode } from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import { EASE } from '../hooks/cursor'

interface P { children: ReactNode; delay?: number; y?: number; inView?: boolean; className?: string }
const trig = (inView: boolean, _a: object, b: TargetAndTransition) =>
  inView ? { whileInView: b, viewport: { once: true, amount: 0.15 } } : { animate: b }

export function Reveal({ children, delay = 0, y = 26, inView = true, className }: P) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} {...trig(inView, {}, { opacity: 1, y: 0 })}
      transition={{ duration: 0.8, ease: EASE, delay }}>{children}</motion.div>
  )
}
/** Line mask: text slides up out of a clipped box. */
export function Mask({ children, delay = 0, inView = true, className }: P) {
  return (
    <span className={`mask ${className ?? ''}`}>
      <motion.span className="mask-in" data-t={typeof children === 'string' ? children : undefined} initial={{ y: '108%' }} {...trig(inView, {}, { y: '0%' })}
        transition={{ duration: 0.95, ease: EASE, delay }}>{children}</motion.span>
    </span>
  )
}
