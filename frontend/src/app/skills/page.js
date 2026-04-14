export default function SkillsPage() {
  const categories = [
    {
      name: 'Languages', color: '#818cf8', emoji: '💻',
      skills: [
        { name: 'C / C++',     pct: 87 },
        { name: 'JavaScript',  pct: 80 },
        { name: 'Java',        pct: 80 },
        { name: 'TypeScript',  pct: 75 },
        { name: 'Python',      pct: 72 },
      ],
    },
    {
      name: 'Frontend', color: '#22d3ee', emoji: '🎨',
      skills: [
        { name: 'HTML / CSS',    pct: 90 },
        { name: 'React',         pct: 85 },
        { name: 'Tailwind CSS',  pct: 85 },
        { name: 'Next.js',       pct: 80 },
        { name: 'React Native',  pct: 75 },
      ],
    },
    {
      name: 'Backend', color: '#34d399', emoji: '⚙️',
      skills: [
        { name: 'REST APIs',      pct: 82 },
        { name: 'Node.js',        pct: 78 },
        { name: 'JWT Auth',       pct: 78 },
        { name: 'Express.js',     pct: 75 },
        { name: 'FastAPI',        pct: 68 },
      ],
    },
    {
      name: 'Databases', color: '#fbbf24', emoji: '🗄️',
      skills: [
        { name: 'MongoDB',       pct: 80 },
        { name: 'MySQL / SQL',   pct: 80 },
        { name: 'Firebase',      pct: 70 },
        { name: 'PostgreSQL',    pct: 65 },
      ],
    },
    {
      name: 'AI / ML', color: '#f472b6', emoji: '🤖',
      skills: [
        { name: 'Prompt Engineering',  pct: 75 },
        { name: 'Anthropic Claude API',pct: 72 },
        { name: 'Vercel AI SDK',       pct: 68 },
        { name: 'Tesseract OCR',       pct: 65 },
      ],
    },
    {
      name: 'Tools & DevOps', color: '#fb923c', emoji: '🛠️',
      skills: [
        { name: 'Git / GitHub',    pct: 85 },
        { name: 'Vite',            pct: 80 },
        { name: 'Vercel / Netlify',pct: 78 },
        { name: 'Expo',            pct: 75 },
        { name: 'PM2',             pct: 60 },
      ],
    },
  ]

  const alsoKnow = ['OOPs', 'Data Structures & Algorithms', 'DBMS', 'SDLC', 'Android Programming', 'Arduino', 'PHP', 'Framer Motion', 'Radix UI', 'Zod', 'React Hook Form', 'Axios', 'Mongoose', 'Prisma', 'Razorpay', 'bcryptjs', 'Notion', 'Meta Business Suite']

  return (
    <div style={{ padding: '110px 24px 90px', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <div className="line-decoration" style={{ margin: '0 auto 22px' }} />
        <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.035em' }}>
          Tech <span className="gradient-text">Skills</span>
        </h1>
        <p style={{ color: '#64748b', maxWidth: '460px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.98rem' }}>
          Languages, frameworks and tools I use to build products — with honest self-assessments.
        </p>
      </div>

      {/* Categories grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '22px', marginBottom: '40px' }}>
        {categories.map(cat => (
          <div key={cat.name} className="card-glass" style={{ borderRadius: '20px', padding: '28px 28px 24px', position: 'relative', overflow: 'hidden' }}>

            {/* Top accent bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, ${cat.color}, ${cat.color}33)` }} />

            {/* Category header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '11px', background: `${cat.color}14`, border: `1px solid ${cat.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.05rem', flexShrink: 0 }}>
                {cat.emoji}
              </div>
              <div>
                <h2 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{cat.name}</h2>
                <p style={{ fontSize: '0.7rem', color: '#475569', marginTop: '1px' }}>{cat.skills.length} skills</p>
              </div>
            </div>

            {/* Skills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cat.skills.map(({ name, pct }) => (
                <div key={name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#94a3b8' }}>{name}</span>
                    <span style={{ fontSize: '0.72rem', color: cat.color, fontWeight: 700, background: `${cat.color}12`, padding: '1px 8px', borderRadius: '999px', border: `1px solid ${cat.color}22` }}>{pct}%</span>
                  </div>
                  <div style={{ height: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', borderRadius: '999px', background: `linear-gradient(to right, ${cat.color}70, ${cat.color})` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Also Know */}
      <div style={{ padding: '32px 28px', borderRadius: '18px', background: 'rgba(14,17,32,0.8)', border: '1px solid rgba(129,140,248,0.16)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ height: '2px', width: '24px', background: 'linear-gradient(to right, #818cf8, #22d3ee)', borderRadius: '2px' }} />
          <h3 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Also Know</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {alsoKnow.map(s => (
            <span key={s} className="tech-badge" style={{ fontSize: '0.75rem', padding: '4px 12px' }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
