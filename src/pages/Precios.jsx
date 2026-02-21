import React from 'react';
import './Precios.css';

const Precios = () => {
  const categorias = [
    {
      titulo: "Tratamientos Faciales",
      items: [
        { nombre: "Limpieza Facial Profunda", precio: "$12.000" },
        { nombre: "Peeling Químico", precio: "$15.500" },
        { nombre: "Dermapen + Vitaminas", precio: "$18.000" },
        { nombre: "Radiofrecuencia Facial", precio: "$14.000" }
      ]
    },
    {
      titulo: "Mirada (Cejas y Pestañas)",
      items: [
        { nombre: "Perfilado de Cejas", precio: "$5.000" },
        { nombre: "Lifting de Pestañas", precio: "$9.500" },
        { nombre: "Microblading (Sesión)", precio: "$45.000" },
        { nombre: "Laminado de Cejas", precio: "$8.000" }
      ]
    },
    {
      titulo: "Tratamientos Corporales",
      items: [
        { nombre: "Masaje Reductor (Zona)", precio: "$11.000" },
        { nombre: "Drenaje Linfático", precio: "$13.500" },
        { nombre: "Depilación Láser (Pack 6)", precio: "$30.000" }
      ]
    }
  ];

  return (
    <div className="precios-page">
      <div className="precios-header">
        <h1>Lista de Precios</h1>
        <p>Precios vigentes al mes actual. Consulta por promociones bancarias.</p>
      </div>

      <div className="precios-container">
        {categorias.map((cat, index) => (
          <div key={index} className="precios-categoria">
            <h2>{cat.titulo}</h2>
            <div className="tabla-precios">
              {cat.items.map((item, i) => (
                <div key={i} className="precio-row">
                  <span className="servicio-nombre">{item.nombre}</span>
                  <div className="puntos-guia"></div>
                  <span className="servicio-precio">{item.precio}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="precios-footer">
        <p>* Los precios están sujetos a cambios sin previo aviso.</p>
        <button className="btn-descargar">Descargar PDF de Precios</button>
      </div>
    </div>
  );
};

export default Precios;
