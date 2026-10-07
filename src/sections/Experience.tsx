import { useState } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
import { Ghost, Placeholder } from '../components/Bits'
import { Mask, Reveal } from '../components/Reveal'
import { experience } from '../data/experience'
import { cursorX, cursorY, EASE } from '../hooks/cursor'

export default function Experience() {
  const [hover, setHover] = useState<number | null>(null)
  const [open, setOpen] = useState<number | null>(null)
  const x = useSpring(cursorX, { stiffness: 140, damping: 22 })
  const y = useSpring(cursorY, { stiffness: 140, damping: 22 })
  return (
    <section className="sec sec-dark" id="experience">
      <Ghost>EXPERIENCE</Ghost>
      <div className="exp-head">
        <h2 className="sec-h"><Mask>/EXPERIENCE</Mask></h2>
        <Reveal delay={0.2}><span className="muted">{experience.length} internships</span></Reveal>
      </div>
      <ul className="exp">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.1}>
            <li onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)}>
              <button className="exp-row" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                <span><b>{e.company}</b><em>{e.role}</em></span>
                <span className="dates">{e.dates}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div className="exp-more" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: EASE }}>
                    <p className="muted">{e.where}</p>
                    <ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </Reveal>
        ))}
      </ul>
      <motion.div className="exp-prev" style={{ x, y }} aria-hidden="true"
        animate={{ opacity: hover === null ? 0 : 1, scale: hover === null ? 0.85 : 1, rotate: hover === null ? 0 : -7 }} transition={{ duration: 0.35, ease: EASE }}>
        {hover !== null && <Placeholder label={experience[hover].placeholder} caption="Placeholder" />}
      </motion.div>
    </section>
  )
}
