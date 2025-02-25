import React, { useState, useEffect } from "react";
import "./home-page.css";
import { useNavigate } from "react-router-dom";
import Contacto from "./Contactanos";
import DanceRanking from "./Tabla-posiciones"; // Asegúrate de que la ruta sea correcta
import Titulo from "./informacion";

const MensajeInformativo = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("acerca");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

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
      <div className="content-section" id="acerca">
        <MensajeInformativo />
      </div>
      <div className="content-section" id="posicion">
        <DanceRanking />
      </div>
      <div className="content-section" id="contacto">
        <Contacto />
      </div>
    </div>
  );
};

export default HomePage;
