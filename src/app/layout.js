import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import '../styles/globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[url('/your-bg.svg')] bg-no-repeat bg-top bg-cover"> 
        <Navbar />
        <main className="grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
