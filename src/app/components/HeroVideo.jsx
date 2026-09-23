'use client'
import { useEffect, useRef, useState } from 'react'

// Autoplays muted (browsers block sound until the visitor interacts). The
// button restarts the clip from the beginning with sound, so people hear the
// whole introduction. Scrolling it out of view mutes it again, so it never
// keeps talking in the background. The poster is a real frame from the clip,
// so the hero is never empty while the video loads; people who ask their
// device for less motion get the still frame and no autoplay.
export default function HeroVideo() {
  const ref = useRef(null)
  const [still, setStill] = useState(false)
  const [sound, setSound] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      setStill(mq.matches)
      const v = ref.current
      if (!v || !v.muted) return // someone chose to listen: leave it alone
      if (mq.matches) v.pause()
      else v.play().catch(() => {}) // autoplay refused: the poster stays
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const v = ref.current
    if (!v || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && !v.muted) {
        v.muted = true
        setSound(false)
      }
    }, { threshold: 0.25 })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  function toggleSound() {
    const v = ref.current
    if (!v) return
    if (v.muted) {
      v.muted = false
      v.currentTime = 0
      v.play().catch(() => { v.muted = true; setSound(false) })
      setSound(true)
    } else {
      v.muted = true
      setSound(false)
    }
  }

  return (
    <figure className="stage" style={{ margin: 0 }}>
      <video
        ref={ref}
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
        muted
        loop
        playsInline
        autoPlay={!still}
        preload="auto"
        aria-label="Animated Vishal Tiwari introducing himself"
      />
      <button type="button" className="sound-btn" onClick={toggleSound} aria-pressed={sound}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 8v4h3l4 3.5v-11L6 8H3z" fill="currentColor" stroke="none" />
          {sound
            ? <><path d="M13.5 7.5a3.5 3.5 0 0 1 0 5" /><path d="M15.8 5.2a6.7 6.7 0 0 1 0 9.6" /></>
            : <path d="M13.5 8l4 4m0-4l-4 4" />}
        </svg>
        {sound ? 'Sound on' : 'Play with sound'}
      </button>
      <figcaption className="stage-caption">
        <span><b>Vishal Tiwari</b> · that&apos;s me, animated</span>
        <span className="mono">Mumbai</span>
      </figcaption>
    </figure>
  )
}
