import { Mask } from './Reveal'
import { Arrow } from './Bits'
import { goTo } from '../hooks/cursor'
import { profile } from '../data/profile'

const links = [['WORK', 'work'], ['SKILLS', 'skills'], ['EXPERIENCE', 'experience'], ['CONTACT', 'contact']]
export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <span className="status"><i />{profile.status}</span>
      <ul>
        {links.map(([l, id]) => (
          <li key={id}><button className="nav-link" onClick={() => goTo(id)}><Mask delay={0.5}>{l}</Mask></button></li>
        ))}
      </ul>
      <button className="btn btn-dark btn-sm" onClick={() => goTo('contact')}><span className="btn-in"><span>GET IN TOUCH</span><Arrow /></span></button>
    </nav>
  )
}
