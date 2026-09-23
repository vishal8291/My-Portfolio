import Link from 'next/link'
import { site } from '../data/site'

export const metadata = {
  title: 'About',
  description: 'Vishal Tiwari, founder of CustomeAI: full-stack developer from Borivali, Mumbai. Story, skills, education and certificates.',
  alternates: { canonical: '/about' },
}

const journey = [
  { yr: '2026', title: 'Founded CustomeAI', text: 'Started CustomeAI, a studio for websites, AI agents and automation. Delivered MAHAGRO INDIA\'s booking site, our first paid client project, and launched Wonder Quest, my own online store. Finished my B.Sc. IT (CGPA 7.47, Grade A).' },
  { yr: '2025', title: 'Going full stack', text: 'Built CareOps, LexAgent, the AI Learning Assistant, Paperbag and PDFSolution: real backends, logins, payments and deployment.' },
  { yr: '2024', title: 'First real projects', text: 'An ATM management system and a railway announcement system in Java, then my first React and Node.js apps.' },
  { yr: '2023', title: 'B.Sc. IT at Thakur College', text: 'Started my degree and learned the foundations: C, C++, Java and web technologies.' },
  { yr: '2022', title: 'The spark', text: 'After lockdown, curiosity about how technology works turned into learning to program.' },
]

const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'C', 'HTML', 'CSS'] },
  { group: 'Frontend and mobile', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'React Native', 'Expo'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'PHP', 'REST APIs'] },
  { group: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Redis'] },
  { group: 'Payments and messaging', items: ['Razorpay', 'Resend email', 'WhatsApp Cloud API', 'Claude API'] },
  { group: 'Hosting and tools', items: ['Vercel', 'Hostinger', 'Cloudflare', 'Docker', 'Git', 'GitHub Actions'] },
]

const certificates = [
  { title: 'Deloitte Training Certificate', issuer: 'Deloitte', year: '2025', file: '/Deloit.pdf' },
  { title: 'Python with Data Science', issuer: 'NPTEL', year: '2025', file: '/NPTEL-Python-DataScience.pdf' },
  { title: 'IIRS Remote Sensing Certificate', issuer: 'IIRS (ISRO)', year: '2024', file: '/IIRS cerificate.pdf' },
  { title: 'LiveMint Certification', issuer: 'LiveMint', year: '2024', file: '/livemint.pdf' },
  { title: 'DLLE Udaan Certificate', issuer: 'DLLE', year: '2024', file: '/DLLEUdaan.pdf' },
  { title: 'Disaster Management Certificate', issuer: 'Thakur College', year: '2024', file: '/Disastermgmt.pdf' },
  { title: 'Annual Extension Certificate', issuer: 'Thakur College', year: '2024', file: '/Annual Extension.png' },
  { title: 'TCS Advanced Certification', issuer: 'Tata Consultancy Services', year: '2023', file: '/TCS2.pdf' },
  { title: 'TCS Certification', issuer: 'Tata Consultancy Services', year: '2023', file: '/TCS.pdf' },
  { title: 'IIT Participant Certificate', issuer: 'IIT', year: '2023', file: '/IIT.pdf' },
]

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap about">
          <img src="/images/vishal-portrait.jpg" alt="Vishal Tiwari speaking at Thakur College" className="portrait" width="640" height="640" />
          <div>
            <span className="label">About</span>
            <h1>I&apos;m Vishal, founder of {site.studio.name}.</h1>
            <p className="lede">
              A full-stack developer from Borivali, Mumbai. I founded {site.studio.name} to build websites, AI agents and
              automation tools that small businesses can rely on long after launch day.
            </p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn btn-primary">Start a project</Link>
              <a href={site.resume} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="label">My story</span>
            <h2 style={{ fontSize: '1.7rem', marginBottom: 18 }}>From college projects to a studio.</h2>
            <p>
              I started programming in 2022 and finished my B.Sc. in Information Technology at Thakur College of
              Science and Commerce in 2026. Along the way I built projects across online stores, healthcare and legal
              tech, each with real logins, databases, payments and deployment.
            </p>
            <p style={{ marginTop: 14 }}>
              In 2026 I delivered my first paid client project, MAHAGRO INDIA, launched my own online store, Wonder
              Quest, and founded <a href={site.studio.url} className="link-arrow" target="_blank" rel="noopener noreferrer">{site.studio.name}</a> to do this work properly for other small businesses.
              What I learned from running real sites: the hard part isn&apos;t launch day. It&apos;s making sure every
              booking, payment and message still arrives months later, when nobody is watching.
            </p>
            <p style={{ marginTop: 14 }}>
              Outside engineering, I manage a petrol pump and run the clothing brand Vistora, so I know what running a
              small business actually takes.
            </p>
          </div>
          <div>
            <span className="label">Journey</span>
            <ol className="timeline" style={{ marginTop: 6 }}>
              {journey.map((j) => (
                <li key={j.yr}><span className="yr">{j.yr}</span><h3>{j.title}</h3><p>{j.text}</p></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section alt" id="skills">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">Skills</span>
              <h2>What I work with.</h2>
            </div>
            <p>Every tool listed here is used in a project on this site.</p>
          </div>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <h3>{s.group}</h3>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="certifications">
        <div className="wrap two-col">
          <div>
            <span className="label">Education</span>
            <h2 style={{ fontSize: '1.7rem', marginBottom: 18 }}>B.Sc. Information Technology</h2>
            <ul className="rows">
              <li><span><span className="r-sub">College</span><br /><span className="r-title">Thakur College of Science and Commerce</span></span></li>
              <li><span><span className="r-sub">Years</span><br /><span className="r-title">2023 to 2026</span></span></li>
              <li><span><span className="r-sub">Result</span><br /><span className="r-title">CGPA 7.47, Grade A</span></span></li>
            </ul>
            <p style={{ marginTop: 24 }}>
              Outside the classroom I led campus campaigns, field surveys and Youth Parliament sessions.{' '}
              <Link href="/college" className="link-arrow">See them →</Link>
            </p>
          </div>
          <div>
            <span className="label">Certificates</span>
            <h2 style={{ fontSize: '1.7rem', marginBottom: 18 }}>{certificates.length} certificates, each one viewable.</h2>
            <ul className="rows">
              {certificates.map((c) => (
                <li key={c.title}>
                  <span><span className="r-title">{c.title}</span><br /><span className="r-sub">{c.issuer} · {c.year}</span></span>
                  <a href={encodeURI(c.file)} target="_blank" rel="noopener noreferrer">View ↗</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
