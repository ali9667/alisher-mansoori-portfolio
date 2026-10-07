import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Ghost, Arrow } from '../components/Bits'
import { Mask, Reveal } from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { profile } from '../data/profile'

const filters = [['all', 'All'], ['built', 'Built'], ['building', 'Building']] as const
export default function Work() {
  const [f, setF] = useState<string>('all')
  const list = projects.filter(p => f === 'all' || p.status === f)
  return (
    <section className="sec sec-grey" id="work">
      <Ghost>PORTFOLIO</Ghost>
      <h2 className="sec-h center"><Mask>/SELECTED WORK</Mask></h2>
      <Reveal delay={0.25} className="filters">
        <div role="tablist" aria-label="Filter projects">
          {filters.map(([k, l]) => <button key={k} role="tab" aria-selected={f === k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{l}</button>)}
        </div>
        <a className="btn btn-light btn-sm" href={profile.socials[0].href} target="_blank" rel="noopener noreferrer"><span className="btn-in"><span>View GitHub</span><Arrow /></span></a>
      </Reveal>
      <div className="grid">
        <AnimatePresence mode="popLayout">{list.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</AnimatePresence>
      </div>
    </section>
  )
}
