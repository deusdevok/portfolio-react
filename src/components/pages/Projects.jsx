import { useContent } from "../../hooks/useContent";

function Projects() {
  const { projects } = useContent();
  const placeholder = 'https://place-hold.it/800x400?text=Mission+Preview';

  return (
    <section className="content-section">
      <h2 className="section-title">Mission Archives</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img className="project-image" src={project.imageUrl || placeholder} alt={`${project.title} preview`} />
            <div className="project-header">
              <div className="project-icon">🌐</div>
              <div className="project-title">{project.title}</div>
            </div>
            <div className="project-description">{project.description}</div>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span className="tech-tag" key={index}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer">Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;