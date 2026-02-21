import React from "react";
import { motion } from "framer-motion";
import ScrollAnimate from "../componentes/ScrollAnimate";
import "./SeccionHombres.css";
import { Link } from "react-router-dom";


const SeccionHombres = () => {
  const serviciosHombres = [
    {
      id: 1,
      titulo: "Limpieza Facial Masculina",
      slug:"faciales-hombres",
      desc: "Tratamiento diseñado para la piel del hombre, más gruesa y con tendencia a la gratitud por el afeitado.",
      img: "/imgCentroEstetica/faciales-hombres.jpg",
    },
    {
      id: 2,
      titulo: "Perfilado de Barba y Cejas",
      slug:"hombre-cejas",
      desc: "Diseño y simetría para resaltar las facciones masculinas de forma natural.",
      img: "/imgCentroEstetica/hombre-cejas.png",
    },
    {
      id: 3,
      titulo: "Depilación Láser (Pecho/Espalda)",
      slug:"depilacion-hombre",
      desc: "Tecnología de última generación, rápida y con resultados definitivos.",
      img: "/imgCentroEstetica/depilacion-hombre.jpg",
    },
  ];

  

  return (
    <div className="hombres-page">
      <header className="hombres-hero">
        <ScrollAnimate direction="down">
          <div className="hero-overlay">
            <h1>MEN'S CARE</h1>
            <p>
              Estética avanzada diseñada exclusivamente para el hombre moderno.
            </p>
          </div>
        </ScrollAnimate>
      </header>

      <section className="hombres-servicios">
        <div className="servicios-grid-hombres">
          {serviciosHombres.map((servicio, index) => (
            <ScrollAnimate
              key={servicio.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <motion.div
                className="servicio-hombre-card-horizontal"
                whileHover={{ scale: 1.02 }}
              >
                <div className="card-img-50">
                  <img src={servicio.img} alt={servicio.titulo} />
                </div>
                <div className="card-body-50">
                  <h3>{servicio.titulo}</h3>
                  <p>{servicio.desc}</p>
                  <Link
                    to={`/tratamientos/${servicio.slug}`}
                    className="btn-mas-info"
                    style={{ textDecoration: "none" }}
                  >
                    Ver Detalles
                  </Link>
                </div>
              </motion.div>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      <ScrollAnimate direction="up">
        <section className="hombres-frase">
          <blockquote>
            "El cuidado personal no tiene género, tiene resultados."
          </blockquote>
        </section>
      </ScrollAnimate>
    </div>
  );
};

export default SeccionHombres;
