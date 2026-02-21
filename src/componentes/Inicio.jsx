import CarrouselInicio from "./Carrousel_Inicio.jsx";
import Nosotros from "./Nosotros";
import Sedes from "./Sedes";
import Mosaico from "./Mosaico";
import Contacto from "./Contacto";
import PuenteHombres from "./PuenteHombres.jsx";

const Inicio = () => {
  return (
    <main>
      <section id="inicio">
        <CarrouselInicio />
      </section>

      <section id="nosotros">
        <Nosotros />
      </section>

      <section id="sedes">
        <Sedes />
      </section>

      <section id="mosaico">
        <Mosaico />
      </section>

      <PuenteHombres />

      <section id="contacto">
        <Contacto />
      </section>
    </main>
  );
};

export default Inicio;
