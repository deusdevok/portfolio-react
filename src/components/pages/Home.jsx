import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContent } from "../../hooks/useContent";

function Home() {
  const { home } = useContent();

  useEffect(() => {
    document.body.classList.add('scan-lines');
    return () => document.body.classList.remove('scan-lines');
  }, []);

  return (
    <section className="content-section">
      <h2 className="section-title">{home.mainTitle}</h2>
      <div className="about-content" style={{ marginTop: 20 }}>
      <div className="profile-panel">
          <div className="profile-avatar">
            <img className="profile-avatar-img" src={`${process.env.PUBLIC_URL}/avatar.jpeg`} alt="Carlos" />
          </div>
          <h3>CARLOS</h3>
          <p style={{ color: '#1E90FF', margin: '10px 0' }}>{home.heroTitle}</p>
          <p style={{ color: '#C0C0C0' }}>{home.activeSince}</p>
        
          <Link to="/projects" className="project-link" style={{ display: 'inline-block', marginTop: 12 }}>{home.cta}</Link>
        </div>
        <div className="home-panel">
          <div className="home-text" dangerouslySetInnerHTML={{ __html: home.description }} />
        </div>
      </div>
    </section>
  );
}

export default Home;