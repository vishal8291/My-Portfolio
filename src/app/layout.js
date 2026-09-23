import { Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { site } from './data/site'
import '../styles/globals.css'

const sans = Schibsted_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

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
