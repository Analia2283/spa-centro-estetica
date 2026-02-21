import React from 'react';
import './BotonWpp.css';
import wppIcon from '../assets/wsp-icon.svg'; 

const BotonWpp = () => {
  const numeroTelefono = "5491100000000"; // Reemplaza con tu número real
  const mensaje = encodeURIComponent("Hola! Me gustaría pedir un turno para un tratamiento.");
  
  const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;

  return (
    <a 
      href={urlWhatsApp} 
      className="wpp-flotante" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Pedir Turno"
    >
      <div className="tooltip-wpp">¡Pide tu turno!</div>
      <img 
        src={wppIcon} 
        alt="WhatsApp" 
      />
    </a>
  );
};

export default BotonWpp;