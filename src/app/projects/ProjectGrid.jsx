'use client'
import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'

export default function ProjectGrid({ projects }) {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [projects])
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by type">
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}{c !== 'All' && <span className="muted"> {projects.filter((p) => p.category === c).length}</span>}
          </button>
        ))}
      </div>
      <div className="grid-3">
        {shown.map((p, i) => <ProjectCard key={p.title} project={p} priority={i < 3} />)}
      </div>
    </>
  )
}
