'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { nav } from '../data/site'

export default function Navbar() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  // Close the phone menu whenever the page changes.
  useEffect(() => { setOpen(false) }, [path])

  const isActive = (href) => path === href || path.startsWith(href + '/')

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">Vishal Tiwari<span>.</span></Link>
        <nav aria-label="Main">
          <ul className="nav-links">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact" className="btn btn-primary nav-cta">Start a project</Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-sheet"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>
      <div id="nav-sheet" className="nav-sheet" hidden={!open}>
        {nav.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link>
        ))}
        <Link href="/contact" className="btn btn-primary">Start a project</Link>
      </div>
    </header>
  )
}
