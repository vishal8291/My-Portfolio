'use client'

export default function AboutPage() {
  const interests = [
    { name: 'Full-Stack Web Dev', icon: '🌐', color: '#818cf8' },
    { name: 'Mobile Apps',        icon: '📱', color: '#22d3ee' },
    { name: 'AI / ML',            icon: '🤖', color: '#f472b6' },
    { name: 'Data Structures',    icon: '🧩', color: '#fbbf24' },
    { name: 'Entrepreneurship',   icon: '🚀', color: '#34d399' },
    { name: 'Game Development',   icon: '🎮', color: '#fb923c' },
  ]

  const journey = [
    { year: '2022', title: 'The Spark',          desc: 'After lockdown, curiosity about technology led me to start learning programming — watching a movie was the unexpected trigger.', color: '#818cf8' },
    { year: '2023', title: 'B.Sc. IT — Thakur College', desc: 'Started my degree in Information Technology. Built foundations in C, C++, Java, and web technologies.', color: '#22d3ee' },
    { year: '2024', title: 'First Real Projects', desc: 'Built ATM Management System, Railway Announcement System, and started exploring React and Node.js.', color: '#f472b6' },
    { year: '2025', title: 'Going Full Stack',    desc: 'Launched CareOps, LexAgent, AI Learning Assistant, Vistora Chat App and multiple other production-level projects.', color: '#fbbf24' },
    { year: '2025–26', title: 'Building Products', desc: 'Currently building ShaktiCycle, PDFSolution, and Partners — while actively seeking internship opportunities.', color: '#34d399' },
  ]

  const facts = [
    { icon: '📍', label: 'Location',     text: 'Borivali West, Mumbai, India' },
    { icon: '🎓', label: 'Education',    text: 'B.Sc. IT — Thakur College of Science & Commerce' },
    { icon: '📅', label: 'Graduation',   text: 'Expected: 2026' },
    { icon: '💼', label: 'Status',       text: 'Open to internships & freelance' },
    { icon: '🧠', label: 'Stack',        text: '15+ technologies mastered' },
    { icon: '📦', label: 'Projects',     text: '15+ projects built & counting' },
  ]

  return (
    <div style={{ paddingTop: '68px' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ padding: '90px 24px 72px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
          <div className="line-decoration" style={{ margin: '0 auto 22px' }} />
          <h1 style={{ fontSize: 'clamp(2.4rem, 7vw, 3.8rem)', fontWeight: 900, marginBottom: '20px', letterSpacing: '-0.035em', lineHeight: 1.05 }}>
            About <span className="gradient-text">Me</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}>
            I&apos;m Vishal Tiwari — an IT student from Mumbai who started coding out of curiosity and never stopped. Here&apos;s my story.
          </p>
        </div>
      </section>

      {/* ── STORY + FACTS ─────────────────────────────────── */}
      <section style={{ padding: '80px 24px 100px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '72px', alignItems: 'start' }}>

          {/* Story */}
          <div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 900, marginBottom: '28px', letterSpacing: '-0.025em' }}>
              My <span className="gradient-text">Story</span>
            </h2>
            {[
              'My journey into technology began after lockdown in 2022 — watching a movie sparked curiosity about how digital products are built, and I\'ve been hooked ever since.',
              'I\'m pursuing a B.Sc. in Information Technology at Thakur College of Science and Commerce, building strong foundations in C, C++, Java, Python, React, Node.js, and more.',
              'I love building real products — not just tutorials. From AI-powered tools like LexAgent to mobile apps like Vistora and ShaktiCycle, every project teaches me something new.',
              'Outside coding, I\'m an entrepreneur at heart — managing a petrol pump, building the clothing brand "Vistora", and always exploring new business ideas.',
            ].map((para, i) => (
              <p key={i} style={{ color: '#94a3b8', lineHeight: 1.85, marginBottom: '18px', fontSize: '0.97rem' }}>{para}</p>
            ))}
          </div>

          {/* Quick Facts */}
          <div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 900, marginBottom: '28px', letterSpacing: '-0.025em' }}>
              Quick <span className="gradient-text">Facts</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              {facts.map(({ icon, label, text }) => (
                <div key={label} className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', borderRadius: '12px' }}>
                  <span style={{ fontSize: '1.15rem', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', color: '#475569', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 500 }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div style={{ padding: '22px 24px', borderRadius: '16px', background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.22)' }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#818cf8', textTransform: 'uppercase', marginBottom: '16px' }}>Current Focus</h3>
              {[
                'Building ShaktiCycle, PDFSolution & Partners',
                'Mastering DSA & System Design',
                'Seeking internship opportunities',
                'Exploring AI/ML integrations',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '11px', color: '#94a3b8', fontSize: '0.875rem' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#818cf8', flexShrink: 0, boxShadow: '0 0 6px #818cf8' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ─────────────────────────────── */}
      <section style={{ padding: '80px 24px 100px', background: 'rgba(8,10,20,0.7)', position: 'relative' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="line-decoration" style={{ margin: '0 auto 18px' }} />
            <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              My <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: '44px' }}>
            {/* Vertical line */}
            <div className="timeline-line" style={{ left: '6px' }} />

            {journey.map(({ year, title, desc, color }, i) => (
              <div key={year} style={{ marginBottom: i === journey.length - 1 ? 0 : '44px', position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '-38px', top: '6px',
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: color, border: '2px solid #07090f',
                  boxShadow: `0 0 12px ${color}80`,
                }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '7px' }}>
                  <span style={{ fontSize: '0.73rem', fontWeight: 800, color, letterSpacing: '0.06em', background: `${color}14`, padding: '2px 10px', borderRadius: '999px', border: `1px solid ${color}30` }}>{year}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '7px' }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS OF INTEREST ────────────────────────────── */}
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div className="line-decoration" style={{ margin: '0 auto 18px' }} />
            <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              Areas of <span className="gradient-text">Interest</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', gap: '14px' }}>
            {interests.map(({ name, icon, color }) => (
              <div key={name} className="card-glass" style={{ borderRadius: '14px', padding: '28px 16px', textAlign: 'center', cursor: 'default', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, transparent, ${color}60, transparent)` }} />
                <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{icon}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#94a3b8', lineHeight: 1.3 }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
