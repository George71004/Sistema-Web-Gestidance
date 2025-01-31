import * as React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./Logo.png"; // Asegúrate de que la ruta sea correcta

const Header: React.FC = () => {
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
            <Link to="#inscripcion">Inscripcion</Link>
          </li>
          <li>
            <Link to="#acerca">Acerca</Link>
          </li>
          <li>
            <Link to="#contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>{" "}
            {/* Usamos Link para navegar sin recargar */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
