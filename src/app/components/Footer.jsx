import Link from 'next/link'
import { site, nav } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">Vishal Tiwari<span>.</span></Link>
            <p className="muted" style={{ marginTop: 12, maxWidth: '36ch' }}>
              Freelance full-stack developer in {site.city}. Websites, stores and business tools for small businesses.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              {nav.map(({ href, label }) => <li key={href}><Link href={href}>{label}</Link></li>)}
              <li><Link href="/college">Beyond code</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {site.phone}</a></li>
              <li><a href={site.studio.url} target="_blank" rel="noopener noreferrer">{site.studio.name} studio</a></li>
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              {site.socials.map(({ label, href }) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>
              ))}
              <li><a href={site.resume} target="_blank" rel="noopener noreferrer">Resume (PDF)</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Borivali West, Mumbai</span>
        </div>
      </div>
    </footer>
  )
}
