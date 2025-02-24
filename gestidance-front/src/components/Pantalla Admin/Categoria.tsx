import React, { useState } from "react";
import axios from "axios";
import "./Categoria.css"; // Asegúrate de tener el archivo CSS
import CategoryDataTable from "./Datatable/Categoria-data"; // Importar el DataTable

export default function CategorySignup() {
  const [categoryName, setCategoryName] = useState("");
  const [maleDancers, setMaleDancers] = useState("");
  const [femaleDancers, setFemaleDancers] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/category-signup",
        { categoryName, maleDancers, femaleDancers }
      );
      console.log(response.data.message); // Mostrar mensaje de éxito
      alert("¡Categoría inscrita con éxito!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || "Error al inscribir la categoría"
        );
      } else {
        setError("Error desconocido al inscribir la categoría");
      }
    }
  };

  return (
    <div className="super-container">
      <div className="category-form-wrapper">
        <h1 className="category-title">Inscripción de Categoría</h1>
        <form onSubmit={handleSubmit}>
          <div className="category-grid-container">
            {/* Nombre de la Categoría */}
            <div className="category-field">
              <label className="category-label" htmlFor="category-name">
                Nombre de la Categoría
              </label>
              <input
                type="text"
                id="category-name"
                className="category-input"
                placeholder="Nombre de la Categoría"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </div>
            {/* Cantidad de Bailarines Hombres */}
            <div className="category-field">
              <label className="category-label" htmlFor="category-male-dancers">
                Cantidad de Hombres
              </label>
              <input
                type="number"
                id="category-male-dancers"
                className="category-input"
                placeholder="Cantidad de Bailarines Hombres"
                value={maleDancers}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (value >= 0) {
                    setMaleDancers(value.toString());
                  }
                }}
                min="0"
                required
              />
            </div>
            {/* Cantidad de Bailarines Mujeres */}
            <div className="category-field">
              <label
                className="category-label"
                htmlFor="category-female-dancers"
              >
                Cantidad de Mujeres
              </label>
              <input
                type="number"
                id="category-female-dancers"
                className="category-input"
                placeholder="Cantidad de Bailarines Mujeres"
                value={femaleDancers}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (value >= 0) {
                    setFemaleDancers(value.toString());
                  }
                }}
                min="0"
                required
              />
            </div>
          </div>
          {/* Mensaje de error si lo hay */}
          {error && <p className="category-error-message">{error}</p>}
          {/* Botón de enviar */}
          <button type="submit" className="category-submit-button">
            Inscribir Categoría
          </button>
        </form>
      </div>
      <div className="category-datatable-wrapper">
        <CategoryDataTable />
      </div>
    </div>
  );
}
