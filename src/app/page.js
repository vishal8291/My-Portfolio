'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import projects from './data/projectsData'

// ── ICONS ─────────────────────────────────────────────────────
const GithubIcon   = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const LinkedinIcon = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const TwitterIcon  = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
const EmailIcon    = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
const ExternalIcon = ({ size = 14 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
const ArrowRight   = ({ size = 14 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>

// ── TYPEWRITER ─────────────────────────────────────────────────
function TypewriterRole() {
  const roles = ['Full-Stack Developer', 'React Native Dev', 'AI Builder', 'SaaS Maker']
  const [index, setIndex]         = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)
  useEffect(() => {
    const target = roles[index]
    if (!deleting && displayed === target) {
      const t = setTimeout(() => setDeleting(true), 2400)
      return () => clearTimeout(t)
    }
    if (deleting && displayed === '') {
      setDeleting(false)
      setIndex(i => (i + 1) % roles.length)
      return
    }
    const speed = deleting ? 32 : 76
    const t = setTimeout(() =>
      setDisplayed(prev => deleting ? prev.slice(0, -1) : target.slice(0, prev.length + 1)), speed)
    return () => clearTimeout(t)
  }, [displayed, deleting, index])
  return <span className="typewriter-text">{displayed}<span className="cursor-blink" /></span>
}

// ── SCROLL REVEAL ──────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ── COUNTER ────────────────────────────────────────────────────
function Counter({ to, suffix = '+', duration = 1400 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 45
        const stepVal = Math.ceil(to / steps)
        let current = 0
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

// ── HERO ───────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-clean">
      <div className="hero-glow-orb hero-glow-1" />
      <div className="hero-glow-orb hero-glow-2" />

      <div className="container hero-clean-inner">
        {/* Left: content */}
        <div className="hero-text fade-up">
          <div className="hero-available-badge">
            <span className="status-dot" />
            Available for work · Mumbai, India
          </div>

          <h1 className="hero-greeting">Hi, I'm</h1>
          <h1 className="hero-name gradient-text">Vishal Tiwari</h1>
          <p className="hero-role">
            <TypewriterRole />
          </p>
          <p className="hero-bio">
            Building scalable web apps, AI-integrated platforms &amp; real-time systems.
            B.Sc. IT · Thakur College, Mumbai.
          </p>

          <div className="hero-cta-row">
            <Link href="/projects" className="btn-primary">View My Work</Link>
            <Link href="/contact" className="btn-outline">Contact Me</Link>
            <a href="/Resume.pdf" download className="btn-ghost">Resume ↗</a>
          </div>

          <div className="hero-socials-row">
            {[
              { icon: <GithubIcon size={18} />,   href: 'https://github.com/vishal8291',                        label: 'GitHub' },
              { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/vishal-tiwari-158a5216b', label: 'LinkedIn' },
              { icon: <TwitterIcon size={18} />,  href: 'https://x.com/vishalT200',                             label: 'Twitter' },
              { icon: <EmailIcon size={18} />,    href: 'mailto:vishal.buildss@gmail.com',                     label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="social-icon-btn">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero-photo-wrap fade-up fade-up-2">
          <div className="hero-photo-ring" />
          <img src="/photo.jpg" alt="Vishal Tiwari" className="hero-photo-img" />
        </div>
      </div>

      {/* Stats strip */}
      <div className="container">
        <div className="hero-stats-strip fade-up fade-up-3">
          {[
            { val: 2,  suffix: '+', label: 'Years Experience' },
            { val: 18, suffix: '+', label: 'Projects Shipped' },
            { val: 10, suffix: '+', label: 'Certifications' },
            { val: 22, suffix: '+', label: 'Technologies' },
          ].map(({ val, suffix, label }) => (
            <div key={label} className="hero-stat-item">
              <span className="hero-stat-num gradient-text">
                <Counter to={val} suffix={suffix} />
              </span>
              <span className="hero-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── TECH STRIP ─────────────────────────────────────────────────
const techStack = [
  { name: 'JavaScript', dot: '#fbbf24' }, { name: 'TypeScript', dot: '#3b82f6' },
  { name: 'React',      dot: '#61dafb' }, { name: 'Next.js',    dot: '#f1f5f9' },
  { name: 'Node.js',   dot: '#4ade80'  }, { name: 'Express.js', dot: '#34d399' },
  { name: 'MongoDB',   dot: '#f87171'  }, { name: 'PostgreSQL', dot: '#ef4444' },
  { name: 'Redis',     dot: '#f87171'  }, { name: 'Tailwind',   dot: '#38bdf8' },
  { name: 'Docker',    dot: '#60a5fa'  }, { name: 'Git',        dot: '#f97316' },
  { name: 'REST API',  dot: '#ef4444'  }, { name: 'React Native', dot: '#61dafb' },
]
function TechStrip() {
  const doubled = [...techStack, ...techStack]
  return (
    <div className="tech-strip-wrap">
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map(({ name, dot }, i) => (
            <span key={`${name}-${i}`} className="tech-chip">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: dot, flexShrink: 0 }} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── ABOUT ──────────────────────────────────────────────────────
function About() {
  return (
    <section className="section">
      <div className="container about-grid">
        <div>
          <p className="section-eyebrow">About me</p>
          <h2 className="section-heading">
            Passionate about <span className="gradient-text">Building</span>
          </h2>
          <p className="body-text" style={{ marginBottom: '14px' }}>
            I'm a Full Stack Developer from{' '}
            <span style={{ color: 'var(--violet)', fontWeight: 600 }}>Thakur College of Science and Commerce, Mumbai</span>
            {' '}— B.Sc. IT graduate (2026, CGPA 7.47).
          </p>
          <p className="body-text muted" style={{ marginBottom: '36px' }}>
            I love creating fast, accessible, and beautiful digital experiences.
            Always learning, always shipping.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/about" className="btn-primary">My Story →</Link>
            <a href="/Resume.pdf" download className="btn-outline">Resume ↗</a>
          </div>
        </div>

        <div className="about-stats-grid">
          {[
            { to: 2,  label: 'Years Coding',    suffix: '+', color: '#ef4444' },
            { to: 18, label: 'Projects Built',  suffix: '+', color: '#f87171' },
            { to: 10, label: 'Certificates',    suffix: '+', color: '#ffffff' },
            { to: 22, label: 'Technologies',    suffix: '+', color: '#fbbf24' },
          ].map(({ to, label, suffix, color }) => (
            <div key={label} className="about-stat-card card-glass">
              <span className="about-stat-num" style={{ color }}>
                <Counter to={to} suffix={suffix} />
              </span>
              <span className="about-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── PROJECTS ───────────────────────────────────────────────────
function Projects() {
  const featured = projects.filter(p => p.status === 'building').slice(0, 3)
  return (
    <section className="section dark-section">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Work</p>
          <h2 className="section-heading">Currently <span className="gradient-text">Building</span></h2>
          <p className="body-text muted" style={{ maxWidth: '380px', margin: '0 auto' }}>
            Active projects shipping right now.
          </p>
        </div>

        <div className="projects-grid">
          {featured.map((project, i) => (
            <div key={project.title} className="card-glass project-card">
              <div className="project-accent-bar" style={{ background: project.accent }} />
              <div className="project-card-inner">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="category-badge" style={{ color: project.accent, background: `${project.accent}14`, border: `1px solid ${project.accent}30` }}>
                    {project.category}
                  </span>
                  <span className="building-badge">
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fbbf24', display: 'inline-block' }} />
                    Building
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description.slice(0, 110)}…</p>
                <div className="tech-tags">
                  {project.tech.slice(0, 4).map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GithubIcon size={13} /> GitHub
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                      <ExternalIcon size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="" style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/projects" className="btn-primary">
            View All {projects.length} Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── SKILLS ─────────────────────────────────────────────────────
const skillCategories = [
  {
    label: 'Frontend',
    color: '#61dafb',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
  },
  {
    label: 'Backend',
    color: '#4ade80',
    skills: ['Node.js', 'Express.js', 'Python', 'REST API', 'WebSockets'],
  },
  {
    label: 'Database',
    color: '#f87171',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma', 'Supabase'],
  },
  {
    label: 'Tools & Cloud',
    color: '#ef4444',
    skills: ['Docker', 'Git', 'AWS', 'Vercel', 'Firebase'],
  },
]

function Skills() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Expertise</p>
          <h2 className="section-heading">Tech <span className="gradient-text">Stack</span></h2>
          <p className="body-text muted">Core technologies I build with across the full stack.</p>
        </div>

        <div className="skills-cats-grid">
          {skillCategories.map(({ label, color, skills }) => (
            <div key={label} className="skill-cat-card card-glass">
              <div className="skill-cat-header" style={{ color }}>
                <span className="skill-cat-dot" style={{ background: color }} />
                {label}
              </div>
              <div className="skill-pills">
                {skills.map(s => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/skills" className="btn-outline">View Full Stack →</Link>
        </div>
      </div>
    </section>
  )
}

// ── TIMELINE ───────────────────────────────────────────────────
const timelineItems = [
  {
    year: '2026', title: 'B.Sc. IT Graduate',
    org: 'Thakur College of Science & Commerce',
    desc: 'CGPA 7.47 — Mumbai University. Specialized in web technologies, databases, software engineering & AI.',
    color: '#ef4444',
  },
  {
    year: '2025', title: 'Full-Stack Developer',
    org: 'Freelance & Open Source',
    desc: 'Building production SaaS — PDFSolution, AI tools, e-commerce systems. 18+ projects shipped on Vercel & Render.',
    color: '#f87171',
  },
  {
    year: '2024', title: 'React Native Developer',
    org: 'Personal Projects',
    desc: 'Built DogCare app with Claymorphism design, AI integrations, and real-time features using Expo & Firebase.',
    color: '#ffffff',
  },
  {
    year: '2023', title: 'Started Coding',
    org: 'Thakur College, Mumbai',
    desc: 'First line of code turned into real projects — landing pages, mini-games, CLI tools. Fell in love with building.',
    color: '#34d399',
  },
]

function Timeline() {
  return (
    <section className="section dark-section">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Journey</p>
          <h2 className="section-heading">My <span className="gradient-text">Timeline</span></h2>
          <p className="body-text muted">Every milestone that shaped who I am as a developer.</p>
        </div>

        <div className="timeline-wrap">
          <div className="timeline-spine" />
          {timelineItems.map((item, i) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-node" style={{ borderColor: item.color, boxShadow: `0 0 12px ${item.color}40` }}>
                <div className="timeline-node-inner" style={{ background: item.color }} />
              </div>
              <div className="timeline-card card-glass">
                <div className="timeline-card-year" style={{ color: item.color }}>{item.year}</div>
                <h3 className="timeline-card-title">{item.title}</h3>
                <p className="timeline-card-org">{item.org}</p>
                <p className="timeline-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA ────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="section cta-section">
      <div className="cta-glow" />
      <div className="cta-inner">
        <p className="section-eyebrow">Let's connect</p>
        <h2 className="section-heading cta-heading">
          Let's Build Something <span className="gradient-text">Together</span>
        </h2>
        <p className="body-text muted cta-sub">
          Open to full-time roles, freelance, and collaborations.
          Drop a message — I respond within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '14px 44px', fontSize: '1rem' }}>
            Get In Touch
          </Link>
          <a href="/Resume.pdf" download className="btn-outline" style={{ padding: '14px 44px', fontSize: '1rem' }}>
            Download Resume ↗
          </a>
        </div>
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

// ── PAGE ───────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Timeline />
      <div className="section-divider" />
      <CTA />
    </>
  )
}


