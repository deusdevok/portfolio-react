import { Link, useLocation } from "react-router-dom";

function DeusExHeader() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className="nav-header">
      <div className="nav-tabs">
        <Link className={`nav-tab ${isActive("/")}`} to="/">HOME</Link>
        <Link className={`nav-tab ${isActive("/about")}`} to="/about">BIO</Link>
        <Link className={`nav-tab ${isActive("/skills")}`} to="/skills">SKILLS</Link>
        <Link className={`nav-tab ${isActive("/projects")}`} to="/projects">PROJECTS</Link>
        <Link className={`nav-tab ${isActive("/contact")}`} to="/contact">CONTACT</Link>
      </div>
    </header>
  );
}

export default DeusExHeader;


