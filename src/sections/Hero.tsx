import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import { Mask, Reveal } from '../components/Reveal'
import { Btn } from '../components/Bits'
import { goTo, EASE } from '../hooks/cursor'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Nav />
      <h1 className="name" aria-label={profile.name}>
        <Mask className="outline" delay={0.15} inView={false}>{profile.first}</Mask>{' '}
        <Mask className="solid" delay={0.28} inView={false}>{profile.last}</Mask>
      </h1>
      <div className="portrait-wrap">
        <motion.img className="portrait" src="/img/portrait.jpg" alt="Portrait of Alisher Mansoori" width={900} height={900}
          initial={{ y: '14%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.1, ease: EASE, delay: 0.25 }} />
      </div>
      <div className="hero-l">
        <Reveal inView={false} delay={0.55}><h2>{profile.roles[0]}</h2></Reveal>
        <Reveal inView={false} delay={0.62}><p className="roles">{profile.roles[1]} · {profile.roles[2]}</p></Reveal>
        <Reveal inView={false} delay={0.68}><p>{profile.blurb}</p></Reveal>
        <Reveal inView={false} delay={0.76}>
          <div className="hero-cta">
            <button className="btn btn-dark" onClick={() => goTo('work')}><span className="btn-in"><span>VIEW MY WORK</span><span className="arr">↗</span></span></button>
            <a className="btn btn-light" href={profile.resume} download><span className="btn-in"><span>DOWNLOAD RESUME</span><span className="arr">↗</span></span></a>
          </div>
        </Reveal>
      </div>
      <ul className="hero-r">
        {profile.socials.map((s, i) => (
          <Reveal key={s.label} inView={false} delay={0.7 + i * 0.07}>
            <li><Btn href={s.href} dark={false} ext>{s.label}</Btn></li>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
