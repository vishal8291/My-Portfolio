import ContactForm from './ContactForm.jsx'
import { site } from '../data/site'

export const metadata = {
  title: 'Contact',
  description: 'Tell Vishal Tiwari about your project. Reply within 24 hours.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="label">Contact</span>
          <h1>Tell me what you need.</h1>
          <p className="lede">
            A few lines is enough: what your business does and what&apos;s not working. I&apos;ll reply within 24
            hours with how I&apos;d fix it and what it would cost. No obligation.
          </p>
        </div>
      </header>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap two-col" style={{ gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)' }}>
          <ContactForm />
          <aside>
            <dl className="contact-card">
              <div><dt>Email</dt><dd style={{ userSelect: 'all' }}>{site.email}</dd></div>
              <div><dt>Phone and WhatsApp</dt><dd style={{ userSelect: 'all' }}>{site.phone}</dd></div>
              <div><dt>Based in</dt><dd>Borivali West, Mumbai</dd></div>
              <div><dt>Reply time</dt><dd>Within 24 hours</dd></div>
            </dl>
            <p className="muted" style={{ marginTop: 16, fontSize: '0.95rem' }}>
              Prefer to talk? <a href={site.whatsapp} className="link-arrow" target="_blank" rel="noopener noreferrer">Message me on WhatsApp</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
