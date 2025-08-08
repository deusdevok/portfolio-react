import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  // Navigation logic only
  return (
    <nav className="main-nav">
      <div className="logo">My Portfolio</div>
      <button className={`hamburger ${isNavOpen ? "open" : ""}`} onClick={() => setIsNavOpen(!isNavOpen)}>
        ☰
      </button>
      <ul className={`nav-links ${isNavOpen ? "show" : ""}`}>
        <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsNavOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsNavOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;