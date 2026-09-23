import Link from 'next/link'

export const metadata = {
  title: 'Beyond code',
  description: 'Campus campaigns, field surveys and Youth Parliament: what Vishal Tiwari led outside the classroom at Thakur College.',
  alternates: { canonical: '/college' },
}

// Content carried over unchanged from the previous version of this page.
const videos = [
  { id: 1, title: 'ICC Awareness Campaign',       category: 'POSH',            tag: 'Internal Complaints Committee',   src: '/videos/icc-awareness.mp4', description: 'Led an ICC awareness session covering compliance frameworks, reporting channels, and zero tolerance policies across tech and science departments.', role: 'Lead Presenter',        accent: '#818cf8', icon: '🎓' },
  { id: 2, title: 'POSH Awareness Drive',          category: 'POSH',            tag: 'Prevention of Sexual Harassment', src: '/videos/posh-drive.mp4',    description: 'Campus wide POSH awareness drive covering cyberbullying, catcalling, quid pro quo, and bystander intervention strategies.',                         role: 'Campaign Coordinator',  accent: '#f472b6', icon: '📢' },
  { id: 3, title: 'POSH Awareness Skit',           category: 'POSH',            tag: 'Live Theatre Advocacy',           src: '/videos/posh-skit.mp4',     description: 'Co directed and performed in an awareness skit making complex legal definitions accessible and memorable for the student body.',                       role: 'Co Director & Actor',   accent: '#c084fc', icon: '🎭' },
  { id: 4, title: 'Nutrition Awareness Activity',  category: 'Food & Nutrition', tag: 'Health & Wellness',              src: '/videos/fn-activity.mp4',   description: 'Hands on nutrition awareness activity demonstrating balanced diet practices, healthy eating habits, and the importance of micronutrients.',             role: 'Organiser',             accent: '#34d399', icon: '🥗' },
  { id: 5, title: 'Healthy Food Stall Showcase',   category: 'Food & Nutrition', tag: 'Campus Health Expo',             src: '/videos/fn-stall.mp4',      description: 'Set up and managed a healthy food stall at the campus expo, showcasing nutritious alternatives to junk food with live demonstrations.',              role: 'Stall Coordinator',     accent: '#4ade80', icon: '🍱' },
  { id: 6, title: 'Nutrition Workshop Highlights', category: 'Food & Nutrition', tag: 'Workshop Recording',             src: '/videos/fn-awareness.mp4',  description: 'Highlights from an interactive workshop on nutrition science, food labelling literacy, and practical tips for a balanced college lifestyle.',         role: 'Volunteer',             accent: '#86efac', icon: '🌿' },
  { id: 7, title: 'Youth Parliament, Floor Highlights',  category: 'Youth Parliament', tag: 'Debate & Leadership', src: '/videos/yp-highlight.mp4', description: 'Quick highlights from the Youth Parliament floor, spirited debates, motions on policy, and representation of student voices on national issues.', role: 'Member of Parliament', accent: '#fbbf24', icon: '🏛️' },
  { id: 8, title: 'Youth Parliament, Session Recording', category: 'Youth Parliament', tag: 'Full Session',        src: '/videos/yp-session.mp4',   description: 'Full session recording of the intercollegiate Youth Parliament, featuring structured debate, bill passing simulation, and student governance.',      role: 'Member of Parliament', accent: '#f59e0b', icon: '🗣️' },
]

