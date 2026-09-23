import { Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { site } from './data/site'
import '../styles/globals.css'

const sans = Schibsted_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

const title = 'Vishal Tiwari · Freelance full-stack developer in Mumbai'
const description =
  'I build websites, online stores, booking and payment systems and business tools for small businesses, and look after them once they are live.'

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s · Vishal Tiwari' },
  description,
  keywords: ['freelance web developer Mumbai', 'website for small business', 'Next.js developer', 'Razorpay integration', 'Vishal Tiwari'],
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
