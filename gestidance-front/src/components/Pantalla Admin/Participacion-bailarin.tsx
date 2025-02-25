import React, { useState } from "react";
import axios from "axios";
import "./Participacion-bailarin.css"; // Asegúrate de tener el archivo CSS
import ParticipationDataTable from "./Datatable/Participacion_baile-data"; // Importar el DataTable

export default function DancerParticipationSignup() {
  const [academyName, setAcademyName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [participationNumber, setParticipationNumber] = useState("");
  const [dancerID, setDancerID] = useState("");
  const [position, setPosition] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/participation-signup",
        { academyName, categoryName, participationNumber, dancerID, position }
      );
      console.log(response.data.message); // Mostrar mensaje de éxito
      alert("¡Participación inscrita con éxito!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || "Error al inscribir la participación"
        );
      } else {
        setError("Error desconocido al inscribir la participación");
      }
    }
  };

  return (
    <div className="super-container">
      <div className="participation-baile-form-wrapper">
        <h1 className="participation-baile-title">Participación de Bailarín</h1>
        <form onSubmit={handleSubmit}>
          <div className="participation-baile-grid-container">
            {/* Nombre de la Academia */}
            <div className="participation-baile-field">
              <label
                className="participation-baile-label"
                htmlFor="academy-name"
              >
                Nombre de la Academia
              </label>
              <select
                id="academy-name"
                className="participation-input"
                value={academyName}
                onChange={(e) => setAcademyName(e.target.value)}
                required
              >
                <option value="">Selecciona una Academia</option>
                <option value="Academia de Danza 1">Academia de Danza 1</option>
                <option value="Academia de Danza 2">Academia de Danza 2</option>
                <option value="Academia de Danza 3">Academia de Danza 3</option>
              </select>
            </div>
            {/* Nombre de la Categoría */}
            <div className="participation-baile-field">
              <label
                className="participation-baile-label"
                htmlFor="category-name-baile"
              >
                Nombre de la Categoría
              </label>
              <select
                id="category-name-baile"
                className="participation-input"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              >
                <option value="">Selecciona una Categoría</option>
                <option value="Salsa">Salsa</option>
                <option value="Bachata">Bachata</option>
                <option value="Hip Hop">Hip Hop</option>
              </select>
            </div>
            {/* Número de Participación */}
            <div className="participation-baile-field">
              <label
                className="participation-baile-label"
                htmlFor="participation-number"
              >
                Número de Participación
              </label>
              <input
                type="number"
                id="participation-number"
                className="participation-input"
                placeholder="Número de Participación"
                value={participationNumber}
                onChange={(e) => setParticipationNumber(e.target.value)}
                min="1"
                required
              />
            </div>
            {/* Cédula de Bailarín */}
            <div className="participation-baile-field">
              <label className="participation-baile-label" htmlFor="dancer-id">
                Cédula de Bailarín
              </label>
              <input
                type="text"
                id="dancer-id"
                className="participation-baile-input"
                placeholder="Cédula de Bailarín"
                value={dancerID}
                onChange={(e) => setDancerID(e.target.value)}
                required
              />
            </div>
            {/* Posición */}
            <div className="participation-baile-field">
              <label className="participation-baile-label" htmlFor="position">
                Posición
              </label>
              <input
                type="text"
                id="position"
                className="participation-input"
                placeholder="Posición"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Mensaje de error si lo hay */}
          {error && (
            <p className="participation-baile-error-message">{error}</p>
          )}
          {/* Botón de enviar */}
          <button type="submit" className="participation-baile-submit-button">
            Inscribir Participación
          </button>
        </form>
      </div>
      <div className="participation-baile-datatable-wrapper">
        <ParticipationDataTable />
      </div>
    </div>
  );
}
