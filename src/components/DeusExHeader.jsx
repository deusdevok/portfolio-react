import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function DeusExHeader() {
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className="nav-header">
      <div className="nav-tabs">
        <Link className={`nav-tab ${isActive("/")}`} to="/">
          {t('navigation.home')}
        </Link>
        <Link className={`nav-tab ${isActive("/about")}`} to="/about">
          {t('navigation.about')}
        </Link>
        <Link className={`nav-tab ${isActive("/skills")}`} to="/skills">
          {t('navigation.skills')}
        </Link>
        <Link className={`nav-tab ${isActive("/projects")}`} to="/projects">
          {t('navigation.projects')}
        </Link>
        <Link className={`nav-tab ${isActive("/contact")}`} to="/contact">
          {t('navigation.contact')}
        </Link>
        
        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default DeusExHeader;


