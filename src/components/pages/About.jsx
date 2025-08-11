import { useContent } from "../../hooks/useContent";

function About() {
  const { about } = useContent();
  const { title, description } = about;

  return (
    <section className="content-section">
      <h2 className="section-title">{title}</h2>
      <div className="about-content">
        <div className="profile-panel">
          <div className="profile-avatar">JD</div>
          <h3>CARLOS</h3>
          <p style={{ color: '#1E90FF', margin: '10px 0' }}>PYTHON DEVELOPER</p>
          <p style={{ color: '#C0C0C0' }}>ACTIVE SINCE: 2018</p>
        </div>
        <div className="bio-panel">
          <div className="bio-text" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </section>
  );
}

export default About;