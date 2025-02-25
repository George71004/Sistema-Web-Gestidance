import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header-admin.css";
import Logo from "./Logo.png";
import Admin from "./Admin.png";

const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // Determina la clase del header basada en la ruta actual
  const adminHeaderClass =
    location.pathname === "/admin"
      ? "admin-header-transparent"
      : "admin-header-red";

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
            <button>UserAdmin05</button>
          </li>
          <li>
            <div className="admin-icon">
              <img src={Admin} alt="Logotipo de administrador" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
