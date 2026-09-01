'use client'
import Link from 'next/link'
import { useState } from 'react'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const packages = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    tag: 'Perfect to start',
    tagColor: '#818cf8',
    accent: '#818cf8',
    glow: 'rgba(129,140,248,0.15)',
    border: 'rgba(129,140,248,0.25)',
    description: 'Brand presence + consistent social content to attract your first paying clients.',
    features: [
      '12 branded social posts/month (Instagram + Facebook)',
      'Captions + hashtag strategy written for you',
      'Canva brand kit (colors, fonts, logo usage)',
      '1 page website or landing page (Next.js)',
      'Monthly strategy call (30 min)',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$999',
    period: '/month',
    tag: 'Most popular',
    tagColor: '#f472b6',
    accent: '#c084fc',
    glow: 'rgba(192,132,252,0.18)',
    border: 'rgba(192,132,252,0.35)',
    featured: true,
    description: 'Full content engine + a website that converts visitors into booked clients.',
    features: [
      'Everything in Starter',
      '24 posts/month + 4 Reels/TikTok scripts',
      'Email newsletter (2x/month)',
      'Multi-page website with booking integration',
      'SEO setup + Google Business profile',
      'Weekly analytics report',
      'Bi-weekly strategy call (45 min)',
      'Priority Slack/WhatsApp support',
    ],
  },
  {
    name: 'Authority',
    price: '$1,799',
    period: '/month',
    tag: 'Full-service',
    tagColor: '#34d399',
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.12)',
    border: 'rgba(52,211,153,0.25)',
    description: 'Done-for-you personal brand system. You coach — I handle everything else.',
    features: [
      'Everything in Growth',
      '40 posts/month across all platforms',
      'Short-form video editing (4 videos/month)',
      'Lead magnet design + delivery automation',
      'Full sales funnel (opt-in → thank you → upsell)',
      'Custom automation (Zapier / Make)',
      'Monthly brand audit & refresh',
      'Weekly calls + unlimited async support',
    ],
  },
]

