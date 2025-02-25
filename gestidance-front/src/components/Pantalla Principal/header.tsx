import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./estilos.css";
import Logo from "./Logo.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const headerClass = scrolled
    ? "header-scrolled"
    : location.pathname === "/"
    ? "header-transparent"
    : "header-def";

  return (
    <header className={headerClass}>
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
            <button onClick={() => handleScrollToSection("posicion")}>
              Posiciones
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
