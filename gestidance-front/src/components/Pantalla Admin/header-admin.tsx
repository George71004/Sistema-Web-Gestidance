import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header-admin.css";
import Logo from "./Logo.png";

const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // Determina la clase del header basada en la ruta actual
  const adminHeaderClass =
    location.pathname === "/admin" ? "admin-header-transparent" : "admin-header-red";

  return (
    <header className={adminHeaderClass}>
      <div className="admin-logo">
        <img src={Logo} alt="Logotipo de Comp Talent" />
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigate("/admin")}>Inicio</button>
          </li>
          <li>
            <button
              onClick={() => handleNavigate("/admin")}
              className="user-button"
            >
              Admin
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
