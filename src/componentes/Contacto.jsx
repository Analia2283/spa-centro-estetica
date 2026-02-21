import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Clock, MapPin, Send } from 'lucide-react'; // Iconos modernos
import ScrollAnimate from './ScrollAnimate';
import './Contacto.css';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Nos contactaremos a la brevedad.");
  };

  return (
    <section className="contacto-container" id="contacto">
      <div className="contacto-content">
        <ScrollAnimate direction="up">
          <h2>Contacto</h2>
          <div className="linea-decorativa"></div>
          <p>¿Tenés dudas? Escríbenos o visitanos en nuestras sedes.</p>
        </ScrollAnimate>

        <div className="contacto-grid">
          <ScrollAnimate direction="left" delay={0.2}>
            <form className="contacto-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Correo electrónico" required />
              <textarea placeholder="Tu consulta..." rows="5" required></textarea>
              <button type="submit" className="btn-enviar">
                <Send size={18} /> Enviar Mensaje
              </button>
            </form>
          </ScrollAnimate>

          <ScrollAnimate direction="right" delay={0.4}>
            <div className="contacto-info">
              <h3>Nuestros Canales</h3>
              
              <div className="info-item">
                <MessageCircle className="icon-gold" />
                <div>
                  <strong>WhatsApp:</strong> 
                  <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer"> +54 9 11 0000-0000</a>
                </div>
              </div>

              <div className="info-item">
                <Instagram className="icon-gold" />
                <div>
                  <strong>Instagram:</strong> 
                  <a href="https://instagram.com/tu-centro" target="_blank" rel="noreferrer"> @tu_estetica</a>
                </div>
              </div>

              <div className="info-item">
                <Clock className="icon-gold" />
                <div>
                  <strong>Horarios:</strong>
                  <span> Lunes a Viernes: 09:00 - 20:00 hs</span>
                </div>
              </div>

              <div className="info-item">
                <MapPin className="icon-gold" />
                <div>
                  <strong>Ubicación:</strong>
                  <span> Av. Santa Fe 1234, CABA</span>
                </div>
              </div>

              <div className="social-links-wrapper">
                <h4>Seguinos</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon-btn"><Instagram /></a>
                  <a href="#" className="social-icon-btn"><MessageCircle /></a>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default Contacto;