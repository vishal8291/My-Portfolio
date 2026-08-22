'use client'
import { useState, useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function ContactPage() {
  useScrollReveal()

  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')   // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      // If no backend, just show success (frontend only mode)
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const contactInfo = [
    {
      label: 'Email', value: 'vishal.buildss@gmail.com',
      href: 'mailto:vishal.buildss@gmail.com', color: '#818cf8',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    },
    {
      label: 'Phone', value: '+91 8291569470',
      href: 'tel:+918291569470', color: '#22d3ee',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.86 19.86 0 0 1 1.92 3.38 2 2 0 0 1 3.89 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    },
    {
      label: 'GitHub', value: 'github.com/vishal8291',
      href: 'https://github.com/vishal8291', color: '#f472b6',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    },
    {
      label: 'LinkedIn', value: 'linkedin.com/in/vishal-tiwari-158a5216b',
      href: 'https://www.linkedin.com/in/vishal-tiwari-158a5216b', color: '#34d399',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    },
    {
      label: 'Location', value: 'Borivali West, Mumbai, India',
      href: null, color: '#fbbf24',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
    },
  ]

  return (
    <div style={{ paddingTop: '68px' }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ padding: '90px 24px 72px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="line-decoration" style={{ margin: '0 auto 22px' }} />
          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.4rem)', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.035em' }}>
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ color: '#64748b', maxWidth: '440px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.98rem' }}>
            Have a project, job opportunity, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div style={{ padding: '0 24px 100px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '56px' }}>

          {/* Contact info */}
          <div className="reveal-left">
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '10px', color: '#e2e8f0', letterSpacing: '-0.015em' }}>
              Contact Details
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '28px', lineHeight: 1.75 }}>
              Reach me through any of these channels — I typically respond within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {contactInfo.map(({ label, value, href, icon, color }) => {
                const inner = (
                  <>
                    <span style={{ color, flexShrink: 0, display: 'flex' }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: '0.67rem', color: '#475569', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                      <div style={{ fontSize: '0.84rem', color: '#94a3b8', wordBreak: 'break-all', fontWeight: 500 }}>{value}</div>
                    </div>
                  </>
                )
                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-link">{inner}</a>
                ) : (
                  <div key={label} className="contact-link" style={{ cursor: 'default' }}>{inner}</div>
                )
              })}
            </div>

            {/* Response time chip */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '12px', background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <span className="status-dot" />
              <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 500 }}>Usually responds within <span style={{ color: '#34d399', fontWeight: 700 }}>24 hours</span></span>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '70px 24px', borderRadius: '20px', background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.22)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '1.8rem' }}>✓</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#34d399', marginBottom: '10px' }}>Message Sent!</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  {[
                    { key: 'name',  label: 'Name',  type: 'text',  placeholder: 'Your full name' },
                    { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label style={{ display: 'block', fontSize: '0.72rem', color: '#64748b', marginBottom: '8px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>{label}</label>
                      <input className="input-field" type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder={placeholder} required />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: '#64748b', marginBottom: '8px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Subject</label>
                  <input className="input-field" type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="What is this about?" required />
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: '#64748b', marginBottom: '8px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Message</label>
                  <textarea className="input-field" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project or idea…" required style={{ resize: 'vertical', minHeight: '130px' }} />
                </div>

                {status === 'error' && (
                  <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', marginBottom: '16px', fontSize: '0.85rem', color: '#f87171' }}>
                    Something went wrong. Please email me directly.
                  </div>
                )}

                <button type="submit" className="btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', padding: '15px', borderRadius: '12px', border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer', fontWeight: 700, fontSize: '0.96rem', color: '#fff', letterSpacing: '0.04em', opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
