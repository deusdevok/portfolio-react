import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";

// Portfolio specific pages
function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <div className="hero-section">
        <div className="hero-text">
          <h2>Python Backend Developer</h2>
          <p>I build robust, scalable API services and web applications with FastAPI and Flask</p>
          <Link to="/projects" className="cta-button">View My Work</Link>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hi! I'm a passionate Python Backend developer with expertise in FastAPI, Flask, and Django frameworks.</p>
          <p>I specialize in building efficient, scalable APIs and web services with a focus on clean code and best practices.</p>
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>Python</li>
            <li>FastAPI</li>
            <li>Flask</li>
            <li>Django</li>
            <li>RESTful APIs</li>
            <li>SQL/NoSQL Databases</li>
            <li>Docker</li>
            <li>CI/CD</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

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

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        navLinks.style.transition = 'none';
        setTimeout(() => {
          navLinks.style.transition = 'transform 0.3s ease-in-out';
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router basename="/portfolio-react">
      <div className="portfolio-app">
        <nav className="main-nav">
          <div className="logo">My Portfolio</div>
          <button className={`hamburger ${isNavOpen ? "open" : ""}`} onClick={toggleNav}>
            ☰
          </button>
          <ul className={`nav-links ${isNavOpen ? "show" : ""}`}>
            <li>
              <Link to="/" onClick={toggleNav}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleNav}>About</Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleNav}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleNav}>Contact</Link>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer className="main-footer">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default Header;