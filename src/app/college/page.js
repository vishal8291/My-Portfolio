'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

// ── VIDEO DATA ─────────────────────────────────────────────────
const videos = [
  { id: 1, title: 'ICC Awareness Campaign',       category: 'POSH',            tag: 'Internal Complaints Committee',   src: '/videos/icc-awareness.mp4', description: 'Led an ICC awareness session covering compliance frameworks, reporting channels, and zero-tolerance policies across tech and science departments.', role: 'Lead Presenter',        accent: '#818cf8', icon: '🎓' },
  { id: 2, title: 'POSH Awareness Drive',          category: 'POSH',            tag: 'Prevention of Sexual Harassment', src: '/videos/posh-drive.mp4',    description: 'Campus-wide POSH awareness drive covering cyberbullying, catcalling, quid pro quo, and bystander intervention strategies.',                         role: 'Campaign Coordinator',  accent: '#f472b6', icon: '📢' },
  { id: 3, title: 'POSH Awareness Skit',           category: 'POSH',            tag: 'Live Theatre Advocacy',           src: '/videos/posh-skit.mp4',     description: 'Co-directed and performed in an awareness skit making complex legal definitions accessible and memorable for the student body.',                       role: 'Co-Director & Actor',   accent: '#c084fc', icon: '🎭' },
  { id: 4, title: 'Nutrition Awareness Activity',  category: 'Food & Nutrition', tag: 'Health & Wellness',              src: '/videos/fn-activity.mp4',   description: 'Hands-on nutrition awareness activity demonstrating balanced diet practices, healthy eating habits, and the importance of micronutrients.',             role: 'Organiser',             accent: '#34d399', icon: '🥗' },
  { id: 5, title: 'Healthy Food Stall Showcase',   category: 'Food & Nutrition', tag: 'Campus Health Expo',             src: '/videos/fn-stall.mp4',      description: 'Set up and managed a healthy food stall at the campus expo, showcasing nutritious alternatives to junk food with live demonstrations.',              role: 'Stall Coordinator',     accent: '#4ade80', icon: '🍱' },
  { id: 6, title: 'Nutrition Workshop Highlights', category: 'Food & Nutrition', tag: 'Workshop Recording',             src: '/videos/fn-awareness.mp4',  description: 'Highlights from an interactive workshop on nutrition science, food labelling literacy, and practical tips for a balanced college lifestyle.',         role: 'Volunteer',             accent: '#86efac', icon: '🌿' },
  { id: 7, title: 'Youth Parliament — Floor Highlights',  category: 'Youth Parliament', tag: 'Debate & Leadership', src: '/videos/yp-highlight.mp4', description: 'Quick highlights from the Youth Parliament floor — spirited debates, motions on policy, and representation of student voices on national issues.', role: 'Member of Parliament', accent: '#fbbf24', icon: '🏛️' },
  { id: 8, title: 'Youth Parliament — Session Recording', category: 'Youth Parliament', tag: 'Full Session',        src: '/videos/yp-session.mp4',   description: 'Full session recording of the intercollegiate Youth Parliament, featuring structured debate, bill passing simulation, and student governance.',      role: 'Member of Parliament', accent: '#f59e0b', icon: '🗣️' },
]

const CATEGORIES = ['All', 'POSH', 'Food & Nutrition', 'Youth Parliament']
const CATEGORY_META = {
  'All':              { color: '#818cf8', icon: '🎬' },
  'POSH':             { color: '#f472b6', icon: '🛡️' },
  'Food & Nutrition': { color: '#34d399', icon: '🥗' },
  'Youth Parliament': { color: '#fbbf24', icon: '🏛️' },
}

