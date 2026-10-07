import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal, Mask } from '../components/Reveal'
import { Tag, Btn } from '../components/Bits'
import ArchDiagram from '../components/ArchDiagram'
import { projects } from '../data/projects'

const List = ({ title, items }: { title: string; items?: string[] }) => items?.length ? (
  <Reveal className="d-block"><h3>{title}</h3><ul>{items.map(i => <li key={i}>{i}</li>)}</ul></Reveal>
) : null

export default function Project() {
  const { slug } = useParams()
  const p = projects.find(x => x.slug === slug)
  if (!p) return <Navigate to="/" replace />
  const others = projects.filter(x => x.slug !== p.slug)
  return (
    <article className="detail">
      <div className="d-top">
        <Reveal inView={false} delay={0.5}><Link className="btn btn-light btn-sm" to="/#work">← Back</Link></Reveal>
        <Reveal inView={false} delay={0.55}><span className={`badge ${p.status} static`}>{p.badge}</span></Reveal>
      </div>
      <div className="d-head">
        <div>
          <Reveal inView={false} delay={0.65} className="tags">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</Reveal>
          <h1><Mask inView={false} delay={0.75}>{p.name}</Mask></h1>
          <Reveal inView={false} delay={0.85}><p className="d-title">{p.title}</p><p className="d-sum">{p.summary}</p></Reveal>
          <Reveal inView={false} delay={0.95} className="d-cta">
            {p.live && <Btn href={p.live} ext>Live Preview</Btn>}
            {p.github && <Btn href={p.github} dark={!p.live} ext>GitHub</Btn>}
          </Reveal>
        </div>
        <Reveal inView={false} delay={0.9} className="d-meta">
          <dl><dt>Status</dt><dd>{p.status === 'building' ? 'Building' : p.live ? 'Live' : 'Built'}</dd>
            <dt>Stack</dt><dd>{p.stack.join(', ')}</dd></dl>
        </Reveal>
      </div>
      <Reveal inView={false} delay={1.1} y={80} className="d-hero">
        {p.image ? <img src={p.image} alt={p.imageAlt} decoding="async" /> : <ArchDiagram />}
      </Reveal>
      {p.note && <Reveal className="d-note"><p>{p.note}</p></Reveal>}
      <div className="d-cols">
        <List title="Scope" items={p.features} />
        {p.architecture && <Reveal className="d-block"><h3>Architecture</h3><ol className="flow">{p.architecture.map(a => <li key={a}>{a}</li>)}</ol></Reveal>}
        {p.sections.map(sec => <List key={sec.title} title={sec.title} items={sec.items} />)}
        <List title="Technical challenges" items={p.challenges} />
        <List title="Tradeoffs" items={p.tradeoffs} />
      </div>
      <Reveal className="d-block d-stack"><h3>Stack</h3><div className="tags">{p.stack.map(s => <Tag key={s}>{s}</Tag>)}</div></Reveal>
      <section className="more">
        <h2><Link to="/#work" data-cursor="view"><Mask>/MORE WORK</Mask></Link></h2>
        <ul>{others.map(o => <li key={o.slug}><Link to={`/project/${o.slug}`}>{o.name}<span aria-hidden="true">↗</span></Link></li>)}</ul>
      </section>
    </article>
  )
}
