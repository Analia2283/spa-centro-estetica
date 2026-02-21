import React from "react";
import { motion } from "framer-motion";
import ScrollAnimate from "./ScrollAnimate";
import "./Sedes.css";

const Sedes = () => {
  const locales = [
    {
      id: 1,
      nombre: "Sede Central - Palermo",
      direccion: "Av. Santa Fe 1234, CABA",
      horario: "Lun a Vie: 09:00 - 20:00 | Sáb: 10:00 - 18:00",
      mapa: "https://www.google.com/maps?q=Av.+Santa+Fe+1234,+CABA",
      imagen: "/imgCentroEstetica/sede.jpg",
    },
    {
      id: 2,
      nombre: "Sede Belgrano",
      direccion: "Av. Cabildo 2500, CABA",
      horario: "Lun a Vie: 10:00 - 19:00 | Sáb: 09:00 - 15:00",
      mapa: "https://www.google.com/maps?q=Av.+Cabildo+2500,+CABA",
      imagen: "/imgCentroEstetica/facial.jpg",
    },
    {
      id: 3,
      nombre: "Sede Parque Chacabuco",
      direccion: "Av. Asamblea 1234, CABA",
      horario: "Lun a Vie: 10:00 - 19:00 | Sáb: 09:00 - 15:00",
      mapa: "https://www.google.com/maps?q=Av.+Asamblea+1234,+CABA",
      imagen: "/imgCentroEstetica/hifu_corporal.png",
    },
  ];

  return (
    <section className="sedes-container" id="sedes">
      <ScrollAnimate direction="up">
        {/* Título Principal en Sans Serif */}
        <h2 className="sedes-title">Nuestras Sedes</h2>
        <p className="sedes-subtitle">
          Encuentra tu centro más cercano y reserva tu momento
        </p>
      </ScrollAnimate>

      <div className="sedes-grid">
        {locales.map((sede, index) => (
          <ScrollAnimate key={sede.id} direction="up" delay={index * 0.2}>
            <motion.div 
              className="sede-card"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 } 
              }}
            >
              <div className="sede-imagen">
                <img src={sede.imagen} alt={sede.nombre} />
              </div>

              <div className="sede-info">
                {/* Nombre de sede en Sans Serif */}
                <h3 className="sede-nombre">{sede.nombre}</h3>
                
                <div className="sede-detalles">
                  <p>
                    <span className="icon">📍</span>
                    <strong>Dirección:</strong> {sede.direccion}
                  </p>
                  <p>
                    <span className="icon">🕒</span>
                    <strong>Horarios:</strong> {sede.horario}
                  </p>
                </div>

                <a
                  href={sede.mapa}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-mapa"
                >
                  <span className="btn-icon">🗺️</span>
                  Ver en Google Maps
                </a>
              </div>
            </motion.div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
};

export default Sedes;