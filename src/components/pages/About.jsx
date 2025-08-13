import { useContent } from "../../hooks/useContent";

function About() {
  const { about } = useContent();
  const { title, description, experience, education, certifications } = about;

  return (
    <section className="content-section">
      <h2 className="section-title">{title}</h2>
      <div className="about-content">
        
      </div>
    </section>
  );
}

export default About;