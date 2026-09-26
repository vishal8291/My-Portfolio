import Link from 'next/link'
import HeroVideo from './components/HeroVideo.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import projects, { clientProject as mahagro, showcase } from './data/projectsData'
import { offerings, promises, steps } from './data/services'
import { site } from './data/site'


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="label">Founder · {site.studio.name}</span>
            <h1>I build software small businesses can <em>trust with real work.</em></h1>
            <p className="lede">
              I&apos;m Vishal Tiwari, founder of {site.studio.name}. We build websites, AI agents and automation tools
              for small businesses in India.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">Start a project</Link>
              <Link href="/join" className="btn btn-ghost">Join the team</Link>
            </div>
            <ul className="hero-facts">
              <li><span className="dot" aria-hidden="true" />Taking new projects</li>
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
              <span className="d"><span className="dot" aria-hidden="true" />Live · takes payments</span>
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
              <h2>Websites, AI agents and automation.</h2>
            </div>
            <Link href="/services" className="link-arrow">Details →</Link>
          </div>
          <div className="svc">
            {offerings.map((s) => (
              <div className="svc-row" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.what}</p>
                <p className="eg"><b>{s.proof[0]}</b> · {s.proof[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">Client work</span>
              <h2>MAHAGRO INDIA</h2>
            </div>
            <a href={mahagro.liveUrl} className="link-arrow" target="_blank" rel="noopener noreferrer">Visit live site ↗</a>
          </div>
          <a href={mahagro.liveUrl} className="browser" target="_blank" rel="noopener noreferrer" aria-label="Open mahagroindia.com">
            <span className="browser-bar" aria-hidden="true">
              <i /><i /><i />
              <span className="browser-url">mahagroindia.com</span>
            </span>
            <img src={mahagro.image} alt="MAHAGRO INDIA home page" width="1600" height="823" loading="lazy" />
          </a>
        </div>
      </section>

      {/* Selected work */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">Selected work</span>
              <h2>Stores, AI tools and apps.</h2>
            </div>
            <Link href="/projects" className="link-arrow">All {projects.length} projects →</Link>
          </div>
          <div className="grid-3">
            {showcase.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">How we work</span>
              <h2>Four steps. No surprises.</h2>
            </div>
          </div>
          <ol className="flow">
            {steps.map((s) => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}
          </ol>
          <ul className="checks">
            {promises.map((p) => <li key={p.title}>{p.title}</li>)}
          </ul>
        </div>
      </section>

      {/* Founder */}
      <section className="section">
        <div className="wrap founder">
          <img src="/images/vishal-portrait.jpg" alt="Vishal Tiwari" className="portrait" width="640" height="640" loading="lazy" />
          <div>
            <span className="label">Founder</span>
            <h2>Vishal Tiwari</h2>
            <p className="founder-role">Founder, {site.studio.name} · Full-stack developer</p>
            <p className="founder-line">I lead every {site.studio.name} project myself, from architecture to launch.</p>
            <dl className="facts">
              <div><dt>Founded</dt><dd>2026</dd></div>
              <div><dt>Based in</dt><dd>Mumbai, India</dd></div>
              <div><dt>Projects built</dt><dd>{projects.length}</dd></div>
            </dl>
            <p style={{ marginTop: 20 }}><Link href="/about" className="link-arrow">About me →</Link></p>
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
              Developers, designers, AI and content people: show me your work. Freshers welcome.
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
              <p>Tell us what&apos;s slowing your business down. Reply within 24 hours.</p>
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
