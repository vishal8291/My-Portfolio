'use client'
import { useState, useEffect, useRef } from 'react'

// ============================================================
// DATA
// ============================================================

const ROLES = [
  'Full Stack Developer',
  'React Engineer',
  'Node.js Developer',
  'UI/UX Enthusiast',
]

const SKILLS = [
  // Frontend
  { name: 'React',        category: 'Frontend', color: '#61dafb' },
  { name: 'Next.js',      category: 'Frontend', color: '#e2e8f0' },
  { name: 'TypeScript',   category: 'Frontend', color: '#3b82f6' },
  { name: 'JavaScript',   category: 'Frontend', color: '#fbbf24' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#38bdf8' },
  { name: 'HTML / CSS',   category: 'Frontend', color: '#f97316' },
  // Backend
  { name: 'Node.js',      category: 'Backend', color: '#4ade80' },
  { name: 'Express.js',   category: 'Backend', color: '#e2e8f0' },
  { name: 'Python',       category: 'Backend', color: '#60a5fa' },
  { name: 'REST APIs',    category: 'Backend', color: '#f97316' },
  { name: 'GraphQL',      category: 'Backend', color: '#e879f9' },
  // Database
  { name: 'PostgreSQL',   category: 'Database', color: '#60a5fa' },
  { name: 'MongoDB',      category: 'Database', color: '#4ade80' },
  { name: 'Redis',        category: 'Database', color: '#f87171' },
  { name: 'Supabase',     category: 'Database', color: '#34d399' },
  { name: 'Prisma',       category: 'Database', color: '#818cf8' },
  // Tools
  { name: 'Git / GitHub', category: 'Tools', color: '#f87171' },
  { name: 'Docker',       category: 'Tools', color: '#60a5fa' },
  { name: 'AWS',          category: 'Tools', color: '#fbbf24' },
  { name: 'Vercel',       category: 'Tools', color: '#e2e8f0' },
  { name: 'Linux',        category: 'Tools', color: '#fde047' },
]

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with product management, shopping cart, Stripe payments, order tracking, and an admin dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    category: 'Full Stack',
    accent: '#8b5cf6',
    featured: true,
    github: '#',
    live: '#',
  },
  {
    title: 'Real-Time Chat App',
    description:
      'WebSocket-powered chat application supporting group rooms, private messaging, file sharing, emoji reactions, and read receipts.',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
    category: 'Full Stack',
    accent: '#06b6d4',
    featured: true,
    github: '#',
    live: '#',
  },
  {
    title: 'AI Code Assistant',
    description:
      'VS Code extension powered by Claude AI for inline code explanations, automated test generation, and smart refactoring suggestions.',
    tech: ['TypeScript', 'Claude API', 'VS Code API', 'Node.js'],
    category: 'AI / ML',
    accent: '#ec4899',
    featured: true,
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management Dashboard',
    description:
      'Kanban-style project management app with drag-and-drop columns, team collaboration, time tracking, and productivity analytics.',
    tech: ['React', 'Redux', 'Express', 'PostgreSQL', 'Chart.js'],
    category: 'Full Stack',
    accent: '#f59e0b',
    github: '#',
    live: '#',
  },
  {
    title: 'Weather Forecast App',
    description:
      'Beautiful weather application with 7-day forecasts, interactive radar maps, hourly breakdowns, and severe weather alerts.',
    tech: ['Next.js', 'OpenWeather API', 'Leaflet.js', 'Tailwind'],
    category: 'Frontend',
    accent: '#10b981',
    github: '#',
    live: '#',
  },
  {
    title: 'Social Media Platform',
    description:
      'Twitter-inspired microblogging platform with posts, likes, follows, real-time notifications, media uploads to AWS S3.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'AWS S3'],
    category: 'Full Stack',
    accent: '#6366f1',
    github: '#',
    live: '#',
  },
  {
    title: 'REST API Service',
    description:
      'Production-grade REST API with JWT authentication, role-based access, rate limiting, Redis caching, and Swagger docs.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Swagger'],
    category: 'Backend',
    accent: '#f97316',
    github: '#',
    live: '#',
  },
  {
    title: 'Crypto Portfolio Tracker',
    description:
      'Real-time cryptocurrency portfolio tracker with price alerts, P&L analytics, historical charts, and watchlists.',
    tech: ['React', 'CoinGecko API', 'Chart.js', 'Supabase'],
    category: 'Frontend',
    accent: '#14b8a6',
    github: '#',
    live: '#',
  },
  {
    title: 'Blog CMS Platform',
    description:
      'Headless CMS blog with a rich text editor, SEO meta tools, image CDN optimization, and multi-author support.',
    tech: ['Next.js', 'Sanity CMS', 'Tailwind', 'Vercel'],
    category: 'Full Stack',
    accent: '#a855f7',
    github: '#',
    live: '#',
  },
  {
    title: 'DevOps CI/CD Pipeline',
    description:
      'Automated deployment pipeline with Docker containers, GitHub Actions workflows, blue-green deployments, and Slack alerts.',
    tech: ['Docker', 'GitHub Actions', 'AWS EC2', 'Nginx', 'Bash'],
    category: 'DevOps',
    accent: '#0ea5e9',
    github: '#',
    live: '#',
  },
  {
    title: 'URL Shortener Service',
    description:
      'High-performance URL shortener with custom slugs, click analytics, QR code generation, and link expiry controls.',
    tech: ['Node.js', 'Redis', 'PostgreSQL', 'Next.js'],
    category: 'Backend',
    accent: '#84cc16',
    github: '#',
    live: '#',
  },
  {
    title: 'Recipe Finder App',
    description:
      'Smart recipe discovery app with ingredient-based search, dietary filters, meal planning, and nutritional breakdown.',
    tech: ['React', 'Spoonacular API', 'Context API', 'Tailwind'],
    category: 'Frontend',
    accent: '#fb923c',
    github: '#',
    live: '#',
  },
]

