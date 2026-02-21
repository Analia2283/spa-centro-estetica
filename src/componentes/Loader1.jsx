import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loader-text">Cargando Experiencia ESTÉTICA...</p>
    </div>
  );
};

export default Loader;