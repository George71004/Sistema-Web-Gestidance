import React, { useState } from "react";
import axios from "axios";
import "./jurado.css"; // Asegúrate de tener el archivo CSS
import JuryDataTable from "./Datatable/Jurado-data"; // Importar el DataTable

export default function JurySignup() {
  const [numero, setnumero] = useState("");
  const [nombre, setnombre] = useState("");
  const [aspecto, setaspecto] = useState("");
  const [error, setError] = useState("");
  // Estados nuevos para modificar y refrescar la tabla
  const [modoModificar, setmodoModificar] = useState(false);
  const [refreshTable, setRefreshTable] = useState(false);

  // Función para cargar los datos del jurado en el formulario (para modificar)
  const modifyVoid = async (row: any) => {
    setnumero(row.numero);
    setnombre(row.nombre);
    setaspecto(row.aspecto);
    setmodoModificar(true);
    // Se refresca la tabla (según lógica de la DataTable)
    setRefreshTable((prev) => !prev);
  };

  // Función para eliminar un jurado
  const deleteVoid = async (numero: string) => {
    const confirmDelete = window.confirm(
      `¿Estás seguro de que deseas eliminar el jurado con número "${numero}"?`
    );
    if (!confirmDelete) {
      console.log("Eliminación cancelada por el usuario.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/api/jurado/eliminar", { numero });
      console.log("Elemento eliminado con éxito:", response.data);
      alert(`El jurado con número "${numero}" se eliminó correctamente.`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error en la solicitud:", error.response?.data || error.message);
        alert(
          `Ocurrió un error al eliminar el jurado: ${
            error.response?.data?.message || error.message
          }`
        );
      } else {
        console.error("Error inesperado:", error);
        alert("Ocurrió un error inesperado al eliminar el jurado.");
      }
    } finally {
      // Limpiar formulario y salir del modo de modificación (si aplica)
      setnumero("");
      setnombre("");
      setaspecto("");
      setError("");
      setmodoModificar(false);
      setRefreshTable((prev) => !prev);
    }
  };

  // Función para modificar un jurado existente
  const handleSubmitModificar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/jurado/modificar", {
        numero,
        nombre,
        aspecto,
      });
      console.log(response.data.message);
      setRefreshTable((prev) => !prev);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al modificar el jurado");
      } else {
        setError("Error desconocido al modificar el jurado");
      }
    } finally {
      // Reiniciar el formulario y salir del modo modificación
      setnumero("");
      setnombre("");
      setaspecto("");
      setError("");
      setmodoModificar(false);
    }
  };

  // Función para inscribir un nuevo jurado
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/jurado/agregar", {
        numero,
        nombre,
        aspecto,
      });
      console.log(response.data.message);
      alert("¡Jurado inscrito con éxito!");
      // Limpiar el formulario
      setnumero("");
      setnombre("");
      setaspecto("");
      setError("");
      setRefreshTable((prev) => !prev);
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
        <form onSubmit={modoModificar ? handleSubmitModificar : handleSubmit}>
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
                value={numero}
                onChange={(e) => setnumero(e.target.value)}
                required
                disabled={modoModificar} 
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
                value={nombre}
                onChange={(e) => setnombre(e.target.value)}
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
                value={aspecto}
                onChange={(e) => setaspecto(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Mensaje de error si lo hay */}
          {error && <p className="admin-error-message">{error}</p>}
          {/* Botón de enviar */}
          <button type="submit" className="admin-submit-button">
            {modoModificar ? "Modificar Jurado" : "Inscribir Jurado"}
          </button>
        </form>
      </div>
      <div className="admin-datatable-wrapper">
        {/* Se pasan las props para refrescar la tabla y para las acciones de modificar y eliminar */}
        <JuryDataTable refreshTable={refreshTable} onModify={modifyVoid} onDelete={deleteVoid} />
      </div>
    </div>
  );
}
