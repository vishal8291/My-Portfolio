'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

// ── VIDEO DATA ─────────────────────────────────────────────────
const videos = [
  {
    id: 1,
    title: 'ICC Awareness Campaign',
    category: 'POSH',
    tag: 'Internal Complaints Committee',
    src: '/videos/icc-awareness.mp4',
    description: 'Led an ICC awareness session covering compliance frameworks, reporting channels, and zero-tolerance policies across tech and science departments.',
    role: 'Lead Presenter',
    accent: '#818cf8',
    icon: '🎓',
  },
  {
    id: 2,
    title: 'POSH Awareness Drive',
    category: 'POSH',
    tag: 'Prevention of Sexual Harassment',
    src: '/videos/posh-drive.mp4',
    description: 'Campus-wide POSH awareness drive covering cyberbullying, catcalling, quid pro quo, and bystander intervention strategies.',
    role: 'Campaign Coordinator',
    accent: '#f472b6',
    icon: '📢',
  },
  {
    id: 3,
    title: 'POSH Awareness Skit',
    category: 'POSH',
    tag: 'Live Theatre Advocacy',
    src: '/videos/posh-skit.mp4',
    description: 'Co-directed and performed in an awareness skit making complex legal definitions accessible and memorable for the student body.',
    role: 'Co-Director & Actor',
    accent: '#22d3ee',
    icon: '🎭',
  },
]

// ── CATEGORIES ─────────────────────────────────────────────────
const CATEGORIES = ['All', 'POSH', 'DLLE', 'Youth Parliament', 'Food & Nutrition', 'Fun']

// ── VIDEO CARD ─────────────────────────────────────────────────
function VideoCard({ video, onClick }) {
  const videoRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (hovered) {
      el.currentTime = 0
      el.play().catch(() => {})
    } else {
      el.pause()
      el.currentTime = 0
    }
  }, [hovered])

  return (
    <div
      className="vc-wrap"
      style={{ '--accent': video.accent }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(video)}
    >
      {/* Gradient border glow */}
      <div className="vc-glow" />

      {/* Video thumbnail */}
      <div className="vc-thumb">
        <video
          ref={videoRef}
          src={video.src}
          muted
          playsInline
          preload="metadata"
          className="vc-video"
        />
        {/* Overlay */}
        <div className={`vc-overlay ${hovered ? 'hovered' : ''}`} />

        {/* Play button */}
        <div className={`vc-play-btn ${hovered ? 'hovered' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Category badge */}
        <div className="vc-badge" style={{ background: `${video.accent}20`, borderColor: `${video.accent}40`, color: video.accent }}>
          {video.icon} {video.category}
        </div>
      </div>

      {/* Card info */}
      <div className="vc-info">
        <div className="vc-tag">{video.tag}</div>
        <h3 className="vc-title">{video.title}</h3>
        <p className="vc-desc">{video.description}</p>
        <div className="vc-footer">
          <span className="vc-role">
            <span className="vc-role-dot" style={{ background: video.accent }} />
            {video.role}
          </span>
          <span className="vc-watch">Watch ▶</span>
        </div>
      </div>
    </div>
  )
}

// ── VIDEO MODAL ────────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {})
    // Close on Escape
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!video) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Video player */}
        <div className="modal-video-wrap">
          <video
            ref={videoRef}
            src={video.src}
            controls
            playsInline
            className="modal-video"
            style={{ '--accent': video.accent }}
          />
          <div className="modal-video-glow" style={{ background: `radial-gradient(ellipse at center, ${video.accent}22 0%, transparent 70%)` }} />
        </div>

        {/* Info panel */}
        <div className="modal-info">
          <div className="modal-badge" style={{ color: video.accent, background: `${video.accent}15`, borderColor: `${video.accent}30` }}>
            {video.icon} {video.tag}
          </div>
          <h2 className="modal-title">{video.title}</h2>
          <p className="modal-desc">{video.description}</p>
          <div className="modal-meta">
            <div className="modal-meta-item">
              <span className="modal-meta-label">My Role</span>
              <span className="modal-meta-val" style={{ color: video.accent }}>{video.role}</span>
            </div>
            <div className="modal-meta-item">
              <span className="modal-meta-label">Category</span>
              <span className="modal-meta-val">{video.category}</span>
            </div>
            <div className="modal-meta-item">
              <span className="modal-meta-label">Institution</span>
              <span className="modal-meta-val">Thakur College, Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── IMPACT STATS ───────────────────────────────────────────────
function ImpactStats() {
  const stats = [
    { val: '500+', label: 'Students Reached', icon: '👥', color: '#818cf8' },
    { val: '3+',   label: 'Campaigns Led',    icon: '📢', color: '#f472b6' },
    { val: '2',    label: 'Departments',       icon: '🏛️', color: '#22d3ee' },
    { val: '100%', label: 'Zero Tolerance',    icon: '🛡️', color: '#34d399' },
  ]
  return (
    <div className="impact-stats">
      {stats.map(({ val, label, icon, color }) => (
        <div key={label} className="impact-stat-card">
          <div className="impact-stat-icon" style={{ background: `${color}15`, borderColor: `${color}25` }}>{icon}</div>
          <div className="impact-stat-val" style={{ color }}>{val}</div>
          <div className="impact-stat-label">{label}</div>
        </div>
      ))}
    </div>
  )
}

// ── PAGE ───────────────────────────────────────────────────────
export default function CollegePage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeVideo, setActiveVideo]       = useState(null)

  const filtered = activeCategory === 'All'
    ? videos
    : videos.filter(v => v.category === activeCategory)

  return (
    <main className="college-page">
      {/* Background orbs */}
      <div className="college-orb college-orb-1" />
      <div className="college-orb college-orb-2" />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="college-hero">
        <div className="container">
          <Link href="/" className="back-link">← Back to Portfolio</Link>
          <div className="college-hero-badge">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f472b6', boxShadow: '0 0 8px #f472b6' }} />
            Impact & Leadership
          </div>
          <h1 className="college-hero-title">
            Beyond the <span className="gradient-text">Code</span>
          </h1>
          <p className="college-hero-sub">
            Campus advocacy, social leadership, and community impact during my B.Sc. IT journey at
            {' '}<span style={{ color: '#c4b5fd', fontWeight: 600 }}>Thakur College of Science &amp; Commerce, Mumbai</span>.
          </p>
          <ImpactStats />
        </div>
      </section>

      {/* ── FILTER TABS ──────────────────────────── */}
      <div className="college-filter-wrap">
        <div className="container">
          <div className="college-filter-row">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`college-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
                {cat !== 'All' && videos.filter(v => v.category === cat).length > 0 && (
                  <span className="filter-count">{videos.filter(v => v.category === cat).length}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── VIDEO GRID ───────────────────────────── */}
      <section className="college-grid-section">
        <div className="container">
          {filtered.length > 0 ? (
            <div className="college-video-grid">
              {filtered.map(video => (
                <VideoCard key={video.id} video={video} onClick={setActiveVideo} />
              ))}
            </div>
          ) : (
            <div className="college-empty">
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎬</div>
              <p style={{ color: '#475569', fontSize: '1rem' }}>
                Videos for this category coming soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── COMING SOON STRIP ────────────────────── */}
      <section className="coming-soon-strip">
        <div className="container">
          <p className="coming-soon-title">More memories coming soon</p>
          <div className="coming-soon-chips">
            {['Youth Parliament', 'DLLE Extension', 'Food & Nutrition', 'Cultural Events', 'Annual Fest'].map(t => (
              <span key={t} className="coming-chip">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL ────────────────────────────────── */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </main>
  )
}
