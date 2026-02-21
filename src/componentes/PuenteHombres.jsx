import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimate from './ScrollAnimate';
import './PuenteHombres.css';

const PuenteHombres = () => {
  return (
    <section className="puente-hombres">
      <div className="puente-container">
        
        <ScrollAnimate direction="left">
          <div className="puente-imagen">
            <img src="/imgCentroEstetica/hombres3.jpg" alt="Sección Masculina" />
          </div>
        </ScrollAnimate>

        <ScrollAnimate direction="right">
          <div className="puente-texto">
            <h2>Men's Care</h2>
            <p>
              Porque ellos también merecen un momento de relajación y cuidado. 
              Descubre nuestra línea de tratamientos exclusivos diseñados para la piel masculina.
            </p>
            <Link to="/hombres" className="btn-conocer-mas">
              Explorar Servicios
            </Link>
          </div>
        </ScrollAnimate>

      </div>
    </section>
  );
}; 

export default PuenteHombres;