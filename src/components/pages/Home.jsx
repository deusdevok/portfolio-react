import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContent } from "../../hooks/useContent";

function Home() {
  const { home } = useContent();
  const { title, hero } = home;

  useEffect(() => {
    document.body.classList.add('scan-lines');
    return () => document.body.classList.remove('scan-lines');
  }, []);

  return (
    <section className="content-section">
      <h2 className="section-title">Neural Interface - Portfolio</h2>
      <div className="about-content" style={{ marginTop: 20 }}>
        <div className="profile-panel">
          <div className="profile-avatar">JD</div>
          <h3>{hero.title}</h3>
          <p style={{ color: '#C0C0C0', marginTop: 8 }}>{title}</p>
          <Link to="/projects" className="project-link" style={{ display: 'inline-block', marginTop: 12 }}>{hero.cta}</Link>
        </div>
        <div className="bio-panel">
          <p className="bio-text">{hero.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Home;