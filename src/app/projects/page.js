'use client'
import { useState, useEffect } from 'react'
import projects from '../data/projectsData'

const GithubIcon   = ({ size = 14 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const ExternalIcon = ({ size = 13 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'AI / ML']

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  useScrollReveal()

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const building = projects.filter(p => p.status === 'building')

  return (
    <div style={{ paddingTop: '68px' }}>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section style={{ padding: '90px 24px 56px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="line-decoration" style={{ margin: '0 auto 22px' }} />
          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.4rem)', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.035em' }}>
            My <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: '#64748b', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.98rem' }}>
            {projects.length} projects across web, mobile, and AI, from early experiments to production apps.
          </p>
        </div>
      </section>

      <div style={{ padding: '0 24px 100px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Currently Building banner */}
        <div className="reveal" style={{ marginBottom: '48px', padding: '24px 28px', borderRadius: '18px', background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.22)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, #4f46e5, #7c3aed, transparent)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24', boxShadow: '0 0 8px #fbbf24', flexShrink: 0, animation: 'pulse-dot 2.5s ease-in-out infinite' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', color: '#64748b', textTransform: 'uppercase' }}>Currently Building</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {building.map(p => (
              <span key={p.title}
                style={{ padding: '7px 18px', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 700, background: `${p.accent}12`, border: `1px solid ${p.accent}38`, color: p.accent, letterSpacing: '0.01em' }}>
                {p.title}
              </span>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="reveal" style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '44px' }}>
          {CATEGORIES.map(cat => {
            const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length
            return (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : 'inactive'}`}>
                {cat}
                <span style={{ marginLeft: '6px', fontSize: '0.7rem', opacity: 0.65, fontWeight: 700 }}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {filtered.map((project, i) => (
            <div key={project.title} className={`card-glass card-featured reveal reveal-delay-${(i % 3) + 1}`}
              style={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>

              {project.image ? (
                <div style={{ height: '170px', overflow: 'hidden', position: 'relative', background: '#0f172a' }}>
                  <img src={project.image} alt={`${project.title} live preview`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} loading="lazy" />
                  <div style={{ position: 'absolute', inset: 0, boxShadow: `inset 0 0 0 2px ${project.accent}55` }} />
                </div>
              ) : (
                /* Accent bar */
                <div style={{ height: '3px', background: `linear-gradient(to right, ${project.accent}, ${project.accent}22)` }} />
              )}

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Status + category row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.1em', color: project.accent, textTransform: 'uppercase', background: `${project.accent}12`, padding: '3px 10px', borderRadius: '999px', border: `1px solid ${project.accent}25` }}>
                    {project.category}
                  </span>
                  {project.status === 'building' && (
                    <span className="building-badge">
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fbbf24' }} />
                      Building
                    </span>
                  )}
                  {project.liveUrl && project.status !== 'building' && (
                    <span className="live-badge">
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#34d399' }} />
                      Live
                    </span>
                  )}
                </div>

                {project.isClientProject && (
                  <span style={{ display: 'inline-block', marginBottom: '10px', fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0f172a', background: '#fbbf24', padding: '3px 10px', borderRadius: '999px', width: 'fit-content' }}>
                    Real Client Project
                  </span>
                )}

                <h2 style={{ fontSize: '1.04rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px', lineHeight: 1.35 }}>{project.title}</h2>

                {project.challenge ? (
                  <div style={{ marginBottom: '18px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.09em', textTransform: 'uppercase', color: project.accent, marginBottom: '4px' }}>Challenge</span>
                      <p style={{ color: '#64748b', fontSize: '0.83rem', lineHeight: 1.65, margin: 0 }}>{project.challenge}</p>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.09em', textTransform: 'uppercase', color: project.accent, marginBottom: '4px' }}>Solution</span>
                      <p style={{ color: '#64748b', fontSize: '0.83rem', lineHeight: 1.65, margin: 0 }}>{project.solution}</p>
                    </div>
                    {project.result && (
                      <div>
                        <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.09em', textTransform: 'uppercase', color: project.accent, marginBottom: '6px' }}>Result</span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {project.result.map(r => (
                            <span key={r} style={{ fontSize: '0.74rem', fontWeight: 700, color: project.accent, background: `${project.accent}14`, border: `1px solid ${project.accent}40`, padding: '4px 10px', borderRadius: '999px' }}>{r}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p style={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.75, marginBottom: '18px', flex: 1 }}>
                    {project.description}
                  </p>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '18px' }}>
                  {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>

                <div style={{ borderTop: '1px solid rgba(129,140,248,0.1)', paddingTop: '14px', display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: '#475569', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                    onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                    <GithubIcon /> GitHub
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#34d399', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600, transition: 'opacity 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                      <ExternalIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '60px', color: '#334155', fontSize: '0.85rem' }}>
          All projects on{' '}
          <a href="https://github.com/vishal8291" target="_blank" rel="noopener noreferrer"
            style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 700 }}>
            github.com/vishal8291 ↗
          </a>
        </p>
      </div>
    </div>
  )
}