// ── PHOTO DATA ─────────────────────────────────────────────────
const photos = [
  { id: 'p1', src: '/images/college/waste-drive-team.jpeg',    title: 'Waste Segregation Drive',          caption: 'Students holding Waste Management posters during the campus awareness session.',                    tag: 'Dec 2024 · Thakur College',  category: 'DLLE',            accent: '#34d399', wide: true  },
  { id: 'p2', src: '/images/college/waste-drive-session.jpeg', title: 'Waste Drive — Classroom Session',  caption: 'Conducting the peer education session on smart waste sorting inside academic blocks.',               tag: 'Dec 2024 · Thakur College',  category: 'DLLE',            accent: '#34d399', wide: false },
  { id: 'p3', src: '/images/college/survey-thakur-mall.jpeg',  title: 'Field Survey — Thakur Mall',       caption: 'QR-code based data collection outside Thakur Mall on social media impact on students.',            tag: 'Jan 2025 · Thakur Mall',     category: 'Field Survey',    accent: '#38bdf8', wide: false },
  { id: 'p4', src: '/images/college/survey-pizza-hut.jpeg',    title: 'Field Survey — Oberoi Park',       caption: 'Team deploying the survey at high-traffic hubs using Impact of Social Media boards.',              tag: 'Jan 2025 · Kandivali East',  category: 'Field Survey',    accent: '#38bdf8', wide: false },
  { id: 'p5', src: '/images/college/survey-outdoor.jpeg',      title: 'Social Media Survey — Field Team', caption: 'Field research team with QR code forms analyzing algorithmic social media impact.',                tag: 'Jan 2025 · Thakur Village',  category: 'Field Survey',    accent: '#38bdf8', wide: false },
  { id: 'p6', src: '/images/college/dlle-rally.jpeg',          title: 'DLLE Department March',            caption: 'Department of Lifelong Learning & Extension street march under Thakur College banner.',           tag: 'Feb 2025 · Kandivali East',  category: 'DLLE',            accent: '#c084fc', wide: true  },
  { id: 'p7', src: '/images/college/voter-awareness.jpeg',     title: 'Voter Awareness Drive',            caption: 'Classroom presentation on voter rights and civic responsibility ahead of elections.',              tag: 'Nov 2024 · Thakur College',  category: 'Civic Awareness', accent: '#fbbf24', wide: false },
]

const ROTS = [-4, 2.5, -2.5, 3.5, -3, 4, -1.5]

// ── 3D TILT HOOK ───────────────────────────────────────────────
function useTilt(strength = 12) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r  = el.getBoundingClientRect()
    const x  = (e.clientX - r.left - r.width  / 2) / (r.width  / 2)
    const y  = (e.clientY - r.top  - r.height / 2) / (r.height / 2)
    el.style.transition = 'transform 0.08s linear'
    el.style.transform  = `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength * 0.75}deg) translateZ(22px)`
  }
  const onLeave = () => {
    const el = ref.current; if (!el) return
    el.style.transition = 'transform 0.55s ease'
    el.style.transform  = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
  }
  return { ref, onMove, onLeave }
}

