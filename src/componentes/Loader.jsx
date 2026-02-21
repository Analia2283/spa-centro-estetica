import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ isDark = false }) => { // Prop para saber si es modo oscuro
  const dotVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    // Agregamos la clase condicional 'loader-dark'
    <div className={`loader-container ${isDark ? 'loader-dark' : ''}`}>
      <motion.div 
        className="loader-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="loader-dots">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              variants={dotVariants}
              animate="animate"
              transition={{ delay: index * 0.15 }}
              style={{ backgroundColor: '#d4a373' }} 
            />
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ color: isDark ? '#fff' : '#333' }} // Cambia color de texto
        >
          Cuidando tu belleza...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;