import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DetalleTratamiento.css";
import Loader from "../componentes/Loader";

const DetalleTratamiento = () => {
  const { id } = useParams(); // Captura el nombre del servicio de la URL
  const navigate = useNavigate();
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("/imagenes.json")
      .then((res) => res.json())
      .then((data) => {
        // Buscamos en el JSON la imagen que coincida con el ID de la URL
        // Por ejemplo, si la URL es /tratamientos/cejas, busca la imagen que tenga 'cejas' en su URL o ALT
        const encontrado = data.slides.find(
          (item) =>
            item.url.toLowerCase().includes(id.toLowerCase()) ||
            item.alt.toLowerCase().includes(id.toLowerCase()),
        );
        setServicio(encontrado);
      })
      .catch((err) => console.error("Error al buscar el tratamiento:", err));
  }, [id]); // Se vuelve a ejecutar si el usuario cambia de tratamiento en el menú

  if (!servicio) return <Loader />; 

  return (
    <div className="detalle-container">
      <button className="btn-volver" onClick={() => navigate(-1)}>
        ← Volver a tratamientos
      </button>
      <div className="detalle-header">
        <h1>{servicio.alt}</h1>
        <div className="linea-decorativa"></div>
      </div>

      <div className="detalle-grid">
        <div className="detalle-img">
          <img src={servicio.url} alt={servicio.alt} />
        </div>

        <div className="detalle-info">
          <p>
            Nuestro servicio de <strong>{servicio.alt}</strong> está diseñado
            específicamente para ofrecer resultados visibles y una experiencia
            de cuidado premium, adaptándonos a las necesidades particulares de
            cada cliente.
          </p>

          <div className="detalle-stats">
            <span>
              <strong>Duración:</strong> 60 min
            </span>
            <span>
              <strong>Frecuencia:</strong> Mensual
            </span>
          </div>

          <div className="detalle-precio-box">
            <span>Precio Sugerido:</span>
            <span className="precio-valor">$15.000</span>
          </div>

          <button className="btn-reserva">Reservar Turno vía WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default DetalleTratamiento;
