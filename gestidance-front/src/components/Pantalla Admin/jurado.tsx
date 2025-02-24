import React, { useState } from "react";
import axios from "axios";
import "./jurado.css"; // Asegúrate de tener el archivo CSS
import JuryDataTable from "./Datatable/Jurado-data"; // Importar el DataTable

export default function JurySignup() {
  const [juryNumber, setJuryNumber] = useState("");
  const [juryName, setJuryName] = useState("");
  const [evaluationAspect, setEvaluationAspect] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/jury-signup",
        { juryNumber, juryName, evaluationAspect }
      );
      console.log(response.data.message); // Mostrar mensaje de éxito
      alert("¡Jurado inscrito con éxito!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al inscribir el jurado");
      } else {
        setError("Error desconocido al inscribir el jurado");
      }
    }
  };

  return (
    <div className="super-container">
      <div className="admin-form-wrapper">
        <h1 className="admin-title">Inscripción de Jurado</h1>
        <form onSubmit={handleSubmit}>
          <div className="admin-grid-container">
            {/* Número de Jurado */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-jury-number">
                Número de Jurado
              </label>
              <input
                type="text"
                id="admin-jury-number"
                className="admin-input"
                placeholder="Número de Jurado"
                value={juryNumber}
                onChange={(e) => setJuryNumber(e.target.value)}
                required
              />
            </div>
            {/* Nombre del Jurado */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-jury-name">
                Nombre del Jurado
              </label>
              <input
                type="text"
                id="admin-jury-name"
                className="admin-input"
                placeholder="Nombre del Jurado"
                value={juryName}
                onChange={(e) => setJuryName(e.target.value)}
                required
              />
            </div>
            {/* Aspecto que Evalúa */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-evaluation-aspect">
                Aspecto que Evalúa
              </label>
              <input
                type="text"
                id="admin-evaluation-aspect"
                className="admin-input"
                placeholder="Aspecto que Evalúa"
                value={evaluationAspect}
                onChange={(e) => setEvaluationAspect(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Mensaje de error si lo hay */}
          {error && <p className="admin-error-message">{error}</p>}
          {/* Botón de enviar */}
          <button type="submit" className="admin-submit-button">
            Inscribir Jurado
          </button>
        </form>
      </div>
      <div className="admin-datatable-wrapper">
        <JuryDataTable />
      </div>
    </div>
  );
}
