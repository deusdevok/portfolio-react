import { useMemo, useState, useEffect } from "react";

const defaultSkills = [
  { key: "javascript", short: "JS", name: "JavaScript", levelLabel: "MASTER", percent: 95,
    title: "JAVASCRIPT MASTERY",
    description: "Advanced neural interface programming allows for seamless manipulation of web-based systems. The agent demonstrates exceptional proficiency in ECMAScript protocols and asynchronous operations.",
    status: "MASTER:",
    details: "Complete system integration achieved. Agent operates with machine-like precision in JavaScript environments.",
    augmentation: "AUGMENTATION ACTIVE"
  },
  { key: "react", short: "RE", name: "React", levelLabel: "ADVANCED", percent: 90,
    title: "REACT ENHANCEMENT",
    description: "Component-based neural architecture modification enables rapid deployment of scalable user interfaces. Advanced hook protocols and state management systems fully integrated.",
    status: "ADVANCED:",
    details: "High-level proficiency achieved. Agent capable of constructing complex reactive systems with minimal resource overhead.",
    augmentation: "NEURAL LINK ESTABLISHED"
  },
  { key: "nodejs", short: "NO", name: "Node.js", levelLabel: "ADVANCED", percent: 85,
    title: "NODE.JS SERVER AUGMENTATION",
    description: "Backend infrastructure modification allows for high-performance server-side operations. Asynchronous processing capabilities and API development protocols enhanced.",
    status: "ADVANCED:",
    details: "Extensive server-side integration complete. Agent maintains optimal performance across distributed systems.",
    augmentation: "SERVER MATRIX ACTIVE"
  },
  { key: "python", short: "PY", name: "Python", levelLabel: "TRAINED", percent: 80,
    title: "PYTHON PROTOCOL SUITE",
    description: "Machine learning and data processing augmentations installed. Enhanced capability for algorithm development and automated system analysis.",
    status: "TRAINED:",
    details: "Solid foundation established. Agent demonstrates reliable performance in data manipulation and automation tasks.",
    augmentation: "LEARNING ALGORITHMS ONLINE"
  },
  { key: "databases", short: "DB", name: "Databases", levelLabel: "TRAINED", percent: 75,
    title: "DATABASE INTERFACE MODULE",
    description: "Data storage and retrieval systems enhanced for optimal information management. SQL and NoSQL protocol compatibility achieved.",
    status: "TRAINED:",
    details: "Competent data architecture skills developed. Agent capable of designing and maintaining efficient database systems.",
    augmentation: "DATA CORE SYNCHRONIZED"
  },
  { key: "cybersecurity", short: "CY", name: "Cybersecurity", levelLabel: "UNTRAINED", percent: 60,
    title: "SECURITY PROTOCOL INITIALIZATION",
    description: "Basic security augmentations installed. Threat detection and mitigation systems in development phase. Continuous learning protocols active.",
    status: "UNTRAINED:",
    details: "Foundation level security awareness achieved. Agent requires additional training modules for advanced threat analysis.",
    augmentation: "SECURITY MATRIX LOADING..."
  },
];

function Skills() {
  const initialKey = defaultSkills[0].key;
  const [activeKey, setActiveKey] = useState(initialKey);
  const active = useMemo(() => defaultSkills.find(s => s.key === activeKey) || defaultSkills[0], [activeKey]);

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
      <h2 className="section-title">Augmentation Systems</h2>
      <div className="skills-grid">
        <div className="skills-list">
          {defaultSkills.map(skill => (
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
          <p className="status">{active.status}</p>
          <p>{active.details}</p>
          <p className="augmentation-active">{active.augmentation}</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;


