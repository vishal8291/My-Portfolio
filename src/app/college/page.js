'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ── VIDEO DATA ─────────────────────────────────────────────────
const videos = [
  // ── POSH ──
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
    accent: '#c084fc',
    icon: '🎭',
  },

  // ── FOOD & NUTRITION ──
  {
    id: 4,
    title: 'Nutrition Awareness Activity',
    category: 'Food & Nutrition',
    tag: 'Health & Wellness',
    src: '/videos/fn-activity.mp4',
    description: 'Hands-on nutrition awareness activity demonstrating balanced diet practices, healthy eating habits, and the importance of micronutrients for students.',
    role: 'Organiser',
    accent: '#34d399',
    icon: '🥗',
  },
  {
    id: 5,
    title: 'Healthy Food Stall Showcase',
    category: 'Food & Nutrition',
    tag: 'Campus Health Expo',
    src: '/videos/fn-stall.mp4',
    description: 'Set up and managed a healthy food stall at the campus expo, showcasing nutritious alternatives to junk food with live demonstrations.',
    role: 'Stall Coordinator',
    accent: '#4ade80',
    icon: '🍱',
  },
  {
    id: 6,
    title: 'Nutrition Workshop Highlights',
    category: 'Food & Nutrition',
    tag: 'Workshop Recording',
    src: '/videos/fn-awareness.mp4',
    description: 'Highlights from an interactive workshop on nutrition science, food labelling literacy, and practical tips for a balanced college lifestyle.',
    role: 'Volunteer',
    accent: '#86efac',
    icon: '🌿',
  },

  // ── YOUTH PARLIAMENT ──
  {
    id: 7,
    title: 'Youth Parliament — Floor Highlights',
    category: 'Youth Parliament',
    tag: 'Debate & Leadership',
    src: '/videos/yp-highlight.mp4',
    description: 'Quick highlights from the Youth Parliament floor — spirited debates, motions on policy, and representation of student voices on national issues.',
    role: 'Member of Parliament',
    accent: '#fbbf24',
    icon: '🏛️',
  },
  {
    id: 8,
    title: 'Youth Parliament — Session Recording',
    category: 'Youth Parliament',
    tag: 'Full Session',
    src: '/videos/yp-session.mp4',
    description: 'Full session recording of the intercollegiate Youth Parliament, featuring structured debate, bill passing simulation, and student governance experience.',
    role: 'Member of Parliament',
    accent: '#f59e0b',
    icon: '🗣️',
  },

]

// ── CATEGORIES ─────────────────────────────────────────────────
const CATEGORIES = ['All', 'POSH', 'Food & Nutrition', 'Youth Parliament']