const faqs = [
  {
    q: 'Do I need to provide content ideas?',
    a: 'No. I research your niche, study what works in fitness coaching, and build a content calendar for you. You just approve it.',
  },
  {
    q: 'How fast can I get started?',
    a: 'Onboarding takes 3–5 days. After our kickoff call, content and your first website draft are ready within 7 days.',
  },
  {
    q: 'Can I pause or cancel anytime?',
    a: 'Yes. Month-to-month, no contracts. Cancel with 7 days notice.',
  },
  {
    q: 'What if I already have a website?',
    a: 'We can audit and improve your existing site, or rebuild it — whichever makes more sense for your goals.',
  },
  {
    q: 'Do you work with fitness coaches only?',
    a: 'Currently focused on fitness & wellness coaches so I can deliver the best results. I may open other niches later.',
  },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', color: '#0f172a', fontFamily: 'inherit' }}>

      {/* Hero */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block', marginBottom: '20px',
          padding: '6px 16px', borderRadius: '100px',
          border: '1px solid rgba(239,68,68,0.3)',
          background: 'rgba(239,68,68,0.07)',
          fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em',
          color: '#dc2626', textTransform: 'uppercase',
        }}>
          For Fitness & Wellness Coaches
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900,
          lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px',
        }}>
          Stop Losing Clients{' '}
          <span style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444, #f87171)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            to Coaches Who Look Better Online
          </span>
        </h1>

        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 40px' }}>
          I handle your social content, website, and online presence — so you can spend your time coaching,
          not stressing about Canva templates and Instagram algorithms.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact"
            style={{
              padding: '14px 32px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #dc2626, #ef4444)',
              color: '#fff', fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none', letterSpacing: '0.02em',
              boxShadow: '0 6px 24px rgba(239,68,68,0.42)',
            }}>
            Book a Free Strategy Call
          </Link>
          <a href="#packages"
            style={{
              padding: '14px 32px', borderRadius: '10px',
              border: '1px solid rgba(239,68,68,0.2)',
              color: '#475569', fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none', background: 'rgba(239,68,68,0.04)',
            }}>
            View Packages ↓
          </a>
        </div>
      </section>

      {/* Social proof bar */}
      <div style={{
        borderTop: '1px solid rgba(0,0,0,0.07)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '20px 24px',
        display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap',
      }}>
        {[
          { stat: '7 days', label: 'to first deliverable' },
          { stat: 'No contracts', label: 'cancel anytime' },
          { stat: '1 person', label: 'you deal with me directly' },
          { stat: '100%', label: 'done for you' },
        ].map(({ stat, label }) => (
          <div key={stat} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ef4444' }}>{stat}</div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Packages */}
      <section id="packages" style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>
          Choose Your Package
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '56px', fontSize: '0.95rem' }}>
          All packages include a free 30-min discovery call before you commit to anything.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'start' }}>
          {packages.map((pkg) => (
            <div key={pkg.name} style={{
              borderRadius: '20px',
              border: `1px solid ${pkg.border}`,
              background: pkg.featured
                ? 'linear-gradient(145deg, #fff5f5, #fef2f2)'
                : '#ffffff',
              padding: '32px 28px',
              position: 'relative',
              boxShadow: pkg.featured ? `0 0 60px ${pkg.glow}` : 'none',
              transform: pkg.featured ? 'scale(1.02)' : 'none',
            }}>
              {pkg.featured && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                  padding: '5px 20px', borderRadius: '100px',
                  fontSize: '0.75rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  Most Popular
                </div>
              )}

              <div style={{
                display: 'inline-block', marginBottom: '16px',
                padding: '4px 12px', borderRadius: '100px',
                background: `${pkg.tagColor}18`,
                border: `1px solid ${pkg.tagColor}40`,
                fontSize: '0.72rem', fontWeight: 600, color: pkg.tagColor,
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                {pkg.tag}
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{pkg.name}</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '20px', lineHeight: 1.5 }}>{pkg.description}</p>

              <div style={{ marginBottom: '28px' }}>
                <span style={{ fontSize: '2.6rem', fontWeight: 900, color: pkg.accent }}>{pkg.price}</span>
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{pkg.period}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.875rem', color: '#475569', lineHeight: 1.5 }}>
                    <span style={{ color: pkg.accent, marginTop: '2px', flexShrink: 0 }}><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/contact"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '13px 24px', borderRadius: '10px',
                  background: pkg.featured
                    ? 'linear-gradient(135deg, #dc2626, #ef4444)'
                    : `${pkg.accent}18`,
                  border: pkg.featured ? 'none' : `1px solid ${pkg.accent}35`,
                  color: pkg.featured ? '#fff' : pkg.accent,
                  fontWeight: 700, fontSize: '0.875rem',
                  textDecoration: 'none', letterSpacing: '0.02em',
                  boxShadow: pkg.featured ? '0 6px 20px rgba(239,68,68,0.38)' : 'none',
                }}>
                Get Started <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '48px', letterSpacing: '-0.02em' }}>
          What Working With Me Looks Like
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { step: '01', title: 'Discovery Call', body: 'We talk for 30 minutes. I learn about your niche, goals, and current struggles. Zero pressure, zero pitch.' },
            { step: '02', title: 'Brand Blueprint', body: 'I audit your current presence and deliver a strategy doc: positioning, content pillars, and a 30-day roadmap.' },
            { step: '03', title: 'I Build Everything', body: 'Content, website, automations. You get drafts to approve. My job is to make this feel effortless for you.' },
            { step: '04', title: 'You Grow, I Iterate', body: 'Monthly reviews, data-driven tweaks, and ongoing content. The system gets stronger every month.' },
          ].map(({ step, title, body }) => (
            <div key={step} style={{
              padding: '28px 24px', borderRadius: '16px',
              border: '1px solid rgba(0,0,0,0.08)',
              background: '#ffffff',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ef4444', letterSpacing: '0.1em', marginBottom: '10px' }}>{step}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '40px', letterSpacing: '-0.02em' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              borderRadius: '14px', overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.08)',
              background: openFaq === i ? 'rgba(239,68,68,0.04)' : '#fafafa',
            }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '20px 24px', background: 'none', border: 'none',
                  cursor: 'pointer', color: '#0f172a',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontSize: '0.9rem', fontWeight: 600, gap: '16px',
                }}>
                {faq.q}
                <span style={{ color: '#ef4444', fontSize: '1.2rem', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 20px', fontSize: '0.875rem', color: '#475569', lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        maxWidth: '700px', margin: '0 auto 100px', padding: '60px 32px',
        textAlign: 'center', borderRadius: '24px',
        border: '1px solid rgba(239,68,68,0.2)',
        background: 'linear-gradient(145deg, rgba(239,68,68,0.04), rgba(254,242,242,0.8))',
        boxShadow: '0 0 60px rgba(239,68,68,0.08)',
      }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Ready to Fill Your Calendar With Clients?
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '32px', lineHeight: 1.6 }}>
          Book a free 30-minute strategy call. No obligation — just a real conversation about your goals.
        </p>
        <Link href="/contact"
          style={{
            display: 'inline-block', padding: '15px 40px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #dc2626, #ef4444)',
            color: '#fff', fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none', letterSpacing: '0.02em',
            boxShadow: '0 8px 28px rgba(239,68,68,0.42)',
          }}>
          Book Free Call →
        </Link>
        <p style={{ marginTop: '16px', fontSize: '0.78rem', color: '#475569' }}>
          Spots are limited — I work with max 5 clients at a time.
        </p>
      </section>

    </main>
  )
}
