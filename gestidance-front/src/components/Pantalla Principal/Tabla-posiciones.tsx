import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tabla-posiciones.css";

const ContenedorTablas: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="contenedor-tablas">
      <div className="dance-ranking-container">
        <h2 className="category-posicion">Salsa</h2>
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Posición</th>
              <th>Bailarín</th>
            </tr>
          </thead>
          <tbody>
            {["Bailarín 1", "Bailarín 2", "Bailarín 3", "Bailarín 4"].map(
              (dancer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dancer}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <button
          className="seguir-button"
          onClick={() => handleNavigate("puntaje")}
        >
          Seguir
        </button>
      </div>

      <div className="dance-ranking-container">
        <h2 className="category-posicion">Bachata</h2>
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Posición</th>
              <th>Bailarín</th>
            </tr>
          </thead>
          <tbody>
            {["Bailarín A", "Bailarín B", "Bailarín C", "Bailarín D"].map(
              (dancer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dancer}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <button
          className="seguir-button"
          onClick={() => handleNavigate("/puntaje")}
        >
          Seguir
        </button>
      </div>

      <div className="dance-ranking-container">
        <h2 className="category-posicion">Tango</h2>
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Posición</th>
              <th>Bailarín</th>
            </tr>
          </thead>
          <tbody>
            {["Bailarín X", "Bailarín Y", "Bailarín Z", "Bailarín W"].map(
              (dancer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dancer}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <button
          className="seguir-button"
          onClick={() => handleNavigate("/puntaje")}
        >
          Seguir
        </button>
      </div>
    </div>
  );
};

export default ContenedorTablas;
