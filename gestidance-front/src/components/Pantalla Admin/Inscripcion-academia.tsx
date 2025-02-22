import React, { useState } from "react";
import axios from "axios";
import "./Inscripcion-academia.css"; // Asegúrate de tener el archivo CSS

export default function AcademySignup() {
  const [academyName, setAcademyName] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [directorPhone, setDirectorPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/academy-signup", {
        academyName,
        registrationDate,
        directorName,
        directorPhone,
      });

      console.log(response.data.message); // Mostrar mensaje de éxito
      alert("¡Academia inscrita con éxito!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al inscribir la academia");
      } else {
        setError("Error desconocido al inscribir la academia");
      }
    }
  };

  return (
    <div className="admin-container-form">
      <div className="admin-form-wrapper">
        <h1 className="admin-title">Inscripción de Academia</h1>
        <form onSubmit={handleSubmit}>
          <div className="admin-grid-container">
            {/* Nombre de la Academia */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-academy-name">
                Nombre de la Academia
              </label>
              <input
                type="text"
                id="admin-academy-name"
                className="admin-input"
                placeholder="Nombre de la Academia"
                value={academyName}
                onChange={(e) => setAcademyName(e.target.value)}
                required
              />
            </div>

            {/* Fecha de Inscripción */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-registration-date">
                Fecha de Inscripción
              </label>
              <input
                type="date"
                id="admin-registration-date"
                className="admin-input"
                value={registrationDate}
                onChange={(e) => setRegistrationDate(e.target.value)}
                required
              />
            </div>

            {/* Nombre del Director */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-director-name">
                Nombre del Director
              </label>
              <input
                type="text"
                id="admin-director-name"
                className="admin-input"
                placeholder="Nombre del Director"
                value={directorName}
                onChange={(e) => setDirectorName(e.target.value)}
                required
              />
            </div>

            {/* Teléfono del Director */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-director-phone">
                Teléfono del Director
              </label>
              <input
                type="tel"
                id="admin-director-phone"
                className="admin-input"
                placeholder="Teléfono del Director"
                value={directorPhone}
                onChange={(e) => setDirectorPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Mensaje de error si lo hay */}
          {error && <p className="admin-error-message">{error}</p>}

          {/* Botón de enviar */}
          <button type="submit" className="admin-submit-button">
            Inscribir Academia
          </button>
        </form>
      </div>
    </div>
  );
}