const CATEGORY_META = {
  'All':             { color: '#818cf8', icon: '🎬' },
  'POSH':            { color: '#f472b6', icon: '🛡️' },
  'Food & Nutrition':{ color: '#34d399', icon: '🥗' },
  'Youth Parliament':{ color: '#fbbf24', icon: '🏛️' },
}

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
      <div className="vc-glow" />

      <div className="vc-thumb">
        <video
          ref={videoRef}
          src={video.src}
          muted
          playsInline
          preload="metadata"
          className="vc-video"
        />
        <div className={`vc-overlay ${hovered ? 'hovered' : ''}`} />
        <div className={`vc-play-btn ${hovered ? 'hovered' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="vc-badge" style={{ background: `${video.accent}20`, borderColor: `${video.accent}40`, color: video.accent }}>
          {video.icon} {video.category}
        </div>
      </div>

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
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

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

// ── PHOTO GALLERY DATA ─────────────────────────────────────────
const photos = [
  {
    id: 'p1',
    src: '/images/college/waste-drive-team.jpeg',
    title: 'Waste Segregation Drive',
    caption: 'Students holding Waste Management posters during the campus awareness session.',
    tag: 'Dec 2024 · Thakur College',
    category: 'DLLE',
    accent: '#34d399',
    wide: true,
  },
  {
    id: 'p2',
    src: '/images/college/waste-drive-session.jpeg',
    title: 'Waste Drive — Classroom Session',
    caption: 'Conducting the peer education session on smart waste sorting inside academic blocks.',
    tag: 'Dec 2024 · Thakur College',
    category: 'DLLE',
    accent: '#34d399',
    wide: false,
  },
  {
    id: 'p3',
    src: '/images/college/survey-thakur-mall.jpeg',
    title: 'Field Survey — Thakur Mall',
    caption: 'QR-code based data collection outside Thakur Mall on social media impact on students.',
    tag: 'Jan 2025 · Thakur Mall',
    category: 'Survey',
    accent: '#38bdf8',
    wide: false,
  },
  {
    id: 'p4',
    src: '/images/college/survey-pizza-hut.jpeg',
    title: 'Field Survey — Oberoi Park',
    caption: 'Team deploying the survey at high-traffic hubs using Impact of Social Media boards.',
    tag: 'Jan 2025 · Kandivali East',
    category: 'Survey',
    accent: '#38bdf8',
    wide: false,
  },
  {
    id: 'p5',
    src: '/images/college/survey-outdoor.jpeg',
    title: 'Social Media Survey — Field Team',
    caption: 'Field research team with QR code forms analyzing algorithmic social media impact.',
    tag: 'Jan 2025 · Thakur Village',
    category: 'Survey',
    accent: '#38bdf8',
    wide: false,
  },
  {
    id: 'p6',
    src: '/images/college/dlle-rally.jpeg',
    title: 'DLLE Department March',
    caption: 'Department of Lifelong Learning & Extension street march under Thakur College banner.',
    tag: 'Feb 2025 · Kandivali East',
    category: 'DLLE',
    accent: '#c084fc',
    wide: true,
  },
  {
    id: 'p7',
    src: '/images/college/voter-awareness.jpeg',
    title: 'Voter Awareness Drive',
    caption: 'Classroom presentation on voter rights and civic responsibility ahead of elections.',
    tag: 'Nov 2024 · Thakur College',
    category: 'Voter Awareness',
    accent: '#fbbf24',
    wide: false,
  },
]

// ── PHOTO LIGHTBOX ─────────────────────────────────────────────
function PhotoLightbox({ photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowRight')  onNext()
      if (e.key === 'ArrowLeft')   onPrev()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [onClose, onNext, onPrev])

  if (!photo) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="photo-lightbox" onClick={e => e.stopPropagation()}>
        {/* Nav arrows */}
        <button className="lb-arrow lb-arrow-left" onClick={onPrev} aria-label="Previous">‹</button>
        <button className="lb-arrow lb-arrow-right" onClick={onNext} aria-label="Next">›</button>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="lb-img-wrap">
          <img src={photo.src} alt={photo.title} className="lb-img" />
          <div className="lb-glow" style={{ background: `radial-gradient(ellipse at center, ${photo.accent}18 0%, transparent 70%)` }} />
        </div>

        {/* Info */}
        <div className="lb-info">
          <span className="lb-tag" style={{ color: photo.accent, background: `${photo.accent}15`, borderColor: `${photo.accent}30` }}>
            📍 {photo.tag}
          </span>
          <h3 className="lb-title">{photo.title}</h3>
          <p className="lb-caption">{photo.caption}</p>
        </div>
      </div>
    </div>
  )
}

// ── PHOTO GALLERY ──────────────────────────────────────────────
function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState(null)
  const activeIdx = photos.findIndex(p => p.id === activePhoto?.id)

  const openPhoto = (photo) => setActivePhoto(photo)
  const closePhoto = () => setActivePhoto(null)
  const prevPhoto = () => setActivePhoto(photos[(activeIdx - 1 + photos.length) % photos.length])
  const nextPhoto = () => setActivePhoto(photos[(activeIdx + 1) % photos.length])

  return (
    <section style={{ paddingBottom: '80px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="college-hero-badge" style={{ marginBottom: '14px' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#c084fc', boxShadow: '0 0 8px #c084fc' }} />
            On the Ground
          </div>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #c084fc 0%, #818cf8 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            marginBottom: '10px',
          }}>
            Field Documentation
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
            GPS-verified photos from real campus drives, field surveys, and community marches.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="photo-gallery-grid">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`pg-card ${photo.wide ? 'pg-wide' : ''}`}
              onClick={() => openPhoto(photo)}
              style={{ '--accent': photo.accent }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="pg-img"
                loading="lazy"
              />
              <div className="pg-overlay">
                <span className="pg-cat-badge" style={{ background: `${photo.accent}22`, borderColor: `${photo.accent}40`, color: photo.accent }}>
                  {photo.category}
                </span>
                <div className="pg-hover-info">
                  <p className="pg-hover-title">{photo.title}</p>
                  <p className="pg-hover-tag">📍 {photo.tag}</p>
                </div>
                <div className="pg-expand-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activePhoto && (
        <PhotoLightbox
          photo={activePhoto}
          onClose={closePhoto}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  )
}

// ── IMPACT SHOWCASE ────────────────────────────────────────────
const impactProjects = [
  {
    title: '🛑 POSH & ICC Compliance Campaign',
    role: 'Lead Presenter & Coordinator',
    timeline: 'Dec 2024',
    desc: 'Organized campus-wide drives at Thakur College to educate students on regulatory frameworks, cyberbullying, and grievance redressal mechanisms.',
    metrics: ['30+ Team Members Managed', 'Zero-Tolerance Awareness Built'],
  },
  {
    title: '♻️ Campus Waste Segregation Drive',
    role: 'Campaign Organizer',
    timeline: 'Dec 2024',
    desc: 'Led a peer-to-peer environmental compliance initiative. Coordinated the generation of crowdsourced media to implement smart waste sorting inside academic blocks.',
    metrics: ['Campus-Wide Mobilization', 'Peer-to-Peer Training'],
  },
  {
    title: '📊 Social Media Impact Field Survey',
    role: 'Chief Field Researcher',
    timeline: 'Jan 2025',
    desc: 'Deployed a localized data collection system using QR codes in high-traffic public hubs (Thakur Village / Mall) to analyze algorithmic social media impact on students.',
    metrics: ['Real-World Data Sourcing', 'UX Demographics Validated'],
  },
]

function ImpactShowcase() {
  return (
    <section className="py-16 px-6">
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div className="college-hero-badge" style={{ marginBottom: '14px' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
            Leadership &amp; Social Infrastructure
          </div>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #38bdf8 0%, #34d399 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            marginBottom: '10px',
          }}>
            Beyond the Classroom
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '540px', lineHeight: 1.6 }}>
            Real-world data collection, public advocacy, and community mobilization.
          </p>
        </div>

        {/* Card grid */}
        <div className="impact-showcase-grid">
          {impactProjects.map((p, i) => (
            <div key={i} className="impact-showcase-card">
              {/* Timeline badge */}
              <div style={{ marginBottom: '16px' }}>
                <span className="impact-timeline-badge">{p.timeline}</span>
              </div>

              <h3 className="impact-card-title">{p.title}</h3>
              <p className="impact-card-role">{p.role}</p>
              <p className="impact-card-desc">{p.desc}</p>

              {/* Metrics */}
              <div className="impact-card-metrics">
                {p.metrics.map((m, idx) => (
                  <div key={idx} className="impact-metric-row">
                    <span className="impact-metric-arrow">▹</span>
                    {m}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── IMPACT STATS ───────────────────────────────────────────────
function ImpactStats() {
  const stats = [
    { val: '500+', label: 'Students Reached', icon: '👥', color: '#818cf8' },
    { val: '3+',   label: 'Activities Led',   icon: '🏆', color: '#f472b6' },
    { val: '3',    label: 'Categories',       icon: '🎯', color: '#34d399' },
    { val: '8',    label: 'Videos Captured',  icon: '🎬', color: '#fbbf24' },
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
      <div className="college-orb college-orb-1" />
      <div className="college-orb college-orb-2" />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="college-hero">
        <div className="container">
          <Link href="/" className="back-link">← Back to Portfolio</Link>
          <div className="college-hero-badge">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f472b6', boxShadow: '0 0 8px #f472b6' }} />
            Impact &amp; Leadership
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
            {CATEGORIES.map(cat => {
              const meta = CATEGORY_META[cat]
              const count = cat === 'All' ? videos.length : videos.filter(v => v.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`college-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  style={activeCategory === cat ? { borderColor: meta.color, color: meta.color, background: `${meta.color}12` } : {}}
                >
                  <span className="filter-icon">{meta.icon}</span>
                  {cat}
                  <span className="filter-count" style={activeCategory === cat ? { background: meta.color, color: '#000' } : {}}>
                    {count}
                  </span>
                </button>
              )
            })}
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
              <p style={{ color: '#475569', fontSize: '1rem' }}>Videos for this category coming soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ── IMPACT SHOWCASE ──────────────────────── */}
      <ImpactShowcase />

      {/* ── PHOTO GALLERY ────────────────────────── */}
      <PhotoGallery />

      {/* ── MODAL ────────────────────────────────── */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </main>
  )
}
