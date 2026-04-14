'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '/',               label: 'Home' },
    { href: '/about',          label: 'About' },
    { href: '/projects',       label: 'Projects' },
    { href: '/skills',         label: 'Skills' },
    { href: '/certifications', label: 'Certs' },
    { href: '/contact',        label: 'Contact' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        transition: 'background 0.35s, border-color 0.35s, box-shadow 0.35s',
        ...(scrolled ? {
          background: 'rgba(7,9,15,0.96)',
          borderBottom: '1px solid rgba(139,92,246,0.16)',
          boxShadow: '0 2px 28px rgba(0,0,0,0.55)',
        } : {
          background: 'transparent',
        }),
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}>
              <span style={{ fontSize: '1.45rem', fontWeight: 900, letterSpacing: '-0.03em' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #818cf8, #c084fc)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>V</span>
                <span style={{ color: '#f1f5f9' }}>ishal</span>
                <span style={{ color: '#818cf8', fontWeight: 900, fontSize: '1.7rem', lineHeight: 0 }}>.</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hide-mobile" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {links.map(({ href, label }) => (
                <Link key={href} href={href}
                  className={`nav-link ${pathname === href ? 'active' : ''}`}
                  style={{ fontSize: '0.875rem', letterSpacing: '0.025em', padding: '6px 12px', borderRadius: '8px' }}>
                  {label}
                </Link>
              ))}
              <Link href="/contact" style={{
                marginLeft: '8px',
                padding: '9px 22px', borderRadius: '9px',
                fontWeight: 700, fontSize: '0.875rem', color: '#fff',
                textDecoration: 'none', letterSpacing: '0.03em',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                boxShadow: '0 4px 14px rgba(79,46,180,0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(79,46,180,0.55)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(79,46,180,0.4)'; }}>
                Hire Me
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button className="show-mobile" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: '6px', borderRadius: '8px', alignItems: 'center', justifyContent: 'center' }}>
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => setMenuOpen(false)}
          style={{ position: 'absolute', top: '22px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Logo in mobile */}
        <div style={{ position: 'absolute', top: '22px', left: '24px', fontSize: '1.3rem', fontWeight: 900 }}>
          <span className="gradient-text">V</span>
          <span style={{ color: '#f1f5f9' }}>ishal</span>
          <span style={{ color: '#818cf8' }}>.</span>
        </div>

        {links.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '1.7rem', fontWeight: 800, textDecoration: 'none', letterSpacing: '-0.02em',
              color: pathname === href ? '#a78bfa' : '#e2e8f0',
              transition: 'color 0.2s',
            }}>
            {label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setMenuOpen(false)}
          style={{ marginTop: '12px', padding: '14px 42px', borderRadius: '12px', color: '#fff', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', boxShadow: '0 6px 20px rgba(79,46,180,0.4)' }}>
          Hire Me
        </Link>
      </div>
    </>
  )
}
