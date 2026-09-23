import Link from 'next/link'
import HeroVideo from './components/HeroVideo.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import projects from './data/projectsData'
import { services, steps } from './data/services'
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
            <span className="label">Freelance full-stack developer · Mumbai</span>
            <h1>Websites and business tools that <em>keep working</em> after launch.</h1>
            <p className="lede">
              I&apos;m Vishal. I build websites, online stores and booking systems for small businesses, with
              payments, WhatsApp and email set up properly, and I look after them once they&apos;re live.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">Start a project</Link>
              <Link href="/projects" className="btn btn-ghost">See my work</Link>
            </div>
            <ul className="hero-facts">
              <li><span className="dot" aria-hidden="true" />Taking new projects</li>
              <li>You deal with me directly</li>
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
            <a href="https://mahagroindia.com" target="_blank" rel="noopener noreferrer">
              <span className="k">Client</span>
              <span className="t">MAHAGRO INDIA</span>
              <span className="d"><span className="dot" aria-hidden="true" />Live · mahagroindia.com</span>
            </a>
            <a href="https://wonderquest.vishal-tiwari.me" target="_blank" rel="noopener noreferrer">
              <span className="k">My product</span>
              <span className="t">Wonder Quest</span>
              <span className="d"><span className="dot" aria-hidden="true" />Live · takes payments online</span>
            </a>
            <a href={site.studio.url} target="_blank" rel="noopener noreferrer">
              <span className="k">My studio</span>
              <span className="t">CustomAI</span>
              <span className="d"><span className="dot" aria-hidden="true" />Live · customeai.tech</span>
            </a>
          </nav>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">What I build</span>
              <h2>Everything a small business needs online, built to last.</h2>
            </div>
            <Link href="/services" className="link-arrow">How I work and what&apos;s included →</Link>
          </div>
          <div className="svc">
            {services.map((s) => (
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
              <h3>What I built</h3>
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
              <h2>Stores, tools and apps I&apos;ve built.</h2>
            </div>
            <Link href="/projects" className="link-arrow">All {projects.length} projects →</Link>
          </div>
          <div className="grid-3">
            {selected.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">How it works</span>
              <h2>From first call to a site you own.</h2>
            </div>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="wrap about">
          <img src="/images/vishal-portrait.jpg" alt="Vishal Tiwari speaking at Thakur College" className="portrait" width="640" height="640" loading="lazy" />
          <div>
            <span className="label">About me</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', marginBottom: 16 }}>One person, from the first call to fixes a year later.</h2>
            <p>
              I&apos;m a full-stack developer from Borivali, Mumbai. I finished my B.Sc. in IT at Thakur College in 2026
              and have been building for the web since 2023: client sites, my own online store, and apps in React,
              Next.js, Node.js, PHP and React Native.
            </p>
            <p>
              When you hire me you deal with me directly. For bigger projects that need more hands, I also run a small
              studio, <a href={site.studio.url} className="link-arrow" target="_blank" rel="noopener noreferrer">CustomAI</a>.
            </p>
            <dl className="facts">
              <div><dt>Based in</dt><dd>Borivali West, Mumbai</dd></div>
              <div><dt>Education</dt><dd>B.Sc. IT, Thakur College</dd></div>
              <div><dt>Projects built</dt><dd>{projects.length}</dd></div>
            </dl>
            <p style={{ marginTop: 20 }}><Link href="/about" className="link-arrow">My story, skills and certificates →</Link></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div>
              <h2>Have something in mind?</h2>
              <p>Tell me what&apos;s slowing your business down. I&apos;ll reply within 24 hours with how I&apos;d fix it and what it would cost.</p>
              <div className="cta-contact">
                <span>Email <b>{site.email}</b></span>
                <span>Phone / WhatsApp <b>{site.phone}</b></span>
              </div>
            </div>
            <div className="btn-row" style={{ justifyContent: 'flex-start' }}>
              <Link href="/contact" className="btn btn-primary">Start a project</Link>
              <a href={site.whatsapp} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp me</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
