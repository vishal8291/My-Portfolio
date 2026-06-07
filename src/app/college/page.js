'use client'
import { useState, useRef, useEffect } from 'react'
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

  // ── DLLE ──
  {
    id: 9,
    title: 'DLLE Community Visit — Day 1',
    category: 'DLLE',
    tag: 'Department of Lifelong Learning',
    src: '/videos/dlle-visit1.mp4',
    description: 'First day of our DLLE community outreach visit — interaction with local residents, needs assessment, and documentation of grassroots issues.',
    role: 'Field Volunteer',
    accent: '#38bdf8',
    icon: '🤝',
  },
  {
    id: 10,
    title: 'DLLE Community Visit — Day 2',
    category: 'DLLE',
    tag: 'Department of Lifelong Learning',
    src: '/videos/dlle-visit2.mp4',
    description: 'Follow-up community visit focusing on skill-building sessions and welfare programmes conducted with local residents as part of DLLE extension work.',
    role: 'Field Volunteer',
    accent: '#0ea5e9',
    icon: '🏘️',
  },
  {
    id: 11,
    title: 'DLLE Social Awareness Drive',
    category: 'DLLE',
    tag: 'Social Extension Activity',
    src: '/videos/dlle-drive.mp4',
    description: 'Social awareness drive conducted under DLLE, covering environmental hygiene, digital literacy, and civic responsibility in underserved communities.',
    role: 'Campaign Volunteer',
    accent: '#22d3ee',
    icon: '🌍',
  },
  {
    id: 12,
    title: 'DLLE Field Activity',
    category: 'DLLE',
    tag: 'Community Engagement',
    src: '/videos/dlle-activity.mp4',
    description: 'Live field activity under the DLLE programme — collaborative problem-solving, resource distribution, and real-world community engagement exercises.',
    role: 'Activity Lead',
    accent: '#67e8f9',
    icon: '📋',
  },

  // ── FUN ──
  {
    id: 13,
    title: 'College Fest — Opening Ceremony',
    category: 'Fun',
    tag: 'Annual Cultural Fest',
    src: '/videos/fun-fest1.mp4',
    description: 'The electric opening ceremony of our annual college fest — performances, introductions, and the energy that makes college life unforgettable.',
    role: 'Participant',
    accent: '#fb923c',
    icon: '🎉',
  },
  {
    id: 14,
    title: 'Fest Moments & Performances',
    category: 'Fun',
    tag: 'Stage Performances',
    src: '/videos/fun-fest2.mp4',
    description: 'Candid moments and stage performances from the college fest — dance, drama, and pure joy captured in these college memories.',
    role: 'Performer',
    accent: '#f97316',
    icon: '🎤',
  },
  {
    id: 15,
    title: 'Fun Highlights Reel',
    category: 'Fun',
    tag: 'College Memories',
    src: '/videos/fun-fest3.mp4',
    description: 'A highlights reel of the best fun moments from the college year — candid laughs, group photos, and the bonds we built together.',
    role: 'Co-organiser',
    accent: '#fb7185',
    icon: '😄',
  },
  {
    id: 16,
    title: 'Fest Memories',
    category: 'Fun',
    tag: 'Cultural Celebrations',
    src: '/videos/fun-fest4.mp4',
    description: 'Cultural celebrations and team moments — the people, the energy, and the spirit that define three years of college life at Thakur.',
    role: 'Volunteer',
    accent: '#f43f5e',
    icon: '🎊',
  },
]

// ── CATEGORIES ─────────────────────────────────────────────────
const CATEGORIES = ['All', 'POSH', 'Food & Nutrition', 'Youth Parliament', 'DLLE', 'Fun']

const CATEGORY_META = {
  'All':             { color: '#818cf8', icon: '🎬' },
  'POSH':            { color: '#f472b6', icon: '🛡️' },
  'Food & Nutrition':{ color: '#34d399', icon: '🥗' },
  'Youth Parliament':{ color: '#fbbf24', icon: '🏛️' },
  'DLLE':            { color: '#38bdf8', icon: '🤝' },
  'Fun':             { color: '#fb923c', icon: '🎉' },
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

// ── IMPACT STATS ───────────────────────────────────────────────
function ImpactStats() {
  const stats = [
    { val: '1000+', label: 'Students Reached', icon: '👥', color: '#818cf8' },
    { val: '5+',    label: 'Activities Led',   icon: '🏆', color: '#f472b6' },
    { val: '5',     label: 'Categories',       icon: '🎯', color: '#34d399' },
    { val: '16',    label: 'Videos Captured',  icon: '🎬', color: '#fbbf24' },
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

      {/* ── MODAL ────────────────────────────────── */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </main>
  )
}
