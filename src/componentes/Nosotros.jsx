import React from "react";
import ScrollAnimate from './ScrollAnimate';
import "./Nosotros.css";

// Importación de imágenes
import imagenPrincipal from "/imgCentroEstetica/facial2.jpg";
import imagenSuperpuesta from "/imgCentroEstetica/cejas.png";

const Nosotros = () => {
  return (
    <section className="nosotros-container">
      <div className="nosotros-content">
        
        {/* Lado Izquierdo: Las Imágenes */}
        <ScrollAnimate direction="left" delay={0.3}>
          <div className="nosotros-imagenes">
            <img
              src={imagenPrincipal}
              alt="Interior del centro de estética o tratamiento principal"
              className="imagen-principal"
            />
            <img
              src={imagenSuperpuesta}
              alt="Detalle de un servicio como diseño de cejas"
              className="imagen-superpuesta"
            />
          </div>
        </ScrollAnimate>

        {/* Lado Derecho: El Texto */}
        <ScrollAnimate direction="right" delay={0.1}>
          <div className="nosotros-texto">
            <h2>Nuestro Centro de Estética</h2>
            <p>
              Desde 2010, en <strong>ESTÉTICA</strong> nos dedicamos a realzar la belleza
              natural y el bienestar de nuestros clientes. Contamos con un
              equipo de profesionales altamente capacitados y la tecnología más
              avanzada para ofrecer tratamientos personalizados y resultados excepcionales.
            </p>
            <p>
              Nuestra filosofía se basa en el cuidado integral, brindando un
              espacio de relajación y confianza donde cada visita se convierte
              en una experiencia única. Estamos comprometidos con la excelencia
              y la innovación continua en cada uno de nuestros servicios.
            </p>
            <p>
              Te invitamos a descubrir la diferencia de un cuidado experto y apasionado.
            </p>
          </div>
        </ScrollAnimate>
        
      </div>
    </section>
  );
};

export default Nosotros;