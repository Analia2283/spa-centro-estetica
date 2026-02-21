import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ESTÉTICA</h3>
          <p>Realzando tu belleza natural con la mejor tecnología y cuidado profesional.</p>
        </div>

        <div className="footer-section">
          <h4>Explorar</h4>
          <ul>
            <li><NavHashLink smooth to="/#nosotros">Nosotros</NavHashLink></li>
            <li><NavHashLink to="/tratamientos">Tratamientos</NavHashLink></li>
            <li><NavHashLink to="/precios">Precios</NavHashLink></li>
            <li><NavHashLink to="/hombres">Sección Hombres</NavHashLink></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📍 Av. Santa Fe 1234, CABA</p>
          <p>📞 +54 9 11 0000-0000</p>
          <p>✉️ info@estetica.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ESTÉTICA - Todos los derechos reservados.</p>
        <p>Diseño: Analia Isla</p>
      </div>
    </footer>
  );
};

export default Footer;