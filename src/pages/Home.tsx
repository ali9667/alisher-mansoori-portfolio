import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import Work from '../sections/Work'
import Engineering from '../sections/Engineering'
import Experience from '../sections/Experience'
import Toolkit from '../sections/Toolkit'
import Contact from '../sections/Contact'

export default function Home() {
  const { hash } = useLocation()
  useLayoutEffect(() => {
    const el = hash ? document.getElementById(hash.slice(1)) : null
    if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
  }, [hash])
  return <><Hero /><Work /><Engineering /><Experience /><Toolkit /><Contact /></>
}
