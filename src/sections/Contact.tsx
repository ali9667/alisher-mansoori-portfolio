import { Mask, Reveal } from '../components/Reveal'
import { Btn } from '../components/Bits'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section className="sec sec-contact" id="contact">
      <h2 className="contact-h"><Mask>OPEN TO</Mask><Mask delay={0.1}>SOFTWARE ENGINEERING ROLES.</Mask></h2>
      <Reveal delay={0.2}><p className="muted contact-p">I’m actively looking for Software Engineering opportunities where I can contribute to backend, full-stack, and distributed systems while continuing to grow as an engineer.</p></Reveal>
      <Reveal delay={0.3} className="hero-cta contact-cta">
        <Btn href={`mailto:${profile.email}`}>GET IN TOUCH</Btn>
        <Btn href={profile.resume} dark={false}>VIEW RESUME</Btn>
      </Reveal>
      <Reveal delay={0.4} className="contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        {profile.socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
      </Reveal>
    </section>
  )
}