// ── VIDEO CARD — 3D tilt ───────────────────────────────────────
function VideoCard({ video, onClick }) {
  const { ref: cardRef, onMove, onLeave: tiltLeave } = useTilt(12)
  const videoRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = videoRef.current; if (!el) return
    if (hovered) { el.currentTime = 0; el.play().catch(() => {}) }
    else { el.pause(); el.currentTime = 0 }
  }, [hovered])

  return (
    <div
      ref={cardRef}
      className="vc-wrap"
      style={{ '--accent': video.accent, transformOrigin: 'center center', willChange: 'transform' }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); tiltLeave() }}
      onClick={() => onClick(video)}
    >
      {/* accent glow */}
      <div className="vc-glow" />

      <div className="vc-thumb">
        <video ref={videoRef} src={video.src} muted playsInline preload="metadata" className="vc-video" />
        <div className={`vc-overlay ${hovered ? 'hovered' : ''}`} />
        <div className={`vc-play-btn ${hovered ? 'hovered' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
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
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])
  if (!video) return null
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        <div className="modal-video-wrap">
          <video ref={videoRef} src={video.src} controls playsInline className="modal-video" />
          <div className="modal-video-glow" style={{ background: `radial-gradient(ellipse at center, ${video.accent}22 0%, transparent 70%)` }} />
        </div>
        <div className="modal-info">
          <div className="modal-badge" style={{ color: video.accent, background: `${video.accent}15`, borderColor: `${video.accent}30` }}>{video.icon} {video.tag}</div>
          <h2 className="modal-title">{video.title}</h2>
          <p className="modal-desc">{video.description}</p>
          <div className="modal-meta">
            <div className="modal-meta-item"><span className="modal-meta-label">My Role</span><span className="modal-meta-val" style={{ color: video.accent }}>{video.role}</span></div>
            <div className="modal-meta-item"><span className="modal-meta-label">Category</span><span className="modal-meta-val">{video.category}</span></div>
            <div className="modal-meta-item"><span className="modal-meta-label">Institution</span><span className="modal-meta-val">Thakur College, Mumbai</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── IMPACT STATS — count-up 3D blocks ─────────────────────────
function StatCard({ val, label, icon, color }) {
  const ref  = useRef(null)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const numMatch = val.match(/\d+/)
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      if (!numMatch) { setDisplay(val); return }
      const target = parseInt(numMatch[0])
      const suffix = val.replace(numMatch[0], '')
      let cur = 0; const dur = 1400; const step = 16
      const inc = target / (dur / step)
      const timer = setInterval(() => {
        cur += inc
        if (cur >= target) { setDisplay(val); clearInterval(timer) }
        else setDisplay(Math.floor(cur) + suffix)
      }, step)
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [val])

  return (
    <div ref={ref} className="stat3d-card" style={{ '--c': color }}>
      <div className="stat3d-shine" />
      <div className="stat3d-icon-wrap">{icon}</div>
      <div className="stat3d-val">{display}</div>
      <div className="stat3d-label">{label}</div>
      <div className="stat3d-bottom-bar" />
    </div>
  )
}

function ImpactStats() {
  const stats = [
    { val: '500+', label: 'Students Reached', icon: '👥', color: '#818cf8' },
    { val: '3+',   label: 'Activities Led',   icon: '🏆', color: '#f472b6' },
    { val: '3',    label: 'Categories',       icon: '🎯', color: '#34d399' },
    { val: '8',    label: 'Videos Captured',  icon: '🎬', color: '#fbbf24' },
  ]
  return (
    <div className="stat3d-row">
      {stats.map(s => <StatCard key={s.label} {...s} />)}
    </div>
  )
}

// ── IMPACT SHOWCASE — 3D flip cards ───────────────────────────
const impactProjects = [
  { emoji: '🛑', title: 'POSH & ICC Compliance Campaign',  role: 'Lead Presenter & Coordinator', timeline: 'Dec 2024', accent: '#f472b6', desc: 'Organized campus-wide drives at Thakur College to educate students on regulatory frameworks, cyberbullying, and grievance redressal mechanisms.', metrics: ['30+ Team Members Managed', 'Zero-Tolerance Awareness Built'] },
  { emoji: '♻️', title: 'Campus Waste Segregation Drive',   role: 'Campaign Organizer',           timeline: 'Dec 2024', accent: '#34d399', desc: 'Led a peer-to-peer environmental compliance initiative, coordinating crowdsourced media to implement smart waste sorting inside academic blocks.',    metrics: ['Campus-Wide Mobilization', 'Peer-to-Peer Training'] },
  { emoji: '📊', title: 'Social Media Impact Field Survey', role: 'Chief Field Researcher',       timeline: 'Jan 2025', accent: '#38bdf8', desc: 'Deployed a QR-code data collection system at high-traffic hubs (Thakur Village/Mall) to analyze algorithmic social media impact on students.',      metrics: ['Real-World Data Sourcing', 'UX Demographics Validated'] },
]

function FlipCard({ project }) {
  return (
    <div className="flip-wrap">
      <div className="flip-inner" style={{ '--accent': project.accent }}>

        {/* FRONT */}
        <div className="flip-front">
          <div className="flip-front-shine" />
          <div className="flip-front-emoji">{project.emoji}</div>
          <span className="flip-front-badge">{project.timeline}</span>
          <h3 className="flip-front-title">{project.title}</h3>
          <p className="flip-front-role">{project.role}</p>
          <div className="flip-front-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 16l4-4-4-4M13 16l4-4-4-4"/></svg>
            hover to flip
          </div>
          <div className="flip-front-glow" />
        </div>

        {/* BACK */}
        <div className="flip-back">
          <div className="flip-back-shine" />
          <h4 className="flip-back-heading">{project.emoji} {project.title}</h4>
          <p className="flip-back-desc">{project.desc}</p>
          <div className="flip-back-divider" />
          <div className="flip-back-metrics">
            {project.metrics.map((m, i) => (
              <div key={i} className="flip-back-metric">
                <span className="fbm-arrow" style={{ color: project.accent }}>▹</span>
                {m}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function ImpactShowcase() {
  return (
    <section className="showcase-section">
      <div className="showcase-inner">
        <div className="section3d-header">
          <div className="college-hero-badge">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 10px #38bdf8' }} />
            Leadership &amp; Social Infrastructure
          </div>
          <h2 className="section3d-title" style={{ '--g1': '#38bdf8', '--g2': '#34d399' }}>Beyond the Classroom</h2>
          <p className="section3d-sub">Real-world advocacy, data collection, and community mobilization.</p>
        </div>
        <div className="flip-grid">
          {impactProjects.map((p, i) => <FlipCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  )
}

// ── PHOTO GALLERY — polaroid 3D ────────────────────────────────
function PhotoLightbox({ photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft')  onPrev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose, onNext, onPrev])
  if (!photo) return null
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="photo-lightbox" onClick={e => e.stopPropagation()}>
        <button className="lb-arrow lb-arrow-left" onClick={onPrev}>‹</button>
        <button className="lb-arrow lb-arrow-right" onClick={onNext}>›</button>
        <button className="modal-close" onClick={onClose}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        <div className="lb-img-wrap">
          <img src={photo.src} alt={photo.title} className="lb-img" />
          <div className="lb-glow" style={{ background: `radial-gradient(ellipse at center, ${photo.accent}18 0%, transparent 70%)` }} />
        </div>
        <div className="lb-info">
          <span className="lb-tag" style={{ color: photo.accent, background: `${photo.accent}15`, borderColor: `${photo.accent}30` }}>📍 {photo.tag}</span>
          <h3 className="lb-title">{photo.title}</h3>
          <p className="lb-caption">{photo.caption}</p>
        </div>
      </div>
    </div>
  )
}

function PolaroidCard({ photo, index, onClick }) {
  const { ref, onMove, onLeave } = useTilt(7)
  const rot = ROTS[index % ROTS.length]
  return (
    <div
      ref={ref}
      className={`polaroid ${photo.wide ? 'pol-wide' : ''}`}
      style={{ '--rot': `${rot}deg`, '--accent': photo.accent, willChange: 'transform' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onClick(photo)}
    >
      <div className="pol-frame">
        <div className="pol-img-wrap">
          <img src={photo.src} alt={photo.title} loading="lazy" className="pol-img" />
          <div className="pol-shine" />
        </div>
        <div className="pol-caption-area">
          <p className="pol-title">{photo.title}</p>
          <p className="pol-date">📍 {photo.tag}</p>
        </div>
      </div>
      <span className="pol-sticker" style={{ color: photo.accent, borderColor: `${photo.accent}40`, background: `${photo.accent}12` }}>
        {photo.category}
      </span>
    </div>
  )
}

function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState(null)
  const idx      = photos.findIndex(p => p.id === activePhoto?.id)
  const close    = () => setActivePhoto(null)
  const prev     = () => setActivePhoto(photos[(idx - 1 + photos.length) % photos.length])
  const next     = () => setActivePhoto(photos[(idx + 1) % photos.length])

  return (
    <section className="showcase-section" style={{ paddingBottom: '100px' }}>
      <div className="showcase-inner">
        <div className="section3d-header">
          <div className="college-hero-badge">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#c084fc', boxShadow: '0 0 10px #c084fc' }} />
            On the Ground
          </div>
          <h2 className="section3d-title" style={{ '--g1': '#c084fc', '--g2': '#818cf8' }}>Field Documentation</h2>
          <p className="section3d-sub">GPS-verified photos from real campus drives, field surveys, and community marches.</p>
        </div>

        <div className="polaroid-grid">
          {photos.map((photo, i) => (
            <PolaroidCard key={photo.id} photo={photo} index={i} onClick={setActivePhoto} />
          ))}
        </div>
      </div>

      {activePhoto && <PhotoLightbox photo={activePhoto} onClose={close} onPrev={prev} onNext={next} />}
    </section>
  )
}

// ── PAGE ───────────────────────────────────────────────────────
export default function CollegePage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeVideo,    setActiveVideo]    = useState(null)
  const filtered = activeCategory === 'All' ? videos : videos.filter(v => v.category === activeCategory)

  return (
    <main className="college-page">
      {/* Dot-grid background */}
      <div className="college-dotgrid" />
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
              const meta  = CATEGORY_META[cat]
              const count = cat === 'All' ? videos.length : videos.filter(v => v.category === cat).length
              const active = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`college-filter-btn ${active ? 'active' : ''}`}
                  style={active ? { borderColor: meta.color, color: meta.color, background: `${meta.color}12` } : {}}
                >
                  <span className="filter-icon">{meta.icon}</span>
                  {cat}
                  <span className="filter-count" style={active ? { background: meta.color, color: '#000' } : {}}>
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
              {filtered.map(video => <VideoCard key={video.id} video={video} onClick={setActiveVideo} />)}
            </div>
          ) : (
            <div className="college-empty">
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎬</div>
              <p style={{ color: '#475569' }}>Videos for this category coming soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ── IMPACT SHOWCASE ──────────────────────── */}
      <ImpactShowcase />

      {/* ── PHOTO GALLERY ────────────────────────── */}
      <PhotoGallery />

      {/* ── VIDEO MODAL ──────────────────────────── */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </main>
  )
}
