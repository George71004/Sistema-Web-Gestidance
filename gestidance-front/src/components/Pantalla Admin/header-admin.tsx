import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header-admin.css";
import Logo from "./Logo.png";
import Admin from "./Admin.png";
import Modal from "./Modal-alex";

const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    // Aquí puedes agregar la lógica de cierre de sesión
    navigate("/");
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
            <div className="admin-icon" onClick={() => setIsModalOpen(true)}>
              <img src={Admin} alt="Logotipo de administrador" />
            </div>
          </li>
        </ul>
      </nav>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </header>
  );
};

export default AdminHeader;
