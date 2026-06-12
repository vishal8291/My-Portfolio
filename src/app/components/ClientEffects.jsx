'use client'
import { useState, useEffect, useRef } from 'react'

// ── CINEMATIC LOADING SCREEN ───────────────────────────────────
function LoadingScreen() {
  const [phase, setPhase] = useState('in')

  useEffect(() => {
    if (sessionStorage.getItem('ls-shown')) {
      setPhase('done')
      return
    }
    sessionStorage.setItem('ls-shown', '1')
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setPhase('out'), 1950)
    const t2 = setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`ls-wrap${phase === 'out' ? ' ls-out' : ''}`}>
      {/* HUD corner brackets */}
      <div className="ls-corner ls-tl" />
      <div className="ls-corner ls-tr" />
      <div className="ls-corner ls-bl" />
      <div className="ls-corner ls-br" />

      <div className="ls-body">
        {/* Name — letter by letter */}
        <div className="ls-name">
          {'VISHAL.'.split('').map((c, i) => (
            <span
              key={i}
              className="ls-char"
              style={{
                animationDelay: `${i * 0.072}s`,
                color: c === '.' ? '#818cf8' : '#f1f5f9',
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Neon sweep line */}
        <div className="ls-sweep" />

        {/* Sub label */}
        <p className="ls-role">Full Stack Developer</p>
      </div>

      {/* Bottom progress bar */}
      <div className="ls-bar" />
    </div>
  )
}

// ── CURSOR GLOW ────────────────────────────────────────────────
function CursorGlow() {
  const dotRef = useRef(null)
  const orbRef = useRef(null)
  const state  = useRef({ mx: -600, my: -600, ox: -600, oy: -600 })
  const raf    = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.documentElement.classList.add('custom-cursor')

    const dot = dotRef.current
    const orb = orbRef.current
    if (!dot || !orb) return

    const lerp = (a, b, t) => a + (b - a) * t

    const onMove = e => {
      state.current.mx = e.clientX
      state.current.my = e.clientY
      dot.style.opacity = '1'
      orb.style.opacity = '1'
    }
    const onDocLeave = () => {
      dot.style.opacity = '0'
      orb.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onDocLeave)

    const tick = () => {
      const s = state.current
      s.ox = lerp(s.ox, s.mx, 0.08)
      s.oy = lerp(s.oy, s.my, 0.08)
      dot.style.transform = `translate(${s.mx - 4}px,${s.my - 4}px)`
      orb.style.transform = `translate(${s.ox - 220}px,${s.oy - 220}px)`
      raf.current = requestAnimationFrame(tick)
    }
    tick()

    const INTERACTIVE = 'a,button,[role=button],.project-card,.tl3d-card,.flip-wrap,.social-link,.polaroid'

    const onEnter = e => {
      if (!e.target.closest(INTERACTIVE)) return
      dot.style.background = '#c084fc'
      dot.style.boxShadow  = '0 0 18px #c084fc, 0 0 40px rgba(192,132,252,0.4)'
      orb.style.background = 'radial-gradient(circle,rgba(192,132,252,.22),transparent 70%)'
    }
    const onLeave = e => {
      if (!e.target.closest(INTERACTIVE)) return
      dot.style.background = '#818cf8'
      dot.style.boxShadow  = '0 0 10px rgba(129,140,248,.95)'
      orb.style.background = 'radial-gradient(circle,rgba(129,140,248,.13),transparent 70%)'
    }

    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(raf.current)
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onDocLeave)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <>
      {/* Slow-lerp glow orb */}
      <div ref={orbRef} className="cg-orb" />
      {/* Precise dot — follows exactly */}
      <div ref={dotRef} className="cg-dot" />
    </>
  )
}

// ── ROOT EXPORT ────────────────────────────────────────────────
export default function ClientEffects() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      {/* Film grain texture */}
      <div className="grain-fx" aria-hidden="true" />
    </>
  )
}
