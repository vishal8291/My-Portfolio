'use client'
import { useEffect, useRef, useState } from 'react'

// The poster is a real frame from the clip, so the hero is never empty while
// the video loads. People who ask their device for less motion get the still
// frame and no autoplay.
export default function HeroVideo() {
  const ref = useRef(null)
  const [still, setStill] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      setStill(mq.matches)
      const v = ref.current
      if (!v) return
      if (mq.matches) v.pause()
      else v.play().catch(() => {}) // autoplay refused: the poster stays, which is fine
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

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
      <figcaption className="stage-caption">
        <span><b>Vishal Tiwari</b> · that&apos;s me, animated</span>
        <span className="mono">Mumbai</span>
      </figcaption>
    </figure>
  )
}
