import * as React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Importamos useLocation
import "./header.css";
import Logo from "./Logo.png"; // Asegúrate de que la ruta sea correcta

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Usamos useLocation para obtener la ruta actual

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleHomeClick = () => {
    navigate("/");
    setTimeout(() => {
      handleScrollToSection("fondo");
    }, 0);
  };

  // Determina la clase del header basada en la ruta actual
  const headerClass =
    location.pathname === "/" ? "header-transparent" : "header-red";

  return (
    <header className={headerClass}>
      <h1>Comp Talent</h1>
      <div className="logo">
        <img src={Logo} alt="Logotipo de Comp Talent" />
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={handleHomeClick}>Inicio</button>
          </li>
          <li></li>
          <li>
            <button onClick={() => handleScrollToSection("acerca")}>
              Acerca
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("contacto")}>
              Contacto
            </button>
          </li>
          <li>
            <button onClick={handleLoginClick} className="login-button">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
