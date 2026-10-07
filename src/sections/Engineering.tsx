import { useState } from 'react'
import { motion } from 'framer-motion'
import { Ghost, Arrow, Placeholder } from '../components/Bits'
import { Mask, Reveal } from '../components/Reveal'
import { engineering } from '../data/engineering'
import { EASE } from '../hooks/cursor'

export default function Engineering() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="sec sec-grey sec-engineering" id="engineering">
      <Ghost>ENGINEERING</Ghost>
      <h2 className="sec-h"><Mask>/ENGINEERING</Mask></h2>
      <ul className="svc">
        {engineering.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <motion.li layout transition={{ duration: 0.55, ease: EASE }} className={open === i ? 'open' : ''}>
              {open === i ? (
                <div className="svc-card">
                  <motion.div className="svc-copy" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}>
                    <h3>{s.title}</h3><p>{s.text}</p>
                  </motion.div>
                  <motion.div className="svc-vis" initial={{ opacity: 0, y: 30, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: -6 }} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}>
                    {s.image ? <img src={s.image} alt="" loading="lazy" decoding="async" /> : <Placeholder label={s.placeholder ?? ''} />}
                  </motion.div>
                  <button className="svc-x" aria-label={`Close ${s.title}`} onClick={() => setOpen(null)}>×</button>
                </div>
              ) : (
                <button className="svc-row" aria-expanded="false" onClick={() => setOpen(i)}>
                  <span>{s.title.toUpperCase()}</span><Arrow />
                </button>
              )}
            </motion.li>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
