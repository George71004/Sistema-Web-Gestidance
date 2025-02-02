import React, { useState, useEffect } from "react";
import "./home-page.css"; // Importa el archivo de estilos

const MensajeInformativo = () => {
  const [isVisible, setIsVisible] = useState(false); // Estado para manejar la visibilidad

  useEffect(() => {
    // Función que maneja la visibilidad según el scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsVisible(true); // Aparece el mensaje después de desplazarse 200px
      } else {
        setIsVisible(false); // Se oculta si el scroll está en la parte superior
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
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
      <div className="content-section">
        <MensajeInformativo />
      </div>

      {/* Sección 2 con fondo personalizado */}
      <div className="content-section"></div>

      {/* Sección 3 */}
      <div className="content-section">
        {/* Utilizando el componente correctamente */}
      </div>
    </div>
  );
};

export default HomePage;
