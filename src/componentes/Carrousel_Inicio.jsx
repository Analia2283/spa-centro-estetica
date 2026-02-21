import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavHashLink as HashLinkSinError } from 'react-router-hash-link';
import "./Carrousel_Inicio.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    fetch("/imagenes.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.slides
          .filter((img) => img.url.includes("portada"))
          .slice(0, 4);
        setImages(selected);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => resetTimeout();
  }, [currentIndex, images, nextSlide]);

  if (images.length === 0) return <div className="carousel-placeholder" style={{height: '90vh'}} />;

  return (
    <section className="carousel-container">
      {images.map((img, index) => (
        <div
          key={img.id || index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <div className="slide-overlay"></div>
          
          <img 
            src={img.url} 
            alt={img.alt} 
            loading={index === 0 ? "eager" : "lazy"} 
          />
          
          <div className="caption-container">
            <h2 className="caption-title">{img.alt}</h2>
            <p className="caption-subtitle">Descubrí tu mejor versión</p>
            
            <div className="caption-button-container">
              <HashLinkSinError smooth to="/#mosaico" className="btn-carousel">
                Ver Tratamientos
              </HashLinkSinError>
            </div>
          </div>
        </div>
      ))}

      <button className="nav-button prev" onClick={prevSlide} aria-label="Anterior">&#10094;</button>
      <button className="nav-button next" onClick={nextSlide} aria-label="Siguiente">&#10095;</button>

      <div className="dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;