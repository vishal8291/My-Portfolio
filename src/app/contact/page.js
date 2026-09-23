import Link from 'next/link'
import LeadForm from '../components/LeadForm.jsx'
import { site } from '../data/site'

export const metadata = {
  title: 'Contact',
  description: `Start a project with ${site.studio.name}. Tell us the problem; reply within 24 hours.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="label">Start a project · {site.studio.name}</span>
          <h1>Tell us what&apos;s going wrong.</h1>
          <p className="lede">
            A few lines is enough: what your business does and what&apos;s not working. You&apos;ll get an honest read
            within 24 hours on what would fix it and what it would cost. No obligation.
          </p>
        </div>
      </header>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap two-col" style={{ gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)' }}>
          <LeadForm endpoint="/api/contact" submitLabel="Send to CustomeAI" successText="Sent. You’ll hear back within 24 hours.">
            <div className="field">
              <label htmlFor="cf-name">Your name</label>
              <input id="cf-name" name="name" autoComplete="name" required maxLength={100} />
            </div>
            <div className="field">
              <label htmlFor="cf-contact">Email or phone number</label>
              <input id="cf-contact" name="contact" autoComplete="email" required maxLength={100} />
              <span className="hint">However you&apos;d like us to reply.</span>
            </div>
            <div className="field">
              <label htmlFor="cf-business">Business name <span className="muted">(optional)</span></label>
              <input id="cf-business" name="business" autoComplete="organization" maxLength={150} />
            </div>
            <div className="field">
              <label htmlFor="cf-message">What&apos;s going wrong?</label>
              <textarea id="cf-message" name="message" required maxLength={4000}
                placeholder="For example: we take bookings on WhatsApp and lose track of who has paid." />
            </div>
          </LeadForm>
          <aside>
            <dl className="contact-card">
              <div><dt>Email</dt><dd style={{ userSelect: 'all' }}>{site.email}</dd></div>
              <div><dt>Phone and WhatsApp</dt><dd style={{ userSelect: 'all' }}>{site.phone}</dd></div>
              <div><dt>Studio</dt><dd>{site.studio.name}, Borivali West, Mumbai</dd></div>
              <div><dt>Reply time</dt><dd>Within 24 hours</dd></div>
            </dl>
            <p className="muted" style={{ marginTop: 16, fontSize: '0.95rem' }}>
              Want prices first? <a href={site.studio.pricing} className="link-arrow" target="_blank" rel="noopener noreferrer">See CustomeAI pricing ↗</a>
            </p>
            <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem' }}>
              Looking to work with us instead? <Link href="/join" className="link-arrow">Join the team →</Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
