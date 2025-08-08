import { Link } from "react-router-dom";

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

  export default Home;