// ============================================================
// SVG ICONS
// ============================================================

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const ExternalIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const EmailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const MenuIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
)

const CloseIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ChevronDownIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

// ============================================================
// SCROLL REVEAL HOOK
// ============================================================

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ============================================================
// NAVBAR
// ============================================================

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 100,
          transition: 'all 0.35s ease',
        }}
        className={scrolled ? 'glass-nav' : ''}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.35rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
              <span className="gradient-text">V</span>
              <span style={{ color: '#e2e8f0' }}>ishal</span>
              <span style={{ color: '#8b5cf6' }}>.</span>
            </button>

            {/* Desktop links */}
            <div className="hide-mobile" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              {links.map(({ id, label }) => (
                <button key={id} onClick={() => scrollTo(id)} className="nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.03em', padding: '4px 0' }}>
                  {label}
                </button>
              ))}
              <button onClick={() => scrollTo('contact')} className="btn-primary"
                style={{ padding: '9px 22px', borderRadius: '8px', fontWeight: 700, fontSize: '0.88rem', border: 'none', cursor: 'pointer', color: '#fff', letterSpacing: '0.03em' }}>
                Hire Me
              </button>
            </div>

            {/* Mobile hamburger */}
            <button className="show-mobile" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: '4px' }}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => setMenuOpen(false)}
          style={{ position: 'absolute', top: '20px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
          <CloseIcon size={26} />
        </button>
        {links.map(({ id, label }) => (
          <button key={id} onClick={() => scrollTo(id)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.6rem', fontWeight: 800, color: '#e2e8f0', letterSpacing: '-0.01em' }}>
            {label}
          </button>
        ))}
        <button onClick={() => scrollTo('contact')} className="btn-primary"
          style={{ marginTop: '16px', padding: '14px 36px', borderRadius: '10px', border: 'none', cursor: 'pointer', color: '#fff', fontWeight: 700, fontSize: '1rem' }}>
          Hire Me
        </button>
      </div>
    </>
  )
}

// ============================================================
// HERO
// ============================================================

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = ROLES[roleIdx]
    let t
    if (typing) {
      if (displayed.length < role.length) {
        t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65)
      } else {
        t = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(prev => prev.slice(0, -1)), 35)
      } else {
        setRoleIdx((roleIdx + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [displayed, typing, roleIdx])

  return (
    <section id="home"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '80px 24px 60px' }}>

      {/* Grid background */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Background orbs */}
      <div style={{ position: 'absolute', top: '-120px', left: '-120px', width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(70px)', animation: 'pulse-orb 8s ease-in-out infinite', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(6,182,212,0.16) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(70px)', animation: 'pulse-orb 10s ease-in-out infinite 2s', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '60%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(70px)', animation: 'pulse-orb 12s ease-in-out infinite 4s', zIndex: 0, pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', textAlign: 'center', animation: 'fade-up 0.9s ease forwards' }}>

        {/* Status badge */}
        <div style={{ marginBottom: '28px' }}>
          <span className="hero-badge">
            <span className="status-dot" />
            Available for freelance &amp; full-time roles
          </span>
        </div>

        {/* Name */}
        <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '20px', letterSpacing: '-0.035em' }}>
          Hi, I&apos;m{' '}
          <span className="gradient-text">Vishal</span>
        </h1>

        {/* Typed role */}
        <div style={{ fontSize: 'clamp(1.1rem, 3vw, 1.55rem)', color: '#94a3b8', marginBottom: '28px', minHeight: '2.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{displayed}</span>
          <span className="cursor-blink" />
        </div>

        {/* Bio */}
        <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '540px', margin: '0 auto 40px', lineHeight: 1.75 }}>
          I build exceptional digital experiences — fast, scalable, and pixel-perfect.
          From databases to user interfaces, I love the full journey.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '52px' }}>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            style={{ padding: '14px 34px', borderRadius: '10px', fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer', color: '#fff', letterSpacing: '0.03em' }}>
            View My Work
          </button>
          <a href="/resume.pdf"
            className="btn-outline"
            style={{ padding: '14px 34px', borderRadius: '10px', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', color: '#cbd5e1', letterSpacing: '0.03em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Download CV ↗
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          {[
            { icon: <GithubIcon />, href: 'https://github.com/', label: 'GitHub' },
            { icon: <LinkedinIcon />, href: 'https://linkedin.com/', label: 'LinkedIn' },
            { icon: <TwitterIcon />, href: 'https://twitter.com/', label: 'Twitter' },
            { icon: <EmailIcon />, href: 'mailto:vishal@example.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} title={label} className="social-link" style={{ textDecoration: 'none' }}>
              {icon}
            </a>
          ))}
        </div>

        {/* Scroll arrow */}
        <div style={{ marginTop: '56px', color: '#334155', animation: 'float 2.5s ease-in-out infinite', display: 'flex', justifyContent: 'center' }}>
          <ChevronDownIcon size={28} />
        </div>
      </div>
    </section>
  )
}

// ============================================================
// ABOUT
// ============================================================

function About() {
  const stats = [
    { value: '50+', label: 'Projects Built', color: '#8b5cf6' },
    { value: '3+',  label: 'Years Coding',   color: '#06b6d4' },
    { value: '20+', label: 'Happy Clients',  color: '#ec4899' },
    { value: '∞',   label: 'Curiosity',      color: '#f59e0b' },
  ]

  return (
    <section id="about" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '72px', alignItems: 'center' }}>

          {/* Text column */}
          <div className="reveal">
            <div className="line-decoration" style={{ marginBottom: '18px' }} />
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              About <span className="gradient-text">Me</span>
            </h2>
            <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '18px', fontSize: '0.98rem' }}>
              I&apos;m a passionate Full Stack Developer who loves turning complex problems into elegant,
              performant solutions. I care deeply about code quality, developer experience,
              and building products that users actually enjoy.
            </p>
            <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '32px', fontSize: '0.98rem' }}>
              When I&apos;m not shipping features, I&apos;m exploring new tech, contributing to open source,
              or sharing what I&apos;ve learned with the community.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/resume.pdf"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 22px', borderRadius: '10px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#c4b5fd', textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s ease', fontSize: '0.88rem' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.18)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.1)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)' }}>
                Download Resume ↗
              </a>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 22px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(100,116,139,0.3)', color: '#64748b', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s ease', fontSize: '0.88rem' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)'; e.currentTarget.style.color = '#94a3b8' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(100,116,139,0.3)'; e.currentTarget.style.color = '#64748b' }}>
                Say Hello →
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="reveal reveal-delay-1">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {stats.map(({ value, label, color }) => (
                <div key={label} className="card-glass"
                  style={{ padding: '32px 24px', borderRadius: '18px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 0%, ${color}14 0%, transparent 70%)`, pointerEvents: 'none' }} />
                  <div style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '8px', color }} className="gradient-text">
                    {value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// SKILLS
// ============================================================

function Skills() {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools']
  const categoryMeta = {
    Frontend: { color: '#8b5cf6', emoji: '🎨' },
    Backend:  { color: '#06b6d4', emoji: '⚙️' },
    Database: { color: '#10b981', emoji: '🗄️' },
    Tools:    { color: '#f59e0b', emoji: '🛠️' },
  }

  return (
    <section id="skills" style={{ padding: '120px 24px', background: 'rgba(8,8,14,0.7)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="line-decoration" style={{ margin: '0 auto 18px' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 900, marginBottom: '14px', letterSpacing: '-0.025em' }}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75, fontSize: '0.98rem' }}>
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {categories.map((cat, i) => {
            const meta = categoryMeta[cat]
            const catSkills = SKILLS.filter(s => s.category === cat)
            return (
              <div key={cat} className={`card-glass reveal reveal-delay-${i}`}
                style={{ borderRadius: '18px', padding: '28px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, ${meta.color}, transparent)` }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${meta.color}18`, border: `1px solid ${meta.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
                    {meta.emoji}
                  </div>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                    {cat}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {catSkills.map(skill => (
                    <span key={skill.name} className="skill-tag"
                      style={{ padding: '6px 14px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 500, cursor: 'default', display: 'flex', alignItems: 'center', gap: '7px', color: '#94a3b8' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: skill.color, flexShrink: 0, boxShadow: `0 0 6px ${skill.color}80` }} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// PROJECTS
// ============================================================

function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI / ML', 'DevOps']
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="line-decoration" style={{ margin: '0 auto 18px' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 900, marginBottom: '14px', letterSpacing: '-0.025em' }}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75, fontSize: '0.98rem' }}>
            A curated selection of things I&apos;ve built — from full-stack platforms to AI-powered tools.
          </p>
        </div>

        {/* Filter bar */}
        <div className="reveal" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '52px' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : 'inactive'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '22px' }}>
          {filtered.map((project, i) => (
            <div key={project.title} className="card-glass project-card-enter"
              style={{ borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column', animationDelay: `${i * 0.05}s` }}>
              {/* Accent top bar */}
              <div style={{ height: '3px', background: `linear-gradient(to right, ${project.accent}cc, ${project.accent}22)` }} />

              <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', gap: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: project.accent, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                      {project.category}
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.3 }}>
                      {project.title}
                    </h3>
                  </div>
                  {project.featured && (
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.07em', padding: '3px 10px', borderRadius: '999px', background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)', color: '#c4b5fd', flexShrink: 0, marginTop: '2px', whiteSpace: 'nowrap' }}>
                      ★ FEATURED
                    </span>
                  )}
                </div>

                {/* Description */}
                <p style={{ color: '#4e6280', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '20px', flex: 1 }}>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                  {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid rgba(139,92,246,0.1)', paddingTop: '16px' }}>
                  <a href={project.github}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569', textDecoration: 'none', fontSize: '0.83rem', fontWeight: 500, transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#c4b5fd'}
                    onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                    <GithubIcon size={15} /> GitHub
                  </a>
                  <a href={project.live}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569', textDecoration: 'none', fontSize: '0.83rem', fontWeight: 500, transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                    <ExternalIcon size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="reveal" style={{ textAlign: 'center', marginTop: '48px', color: '#334155', fontSize: '0.85rem' }}>
          More projects on{' '}
          <a href="https://github.com/" style={{ color: '#8b5cf6', textDecoration: 'none', fontWeight: 600 }}>GitHub ↗</a>
        </p>
      </div>
    </section>
  )
}

// ============================================================
// CONTACT
// ============================================================

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const contactInfo = [
    { icon: <EmailIcon size={18} />, label: 'Email', value: 'vishal@example.com', href: 'mailto:vishal@example.com' },
    { icon: <GithubIcon size={18} />, label: 'GitHub', value: 'github.com/vishal', href: 'https://github.com/' },
    { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/vishal', href: 'https://linkedin.com/' },
  ]

  return (
    <section id="contact" style={{ padding: '120px 24px', background: 'rgba(8,8,14,0.7)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="line-decoration" style={{ margin: '0 auto 18px' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 900, marginBottom: '14px', letterSpacing: '-0.025em' }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '460px', margin: '0 auto', lineHeight: 1.75, fontSize: '0.98rem' }}>
            Have a project in mind, want to collaborate, or just say hi? My inbox is always open.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
          {/* Contact info */}
          <div className="reveal">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#e2e8f0' }}>Contact Details</h3>
            <p style={{ color: '#334155', fontSize: '0.88rem', marginBottom: '28px', lineHeight: 1.7 }}>
              Prefer direct contact? Reach me through any of these channels.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {contactInfo.map(({ icon, label, value, href }) => (
                <a key={label} href={href} className="contact-link">
                  <span style={{ color: '#8b5cf6', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#334155', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                    <div style={{ fontSize: '0.88rem', color: '#64748b' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p style={{ color: '#334155', fontSize: '0.8rem', marginBottom: '12px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Follow Me</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { icon: <GithubIcon size={18} />, href: 'https://github.com/', label: 'GitHub' },
                  { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
                  { icon: <TwitterIcon size={18} />, href: 'https://twitter.com/', label: 'Twitter' },
                ].map(({ icon, href, label }) => (
                  <a key={label} href={href} title={label} className="social-link" style={{ textDecoration: 'none' }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1">
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', marginBottom: '8px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Name</label>
                <input className="input-field" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" required />
              </div>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', marginBottom: '8px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Email</label>
                <input className="input-field" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" required />
              </div>
              <div style={{ marginBottom: '26px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#475569', marginBottom: '8px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Message</label>
                <textarea className="input-field" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project or idea..." required style={{ resize: 'vertical', minHeight: '130px' }} />
              </div>
              <button type="submit" className="btn-primary"
                style={{ width: '100%', padding: '15px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.95rem', color: '#fff', letterSpacing: '0.04em', transition: 'all 0.3s ease' }}>
                {status === 'sent' ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// FOOTER
// ============================================================

function Footer() {
  return (
    <footer style={{ padding: '36px 24px', borderTop: '1px solid rgba(139,92,246,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ fontSize: '0.85rem', color: '#334155' }}>
          Designed &amp; built by{' '}
          <span className="gradient-text" style={{ fontWeight: 700 }}>Vishal</span>
          {' '}· {new Date().getFullYear()}
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['about', 'skills', 'projects', 'contact'].map(id => (
            <button key={id} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.82rem', color: '#334155', textTransform: 'capitalize', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.color = '#64748b'}
              onMouseLeave={e => e.currentTarget.style.color = '#334155'}>
              {id}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ============================================================
// PAGE
// ============================================================

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
