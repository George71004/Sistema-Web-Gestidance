import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import "./Inscripcion.css"; // Importamos el archivo CSS

export default function DancerSignup() {
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

      console.log(response.data.message); // Mostrar mensaje de éxito
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
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Inscripción de Bailarines</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid-container">
            {/* Nombre Completo */}
            <div className="field">
              <label className="label" htmlFor="full-name">
                Nombre Completo
              </label>
              <input
                type="text"
                id="full-name"
                className="input"
                placeholder="Nombre completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            {/* Cédula */}
            <div className="field">
              <label className="label" htmlFor="id-number">
                Cédula
              </label>
              <input
                type="text"
                id="id-number"
                className="input"
                placeholder="Cédula"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                required
              />
            </div>

            {/* Fecha de Nacimiento */}
            <div className="field">
              <label className="label" htmlFor="birthdate">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="birthdate"
                className="input"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
            </div>

            {/* Instagram */}
            <div className="field">
              <label className="label" htmlFor="instagram">
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                className="input"
                placeholder="@instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                required
              />
            </div>

            {/* Sexo */}
            <div className="field">
              <label className="label" htmlFor="gender">
                Sexo
              </label>
              <select
                id="gender"
                className="select"
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

            {/* Academia */}
            <div className="field">
              <label className="label" htmlFor="academy">
                Academia
              </label>
              <select
                id="academy"
                className="select"
                value={academy}
                onChange={(e) => setAcademy(e.target.value)}
                required
              >
                <option value="">Selecciona tu academia</option>
                <option value="academy1">Academia 1</option>
                <option value="academy2">Academia 2</option>
              </select>
            </div>

            {/* Categoría */}
            <div className="field">
              <label className="label" htmlFor="category">
                Categoría
              </label>
              <select
                id="category"
                className="select"
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

          {/* Mensaje de error si lo hay */}
          {error && <p className="error-message">{error}</p>}

          {/* Botón de enviar */}
          <button type="submit" className="submit-button">
            Inscribir Bailarín
          </button>
        </form>
      </div>
    </div>
  );
}
