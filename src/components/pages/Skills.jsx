import { useMemo, useState, useEffect } from "react";
import { useContent } from "../../hooks/useContent";

function Skills() {
  const { skills } = useContent();
  const initialKey = skills[0].key;
  const [activeKey, setActiveKey] = useState(initialKey);
  const active = useMemo(() => skills.find(s => s.key === activeKey) || skills[0], [activeKey]);

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

  return (
    <section className="content-section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="skills-grid">
        <div className="skills-list">
          {skills.map(skill => (
            <div
              key={skill.key}
              className={`skill-item ${activeKey === skill.key ? 'active' : ''}`}
              onClick={() => setActiveKey(skill.key)}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="skill-icon">{skill.short}</div>
                <div className="skill-info">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.levelLabel}</div>
                </div>
              </div>
              <div className="skill-points">{skill.percent}%</div>
            </div>
          ))}
        </div>
        <div className="skill-description">
          <h3>{active.title}</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${active.percent}%` }} />
          </div>
          <p>{active.description}</p>
          <br/>
          <p className="status">{active.levelLabel}:</p>
          <p>{active.details}</p>
          <p className="augmentation-active">{active.augmentation}</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;


