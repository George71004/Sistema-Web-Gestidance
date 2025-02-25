import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Cabeza from "./header-admin";
import Puntos from "./Puntaje";
import "./Pantalla-admin.css";
//Imagenes

import academiaIcon from "./academia.png"; // Importar la imagen
import PuntosIcon from "./puntos.png";
import BaileIcon from "./baile.png";
import JuradoIcon from "./jurado.png";
import CategoriIcon from "./Categoria.png";
import PartBaile from "./Part-baile.png";
import PartAcademia from "./Part-Academia.png";

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

  const handlePartBaileClick = () => {
    navigate("/admin/participacion_baile");
  };

  const handlePartAcademyClick = () => {
    navigate("/admin/participacion_academia");
  };

  return (
    <div className="admin-container">
      <div className="background-overlay"></div>
      <Cabeza />
      <div className="menu-container">
        <div className="grid-container-admin">
          <div className="grid-item-admin" onClick={handleAcademyClick}>
            <img src={academiaIcon} alt="Academia" className="icon" />
            <span>Academia</span>
          </div>

          <div className="grid-item-admin" onClick={handleBailarinClick}>
            <img src={BaileIcon} alt="Bailarin" className="icon" />
            <span>Bailarin</span>
          </div>

          <div className="grid-item-admin" onClick={handleJuradoClick}>
            <img src={JuradoIcon} alt="Jurado" className="icon" />
            <span>Jurado</span>
          </div>

          <div className="grid-item-admin" onClick={handleCategoriaClick}>
            <img src={CategoriIcon} alt="Categoria" className="icon" />
            <span>Categoria</span>
          </div>

          <div className="grid-item-admin" onClick={handlePartBaileClick}>
            <img src={PartBaile} alt="Puntos" className="icon" />
            <span>Participacion bailarines</span>
          </div>

          <div className="grid-item-admin" onClick={handlePartAcademyClick}>
            <img src={PartAcademia} alt="Puntos" className="icon" />
            <span>Participacion academias</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
