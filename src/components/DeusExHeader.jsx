import { Link, useLocation } from "react-router-dom";

function DeusExHeader() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className="nav-header">
      <div className="nav-tabs">
        <Link className={`nav-tab ${isActive("/about")}`} to="/about">BIOMOD</Link>
        <Link className={`nav-tab ${isActive("/skills")}`} to="/skills">AUGMENTATIONS</Link>
        <Link className={`nav-tab ${isActive("/projects")}`} to="/projects">MISSIONS</Link>
        <Link className={`nav-tab ${isActive("/contact")}`} to="/contact">COMLINK</Link>
      </div>
    </header>
  );
}

export default DeusExHeader;


