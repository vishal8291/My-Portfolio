'use client'
import Link from 'next/link'

const GithubIcon   = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const LinkedinIcon = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const TwitterIcon  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>

export default function Footer() {
  const navLinks = [
    { href: '/about',          label: 'About' },
    { href: '/projects',       label: 'Projects' },
    { href: '/skills',         label: 'Skills' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/contact',        label: 'Contact' },
  ]

  const socials = [
    { href: 'https://github.com/vishal8291',                        label: 'GitHub',   icon: <GithubIcon /> },
    { href: 'https://www.linkedin.com/in/vishal-tiwari-158a5216b', label: 'LinkedIn', icon: <LinkedinIcon /> },
    { href: 'https://x.com/vishalT200',                             label: 'Twitter',  icon: <TwitterIcon /> },
  ]

  const contactItems = [
    { icon: '✉', text: 'vishaltiwari101999@gmail.com', href: 'mailto:vishaltiwari101999@gmail.com' },
    { icon: '📱', text: '+91 8291569470',              href: 'tel:+918291569470' },
    { icon: '📍', text: 'Borivali West, Mumbai',       href: null },
  ]

  return (
    <footer style={{ background: '#06080e', borderTop: '1px solid rgba(139,92,246,0.12)', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '56px' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '14px' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.03em' }}>
                <span style={{ background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Vishal</span>
                <span style={{ color: '#818cf8' }}>.</span>
              </div>
            </Link>
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.78, maxWidth: '240px', marginBottom: '22px' }}>
              IT Student &amp; Full-Stack Developer from Mumbai, building real-world digital solutions.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="social-link">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#475569', marginBottom: '20px' }}>
              Navigation
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href}
                  style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#475569', marginBottom: '20px' }}>
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contactItems.map(({ icon, text, href }) =>
                href ? (
                  <a key={text} href={href}
                    style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                    <span style={{ fontSize: '0.85rem' }}>{icon}</span>{text}
                  </a>
                ) : (
                  <span key={text} style={{ color: '#64748b', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.85rem' }}>{icon}</span>{text}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#475569', marginBottom: '20px' }}>
              Status
            </h3>
            <div style={{ padding: '16px', borderRadius: '14px', background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.18)', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="status-dot" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399' }}>Available for work</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.6 }}>Open to internships, freelance, and collaborations.</p>
            </div>
            <Link href="/contact" className="btn-primary"
              style={{ display: 'block', textAlign: 'center', padding: '10px 20px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
              Hire Me →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(139,92,246,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#334155', fontSize: '0.82rem' }}>
            Designed &amp; built by{' '}
            <span style={{ background: 'linear-gradient(135deg,#818cf8,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>
              Vishal Tiwari
            </span>
            {' '}· {new Date().getFullYear()}
          </p>
          <p style={{ color: '#334155', fontSize: '0.82rem' }}>
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
