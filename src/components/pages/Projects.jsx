import { useContent } from "../../hooks/useContent";

function Projects() {
  const { projects } = useContent();

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div 
            className="project-card" 
            key={project.id} 
            onClick={() => window.open(project.githubUrl, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span className="tech-tag" key={index}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;