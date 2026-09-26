const KIND_LABEL = { Client: 'Client work', Product: 'Own product', Studio: 'The studio', Personal: 'Personal' }

// Kept deliberately short: screenshot, what it is, one line, one link.
// Tech stack and year stay in projectsData for the detail views.
export default function ProjectCard({ project, priority = false }) {
  const { title, kind, category, summary, liveUrl, githubUrl, image } = project
  const href = liveUrl || githubUrl
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
          <span>{category}</span>
        </div>
        <h3>{title}</h3>
        <p className="card-summary">{summary}</p>
        {href && (
          <a className="card-link" href={href} target="_blank" rel="noopener noreferrer">
            {liveUrl ? 'Visit site' : 'View code'} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}
