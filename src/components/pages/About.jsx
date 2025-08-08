import { useContent } from "../../hooks/useContent";

function About() {
    const { about } = useContent();
    const { title, description, skills } = about;

    return (
      <div className="about-container">
        <h2>{title}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{description}</p>
            <h3>Skills</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  export default About;