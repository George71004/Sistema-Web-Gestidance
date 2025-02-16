import React, { useState, useEffect } from "react";
import "./home-page.css"; // Importa el archivo de estilos
import Contacto from "./Contactanos";

const MensajeInformativo = () => {
  const [isVisible, setIsVisible] = useState(false); // Estado para manejar la visibilidad

  useEffect(() => {
    // Función que maneja la visibilidad según el scroll
    const handleScroll = () => {
      const element = document.getElementById("acerca"); // ID del contenedor de la sección
      if (element) {
        const rect = element.getBoundingClientRect(); // Obtiene las dimensiones del contenedor
        // Verifica si la sección está dentro de la ventana visible
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true); // Aparece el mensaje solo cuando el contenedor es visible
        } else {
          setIsVisible(false); // Se oculta si el contenedor no es visible
        }
      }
    };

    // Inicializamos el listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Verificamos la visibilidad al cargar la página
    handleScroll();

    // Cleanup al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`mensaje-informativo ${isVisible ? "visible" : ""}`}>
      <h4>¿Qué es?</h4>
      <p>
        Es un espacio digital destinado al apoyo hacia grandes empresas para la
        gestión y control de eventos de bailes de cualquier tipo.
      </p>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="home-page-content">
      {/* Sección 1 */}
      <div className="content-section" id="acerca">
        <MensajeInformativo />
      </div>

      {/* Sección 2 con fondo personalizado */}
      <div className="content-section" id="contacto">
        <Contacto />
      </div>
    </div>
  );
};

export default HomePage;
