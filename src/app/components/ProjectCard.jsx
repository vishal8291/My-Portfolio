const KIND_LABEL = { Client: 'Client work', Product: 'Own product', Studio: 'The studio', Personal: 'Personal' }

export default function ProjectCard({ project, priority = false }) {
  const { title, kind, year, category, summary, tech, liveUrl, githubUrl, image } = project
  return (
    <article className="card">
      {image && (
        <div className="card-shot">
          <img src={image} alt={`${title} home page`} width="800" height="500" loading={priority ? 'eager' : 'lazy'} />
        </div>
      )}
      <div className="card-body">
        <div className="card-meta">
          <span className={`kind kind-${kind.toLowerCase()}`}>{KIND_LABEL[kind]}</span>
          <span>{category} · {year}</span>
        </div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <ul className="tags" aria-label="Built with">
          {tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="card-links">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer">Visit site ↗</a>}
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer">Code ↗</a>}
        </div>
      </div>
    </article>
  )
}