const photos = [
  { id: 'p1', src: '/images/college/waste-drive-team.jpeg',    title: 'Waste Segregation Drive',          caption: 'Students holding Waste Management posters during the campus awareness session.',                    tag: 'Dec 2024 · Thakur College',  category: 'DLLE',            accent: '#34d399', wide: true  },
  { id: 'p2', src: '/images/college/waste-drive-session.jpeg', title: 'Waste Drive, Classroom Session',  caption: 'Conducting the peer education session on smart waste sorting inside academic blocks.',               tag: 'Dec 2024 · Thakur College',  category: 'DLLE',            accent: '#34d399', wide: false },
  { id: 'p3', src: '/images/college/survey-thakur-mall.jpeg',  title: 'Field Survey, Thakur Mall',       caption: 'QR code based data collection outside Thakur Mall on social media impact on students.',            tag: 'Jan 2025 · Thakur Mall',     category: 'Field Survey',    accent: '#38bdf8', wide: false },
  { id: 'p4', src: '/images/college/survey-pizza-hut.jpeg',    title: 'Field Survey, Oberoi Park',       caption: 'Team deploying the survey at high traffic hubs using Impact of Social Media boards.',              tag: 'Jan 2025 · Kandivali East',  category: 'Field Survey',    accent: '#38bdf8', wide: false },
  { id: 'p5', src: '/images/college/survey-outdoor.jpeg',      title: 'Social Media Survey, Field Team', caption: 'Field research team with QR code forms analyzing algorithmic social media impact.',                tag: 'Jan 2025 · Thakur Village',  category: 'Field Survey',    accent: '#38bdf8', wide: false },
  { id: 'p6', src: '/images/college/dlle-rally.jpeg',          title: 'DLLE Department March',            caption: 'Department of Lifelong Learning & Extension street march under Thakur College banner.',           tag: 'Feb 2025 · Kandivali East',  category: 'DLLE',            accent: '#c084fc', wide: true  },
  { id: 'p7', src: '/images/college/voter-awareness.jpeg',     title: 'Voter Awareness Drive',            caption: 'Classroom presentation on voter rights and civic responsibility ahead of elections.',              tag: 'Nov 2024 · Thakur College',  category: 'Civic Awareness', accent: '#fbbf24', wide: false },
]

const INITIATIVES = [
  { emoji: '🛑', title: 'POSH & ICC Compliance Campaign',  role: 'Lead Presenter & Coordinator', timeline: 'Dec 2024', accent: '#f472b6', desc: 'Organized campus wide drives at Thakur College to educate students on regulatory frameworks, cyberbullying, and grievance redressal mechanisms.', metrics: ['30+ Team Members Managed', 'Zero Tolerance Awareness Built'] },
  { emoji: '♻️', title: 'Campus Waste Segregation Drive',   role: 'Campaign Organizer',           timeline: 'Dec 2024', accent: '#34d399', desc: 'Led a peer to peer environmental compliance initiative, coordinating crowdsourced media to implement smart waste sorting inside academic blocks.',    metrics: ['Campus Wide Mobilization', 'Peer to Peer Training'] },
  { emoji: '📊', title: 'Social Media Impact Field Survey', role: 'Chief Field Researcher',       timeline: 'Jan 2025', accent: '#38bdf8', desc: 'Deployed a QR code data collection system at high traffic hubs (Thakur Village/Mall) to analyze algorithmic social media impact on students.',      metrics: ['Real World Data Sourcing', 'UX Demographics Validated'] },
]

export default function BeyondCode() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="label">Beyond code</span>
          <h1>Leading people, not just code.</h1>
          <p className="lede">
            At Thakur College I organised campus campaigns, ran field surveys and sat in Youth Parliament.
            The same skills show up in client work: explaining clearly, organising people and following through.
          </p>
          <p style={{ marginTop: 18 }}><Link href="/about" className="link-arrow">← Back to About</Link></p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="section-head"><div><span className="label">Initiatives</span><h2>What I led.</h2></div></div>
          <div className="grid-3">
            {INITIATIVES.map((p) => (
              <article className="card" key={p.title}>
                <div className="card-body">
                  <div className="card-meta"><span>{p.timeline}</span><span>{p.role}</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul className="tags">{p.metrics.map((m) => <li key={m}>{m}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head"><div><span className="label">Photos</span><h2>On the ground.</h2></div></div>
          <div className="media-grid">
            {photos.map((p) => (
              <figure className="media" key={p.id} style={{ margin: 0 }}>
                <img src={p.src} alt={p.title} loading="lazy" />
                <figcaption className="media-body"><h3>{p.title}</h3><p>{p.caption}</p><p className="mono" style={{ marginTop: 6 }}>{p.tag}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head"><div><span className="label">Videos</span><h2>Recorded sessions.</h2></div><p>Videos load only when you press play.</p></div>
          <div className="media-grid">
            {videos.map((v) => (
              <figure className="media" key={v.id} style={{ margin: 0 }}>
                <video src={v.src} controls preload="none" playsInline aria-label={v.title} />
                <figcaption className="media-body"><h3>{v.title}</h3><p>{v.description}</p><p className="mono" style={{ marginTop: 6 }}>{v.role} · {v.category}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
