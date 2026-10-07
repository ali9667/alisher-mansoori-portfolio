import { Ghost, Tag } from '../components/Bits'
import { Mask, Reveal } from '../components/Reveal'
import { skills } from '../data/skills'
import { profile } from '../data/profile'

export default function Toolkit() {
  const ed = profile.education
  return (
    <section className="sec sec-white" id="skills">
      <Ghost>SKILLS</Ghost>
      <h2 className="sec-h"><Mask>/SKILLS</Mask></h2>
      <div className="tk">
        <Reveal><dl>
          {Object.entries(skills).map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v.map(s => <Tag key={s}>{s}</Tag>)}</dd></div>
          ))}
        </dl></Reveal>
        <div className="tk-side">
          <Reveal delay={0.1}><h3>Education</h3>
            <p><b>{ed.school}</b><br />{ed.degree}<br />{ed.spec}<br />{ed.duration} · CGPA {ed.cgpa}</p></Reveal>
          <Reveal delay={0.2}><h3>Achievements</h3><ul>{profile.achievements.map(a => <li key={a}>{a}</li>)}</ul></Reveal>
          <Reveal delay={0.3}>
            <a className="silence" href={profile.wattpad} target="_blank" rel="noopener noreferrer" data-cursor="view">
              <small>Self-published on Wattpad</small><strong>The Silence After</strong><span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
