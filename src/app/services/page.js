import Link from 'next/link'
import { offerings, capabilities, promises, steps } from '../data/services'
import { site } from '../data/site'

export const metadata = {
  title: 'What we build',
  description: `${site.studio.name} builds websites, AI agents and automation tools for small businesses in India, around the problem each one brings us.`,
  alternates: { canonical: '/services' },
}

const goodFit = [
  ['Training institutes and coaches', 'who take bookings and deposits'],
  ['Shops and brands', 'moving their catalogue online'],
  ['Clinics, studios and local services', 'tired of managing enquiries in WhatsApp'],
  ['Founders', 'who need a first working version of an app'],
]

export default function ServicesPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="label">What we build · {site.studio.name}</span>
          <h1>Websites, AI agents and automation, built around your problem.</h1>
          <p className="lede">
            You don&apos;t pick a package off a list. Tell us what&apos;s going wrong and we&apos;ll suggest the simplest
            thing that fixes it, whether that&apos;s a website, an AI agent or an automation tool.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="svc">
            {offerings.map((s) => (
              <div className="svc-row" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.what}</p>
                <p className="eg">For example: <b>{s.proof[0]}</b>, {s.proof[1]}</p>
              </div>
            ))}
          </div>
          <div className="section-head" style={{ marginTop: 56, marginBottom: 20 }}>
            <div>
              <span className="label">Also inside our projects</span>
              <h2 style={{ fontSize: '1.6rem' }}>The parts that make it work for a real business.</h2>
            </div>
          </div>
          <div className="promises" style={{ marginTop: 0 }}>
            {capabilities.map((c) => <div key={c.title}><h3>{c.title}</h3><p>{c.what}</p></div>)}
          </div>
        </div>
      </section>

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
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="label">Our promises</span>
            <h2 style={{ fontSize: '1.7rem', marginBottom: 20 }}>What you can count on.</h2>
            <ul className="rows">
              {promises.map((p) => (
                <li key={p.title}><span><span className="r-title">{p.title}</span><br /><span className="r-sub">{p.text}</span></span></li>
              ))}
            </ul>
            <p style={{ marginTop: 18 }}>
              <a href={site.studio.pricing} className="link-arrow" target="_blank" rel="noopener noreferrer">See {site.studio.name} pricing ↗</a>
            </p>
          </div>
          <div>
            <span className="label">Who we work with best</span>
            <h2 style={{ fontSize: '1.7rem', marginBottom: 20 }}>Small businesses that are ready to grow.</h2>
            <ul className="rows">
              {goodFit.map(([who, why]) => (
                <li key={who}><span><span className="r-title">{who}</span> <span className="r-sub">{why}</span></span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div>
              <h2>Tell us the problem.</h2>
              <p>A few lines about your business is enough. You&apos;ll get an honest read and a real price within 24 hours.</p>
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
