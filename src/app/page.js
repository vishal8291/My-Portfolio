'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import projects from './data/projectsData'

// ── ICONS ──────────────────────────────────────────────────────
const GithubIcon   = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const LinkedinIcon = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const TwitterIcon  = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
const EmailIcon    = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
const ExternalIcon = ({ size = 13 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>

// ── PARTICLE CANVAS BACKGROUND ─────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId, W, H, particles = []

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COLORS = ['rgba(129,140,248,', 'rgba(192,132,252,', 'rgba(34,211,238,', 'rgba(244,114,182,']
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.5 + 0.15,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(129,140,248,${0.08 * (1 - dist / 140)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
}

// ── TYPEWRITER ROLE ────────────────────────────────────────────
function TypewriterRole() {
  const roles = ['Full-Stack Developer', 'React Native Dev', 'AI Builder', 'SaaS Maker']
  const [index, setIndex]         = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)
  useEffect(() => {
    const target = roles[index]
    if (!deleting && displayed === target) { const t = setTimeout(() => setDeleting(true), 2400); return () => clearTimeout(t) }
    if (deleting && displayed === '') { setDeleting(false); setIndex(i => (i + 1) % roles.length); return }
    const speed = deleting ? 32 : 76
    const t = setTimeout(() => setDisplayed(prev => deleting ? prev.slice(0, -1) : target.slice(0, prev.length + 1)), speed)
    return () => clearTimeout(t)
  }, [displayed, deleting, index])
  return <span className="typewriter-text">{displayed}<span className="cursor-blink" /></span>
}

// ── SCROLL REVEAL ──────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ── ANIMATED COUNTER ───────────────────────────────────────────
function Counter({ to, suffix = '+', duration = 1600 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null); const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 50; const stepVal = Math.ceil(to / steps); let current = 0
        const interval = setInterval(() => {
          current = Math.min(current + stepVal, to)
          setVal(current)
          if (current >= to) clearInterval(interval)
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

// ── 3D CARD TILT ───────────────────────────────────────────────
function TiltCard({ children, className = '', style = {} }) {
  const ref = useRef(null)
  const onMove = useCallback(e => {
    const el = ref.current; if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left; const y = e.clientY - rect.top
    const cx = rect.width / 2; const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -10
    const rotY = ((x - cx) / cx) * 10
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`
    el.style.boxShadow = `${-rotY * 1.5}px ${rotX * 1.5}px 40px rgba(129,140,248,0.18)`
  }, [])
  const onLeave = useCallback(() => {
    const el = ref.current; if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    el.style.boxShadow = ''
  }, [])
  return (
    <div ref={ref} className={className} style={{ ...style, transition: 'transform 0.12s ease-out, box-shadow 0.12s ease-out' }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}

// ── TECH MARQUEE ───────────────────────────────────────────────
const techStack = [
  { name: 'JavaScript', dot: '#fbbf24' }, { name: 'TypeScript', dot: '#3b82f6' },
  { name: 'React',      dot: '#61dafb' }, { name: 'Next.js',    dot: '#f1f5f9' },
  { name: 'Node.js',    dot: '#4ade80' }, { name: 'Express.js', dot: '#34d399' },
  { name: 'MongoDB',    dot: '#22d3ee' }, { name: 'PostgreSQL', dot: '#818cf8' },
  { name: 'Redis',      dot: '#f87171' }, { name: 'Tailwind',   dot: '#38bdf8' },
  { name: 'Docker',     dot: '#60a5fa' }, { name: 'Git',        dot: '#f97316' },
  { name: 'REST API',   dot: '#a78bfa' }, { name: 'React Native', dot: '#61dafb' },
  { name: 'Expo',       dot: '#f472b6' }, { name: 'Prisma',     dot: '#818cf8' },
]
function TechMarquee() {
  const doubled = [...techStack, ...techStack]
  return (
    <div className="marquee-wrap" style={{ marginTop: '64px' }}>
      <div className="marquee-track">
        {doubled.map(({ name, dot }, i) => (
          <span key={`${name}-${i}`} className="tech-chip">
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: dot, boxShadow: `0 0 8px ${dot}`, flexShrink: 0 }} />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── HERO PHOTO ─────────────────────────────────────────────────
function HeroPhoto() {
  const floatingBadges = [
    { label: 'React', color: '#61dafb', angle: 0,   dist: 155 },
    { label: 'Node',  color: '#4ade80', angle: 72,  dist: 160 },
    { label: 'AI',    color: '#f472b6', angle: 144, dist: 155 },
    { label: 'Next',  color: '#818cf8', angle: 216, dist: 160 },
    { label: 'Mongo', color: '#22d3ee', angle: 288, dist: 155 },
  ]
  return (
    <div className="photo-orbit-wrap">
      {/* Outer glow */}
      <div className="photo-glow" />
      {/* Rotating ring */}
      <div className="photo-ring-outer" />
      <div className="photo-ring-inner" />
      {/* Photo */}
      <div className="photo-frame">
        <img src="/photo.jpg" alt="Vishal Tiwari" className="hero-photo-img" />
        <div className="photo-overlay" />
      </div>
      {/* Orbiting badges */}
      {floatingBadges.map(({ label, color, angle, dist }) => {
        const rad = (angle * Math.PI) / 180
        const x = Math.cos(rad) * dist
        const y = Math.sin(rad) * dist
        return (
          <div key={label} className="orbit-badge"
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, borderColor: `${color}40`, color, animationDelay: `${angle / 72 * 0.4}s` }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, boxShadow: `0 0 6px ${color}` }} />
            {label}
          </div>
        )
      })}
      {/* Deco dots */}
      <div className="deco-dot deco-dot-1" />
      <div className="deco-dot deco-dot-2" />
      <div className="deco-dot deco-dot-3" />
    </div>
  )
}

// ── HERO ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-section">
      <ParticleCanvas />
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-inner">
        {/* LEFT — text */}
        <div className="hero-text-col">
          <div className="fade-up" style={{ marginBottom: '28px' }}>
            <span className="hero-badge">
              <span className="status-dot" />
              Open to full-time opportunities
            </span>
          </div>
          <h1 className="fade-up fade-up-1 hero-name">
            Hi, I&apos;m{' '}
            <span className="hero-name-gradient">Vishal Tiwari</span>
          </h1>
          <p className="fade-up fade-up-2 hero-role">
            <TypewriterRole />
          </p>
          <p className="fade-up fade-up-3 hero-bio">
            Full Stack Developer building scalable web apps, AI-integrated platforms, and real-time systems.
            B.Sc. IT at{' '}
            <span style={{ color: '#c4b5fd', fontWeight: 600 }}>Thakur College, Mumbai</span>
            {' '}— shipping across e-commerce, healthcare, legal tech &amp; SaaS.
          </p>
          <div className="fade-up fade-up-4 hero-cta">
            <Link href="/projects" className="btn-primary btn-glow">
              View My Work <span style={{ marginLeft: 6 }}>→</span>
            </Link>
            <a href="/Resume.pdf" download className="btn-outline">
              Download Resume ↗
            </a>
          </div>
          <div className="fade-up fade-up-5 hero-socials">
            {[
              { icon: <GithubIcon />,   href: 'https://github.com/vishal8291',                        label: 'GitHub' },
              { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/vishal-tiwari-158a5216b', label: 'LinkedIn' },
              { icon: <TwitterIcon />,  href: 'https://x.com/vishalT200',                             label: 'Twitter' },
              { icon: <EmailIcon />,    href: 'mailto:vishaltiwari101999@gmail.com',                  label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="social-link">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="hero-photo-col fade-up fade-up-2">
          <HeroPhoto />
        </div>
      </div>

      {/* Full-width marquee below grid */}
      <div className="fade-up fade-up-6" style={{ position: 'relative', zIndex: 1 }}>
        <TechMarquee />
      </div>
    </section>
  )
}

// ── ABOUT PREVIEW ─────────────────────────────────────────────
function AboutPreview() {
  const stats = [
    { to: 2,  label: 'Years Coding',   suffix: '+', color: '#818cf8' },
    { to: 18, label: 'Projects Built', suffix: '+', color: '#22d3ee' },
    { to: 10, label: 'Certs',          suffix: '+', color: '#f472b6' },
    { to: 22, label: 'Technologies',   suffix: '+', color: '#fbbf24' },
  ]
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <div className="reveal-left about-text">
          <div className="section-label">About Me</div>
          <h2 className="section-heading">
            Passionate about <span className="gradient-text">Building</span>
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '16px', fontSize: '0.98rem' }}>
            I&apos;m a Full Stack Developer from{' '}
            <span style={{ color: '#c4b5fd', fontWeight: 600 }}>Thakur College of Science and Commerce, Mumbai</span>
            {' '}— B.Sc. IT graduate (2026, CGPA 7.47).
          </p>
          <p style={{ color: '#64748b', lineHeight: 1.9, marginBottom: '38px', fontSize: '0.98rem' }}>
            I love creating fast, accessible, and beautiful digital experiences. Always learning, always shipping.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/about" className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>
              My Story →
            </Link>
            <a href="/Resume.pdf" download className="btn-outline" style={{ padding: '12px 28px', fontSize: '0.9rem', color: '#a78bfa' }}>
              Resume ↗
            </a>
          </div>
        </div>

        <div className="reveal-right stats-grid">
          {stats.map(({ to, label, suffix, color }, i) => (
            <TiltCard key={label} className={`card-glass stat-card reveal reveal-delay-${i + 1}`}
              style={{ padding: '32px 20px', borderRadius: '24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div className="stat-bar" style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }} />
              <div className="stat-ring" style={{ borderColor: `${color}20` }} />
              <div style={{ fontSize: 'clamp(2.4rem,4vw,3.2rem)', fontWeight: 900, marginBottom: '8px', color, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                <Counter to={to} suffix={suffix} />
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── PROJECTS PREVIEW ──────────────────────────────────────────
function ProjectsPreview() {
  const featured = projects.filter(p => p.status === 'building').slice(0, 3)
  return (
    <section className="section dark-section">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-label">Work</div>
          <h2 className="section-heading">Currently <span className="gradient-text">Building</span></h2>
          <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.96rem', maxWidth: '400px', margin: '0 auto' }}>
            Active projects shipping right now.
          </p>
        </div>

        <div className="projects-grid">
          {featured.map((project, i) => (
            <TiltCard key={project.title} className={`card-glass card-featured project-card reveal reveal-delay-${i + 1}`}>
              <div className="project-accent-bar" style={{ background: `linear-gradient(to right, ${project.accent}, ${project.accent}22)` }} />
              <div className="project-card-inner">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="category-badge" style={{ color: project.accent, background: `${project.accent}12`, border: `1px solid ${project.accent}28` }}>
                    {project.category}
                  </span>
                  <span className="building-badge">
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fbbf24' }} />
                    Building
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description.slice(0, 120)}…</p>
                <div className="tech-tags">
                  {project.tech.slice(0, 4).map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GithubIcon size={13} /> GitHub
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                      <ExternalIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '52px' }}>
          <Link href="/projects" className="btn-primary btn-glow">
            View All {projects.length} Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── CIRCULAR SKILL RING ────────────────────────────────────────
function SkillRing({ name, color, pct, delay = 0 }) {
  const [animPct, setAnimPct] = useState(0)
  const ref = useRef(null); const started = useRef(false)
  const R = 40; const CIRC = 2 * Math.PI * R

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        setTimeout(() => {
          let frame = 0; const total = 60
          const tick = () => {
            frame++
            setAnimPct(Math.round((frame / total) * pct))
            if (frame < total) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }, delay)
      }
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [pct, delay])

  const dashOffset = CIRC - (animPct / 100) * CIRC

  return (
    <div ref={ref} className="skill-ring-wrap">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
        <circle cx="50" cy="50" r={R} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={CIRC} strokeDashoffset={dashOffset}
          strokeLinecap="round" transform="rotate(-90 50 50)"
          style={{ transition: 'stroke-dashoffset 0.03s', filter: `drop-shadow(0 0 6px ${color}88)` }} />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="central"
          fill={color} fontSize="14" fontWeight="800">{animPct}%</text>
      </svg>
      <p className="skill-ring-label">{name}</p>
    </div>
  )
}

function SkillsPreview() {
  const skills = [
    { name: 'JavaScript',  color: '#fbbf24', pct: 88, delay: 0   },
    { name: 'React',       color: '#61dafb', pct: 85, delay: 80  },
    { name: 'Next.js',     color: '#818cf8', pct: 82, delay: 160 },
    { name: 'Node.js',     color: '#4ade80', pct: 80, delay: 240 },
    { name: 'TypeScript',  color: '#38bdf8', pct: 78, delay: 320 },
    { name: 'MongoDB',     color: '#22d3ee', pct: 82, delay: 400 },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-label">Expertise</div>
          <h2 className="section-heading">Tech <span className="gradient-text">Stack</span></h2>
          <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.96rem' }}>
            Core technologies I build with across the full stack.
          </p>
        </div>

        <div className="skills-rings-grid reveal">
          {skills.map((s, i) => <SkillRing key={s.name} {...s} />)}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '52px' }}>
          <Link href="/skills" className="btn-outline" style={{ padding: '13px 34px', borderRadius: '12px', fontWeight: 600, fontSize: '0.92rem', color: '#a78bfa', textDecoration: 'none', display: 'inline-block' }}>
            View Full Stack →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── EXPERIENCE TIMELINE ────────────────────────────────────────
function Timeline() {
  const items = [
    { year: '2026', title: 'B.Sc. IT Graduate', org: 'Thakur College of Science & Commerce', desc: 'CGPA 7.47 — Mumbai University. Specialized in web tech, databases & AI.', color: '#818cf8' },
    { year: '2025', title: 'Full-Stack Developer', org: 'Freelance & Open Source', desc: 'Building SaaS products, AI tools, e-commerce platforms & PDF utilities. Shipped 18+ projects.', color: '#22d3ee' },
    { year: '2024', title: 'React Native Developer', org: 'Personal Projects', desc: 'DogCare app (Claymorphism), AI integrations, real-time apps with Expo & Firebase.', color: '#f472b6' },
  ]
  return (
    <section className="section dark-section">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-label">Journey</div>
          <h2 className="section-heading">My <span className="gradient-text">Timeline</span></h2>
        </div>
        <div className="timeline-wrap">
          <div className="timeline-line" />
          {items.map(({ year, title, org, desc, color }, i) => (
            <div key={year} className={`timeline-item reveal reveal-delay-${i + 1}`}>
              <div className="timeline-dot" style={{ borderColor: color, boxShadow: `0 0 14px ${color}66` }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
              </div>
              <TiltCard className="timeline-card card-glass">
                <div className="timeline-year" style={{ color }}>{year}</div>
                <h3 className="timeline-title">{title}</h3>
                <div className="timeline-org">{org}</div>
                <p className="timeline-desc">{desc}</p>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="section cta-section">
      <div className="cta-orb cta-orb-1" />
      <div className="cta-orb cta-orb-2" />
      <div className="reveal cta-inner">
        <div className="section-label">Let&apos;s Connect</div>
        <h2 className="section-heading cta-heading">
          Let&apos;s Build Something{' '}
          <span className="gradient-text">Together</span>
        </h2>
        <p className="cta-sub">
          Open to full-time roles, freelance, and collaborations.
          Drop a message — I respond within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary btn-glow" style={{ padding: '16px 48px', fontSize: '1rem' }}>
            Get In Touch ✉
          </Link>
          <a href="/Resume.pdf" download className="btn-outline" style={{ padding: '16px 48px', fontSize: '1rem' }}>
            Download Resume ↗
          </a>
        </div>
        {/* Social proof row */}
        <div className="cta-social-row">
          {[
            { icon: <GithubIcon size={16} />,   href: 'https://github.com/vishal8291',                       label: 'GitHub',   handle: '@vishal8291' },
            { icon: <LinkedinIcon size={16} />, href: 'https://www.linkedin.com/in/vishal-tiwari-158a5216b', label: 'LinkedIn', handle: 'vishal-tiwari' },
            { icon: <TwitterIcon size={16} />,  href: 'https://x.com/vishalT200',                            label: 'Twitter',  handle: '@vishalT200' },
          ].map(({ icon, href, label, handle }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="cta-social-pill">
              {icon} {handle}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── PAGE ──────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal()
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <AboutPreview />
      <div className="section-divider" />
      <ProjectsPreview />
      <div className="section-divider" />
      <SkillsPreview />
      <div className="section-divider" />
      <Timeline />
      <div className="section-divider" />
      <CTA />
    </>
  )
}
