function ProjectCard({ project }) {
  return (
    <article className="project-card reveal-item">
      <div className="project-meta">
        <span
          className="project-number text-mask"
          style={{ '--delay': '140ms' }}
        >
          <span>{project.number}</span>
        </span>

        <span
          className="project-title text-mask"
          style={{ '--delay': '200ms' }}
        >
          <span>{project.title}</span>
        </span>
      </div>

      <div className="project-grid">
        <div className="project-copy">
          <p
            className="project-description text-mask"
            style={{ '--delay': '260ms' }}
          >
            <span>{project.description}</span>
          </p>

          <div
            className="project-detail text-mask"
            style={{ '--delay': '320ms' }}
          >
            <h3>Features</h3>

            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div
            className="project-detail project-meta-block text-mask"
            style={{ '--delay': '380ms' }}
          >
            <h3>Technology</h3>
            <p>{project.technology}</p>
          </div>

          <div
            className="project-detail project-meta-block text-mask"
            style={{ '--delay': '440ms' }}
          >
            <h3>My contribution</h3>
            <p>{project.contribution}</p>
          </div>

          <div
            className="project-detail project-meta-block text-mask"
            style={{ '--delay': '500ms' }}
          >
            <h3>Status</h3>
            <p>{project.status}</p>
          </div>

          <div
            className="project-action text-mask"
            style={{ '--delay': '560ms' }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              VIEW PROJECT
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div
          className={`project-preview preview-${project.variant}`}
          aria-hidden="true"
        >
          <div className="preview-window">
            <div className="preview-header">
              <span />
              <span />
              <span />
            </div>

            <div className="preview-body">
              <div className="preview-panel preview-panel-main">
                <span className="preview-pill">{project.shortLabel}</span>
                <strong>{project.title}</strong>
              </div>

              <div className="preview-panel preview-panel-side">
                <span className="mini-line" />
                <span className="mini-line short" />
                <span className="mini-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;