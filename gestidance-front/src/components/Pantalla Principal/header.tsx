import * as React from "react";
import { Link, useNavigate } from "react-router-dom"; // Importamos useNavigate
import "./header.css";
import Logo from "./Logo.png"; // Asegúrate de que la ruta sea correcta

const Header: React.FC = () => {
  // Inicializamos el hook useNavigate
  const navigate = useNavigate();

  // Función para navegar a la página de login cuando se haga clic en el botón
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header>
      <h1>Comp Talent</h1>
      <div className="logo">
        <img src={Logo} alt="Logotipo de Comp Talent" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/inscripcion">Inscripcion</Link>
          </li>
          <li>
            <Link to="#acerca">Acerca</Link>
          </li>
          <li>
            <Link to="#contacto">Contacto</Link>
          </li>
          {/* Aquí cambiamos el enlace de Login por un botón */}
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
