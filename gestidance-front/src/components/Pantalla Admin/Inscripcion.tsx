import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import "./Inscripcion.css";
import BaileDataTable from "./Datatable/Bailarines-data";

export default function NuevoDancerSignup() {
  const [cedula, setcedula] = useState("");
  const [fechaNac, setfechaNac] = useState("");
  const [instagram, setInstagram] = useState("");
  const [genero, setgenero] = useState("");
  const [academia, setacademia] = useState("");
  const [academias, setAcademias] = useState<string[]>([]);
  const [modoModificar, setmodoModificar] = useState(false);
  const [error, setError] = useState("");
  const [refreshTable, setRefreshTable] = useState(false); // Estado para recargar la tabla
  
  useEffect(() => {
    const fetchAcademias = async () => {
      try {
        const response = await axios.get<{ nombre: string }[]>("http://localhost:3001/api/academia/obtener");
        const nombresAcademias = response.data.map((a) => a.nombre);
        setAcademias(nombresAcademias);
      } catch (err) {
        console.error("Error al obtener academias:", err);
      }
    };
    fetchAcademias();
  }, []);

  const modifyVoid = async (row: any) => {
    setcedula(row.cedula);

    // Convertir la fecha de nacimiento al formato aaaa-mm-dd
    const [day, month, year] = row.birthdate.split('/'); // Asumiendo que el formato es dd/mm/aaaa
    const formattedDate = `${year}-${month}-${day}`;
    
    setfechaNac(formattedDate);
    setInstagram(row.instagram);
    setgenero(row.gender);
    setacademia(row.academyName);

    setmodoModificar(true);
    setRefreshTable((prev) => !prev);
  };


  const deleteVoid = async (cedula: string) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar "${cedula}"?`);
    
    if (!confirmDelete) {
      console.log("Eliminación cancelada por el usuario.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:3001/api/bailarin/eliminar", { cedula });
      console.log("Elemento eliminado con éxito:", response.data);
      alert(`"${cedula}" se eliminó correctamente.`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error en la solicitud:", error.response?.data || error.message);
        alert(`Ocurrió un error al eliminar "${cedula}": ${error.response?.data?.message || error.message}`);
      } else {
        console.error("Error inesperado:", error);
        alert(`Ocurrió un error inesperado al eliminar "${cedula}".`);
      }
    } finally {
      // Forzar la recarga de la tabla
      setcedula("");
      setfechaNac("");
      setInstagram("");
      setgenero("");
      setacademia("");
      setmodoModificar(false);
      setRefreshTable((prev) => !prev);
    }
  };  

  const handleSubmitModificar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/bailarin/modificar", { cedula, fechaNac,instagram,genero,academia });
      console.log(response.data.message);
      
      // Limpiar el formulario después de una inscripción exitosa
      setcedula("");
      setfechaNac("");
      setInstagram("");
      setgenero("");
      setacademia("");

      // Forzar la recarga de la tabla
      setRefreshTable((prev) => !prev);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al inscribir la academia");
      } else {
        setError("Error desconocido al inscribir la academia");
      }
    } finally {
      setError("");
      setmodoModificar(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/bailarin/agregar", { cedula, fechaNac, instagram, genero, academia });
      console.log(response.data.message);
      
      // Limpiar el formulario después de una inscripción exitosa
      setcedula("");
      setfechaNac("");
      setInstagram("");
      setgenero("");
      setacademia("");

      // Forzar la recarga de la tabla
      setRefreshTable((prev) => !prev);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al inscribir el bailarin");
      } else {
        setError("Error desconocido al inscribir el bailarin");
      }
    }
  };

  return (
    <div className="super-container-nueva">
      <div className="nueva-form-wrapper">
        <h1 className="nueva-title">Inscripción de Bailarines</h1>
        <form onSubmit={modoModificar ? handleSubmitModificar : handleSubmit}>
          <div className="nueva-grid-container">
            <div className="nueva-field">
              <label className="nueva-label" htmlFor="id-number">
                Cédula
              </label>
              <input
                disabled={modoModificar}
                type="text"
                id="id-number"
                className="nueva-input"
                placeholder="Cédula"
                value={cedula}
                onChange={(e) => setcedula(e.target.value)}
                required
              />
            </div>

            <div className="nueva-field">
              <label className="nueva-label" htmlFor="fechaNac">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="fechaNac"
                className="nueva-input"
                value={fechaNac}
                onChange={(e) => setfechaNac(e.target.value)}
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
              <label className="nueva-label" htmlFor="genero">
                Sexo
              </label>
              <select
                id="genero"
                className="nueva-select"
                value={genero}
                onChange={(e) => setgenero(e.target.value)}
                required
              >
                <option value="">Selecciona tu sexo</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="O">Otro</option>
              </select>
            </div>

            <div className="nueva-field">
              <label className="nueva-label" htmlFor="academia">
                Academia
              </label>
              <select
                id="academia"
                className="nueva-select"
                value={academia}
                onChange={(e) => setacademia(e.target.value)}
                required
              >
              <option value="">Selecciona tu academia</option>
                {academias.map((nombre, index) => (
                  <option key={index} value={nombre}>
                    {nombre}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {error && <p className="nueva-error-message">{error}</p>}

          <button type="submit" className="nueva-submit-button">
            {modoModificar ? 'Modificar Bailarin': 'Inscribir Bailarin'}
          </button>
        </form>
      </div>
      <div className="nueva-datatable-wrapper">
      <BaileDataTable refreshTable={refreshTable} onModify={modifyVoid} onDelete={deleteVoid}/>
      </div>
    </div>
  );
}


