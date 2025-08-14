import { useState, useEffect } from "react";
import { useContent } from "../../hooks/useContent";

function Skills() {
  const { skills } = useContent();
  const [selectedSkill] = useState(null);

  useEffect(() => {
    // glitch effect for section titles
    const titles = document.querySelectorAll('.section-title');
    const timers = Array.from(titles).map(title => setInterval(() => {
      if (Math.random() < 0.1) {
        title.style.textShadow = '2px 0 #ff0000, -2px 0 #00ffff';
        setTimeout(() => {
          title.style.textShadow = `
            0 1px 0 #ccc,
            0 2px 0 #c9c9c9,
            0 3px 0 #bbb,
            0 4px 0 #b9b9b9,
            0 5px 0 #aaa,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25)
          `;
        }, 100);
      }
    }, 2000))
    return () => timers.forEach(t => clearInterval(t));
  }, []);

  const getExperienceLevel = (years) => {
    if (years >= 7) return { level: skills.expert, color: "#00ff00" };
    if (years >= 5) return { level: skills.advanced, color: "#00BFFF" };
    if (years >= 2) return { level: skills.intermediate, color: "#FFD700" };
    return { level: skills.beginner, color: "#FF6B6B" };
  };

  const getMaxYears = () => Math.max(...skills.skillsList.map(s => s.years || 0));

  return (
    <section className="content-section">
      <h2 className="section-title">{skills.techStack}</h2>
      
      <div className="skills-overview">
        <div className="skills-grid-new">
          {skills.skillsList.sort((a, b) => b.years - a.years).map(skill => {
            const experience = getExperienceLevel(skill.years || 0);
            const maxYears = getMaxYears();
            const progressPercent = ((skill.years || 0) / maxYears) * 100;
            const skillIcon = skill.icon;
            
            return (
              <div 
                key={skill.key}
                className={`skill-card ${selectedSkill?.key === skill.key ? 'selected' : ''}`}
                // onClick={() => setSelectedSkill(skill)}
              >
                <div className="skill-card-header">
                  <div className="skill-icon-new">
                    {skillIcon ? (
                      <img
                        src={skillIcon}
                        alt={`${skill.name} logo`}
                        className="skill-logo"
                      />
                    ) : (
                      skill.short
                    )}
                  </div>
                  <div className="skill-info-new">
                    <h3 className="skill-name-new">{skill.name}</h3>
                    <div className="skill-level-new" style={{ color: experience.color }}>
                      {experience.level}
                    </div>
                  </div>
                </div>
                
                <div className="experience-display">
                  <div className="years-number">{skill.years || 0}</div>
                  <div className="years-label">YEARS</div>
                </div>
                
                <div className="experience-timeline">
                  <div className="timeline-bar">
                    <div 
                      className="timeline-fill" 
                      style={{ 
                        width: `${progressPercent}%`,
                        backgroundColor: experience.color 
                      }}
                    />
                  </div>
                  <div className="timeline-scale">
                    <span>0</span>
                    <span>{maxYears}</span>
                  </div>
                </div>
                
                <div className="skill-description-preview">
                  {skill.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;


