'use client'
import { useState, useEffect, useRef } from 'react'

// ── CINEMATIC LOADING SCREEN ───────────────────────────────────
function LoadingScreen() {
  const [phase, setPhase] = useState('in')

  useEffect(() => {
    if (sessionStorage.getItem('ls-shown')) { setPhase('done'); return }
    sessionStorage.setItem('ls-shown', '1')
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setPhase('out'), 1950)
    const t2 = setTimeout(() => { setPhase('done'); document.body.style.overflow = '' }, 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`ls-wrap${phase === 'out' ? ' ls-out' : ''}`}>
      <div className="ls-corner ls-tl" /><div className="ls-corner ls-tr" />
      <div className="ls-corner ls-bl" /><div className="ls-corner ls-br" />
      <div className="ls-body">
        <div className="ls-name">
          {'VISHAL.'.split('').map((c, i) => (
            <span key={i} className="ls-char"
              style={{ animationDelay: `${i * 0.072}s`, color: c === '.' ? '#818cf8' : '#f1f5f9' }}>{c}</span>
          ))}
        </div>
        <div className="ls-sweep" />
        <p className="ls-role">Full Stack Developer</p>
      </div>
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
    const dot = dotRef.current; const orb = orbRef.current
    if (!dot || !orb) return
    const lerp = (a, b, t) => a + (b - a) * t
    const onMove = e => { state.current.mx = e.clientX; state.current.my = e.clientY; dot.style.opacity='1'; orb.style.opacity='1' }
    const onDocLeave = () => { dot.style.opacity='0'; orb.style.opacity='0' }
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onDocLeave)
    const tick = () => {
      const s = state.current
      s.ox = lerp(s.ox, s.mx, 0.08); s.oy = lerp(s.oy, s.my, 0.08)
      dot.style.transform = `translate(${s.mx - 4}px,${s.my - 4}px)`
      orb.style.transform  = `translate(${s.ox - 220}px,${s.oy - 220}px)`
      raf.current = requestAnimationFrame(tick)
    }
    tick()
    const INTERACTIVE = 'a,button,[role=button],.project-card,.tl3d-card,.flip-wrap,.social-link,.polaroid'
    const onEnter = e => {
      if (!e.target.closest(INTERACTIVE)) return
      dot.style.background='#c084fc'; dot.style.boxShadow='0 0 18px #c084fc,0 0 40px rgba(192,132,252,.4)'
      orb.style.background='radial-gradient(circle,rgba(192,132,252,.22),transparent 70%)'
    }
    const onLeave = e => {
      if (!e.target.closest(INTERACTIVE)) return
      dot.style.background='#818cf8'; dot.style.boxShadow='0 0 10px rgba(129,140,248,.95)'
      orb.style.background='radial-gradient(circle,rgba(129,140,248,.13),transparent 70%)'
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

  return <><div ref={orbRef} className="cg-orb" /><div ref={dotRef} className="cg-dot" /></>
}

// ── GAME HUD ───────────────────────────────────────────────────
function GameHUD() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [pct, setPct] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const onMove = e => setPos({ x: e.clientX, y: e.clientY })
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPct(max > 0 ? Math.round((window.scrollY / max) * 100) : 0)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const pad = (n, l = 4) => String(Math.max(0, n)).padStart(l, '0')

  return (
    <>
      {/* Top-left — player stats */}
      <div className="ghud ghud-tl">
        <div className="ghud-title">PLR_01 <span className="ghc">//</span> TIWARI_V</div>
        <div className="ghud-row">
          <span className="ghl">HP</span>
          <div className="ghud-track"><div className="ghud-fill ghf-hp" /></div>
          <span className="ghv">85</span>
        </div>
        <div className="ghud-row">
          <span className="ghl">XP</span>
          <div className="ghud-track"><div className="ghud-fill ghf-xp" /></div>
          <span className="ghv">L4</span>
        </div>
      </div>

      {/* Top-right — live coordinates */}
      <div className="ghud ghud-tr">
        <div className="ghud-coord">X: <span className="ghc">{pad(pos.x)}</span></div>
        <div className="ghud-coord">Y: <span className="ghc">{pad(pos.y)}</span></div>
        <div className="ghud-coord">▼: <span className="ghc">{pad(pct, 3)}%</span></div>
      </div>

      {/* Bottom-left — status */}
      <div className="ghud ghud-bl">
        <span className="ghud-dot" />
        <span className="ghud-status">OPEN_TO_WORK · MUMBAI · FULL_STACK</span>
      </div>
    </>
  )
}

// ── ROOT EXPORT ────────────────────────────────────────────────
export default function ClientEffects() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <GameHUD />
      {/* Film grain */}
      <div className="grain-fx" aria-hidden="true" />
      {/* CRT scanlines */}
      <div className="scanlines-fx" aria-hidden="true" />
    </>
  )
}
