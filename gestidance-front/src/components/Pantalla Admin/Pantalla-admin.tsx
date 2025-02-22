import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Inscripcion from "./Inscripcion-academia";
import Cabeza from "./header-admin";
import Puntos from "./Puntaje";
import "./Pantalla-admin.css";
import academiaIcon from './academia.png'; // Importar la imagen
import PuntosIcon from "./puntos.png"

interface AdminProps {
  isAuthenticated: boolean;
}

const Admin: React.FC<AdminProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleAcademyClick = () => {
    navigate("/admin/inscripcion_academia");
  };

  const handlePuntosClick = () => {
    navigate("/admin/puntos");
  };

  return (
    <div className="admin-container">
      <div className="background-overlay"></div>
      <Cabeza />
      <div className="menu-container">
        <div className="grid-container-admin">
          <div className="grid-item-admin" onClick={handlePuntosClick}>
          <img src={PuntosIcon} alt="Puntos" className="icon" />
          <span>Puntaje</span>
          </div>
          <div className="grid-item-admin" onClick={handleAcademyClick}>
            <img src={academiaIcon} alt="Academia" className="icon" />
            <span>Academia</span>
          </div>
          <div className="grid-item-admin">Botón 3</div>
          <div className="grid-item-admin">Botón 4</div>
        </div>
      </div>
      <Routes>
        <Route
          path="/admin/inscripcion_academia"
          element={isAuthenticated ? <Inscripcion /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/puntos"
          element={isAuthenticated ? <Puntos /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default Admin;











