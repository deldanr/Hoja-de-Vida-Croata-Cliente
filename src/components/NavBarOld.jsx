import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
 
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav>
      <div>
        <img className="logo" src="/logo.png" alt="Logo" />
      </div>
      <button 
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
        onClick={handleMenuToggle}
        aria-label="Open navigation menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} role="menu">
        <li role="none">
          <NavLink 
            exact="true"
            to="/" 
            activeclassname="active" 
            onClick={handleLinkClick}
            role="menuitem"
          >
            Inicio
          </NavLink>
        </li>
        <li role="none">
          <NavLink 
            to="/formulario" 
            activeclassname="active" 
            onClick={handleLinkClick}
            role="menuitem"
          >
            Hoja de Vida
          </NavLink>
        </li>
        <li role="none">
          <NavLink 
            to="/test" 
            activeclassname="active" 
            onClick={handleLinkClick}
            role="menuitem"
          >
            Nosotros
          </NavLink>
        </li>
        <li role="none">
          <NavLink 
            to="/contacto" 
            activeclassname="active" 
            onClick={handleLinkClick}
            role="menuitem"
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
