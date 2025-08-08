function Projects() {
    const projects = [
      {
        id: 1,
        title: "E-commerce API",
        description: "A high-performance RESTful API for e-commerce applications built with FastAPI",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT Auth"],
        githubUrl: "https://github.com/yourusername/ecommerce-api"
      },
      {
        id: 2,
        title: "Data Analytics Dashboard",
        description: "Web application for visualizing and analyzing large datasets",
        technologies: ["Flask", "SQLAlchemy", "Pandas", "Plotly", "Redis"],
        githubUrl: "https://github.com/yourusername/analytics-dashboard"
      },
      {
        id: 3,
        title: "Content Management System",
        description: "Full-featured CMS with admin panel and API endpoints",
        technologies: ["Django", "Django REST Framework", "Celery", "AWS S3"],
        githubUrl: "https://github.com/yourusername/django-cms"
      }
    ];
  
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