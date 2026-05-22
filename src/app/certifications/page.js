'use client'
import { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const certifications = [
  { title: 'Annual Extension Certificate',    issuer: 'Thakur College',            date: '2024', fileUrl: '/Annual Extension.png', type: 'image', color: '#818cf8' },
  { title: 'Deloitte Training Certificate',   issuer: 'Deloitte',                  date: '2025', fileUrl: '/Deloit.pdf',            type: 'pdf',   color: '#22d3ee' },
  { title: 'Disaster Management Certificate', issuer: 'Thakur College',            date: '2024', fileUrl: '/Disastermgmt.pdf',      type: 'pdf',   color: '#f472b6' },
  { title: 'DLLE Udaan Certificate',          issuer: 'DLLE',                      date: '2024', fileUrl: '/DLLEUdaan.pdf',         type: 'pdf',   color: '#fbbf24' },
  { title: 'IIRS Remote Sensing Certificate', issuer: 'IIRS (ISRO)',               date: '2024', fileUrl: '/IIRS cerificate.pdf',   type: 'pdf',   color: '#34d399' },
  { title: 'IIT Participant Certificate',     issuer: 'IIT',                       date: '2023', fileUrl: '/IIT.pdf',               type: 'pdf',   color: '#fb923c' },
  { title: 'LiveMint Certification',          issuer: 'LiveMint',                  date: '2024', fileUrl: '/livemint.pdf',          type: 'pdf',   color: '#a78bfa' },
  { title: 'TCS Certification',              issuer: 'Tata Consultancy Services', date: '2023', fileUrl: '/TCS.pdf',               type: 'pdf',   color: '#38bdf8' },
  { title: 'TCS Advanced Certification',     issuer: 'Tata Consultancy Services', date: '2023', fileUrl: '/TCS2.pdf',              type: 'pdf',   color: '#86efac' },
]

function CertIcon({ color, type }) {
  return (
    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${color}14`, border: `1px solid ${color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {type === 'image' ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      )}
    </div>
  )
}

export default function CertificationsPage() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '68px' }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ padding: '90px 24px 72px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="line-decoration" style={{ margin: '0 auto 22px' }} />
          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.4rem)', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.035em' }}>
            My <span className="gradient-text">Certifications</span>
          </h1>
          <p style={{ color: '#64748b', maxWidth: '460px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.98rem' }}>
            {certifications.length} certifications from leading institutions and industry programs.
          </p>
        </div>
      </section>

      <div style={{ padding: '0 24px 100px', maxWidth: '1100px', margin: '0 auto' }}>

        {/* Stats row */}
        <div className="reveal" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '56px' }}>
          {[
            { label: 'Total Certs',        value: certifications.length.toString(), color: '#818cf8' },
            { label: 'Industry Programs',  value: '4',                              color: '#22d3ee' },
            { label: 'Academic Awards',    value: '5',                              color: '#f472b6' },
          ].map(({ label, value, color }) => (
            <div key={label} className="card-glass" style={{ padding: '20px 32px', borderRadius: '16px', textAlign: 'center', minWidth: '140px' }}>
              <div style={{ fontSize: '1.9rem', fontWeight: 900, color, marginBottom: '4px' }}>{value}</div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {certifications.map(({ title, issuer, date, fileUrl, type, color }, i) => (
            <div key={title} className={`card-glass card-featured reveal reveal-delay-${(i % 3) + 1}`}
              style={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

              {/* Accent bar */}
              <div style={{ height: '3px', background: `linear-gradient(to right, ${color}, ${color}22)` }} />

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Icon + year */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                  <CertIcon color={color} type={type} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', letterSpacing: '0.06em', background: 'rgba(255,255,255,0.04)', padding: '4px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {date}
                  </span>
                </div>

                <h2 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '6px', lineHeight: 1.45 }}>{title}</h2>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color, marginBottom: '20px', letterSpacing: '0.03em' }}>{issuer}</p>

                <div style={{ flex: 1 }} />

                <div style={{ borderTop: '1px solid rgba(129,140,248,0.1)', paddingTop: '14px' }}>
                  <a href={fileUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '0.82rem', fontWeight: 700, color, textDecoration: 'none', padding: '8px 18px', borderRadius: '9px', background: `${color}10`, border: `1px solid ${color}28`, transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = `${color}20`}
                    onMouseLeave={e => e.currentTarget.style.background = `${color}10`}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '60px', color: '#334155', fontSize: '0.84rem' }}>
          All certificates are available for verification on request.
        </p>
      </div>
    </div>
  )
}
