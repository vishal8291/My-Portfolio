import Link from 'next/link'
import projects from '../data/projectsData'
import ProjectGrid from './ProjectGrid.jsx'

export const metadata = {
  title: 'Work',
  description: 'Client websites, my own online store, and web and mobile apps built by Vishal Tiwari.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  const live = projects.filter((p) => p.liveUrl).length
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="label">Work</span>
          <h1>Everything I&apos;ve built, and what it was for.</h1>
          <p className="lede">
            {projects.length} projects: client work, my own products, and apps built to learn. Each is labelled
            honestly, and {live} have a live link you can open right now.
          </p>
        </div>
      </header>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <ProjectGrid projects={projects} />
          <p className="muted" style={{ marginTop: 40 }}>
            Want something like this for your business? <Link href="/contact" className="link-arrow">Tell me about it →</Link>
          </p>
        </div>
      </section>
    </>
  )
}
