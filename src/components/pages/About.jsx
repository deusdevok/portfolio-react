import { useContent } from "../../hooks/useContent";

function About() {
  const { about } = useContent();
  const { description } = about;

  return (
    <section className="content-section">
      <h2 className="section-title">Biographical Modification</h2>
      <div className="about-content">
        <div className="profile-panel">
          <div className="profile-avatar">JD</div>
          <h3>JOHN DOE</h3>
          <p style={{ color: '#1E90FF', margin: '10px 0' }}>FULL-STACK DEVELOPER</p>
          <p style={{ color: '#C0C0C0' }}>SECURITY CLEARANCE: ALPHA</p>
        </div>
        <div className="bio-panel">
          <div className="bio-text">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;