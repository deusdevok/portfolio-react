import { Link, useLocation } from "react-router-dom";
import { useContent } from "../hooks/useContent";
import LanguageSwitcher from "./LanguageSwitcher";

function DeusExHeader() {
  const location = useLocation();
  const { navigation } = useContent();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className="nav-header">
      <div className="nav-tabs">
        <Link className={`nav-tab ${isActive("/")}`} to="/">
          {navigation.home}
        </Link>
        <Link className={`nav-tab ${isActive("/about")}`} to="/about">
          {navigation.about}
        </Link>
        <Link className={`nav-tab ${isActive("/skills")}`} to="/skills">
          {navigation.skills}
        </Link>
        <Link className={`nav-tab ${isActive("/projects")}`} to="/projects">
          {navigation.projects}
        </Link>
        <Link className={`nav-tab ${isActive("/contact")}`} to="/contact">
          {navigation.contact}
        </Link>
        
        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default DeusExHeader;


