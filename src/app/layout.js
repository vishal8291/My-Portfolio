import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ClientEffects from './components/ClientEffects'
import '../styles/globals.css'
import '../styles/skill-enhancements.css'

export const metadata = {
  title: 'Vishal Tiwari — Full Stack Developer',
  description: 'Portfolio of Vishal Tiwari, IT Student & Full-Stack Developer from Mumbai. React, Next.js, Node.js, React Native, Python, AI tools and more.',
  keywords: ['Vishal Tiwari', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Mumbai', 'IT Student', 'Portfolio'],
  authors: [{ name: 'Vishal Tiwari', url: 'https://github.com/vishal8291' }],
  creator: 'Vishal Tiwari',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Vishal Tiwari — Full Stack Developer',
    description: 'IT Student & Full-Stack Developer from Mumbai building web apps, mobile apps, and AI tools.',
    siteName: 'Vishal Tiwari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Tiwari — Full Stack Developer',
    description: 'IT Student & Full-Stack Developer from Mumbai.',
    creator: '@vishalT200',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{
        background: '#ffffff',
        color: '#0f172a',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}>
        <ClientEffects />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
