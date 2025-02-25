import React, { useState } from "react";
import axios from "axios";
import "./Participacion-academia.css"; // Asegúrate de tener el archivo CSS
import ParticipationDataTable from "./Datatable/Participacion_academia-data"; // Importar el DataTable

export default function ParticipationSignup() {
  const [academyName, setAcademyName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [participationNumber, setParticipationNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/participation-signup",
        { academyName, categoryName, participationNumber }
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
      <div className="participation-form-wrapper">
        <h1 className="participation-title">Participación de Academia</h1>
        <form onSubmit={handleSubmit}>
          <div className="participation-grid-container">
            {/* Nombre de la Academia */}
            <div className="participation-field">
              <label className="participation-label" htmlFor="academy-name">
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
            <div className="participation-field">
              <label className="participation-label" htmlFor="category-name">
                Nombre de la Categoría
              </label>
              <select
                id="category-name"
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
            <div className="participation-field">
              <label
                className="participation-label"
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
          </div>
          {/* Mensaje de error si lo hay */}
          {error && <p className="participation-error-message">{error}</p>}
          {/* Botón de enviar */}
          <button type="submit" className="participation-submit-button">
            Inscribir Participación
          </button>
        </form>
      </div>
      <div className="participation-datatable-wrapper">
        <ParticipationDataTable />
      </div>
    </div>
  );
}
