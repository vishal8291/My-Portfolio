'use client'
import { useEffect, useRef } from 'react'

// ── ANIMATED SKILL BAR ─────────────────────────────────────────
function SkillBar({ name, pct, color }) {
  const fillRef = useRef(null)
  const rowRef  = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && fillRef.current) {
        fillRef.current.style.width = `${pct}%`
      }
    }, { threshold: 0.4 })
    if (rowRef.current) observer.observe(rowRef.current)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div ref={rowRef}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#94a3b8' }}>{name}</span>
        <span style={{ fontSize: '0.72rem', color, fontWeight: 700, background: `${color}12`, padding: '2px 8px', borderRadius: '999px', border: `1px solid ${color}22` }}>{pct}%</span>
      </div>
      <div style={{ height: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', overflow: 'hidden' }}>
        <div ref={fillRef} className="skill-bar-fill" style={{ background: `linear-gradient(to right, ${color}70, ${color})` }} />
      </div>
    </div>
  )
}

// ── SOFT SKILL CHIP ────────────────────────────────────────────
function SoftChip({ name, icon, color }) {
  return (
    <div className="card-glass" style={{ padding: '18px 20px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, transparent, ${color}50, transparent)` }} />
      <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{icon}</span>
      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e2e8f0' }}>{name}</span>
    </div>
  )
}

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function SkillsPage() {
  useScrollReveal()

  const categories = [
    {
      name: 'Languages', color: '#818cf8', emoji: '💻',
      skills: [
        { name: 'JavaScript', pct: 88 },
        { name: 'TypeScript',  pct: 78 },
        { name: 'HTML',        pct: 92 },
        { name: 'CSS',         pct: 88 },
        { name: 'C Programming', pct: 80 },
      ],
    },
    {
      name: 'Frontend', color: '#22d3ee', emoji: '🎨',
      skills: [
        { name: 'React',       pct: 85 },
        { name: 'Next.js',     pct: 82 },
        { name: 'Tailwind CSS',pct: 85 },
      ],
    },
    {
      name: 'Backend', color: '#34d399', emoji: '⚙️',
      skills: [
        { name: 'Node.js',     pct: 80 },
        { name: 'Express.js',  pct: 80 },
        { name: 'REST API',    pct: 82 },
      ],
    },
    {
      name: 'Databases', color: '#fbbf24', emoji: '🗄️',
      skills: [
        { name: 'MongoDB',    pct: 82 },
        { name: 'PostgreSQL', pct: 68 },
        { name: 'Redis',      pct: 62 },
      ],
    },
    {
      name: 'Tools', color: '#fb923c', emoji: '🛠️',
      skills: [
        { name: 'Git',     pct: 85 },
        { name: 'GitHub',  pct: 85 },
        { name: 'Docker',  pct: 65 },
        { name: 'MS-Word', pct: 82 },
      ],
    },
  ]

  const softSkills = [
    { name: 'Object Oriented Programming', icon: '🧩', color: '#818cf8' },
    { name: 'Effective Communication',     icon: '🗣️', color: '#22d3ee' },
    { name: 'Teamwork',                    icon: '🤝', color: '#34d399' },
    { name: 'Self-learning',               icon: '📚', color: '#f472b6' },
  ]

  return (
    <div style={{ paddingTop: '68px' }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ padding: '90px 24px 72px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="line-decoration" style={{ margin: '0 auto 22px' }} />
          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.4rem)', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.035em' }}>
            Tech <span className="gradient-text">Skills</span>
          </h1>
          <p style={{ color: '#64748b', maxWidth: '440px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.98rem' }}>
            Core technologies I build with every day — no fluff, just what I actually use.
          </p>
        </div>
      </section>

      <div style={{ padding: '0 24px 100px', maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── TECHNICAL SKILLS ──────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {categories.map((cat, ci) => (
            <div key={cat.name} className={`card-glass reveal reveal-delay-${(ci % 3) + 1}`}
              style={{ borderRadius: '20px', padding: '28px', position: 'relative', overflow: 'hidden' }}>

              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, ${cat.color}, ${cat.color}33)` }} />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '26px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: `${cat.color}14`, border: `1px solid ${cat.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                  {cat.emoji}
                </div>
                <div>
                  <h2 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{cat.name}</h2>
                  <p style={{ fontSize: '0.7rem', color: '#475569', marginTop: '2px' }}>{cat.skills.length} skills</p>
                </div>
              </div>

              {/* Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {cat.skills.map(({ name, pct }) => (
                  <SkillBar key={name} name={name} pct={pct} color={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── SOFT SKILLS ───────────────────────────────── */}
        <div className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div className="line-decoration" />
            <h2 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Soft Skills</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
            {softSkills.map(s => <SoftChip key={s.name} {...s} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
