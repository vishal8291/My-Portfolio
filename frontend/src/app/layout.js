import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import '../styles/globals.css'

export const metadata = {
  title: 'Vishal Tiwari — Full Stack Developer',
  description: 'Portfolio of Vishal Tiwari, IT Student & Full-Stack Developer from Mumbai. React, Node.js, Java, and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: '#050508', color: '#f1f5f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
