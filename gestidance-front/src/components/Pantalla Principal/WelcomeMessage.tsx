import React, { useState, useEffect } from "react";
import "./WelcomeMessage.css"; // Importa el archivo de estilos

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(false); // Estado para manejar la visibilidad

  useEffect(() => {
    // Función que maneja la visibilidad según el scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true); // Aparece el mensaje después de desplazarse 100px
      } else {
        setIsVisible(false); // Se oculta si el scroll está en la parte superior
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div className={`welcome-message ${isVisible ? "visible" : ""}`}>
      <h2>Bienvenidos a Compa Talent</h2>
      <p>Nos alegra que esten aquí</p>
    </div>
  );
};

export default WelcomeMessage;
