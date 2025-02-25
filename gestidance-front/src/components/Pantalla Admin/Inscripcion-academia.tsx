import React, { useState } from "react";
import axios from "axios";
import "./Inscripcion-academia.css"; // Asegúrate de tener el archivo CSS
import AcademyDataTable from "./Datatable/Academia-data"; // Importar el DataTable
import { useFetcher } from "react-router-dom";

export default function AcademySignup() {
  const [nombre_academia, setnombre_academia] = useState("");
  const [nombre_director, setnombre_director] = useState("");
  const [telefono_director, settelefono_director] = useState("");
  const [modoModificar, setmodoModificar] = useState(false);
  const [error, setError] = useState("");
  const [refreshTable, setRefreshTable] = useState(false); // Estado para recargar la tabla
  
  const modifyVoid = async (academiaNombre: string,directorNombre: string,directorTelefono: string) => {
      setRefreshTable((prev) => !prev);
      setnombre_academia(academiaNombre);
      setnombre_director(directorNombre);
      settelefono_director(directorTelefono);

      setmodoModificar(true);
  }

  const deleteVoid = async (nombre_academia: string) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar "${nombre_academia}"?`);
    
    if (!confirmDelete) {
      console.log("Eliminación cancelada por el usuario.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:3001/api/academia/eliminar", { nombre_academia });
      console.log("Elemento eliminado con éxito:", response.data);
      alert(`"${nombre_academia}" se eliminó correctamente.`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error en la solicitud:", error.response?.data || error.message);
        alert(`Ocurrió un error al eliminar "${nombre_academia}": ${error.response?.data?.message || error.message}`);
      } else {
        console.error("Error inesperado:", error);
        alert(`Ocurrió un error inesperado al eliminar "${nombre_academia}".`);
      }
    } finally {
      // Forzar la recarga de la tabla
      setnombre_academia("");
      setnombre_director("");
      settelefono_director("");
      setError("");
      setmodoModificar(false);
      setRefreshTable((prev) => !prev);
    }
  };  

  const handleSubmitModificar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/academia/modificar", { nombre_academia, nombre_director, telefono_director });
      console.log(response.data.message);

      // Forzar la recarga de la tabla
      setRefreshTable((prev) => !prev);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al inscribir la academia");
      } else {
        setError("Error desconocido al inscribir la academia");
      }
    } finally {
      setnombre_academia("");
      setnombre_director("");
      settelefono_director("");
      setError("");
      setmodoModificar(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/academia/agregar", { nombre_academia, nombre_director, telefono_director });
      console.log(response.data.message);
      
      // Limpiar el formulario después de una inscripción exitosa
      setnombre_academia("");
      setnombre_director("");
      settelefono_director("");
      setError("");

      // Forzar la recarga de la tabla
      setRefreshTable((prev) => !prev);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al inscribir la academia");
      } else {
        setError("Error desconocido al inscribir la academia");
      }
    }
  };

  return (
    <div className="super-container">
      <div className="admin-form-wrapper">
        <h1 className="admin-title">Inscripción de Academia</h1>
        <form onSubmit={modoModificar ? handleSubmitModificar : handleSubmit}>
          <div className="admin-grid-container">
            {/* Nombre de la Academia */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-academy-name">Nombre de la Academia</label>
              <input disabled={modoModificar} type="text" id="admin-academy-name" className="admin-input" placeholder="Nombre de la Academia" value={nombre_academia} onChange={(e) => setnombre_academia(e.target.value)} required />
            </div>
            {/* Nombre del Director */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-director-name">Nombre del Director</label>
              <input type="text" id="admin-director-name" className="admin-input" placeholder="Nombre del Director" value={nombre_director} onChange={(e) => setnombre_director(e.target.value)} required />
            </div>
            {/* Teléfono del Director */}
            <div className="admin-field">
              <label className="admin-label" htmlFor="admin-director-phone">Teléfono del Director</label>
              <input type="tel" id="admin-director-phone" className="admin-input" placeholder="Teléfono del Director" value={telefono_director} onChange={(e) => settelefono_director(e.target.value)} required />
            </div>
          </div>
          {/* Mensaje de error si lo hay */}
          {error && <p className="admin-error-message">{error}</p>}
          {/* Botón de enviar */}
          <button type="submit" className="admin-submit-button">{modoModificar ? 'Modificar Academia': 'Inscribir Academia'}</button>
        </form>
      </div>
      <div className="admin-datatable-wrapper">
        {/* Pasar el estado refreshTable como prop */}
        <AcademyDataTable refreshTable={refreshTable} onModify={modifyVoid} onDelete={deleteVoid}/>
      </div>
    </div>
  );
}



