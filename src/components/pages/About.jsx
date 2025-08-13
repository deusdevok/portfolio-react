import { useContent } from "../../hooks/useContent";

function About() {
  const { about } = useContent();
  const { title, description, experience, education, certifications } = about;

  return (
    <section className="content-section">
      <h2 className="section-title">{title}</h2>
      <div className="about-content">
        {/* Left Column - Description */}
        <div className="about-description">
          <div className="description-card">
            <h3 className="card-title">PROFILE OVERVIEW</h3>
            <div 
              className="description-text"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>

        {/* Right Column - Experience, Education, Certifications */}
        <div className="about-details">
          {/* Experience Section */}
          <div className="detail-section">
            <h3 className="section-subtitle">EXPERIENCE LOG</h3>
            <div className="timeline-container">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{exp.title}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <div className="timeline-company">{exp.company}</div>
                    <p className="timeline-description">{exp.description}</p>
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="timeline-skills">
                        <div className="skills-label">TECH STACK:</div>
                        <div className="skills-tags">
                          {exp.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="detail-section">
            <h3 className="section-subtitle">EDUCATION MATRIX</h3>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-header">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <span className="education-period">{edu.period}</span>
                  </div>
                  <div className="education-institution">{edu.institution}</div>
                  <p className="education-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="detail-section">
            <h3 className="section-subtitle">CERTIFICATION PROTOCOLS</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-header">
                    <h4 className="certification-name">{cert.name}</h4>
                    <span className="certification-period">{cert.period}</span>
                  </div>
                  <div className="certification-issuer">{cert.issuer}</div>
                  <p className="certification-description">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;