'use client'
import Link from 'next/link'
import projects from './data/projectsData'

// ── ICONS ────────────────────────────────────────────────────
const GithubIcon   = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const LinkedinIcon = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const TwitterIcon  = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
const EmailIcon    = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>

// ── HERO ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '80px 24px 60px' }}>

      {/* Subtle dot grid */}
      <div className="dot-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Corner ambient glows — radial-gradient only, no blur */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '55%', height: '65%', background: 'radial-gradient(ellipse at top left, rgba(99,102,241,0.12) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '55%', height: '65%', background: 'radial-gradient(ellipse at bottom right, rgba(192,132,252,0.1) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', textAlign: 'center' }}>

        {/* Badge */}
        <div className="fade-up" style={{ marginBottom: '32px' }}>
          <span className="hero-badge">
            <span className="status-dot" />
            Open to internships &amp; opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="fade-up fade-up-1" style={{ fontSize: 'clamp(2.8rem, 9vw, 5.8rem)', fontWeight: 900, lineHeight: 1.02, marginBottom: '22px', letterSpacing: '-0.04em' }}>
          Hi, I&apos;m{' '}
          <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 45%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Vishal Tiwari
          </span>
        </h1>

        {/* Role */}
        <p className="fade-up fade-up-2" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: '#94a3b8', marginBottom: '24px', fontWeight: 500, letterSpacing: '-0.01em' }}>
          Full-Stack Developer &amp; IT Student
        </p>

        {/* Bio */}
        <p className="fade-up fade-up-3" style={{ fontSize: '1.02rem', color: '#64748b', maxWidth: '520px', margin: '0 auto 44px', lineHeight: 1.8 }}>
          IT student at <span style={{ color: '#94a3b8', fontWeight: 600 }}>Thakur College, Mumbai</span> with 2+ years building
          web apps, mobile apps, and AI-powered tools. Always shipping something.
        </p>

        {/* CTA buttons */}
        <div className="fade-up fade-up-4" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          <Link href="/projects" className="btn-primary"
            style={{ padding: '14px 36px', borderRadius: '10px', fontWeight: 700, fontSize: '0.95rem', color: '#fff', textDecoration: 'none', letterSpacing: '0.03em' }}>
            View My Work
          </Link>
          <a href="/resume.pdf" download className="btn-outline"
            style={{ padding: '14px 36px', borderRadius: '10px', fontWeight: 600, fontSize: '0.95rem', color: '#94a3b8', textDecoration: 'none' }}>
            Download Resume ↗
          </a>
        </div>

        {/* Socials */}
        <div className="fade-up fade-up-5" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          {[
            { icon: <GithubIcon />,   href: 'https://github.com/vishal8291',                           label: 'GitHub' },
            { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/vishal-tiwari-158a5216b',    label: 'LinkedIn' },
            { icon: <TwitterIcon />,  href: 'https://x.com/vishalT200',                               label: 'Twitter' },
            { icon: <EmailIcon />,    href: 'mailto:vishaltiwari101999@gmail.com',                     label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="social-link">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── ABOUT PREVIEW ─────────────────────────────────────────────
function AboutPreview() {
  const stats = [
    { value: '2+',  label: 'Years Coding',   color: '#818cf8' },
    { value: '15+', label: 'Projects Built', color: '#22d3ee' },
    { value: '9+',  label: 'Certifications', color: '#f472b6' },
    { value: '15+', label: 'Technologies',   color: '#fbbf24' },
  ]

  return (
    <section style={{ padding: '110px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '72px', alignItems: 'center' }}>

        <div>
          <div className="line-decoration" style={{ marginBottom: '20px' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.9rem)', fontWeight: 900, marginBottom: '20px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.85, marginBottom: '16px', fontSize: '0.98rem' }}>
            I&apos;m a passionate IT student at <span style={{ color: '#c4b5fd', fontWeight: 600 }}>Thakur College of Science and Commerce, Mumbai</span> with a deep love for creating innovative digital solutions.
          </p>
          <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '36px', fontSize: '0.98rem' }}>
            Currently seeking internship opportunities where I can contribute to meaningful projects and continue growing as a developer.
          </p>
          <Link href="/about" className="btn-outline"
            style={{ padding: '11px 26px', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem', color: '#a78bfa', textDecoration: 'none' }}>
            My Story →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {stats.map(({ value, label, color }) => (
            <div key={label} className="card-glass" style={{ padding: '30px 20px', borderRadius: '18px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px', background: `linear-gradient(to right, transparent, ${color}, transparent)` }} />
              <div style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, marginBottom: '8px', color, lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── PROJECTS PREVIEW ──────────────────────────────────────────
function ProjectsPreview() {
  const featured = projects.slice(0, 3)

  return (
    <section style={{ padding: '110px 24px', background: 'rgba(8,10,20,0.7)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="line-decoration" style={{ margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.9rem)', fontWeight: 900, marginBottom: '14px', letterSpacing: '-0.03em' }}>
            Currently <span className="gradient-text">Building</span>
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem' }}>These three projects are live in development right now.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '44px' }}>
          {featured.map(project => (
            <div key={project.title} className="card-glass"
              style={{ borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>

              {/* Accent top bar */}
              <div style={{ height: '3px', background: `linear-gradient(to right, ${project.accent}, ${project.accent}33)` }} />

              {/* Building badge */}
              <div style={{ position: 'absolute', top: '18px', right: '16px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', fontWeight: 700, color: '#34d399', letterSpacing: '0.06em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)', padding: '3px 10px', borderRadius: '999px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#34d399', flexShrink: 0 }} />
                Live
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.1em', color: project.accent, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.7, marginBottom: '18px', flex: 1 }}>
                  {project.description.slice(0, 115)}…
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '18px' }}>
                  {project.tech.slice(0, 3).map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#475569', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                  onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                  <GithubIcon size={13} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/projects" className="btn-primary"
            style={{ padding: '13px 34px', borderRadius: '10px', fontWeight: 700, fontSize: '0.93rem', color: '#fff', textDecoration: 'none' }}>
            View All 16 Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── SKILLS PREVIEW ────────────────────────────────────────────
function SkillsPreview() {
  const skills = [
    { name: 'React',       color: '#61dafb', pct: 85 },
    { name: 'JavaScript',  color: '#fbbf24', pct: 80 },
    { name: 'Java',        color: '#f97316', pct: 80 },
    { name: 'Node.js',     color: '#4ade80', pct: 75 },
    { name: 'HTML / CSS',  color: '#f87171', pct: 90 },
    { name: 'C / C++',     color: '#818cf8', pct: 87 },
  ]

  return (
    <section style={{ padding: '110px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="line-decoration" style={{ margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.9rem)', fontWeight: 900, marginBottom: '14px', letterSpacing: '-0.03em' }}>
            Tech <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem' }}>A snapshot of languages and tools I use daily.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(248px, 1fr))', gap: '14px', marginBottom: '44px' }}>
          {skills.map(({ name, color, pct }) => (
            <div key={name} className="card-glass" style={{ borderRadius: '14px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}80`, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0' }}>{name}</span>
                </div>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{pct}%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', borderRadius: '999px', background: `linear-gradient(to right, ${color}80, ${color})` }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/skills" className="btn-outline"
            style={{ padding: '12px 32px', borderRadius: '10px', fontWeight: 600, fontSize: '0.92rem', color: '#a78bfa', textDecoration: 'none', display: 'inline-block' }}>
            View All Skills →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{ padding: '100px 24px', background: 'rgba(8,10,20,0.7)', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <div className="line-decoration" style={{ margin: '0 auto 24px' }} />
        <h2 style={{ fontSize: 'clamp(1.9rem, 5vw, 2.9rem)', fontWeight: 900, marginBottom: '18px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Let&apos;s Build Something{' '}
          <span className="gradient-text">Together</span>
        </h2>
        <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '40px', fontSize: '1rem' }}>
          Open to internships, freelance work, and collaborations. Drop me a message — I respond within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary"
            style={{ padding: '14px 36px', borderRadius: '10px', fontWeight: 700, fontSize: '0.95rem', color: '#fff', textDecoration: 'none' }}>
            Get In Touch
          </Link>
          <a href="/resume.pdf" download className="btn-outline"
            style={{ padding: '14px 36px', borderRadius: '10px', fontWeight: 600, fontSize: '0.95rem', color: '#94a3b8', textDecoration: 'none', display: 'inline-block' }}>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

// ── PAGE ──────────────────────────────────────────────────────
export default function Home() {
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
      <CTA />
    </>
  )
}
