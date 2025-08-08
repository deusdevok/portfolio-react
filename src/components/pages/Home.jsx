import { Link } from "react-router-dom";
import { useContent } from "../../hooks/useContent";

function Home() {
  const { home } = useContent();
  const { title, hero } = home;

  return (
    <div className="home-container">
      <h1>{title}</h1>
      <div className="hero-section">
        <div className="hero-text">
          <h2>{hero.title}</h2>
          <p>{hero.description}</p>
          <Link to="/projects" className="cta-button">{hero.cta}</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;