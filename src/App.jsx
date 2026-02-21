import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Inicio from "./componentes/Inicio";
import Footer from "./componentes/Footer";
import BotonWpp from "./componentes/BotonWpp";
import Loader from "./componentes/Loader";

import Precios from "./pages/Precios";
import SeccionHombres from "./pages/SeccionHombres";
import DetalleTratamiento from "./pages/DetalleTratamiento";
import ScrollToTop from "./componentes/ScrollToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/tratamientos/:id" element={<DetalleTratamiento />} />
            <Route path="/precios" element={<Precios />} />
            <Route path="/hombres" element={<SeccionHombres />} />
          </Routes>
          <BotonWpp />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
