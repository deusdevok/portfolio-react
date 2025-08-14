import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useContent } from "./hooks/useContent";
import DeusExHeader from "./components/DeusExHeader";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Skills from "./components/pages/Skills";

import './styles/deusex.css';
import './i18n'; // Import i18n configuration

function App() {
  const { t } = useTranslation();
  const { contact, footer } = useContent();
  const { email, linkedin, github } = contact;
  
  useEffect(() => {
    // global scan-line overlay
    document.body.classList.add('scan-lines');
    // glitch effect on section titles
    const applyGlitch = () => {
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
      }, 2000));
      return () => timers.forEach(t => clearInterval(t));
    };
    const cleanup = applyGlitch();
    return () => {
      document.body.classList.remove('scan-lines');
      cleanup && cleanup();
    };
  }, []);
  
  return (
    <Router basename="/portfolio-react">
      <div className="container">
        <DeusExHeader />
        <LanguageSwitcher />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="terminal-footer">
          <div className="terminal-text">
            <div className="terminal-header">
              {`> ${footer.terminalHeader}`}<br/>
              {`> ${footer.lastAccess}: ${new Date().toLocaleString()}`}<br/>
            </div>
            <div className="terminal-links">
              {`> ${footer.quickAccess}:`}<br/>
              {`> [1] `}<a href={github} target="_blank" rel="noopener noreferrer">GitHub</a><br/>
              {`> [2] `}<a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
              {`> [3] `}<a href={`mailto:${email}`}>Email</a><br/>
              {`> [4] `}<a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="carlosresume.pdf">Resume</a><br/>
            </div>
            <div className="terminal-status">
              {`> ${footer.systemStatus}: ${footer.online}`}<br/>
              {`> ${footer.readyForDeployment} `}<span className="cursor">_</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;