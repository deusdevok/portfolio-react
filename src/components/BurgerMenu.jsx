import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContent } from "../hooks/useContent";
import LanguageSwitcher from "./LanguageSwitcher";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { navigation } = useContent();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    // Prevent body scroll when menu is open
    if (newIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  // Cleanup on unmount and route change
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      closeMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <button 
        className={`burger-button ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      <nav className={`mobile-nav ${isOpen ? 'active' : ''}`}>
        <div className="mobile-nav-overlay" onClick={closeMenu}></div>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <span className="mobile-nav-title">Navigation</span>
            <button 
              className="mobile-nav-close" 
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              ×
            </button>
          </div>
          
          <div className="mobile-nav-links">
            <Link 
              className={`mobile-nav-link ${isActive("/")}`} 
              to="/"
              onClick={closeMenu}
            >
              <span className="mobile-nav-icon">🏠</span>
              {navigation.home}
            </Link>
            <Link 
              className={`mobile-nav-link ${isActive("/about")}`} 
              to="/about"
              onClick={closeMenu}
            >
              <span className="mobile-nav-icon">👤</span>
              {navigation.about}
            </Link>
            <Link 
              className={`mobile-nav-link ${isActive("/skills")}`} 
              to="/skills"
              onClick={closeMenu}
            >
              <span className="mobile-nav-icon">⚡</span>
              {navigation.skills}
            </Link>
            <Link 
              className={`mobile-nav-link ${isActive("/projects")}`} 
              to="/projects"
              onClick={closeMenu}
            >
              <span className="mobile-nav-icon">🚀</span>
              {navigation.projects}
            </Link>
            <Link 
              className={`mobile-nav-link ${isActive("/contact")}`} 
              to="/contact"
              onClick={closeMenu}
            >
              <span className="mobile-nav-icon">📡</span>
              {navigation.contact}
            </Link>
          </div>

          <div className="mobile-nav-footer">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </>
  );
}

export default BurgerMenu;