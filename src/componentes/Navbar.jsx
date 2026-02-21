import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Hamburger from './MenuHamburguesa';
import './Navbar.css';

const HashLinkSinError = (props) => (
  <NavHashLink {...props} />
);

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

  const servicios = [
    { nombre: "Limpieza Facial", path: "/tratamientos/facial" },
    { nombre: "Microblading", path: "/tratamientos/cejas" },
    { nombre: "Depilación Láser", path: "/tratamientos/depilacion" },
    { nombre: "Masajes Reductores", path: "/tratamientos/corporal" }
  ];

  // Función para cerrar el menú al hacer click en un link
  const closeMenu = () => {
    setIsOpen(false);
    setDropdown(false);
  };

  return (
    <nav className="navbar">
      <div 
        className={`nav-overlay ${isOpen ? 'is-active' : ''}`} 
        onClick={closeMenu}
      ></div>
      <div className="navbar-logo">
        <HashLinkSinError smooth to="/#inicio" onClick={closeMenu}>
          LOGO
        </HashLinkSinError>
      </div>

      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      
      <ul className={`navbar-links ${isOpen ? 'nav-open' : ''}`}>
        <li
          className="dropdown-wrapper" 
          onMouseEnter={() => setDropdown(true)} 
          onMouseLeave={() => setDropdown(false)}
          onClick={() => setDropdown(!dropdown)} // Toggle para móvil
        >
          <HashLinkSinError to="#" className="nav-item">
            Tratamientos <span className={`arrow ${dropdown ? 'open' : ''}`}>▼</span>
          </HashLinkSinError>
          
          <ul className={`dropdown-menu ${dropdown ? 'is-active' : ''}`}>
            {servicios.map((s, index) => (
              <li key={index}>
                <HashLinkSinError to={s.path} onClick={closeMenu}>
                  {s.nombre}
                </HashLinkSinError>
              </li>
            ))}
          </ul>
        </li>

        <li><HashLinkSinError to="/precios" onClick={closeMenu}>Lista de Precios</HashLinkSinError></li>
        <li><HashLinkSinError to="/hombres" onClick={closeMenu}>Men´s Care</HashLinkSinError></li>
        
        <li>
          <HashLinkSinError smooth to="/#contacto" className="nav-contact" onClick={closeMenu}>
            Contacto
          </HashLinkSinError>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;