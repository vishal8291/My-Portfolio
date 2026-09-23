import Link from 'next/link'
import { services, steps } from '../data/services'
import { site } from '../data/site'

export const metadata = {
  title: 'Services',
  description: 'Websites, bookings and payments, online stores, admin panels, automation and care after launch, for small businesses.',
  alternates: { canonical: '/services' },
}

const included = [
  'A fixed quote in writing before any work starts',
  'A live preview link while it is being built',
  'Works on phones first, and loads fast',
  'Domain and hosting set up in your name, not mine',
  'Email sent from your domain, so it reaches the inbox, not spam',
  'The source code and every login, handed to you',
  'A plain-language guide to running your site',
  'Automatic uptime checks after launch',
]

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
          <span className="label">Services</span>
          <h1>What I can build for your business.</h1>
          <p className="lede">
            Everything below is something I&apos;ve built and run for real. Not sure which one you need?
            Describe the problem and I&apos;ll suggest the simplest thing that fixes it.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
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

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">How it works</span>
              <h2>Four steps, no surprises.</h2>
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
            <span className="label">Included in every project</span>
            <h2 style={{ fontSize: '1.7rem', marginBottom: 20 }}>What you get.</h2>
            <ul className="ticks">{included.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div>
            <span className="label">Who I work with best</span>
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
              <h2>Get a quote.</h2>
              <p>A few lines about your business is enough. You&apos;ll get a fixed price and a plan within 24 hours.</p>
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
