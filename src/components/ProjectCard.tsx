import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Tag, Placeholder } from './Bits'
import { Project } from '../data/projects'
import { EASE } from '../hooks/cursor'

export default function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article layout className="card"
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
      exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.8, ease: EASE, delay: (i % 2) * 0.12 }}>
      <Link to={`/project/${p.slug}`} data-cursor="view" aria-label={`${p.name} — ${p.title}. Open project`}>
        <div className="card-img">
          <span className={`badge ${p.status}`}>{p.badge}</span>
          {p.image ? <img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" /> : <Placeholder label="NODEPATTERN" caption="Building — illustrative visual" />}
        </div>
        <h3>{p.name} — {p.title}</h3>
      </Link>
      <div className="tags">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
    </motion.article>
  )
}
