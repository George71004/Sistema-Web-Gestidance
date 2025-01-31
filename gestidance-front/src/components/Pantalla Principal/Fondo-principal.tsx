import React from "react";
import "./Fondo-principal.css"; // Asegúrate de tener el archivo CSS correspondiente

interface FondoProps {
  isLoginPage: boolean; // Definimos el tipo de la propiedad 'isLoginPage'
}

const Fondo: React.FC<FondoProps> = ({ isLoginPage }) => {
  return (
    <div className={`fondo-principal ${isLoginPage ? "distorsionado" : ""}`}>
      {/* Fondo contenido */}
    </div>
  );
};

export default Fondo;
