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

// ── PARTICLE CANVAS BACKGROUND (mouse-reactive) ────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -1000, y: -1000 })

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

    const onMouse = e => { mouse.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMouse)

    const COLORS = ['rgba(129,140,248,', 'rgba(192,132,252,', 'rgba(34,211,238,', 'rgba(244,114,182,']
    // responsive-3d-scaling: device quality tier
    const isMobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent)
    const SPEED_CAP = 2.2
    const PARTICLE_COUNT = isMobile ? 22 : 65
    const SHOW_LINES = !isMobile           // fps-performance-profiler: skip O(n²) on mobile
    const FRAME_MS   = isMobile ? 1000 / 30 : 0  // fps-performance-profiler: 30fps cap on mobile

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.5 + 0.15,
      })
    }

    let lastFrameTime = 0
    const draw = (timestamp) => {
      animId = requestAnimationFrame(draw)
      if (FRAME_MS > 0 && timestamp - lastFrameTime < FRAME_MS) return
      lastFrameTime = timestamp

      ctx.clearRect(0, 0, W, H)
      const { x: mx, y: my } = mouse.current

      particles.forEach(p => {
        // Mouse repulsion
        const dx = p.x - mx; const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 130 && dist > 0) {
          const force = (130 - dist) / 130 * 0.9
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }
        // Velocity cap + damping
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > SPEED_CAP) { p.vx = (p.vx / speed) * SPEED_CAP; p.vy = (p.vy / speed) * SPEED_CAP }
        p.vx *= 0.978; p.vy *= 0.978

        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha})`
        ctx.fill()
      })

      // Connection lines — desktop only
      if (SHOW_LINES) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const d = Math.sqrt(dx * dx + dy * dy)
            if (d < 140) {
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `rgba(129,140,248,${0.09 * (1 - d / 140)})`
              ctx.lineWidth = 0.6
              ctx.stroke()
            }
          }
        }
      }

      // Soft glow at cursor position
      if (mx > -900 && my > -900) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, 110)
        g.addColorStop(0, 'rgba(129,140,248,0.055)')
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, W, H)
      }
    }
    animId = requestAnimationFrame(draw)

    // fps-performance-profiler: pause when tab hidden
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animId)
      else animId = requestAnimationFrame(draw)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      document.removeEventListener('visibilitychange', onVisibility)
    }
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

// ── GLITCH TEXT ────────────────────────────────────────────────
function GlitchText({ children, className = '' }) {
  return <span className={`glitch-text ${className}`}>{children}</span>
}

// ── SCROLL DOWN INDICATOR ──────────────────────────────────────
function ScrollIndicator() {
  return (
    <a href="#about-section" className="scroll-indicator" aria-label="Scroll down">
      <div className="scroll-indicator-line" />
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </a>
  )
}

// ── HERO (FULLBLEED PHOTO STYLE) ───────────────────────────────
function Hero() {
  return (
    <>
      <section className="hero-fb">
        {/* Background video — plays at low opacity behind particles */}
        <video className="hero-bg-video" autoPlay muted loop playsInline poster="/assets/dev-bg.png">
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <ParticleCanvas />

        {/* Full-bleed photo — right side */}
        <img src="/photo.jpg" alt="Vishal Tiwari" className="hero-fb-photo" />

        {/* Gradient overlays */}
        <div className="hero-fb-overlay-left" />
        <div className="hero-fb-overlay-bottom" />
        <div className="hero-fb-overlay-top" />

        {/* Subtle purple tint over photo */}
        <div className="hero-fb-tint" />

        {/* Accent orb */}
        <div className="hero-fb-orb" />

        {/* ── Content anchored bottom-left ── */}
        <div className="hero-fb-content">
          <div className="fade-up hero-fb-badge">
            <span className="status-dot" />
            Open to full-time roles · Mumbai, India
          </div>

          <h1 className="fade-up fade-up-1 hero-fb-heading-sm">Hi, I&apos;m</h1>
          <h1 className="fade-up fade-up-2 hero-fb-heading-lg">
            <GlitchText className="hero-fb-name-gradient">Vishal Tiwari</GlitchText>
          </h1>
          <p className="fade-up fade-up-3 hero-fb-role">
            <TypewriterRole />
          </p>
          <p className="fade-up fade-up-4 hero-fb-bio">
            Building scalable web apps, AI-integrated platforms &amp; real-time systems.
            B.Sc. IT · Thakur College, Mumbai.
          </p>

          <div className="fade-up fade-up-5 hero-fb-cta">
            <Link href="/projects" className="hero-fb-btn-primary">
              View My Work →
            </Link>
            <Link href="/contact" className="hero-fb-btn-outline">
              Contact Me
            </Link>
            <a href="/Resume.pdf" download className="hero-fb-btn-ghost">
              Resume ↗
            </a>
          </div>

          {/* Socials */}
          <div className="fade-up fade-up-6 hero-fb-socials">
            {[
              { icon: <GithubIcon size={17} />,   href: 'https://github.com/vishal8291',                        label: 'GitHub' },
              { icon: <LinkedinIcon size={17} />, href: 'https://www.linkedin.com/in/vishal-tiwari-158a5216b', label: 'LinkedIn' },
              { icon: <TwitterIcon size={17} />,  href: 'https://x.com/vishalT200',                             label: 'Twitter' },
              { icon: <EmailIcon size={17} />,    href: 'mailto:vishal.buildss@gmail.com',                     label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="social-link">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />

        {/* Stats strip — bottom right */}
        <div className="fade-up fade-up-6 hero-fb-stats">
          {[
            { val: '2+', label: 'Years' },
            { val: '18+', label: 'Projects' },
            { val: '10+', label: 'Certs' },
          ].map(({ val, label }) => (
            <div key={label} className="hero-fb-stat">
              <span className="hero-fb-stat-val">{val}</span>
              <span className="hero-fb-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech marquee just below hero */}
      <div id="about-section" style={{ background: 'var(--bg)', paddingTop: '48px' }}>
        <TechMarquee />
      </div>
    </>
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
          <div className="section-label-game">ABOUT.EXE</div>
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
    <section className="section dark-section projects-section">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-label-game">QUEST_LOG</div>
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
    <section className="section skills-section">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-label-game">SKILL_TREE</div>
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

// ── 3D TIMELINE ────────────────────────────────────────────────
const timelineItems = [
  {
    year: '2026', title: 'B.Sc. IT Graduate',
    org: 'Thakur College of Science & Commerce',
    desc: 'CGPA 7.47 — Mumbai University. Specialized in web technologies, databases, software engineering & AI applications.',
    color: '#818cf8', icon: '🎓',
    tags: ['Mumbai Univ.', 'CGPA 7.47', 'B.Sc. IT'],
  },
  {
    year: '2025', title: 'Full-Stack Developer',
    org: 'Freelance & Open Source',
    desc: 'Building production SaaS — PDFSolution, AI tools, e-commerce systems. 18+ projects shipped & deployed on Render and Vercel.',
    color: '#22d3ee', icon: '🚀',
    tags: ['18+ Projects', 'SaaS', 'AI Tools'],
  },
  {
    year: '2024', title: 'React Native Developer',
    org: 'Personal Projects',
    desc: 'Built DogCare app with Claymorphism design system, AI integrations, and real-time collaborative apps using Expo & Firebase.',
    color: '#f472b6', icon: '📱',
    tags: ['React Native', 'Expo', 'Firebase'],
  },
  {
    year: '2023', title: 'Started B.Sc. IT',
    org: 'Thakur College, Mumbai',
    desc: 'First line of code turned into real projects — landing pages, mini-games, CLI tools. Fell in love with building things from scratch.',
    color: '#34d399', icon: '💻',
    tags: ['Web Basics', 'Python', 'C++'],
  },
]

function HoloCard({ item, side }) {
  return (
    <TiltCard
      className={`tl3d-card tl3d-card-${side}`}
      style={{ '--c': item.color }}
    >
      {/* Animated scan line */}
      <div className="tl3d-scan" />

      {/* Top accent bar */}
      <div className="tl3d-top-bar" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

      {/* Ghost year behind content */}
      <div className="tl3d-bg-year">{item.year}</div>

      {/* Header row */}
      <div className="tl3d-card-head">
        <span className="tl3d-year-badge" style={{ color: item.color, borderColor: `${item.color}35`, background: `${item.color}10` }}>
          {item.year}
        </span>
        <span className="tl3d-icon-badge">{item.icon}</span>
      </div>

      <h3 className="tl3d-title">{item.title}</h3>

      <div className="tl3d-org">
        <span className="tl3d-org-dot" style={{ background: item.color }} />
        {item.org}
      </div>

      <p className="tl3d-desc">{item.desc}</p>

      <div className="tl3d-tags">
        {item.tags.map(t => (
          <span key={t} className="tl3d-tag" style={{ color: item.color, background: `${item.color}10`, borderColor: `${item.color}30` }}>
            {t}
          </span>
        ))}
      </div>
    </TiltCard>
  )
}

function TLNode({ color, icon }) {
  return (
    <div className="tl3d-node" style={{ '--c': color }}>
      {/* outer dashed ring */}
      <div className="tl3d-ring tl3d-ring-outer" />
      {/* inner solid ring */}
      <div className="tl3d-ring tl3d-ring-inner" />
      {/* glowing core */}
      <div className="tl3d-core">
        <span className="tl3d-core-icon">{icon}</span>
      </div>
    </div>
  )
}

function Timeline() {
  return (
    <section className="section dark-section">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-label-game">MISSION_LOG</div>
          <h2 className="section-heading">My <span className="gradient-text">Timeline</span></h2>
          <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: 1.75 }}>
            Every milestone that shaped who I am as a developer.
          </p>
        </div>

        <div className="tl3d-wrap">
          {/* Glowing vertical spine */}
          <div className="tl3d-spine" />

          {timelineItems.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={item.year} className={`tl3d-row reveal reveal-delay-${Math.min(i + 1, 4)}`}>

                {/* Left column */}
                <div className="tl3d-col tl3d-col-left">
                  {isLeft
                    ? <HoloCard item={item} side="left" />
                    : <div className="tl3d-empty-year" style={{ color: `${item.color}22` }}>{item.year}</div>
                  }
                </div>

                {/* Center column — node */}
                <div className="tl3d-col tl3d-col-center">
                  {/* connector to left card */}
                  {isLeft  && <div className="tl3d-connector tl3d-conn-l" style={{ '--c': item.color }} />}
                  {/* connector to right card */}
                  {!isLeft && <div className="tl3d-connector tl3d-conn-r" style={{ '--c': item.color }} />}

                  <TLNode color={item.color} icon={item.icon} />
                </div>

                {/* Right column */}
                <div className="tl3d-col tl3d-col-right">
                  {!isLeft
                    ? <HoloCard item={item} side="right" />
                    : <div className="tl3d-empty-year" style={{ color: `${item.color}22` }}>{item.year}</div>
                  }
                </div>

              </div>
            )
          })}
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
        <div className="section-label-game">OPEN_COMMS</div>
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
