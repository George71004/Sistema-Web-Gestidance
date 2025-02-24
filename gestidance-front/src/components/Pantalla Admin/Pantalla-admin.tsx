import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Cabeza from "./header-admin";
import Puntos from "./Puntaje";
import "./Pantalla-admin.css";
//Imagenes

import academiaIcon from "./academia.png"; // Importar la imagen
import PuntosIcon from "./puntos.png";
import BaileIcon from "./baile.png";

//Forms
import Inscripcion_baile from "./Inscripcion";
import Inscripcion from "./Inscripcion-academia";
import Jurado from "./jurado";
import Categoria from "./Categoria";

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

  const handleBailarinClick = () => {
    navigate("/admin/inscripcion_baile");
  };

  const handleJuradoClick = () => {
    navigate("/admin/jurado");
  };

  const handleCategoriaClick = () => {
    navigate("/admin/categoria");
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

          <div className="grid-item-admin" onClick={handleBailarinClick}>
            <img src={BaileIcon} alt="Bailarin" className="icon" />
            <span>Bailarin</span>
          </div>

          <div className="grid-item-admin" onClick={handleJuradoClick}>
            <img src={PuntosIcon} alt="Jurado" className="icon" />
            <span>Jurado</span>
          </div>

          <div className="grid-item-admin" onClick={handleCategoriaClick}>
            <img src={PuntosIcon} alt="Categoria" className="icon" />
            <span>Categoria</span>
          </div>
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
        <Route
          path="/admin/inscripcion_baile"
          element={
            isAuthenticated ? <Inscripcion_baile /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/admin/jurado"
          element={isAuthenticated ? <Jurado /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/categoria"
          element={isAuthenticated ? <Categoria /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default Admin;
