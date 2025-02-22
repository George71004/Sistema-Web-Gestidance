import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import "./Inscripcion.css";
import BaileDataTable from "./Datatable/Bailarines-data";

export default function NuevoDancerSignup() {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [instagram, setInstagram] = useState("");
  const [gender, setGender] = useState("");
  const [academy, setAcademy] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/signup", {
        fullName,
        idNumber,
        birthdate,
        instagram,
        gender,
        academy,
        category,
      });

      console.log(response.data.message); 
      alert("¡Inscripción exitosa!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al inscribir al bailarín");
      } else {
        setError("Error desconocido al inscribir al bailarín");
      }
    }
  };

  return (
    <div className="super-container-nueva">
      <div className="nueva-form-wrapper">
        <h1 className="nueva-title">Inscripción de Bailarines</h1>
        <form onSubmit={handleSubmit}>
          <div className="nueva-grid-container">
            <div className="nueva-field">
              <label className="nueva-label" htmlFor="full-name">
                Nombre Completo
              </label>
              <input
                type="text"
                id="full-name"
                className="nueva-input"
                placeholder="Nombre completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="nueva-field">
              <label className="nueva-label" htmlFor="id-number">
                Cédula
              </label>
              <input
                type="text"
                id="id-number"
                className="nueva-input"
                placeholder="Cédula"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                required
              />
            </div>

            <div className="nueva-field">
              <label className="nueva-label" htmlFor="birthdate">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="birthdate"
                className="nueva-input"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
            </div>

            <div className="nueva-field">
              <label className="nueva-label" htmlFor="instagram">
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                className="nueva-input"
                placeholder="@instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                required
              />
            </div>

            <div className="nueva-field">
              <label className="nueva-label" htmlFor="gender">
                Sexo
              </label>
              <select
                id="gender"
                className="nueva-select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Selecciona tu sexo</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="nueva-field">
              <label className="nueva-label" htmlFor="academy">
                Academia
              </label>
              <select
                id="academy"
                className="nueva-select"
                value={academy}
                onChange={(e) => setAcademy(e.target.value)}
                required
              >
                <option value="">Selecciona tu academia</option>
                <option value="academy1">Academia 1</option>
                <option value="academy2">Academia 2</option>
              </select>
            </div>

            <div className="nueva-field">
              <label className="nueva-label" htmlFor="category">
                Categoría
              </label>
              <select
                id="category"
                className="nueva-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Selecciona tu categoría</option>
                <option value="category1">Categoría 1</option>
                <option value="category2">Categoría 2</option>
              </select>
            </div>
          </div>

          {error && <p className="nueva-error-message">{error}</p>}

          <button type="submit" className="nueva-submit-button">
            Inscribir Bailarín
          </button>
        </form>
      </div>
      <div className="nueva-datatable-wrapper">
      <BaileDataTable />
      </div>
    </div>
  );
}


