import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Home from './pages/Home'
import Project from './pages/Project'
import Cursor from './components/Cursor'
import { EASE } from './hooks/cursor'

const fine = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

export default function App() {
  const loc = useLocation()
  const scroller = useRef<HTMLDivElement>(null)
  const detail = loc.pathname.startsWith('/project')
  useEffect(() => { if (!loc.hash && scroller.current) scroller.current.scrollTop = 0 }, [loc.pathname, loc.hash])
  return (
    <MotionConfig reducedMotion="user">
      <div className="stage" aria-hidden="true" />
      {fine && <Cursor />}
      <div className="canvas">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={detail ? loc.pathname : 'home'} className={`page ${detail ? 'page-detail' : ''}`}
            initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, ease: EASE } }}
            exit={{ scale: 0.97, opacity: 0, transition: { duration: 0.28, ease: 'easeIn' } }}>
            {detail && <div className="sweep" />}
            <div className="scroller" ref={scroller}>
              <Routes location={loc}>
                <Route path="/" element={<Home />} />
                <Route path="/project/:slug" element={<Project />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
