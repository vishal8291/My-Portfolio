import Link from 'next/link'
import HeroVideo from './components/HeroVideo.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import projects from './data/projectsData'
import { offerings, promises, steps } from './data/services'
import { site } from './data/site'

const mahagro = projects.find((p) => p.title === 'MAHAGRO INDIA')
const selected = projects.filter((p) => p.featured && p !== mahagro).slice(0, 6)

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="label">Founder, {site.studio.name} · Mumbai</span>
            <h1>I build software small businesses can <em>trust with real work.</em></h1>
            <p className="lede">
              I&apos;m Vishal Tiwari, founder of {site.studio.name}. We build websites, AI agents and automation
              tools for small businesses in India, around the specific problem each one brings us, and we keep
              them running long after launch.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">Start a project</Link>
              <Link href="/join" className="btn btn-ghost">Join the team</Link>
            </div>
            <ul className="hero-facts">
              <li><span className="dot" aria-hidden="true" />Taking new projects</li>
              <li>You own everything we build</li>
              <li>Reply within 24 hours</li>
            </ul>
          </div>
          <HeroVideo />
        </div>
      </section>

      {/* Proof */}
      <section className="section alt" style={{ paddingBlock: 40 }}>
        <div className="wrap">
          <nav className="proof" aria-label="Live work">
            <a href={site.studio.url} target="_blank" rel="noopener noreferrer">
              <span className="k">The studio</span>
              <span className="t">{site.studio.name}</span>
              <span className="d"><span className="dot" aria-hidden="true" />Live · customeai.tech</span>
            </a>
            <a href="https://mahagroindia.com" target="_blank" rel="noopener noreferrer">
              <span className="k">Client</span>
              <span className="t">MAHAGRO INDIA</span>
              <span className="d"><span className="dot" aria-hidden="true" />Live · mahagroindia.com</span>
            </a>
            <a href="https://wonderquest.vishal-tiwari.me" target="_blank" rel="noopener noreferrer">
              <span className="k">Own product</span>
              <span className="t">Wonder Quest</span>
              <span className="d"><span className="dot" aria-hidden="true" />Live · takes payments online</span>
            </a>
          </nav>
        </div>
      </section>

      {/* What we build */}
      <section className="section" id="build">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">What we build</span>
              <h2>Three things, each built around your actual problem.</h2>
            </div>
            <Link href="/services" className="link-arrow">Everything we build →</Link>
          </div>
          <div className="svc">
            {offerings.map((s) => (
              <div className="svc-row" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.what}</p>
                <p className="eg">For example: <b>{s.proof[0]}</b>, {s.proof[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">Client work</span>
              <h2>MAHAGRO INDIA: bookings in two languages, in one place.</h2>
            </div>
            <a href={mahagro.liveUrl} className="link-arrow" target="_blank" rel="noopener noreferrer">Visit mahagroindia.com ↗</a>
          </div>
          <div className="case">
            <div className="case-shot">
              <img src={mahagro.image} alt="MAHAGRO INDIA home page" width="800" height="500" loading="lazy" />
            </div>
            <div>
              <h3>The problem</h3>
              <p>{mahagro.caseStudy.problem}</p>
              <h3>What we built</h3>
              <ul className="ticks">{mahagro.caseStudy.built.map((b) => <li key={b}>{b}</li>)}</ul>
              <h3>Where it stands</h3>
              <ul className="ticks">{mahagro.caseStudy.now.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">More work</span>
              <h2>Stores, AI tools and apps we&apos;ve built.</h2>
            </div>
            <Link href="/projects" className="link-arrow">All {projects.length} projects →</Link>
          </div>
          <div className="grid-3">
            {selected.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      </section>

      {/* Process + promises */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">How we work</span>
              <h2>Four stages, each ending in a checkpoint.</h2>
            </div>
          </div>
          <ol className="steps">
            {steps.map((s) => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}
          </ol>
          <div className="promises">
            {promises.map((p) => (
              <div key={p.title}><h3>{p.title}</h3><p>{p.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section">
        <div className="wrap about">
          <img src="/images/vishal-portrait.jpg" alt="Vishal Tiwari speaking at Thakur College" className="portrait" width="640" height="640" loading="lazy" />
          <div>
            <span className="label">The founder</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', marginBottom: 16 }}>Why I started {site.studio.name}.</h2>
            <p>
              Small businesses get sold websites that look fine on launch day and quietly break after: bookings that
              never arrive, emails in spam, payments nobody recorded. I started {site.studio.name} in 2026 to build the
              opposite, software that keeps working when nobody is watching.
            </p>
            <p>
              I&apos;m a full-stack developer from Borivali, Mumbai, with a B.Sc. in IT from Thakur College. I lead every
              project myself, so clients deal with the person building their system, not a salesperson.
            </p>
            <dl className="facts">
              <div><dt>Founded</dt><dd>{site.studio.name}, 2026</dd></div>
              <div><dt>Based in</dt><dd>Borivali West, Mumbai</dd></div>
              <div><dt>Projects built</dt><dd>{projects.length}</dd></div>
            </dl>
            <p style={{ marginTop: 20 }}><Link href="/about" className="link-arrow">My story, skills and certificates →</Link></p>
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="section alt" id="join">
        <div className="wrap join-band">
          <div>
            <span className="label">Join us</span>
            <h2>Good at something? Build with us.</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              {site.studio.name}{' '}is a small studio growing project by project. If you&apos;re strong in development,
              design, AI, content or sales, show me your work. Freshers welcome: I care about what you&apos;ve built,
              not your marks.
            </p>
          </div>
          <div className="btn-row">
            <Link href="/join" className="btn btn-primary">Send your work</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div>
              <h2>Have a problem worth solving?</h2>
              <p>Tell us what&apos;s slowing your business down. You&apos;ll get an honest answer within 24 hours on what would fix it and what it would cost.</p>
              <div className="cta-contact">
                <span>Email <b>{site.email}</b></span>
                <span>Phone / WhatsApp <b>{site.phone}</b></span>
              </div>
            </div>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">Start a project</Link>
              <a href={site.whatsapp} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp me</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
