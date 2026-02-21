import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importante para el efecto hover
import ScrollAnimate from './ScrollAnimate';
import './Mosaico.css';
import { Link } from 'react-router-dom';

const Mosaico = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetch('/imagenes.json')
      .then(res => res.json())
      .then(data => {
        const galeria = data.slides
          .filter(img => !img.url.includes('portada'))
          .slice(0, 4); 
        setFotos(galeria);
      });
  }, []);

  // Función para crear una URL limpia basada en el nombre
  const generarSlug = (texto) => {
    return texto
      .toLowerCase()
      .split(' ')
      .pop(); // Tomamos la última palabra (ej: "HIFU", "Microneedling") como ID
  };

  return (
    <div className="mosaico-section">
     <div className="mosaico-container">
        {fotos.map((foto, index) => (
          /* Envolvemos cada item con el animador de scroll */
          <ScrollAnimate 
            key={foto.id} 
            direction="up" 
            delay={index * 0.15} // Efecto cascada (stagger)
          >
            {/* Usamos motion.div para el efecto de interactividad (hover) */}
            <Link to={`/tratamientos/${generarSlug(foto.alt)}`} style={{ textDecoration: 'none' }}>
            <motion.div 
              className="mosaico-item"
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.3 } 
              }}
              whileTap={{ scale: 0.97 }}
            >
              <img src={foto.url} alt={foto.alt} />
              <div className="mosaico-overlay">
                <span>{foto.alt}</span>
              </div>
            </motion.div>
            </Link>
          </ScrollAnimate>
        ))}
      </div>
    </div>
  );
};

export default Mosaico;