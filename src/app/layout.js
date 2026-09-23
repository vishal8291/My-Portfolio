import localFont from 'next/font/local'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { site } from './data/site'
import '../styles/globals.css'

// Fonts are self-hosted (variable woff2, latin subset, from Google Fonts).
// next/font/google downloads them during every build, and on Next 16.2.3
// that intermittently fails ("next/font/google queries have exactly one
// entry") — it broke a Vercel deploy on 2026-09-23. Local files can't.
const sans = localFont({ src: './fonts/SchibstedGrotesk-latin.woff2', weight: '400 700', variable: '--font-sans', display: 'swap' })
const mono = localFont({ src: './fonts/JetBrainsMono-latin.woff2', weight: '400 500', variable: '--font-mono', display: 'swap' })

const title = 'Vishal Tiwari · Founder of CustomeAI'
const description =
  'Vishal Tiwari is the founder of CustomeAI, a Mumbai studio building websites, AI agents and automation tools for small businesses in India.'

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s · Vishal Tiwari' },
  description,
  keywords: ['Vishal Tiwari', 'CustomeAI', 'founder', 'website for small business', 'AI agents', 'automation', 'Mumbai'],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_IN', url: site.url, siteName: site.name, title, description },
  twitter: { card: 'summary_large_image', title, description, creator: '@vishalT200' },
  robots: { index: true, follow: true },
}

export const viewport = { themeColor: '#ffffff' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
