import { profile, projects } from '../data/portfolioData.js';

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <h2>Projects</h2>
          <p>
            Work highlights and personal builds — the latter live on{' '}
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-accent">
              GitHub
            </a>.
          </p>
        </div>
        <div className="proj-grid">
          {projects.map((p) => (
            <div className="proj-card" key={p.title}>
              <div className="proj-top">
                <h4>{p.title}</h4>
                <span className="badge">{p.badge}</span>
              </div>
              <p>{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              {p.link && (
                <a className="proj-link" href={p.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
