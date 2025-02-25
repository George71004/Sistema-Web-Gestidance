import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTableAcademy from "react-data-table-component"; // Se utiliza el mismo componente de DataTable

interface Jury {
  numero: string;
  nombre: string;
  aspecto: string;
}

interface JuryDataTableProps {
  refreshTable: boolean; // Prop para recargar la tabla
  onModify: (row: any) => void; // Callback para modificar
  onDelete: (numero: string) => void; // Callback para eliminar
}

const JuryDataTable: React.FC<JuryDataTableProps> = ({ refreshTable, onModify, onDelete }) => {
  const [juryMembers, setJuryMembers] = useState<Jury[]>([]);

  // Cargar los datos del jurado al montar el componente y cuando refreshTable cambie
  useEffect(() => {
    const fetchJuryMembers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/jurado/obtener");
        // Mapear los datos recibidos al formato esperado
        const mappedJury = response.data.map((jury: any) => ({
          numero: jury.numero,
          nombre: jury.nombre,
          aspecto: jury.aspecto,
        }));
        setJuryMembers(mappedJury);
      } catch (error) {
        console.error("Error al obtener los datos del jurado:", error);
      }
    };

    fetchJuryMembers();
  }, [refreshTable]);

  const columns = [
    {
      name: "Número de Jurado",
      selector: (row: Jury) => row.numero,
      sortable: true,
    },
    {
      name: "Nombre del Jurado",
      selector: (row: Jury) => row.nombre,
      sortable: true,
    },
    {
      name: "Aspecto que Evalúa",
      selector: (row: Jury) => row.aspecto,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: Jury) => (
        <div>
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value === "modificar") {
                onModify(row);
              } else if (value === "eliminar") {
                onDelete(row.numero);
              }
              // Reiniciar el valor del select después de la acción
              e.target.value = "";
            }}
          >
            <option value="">Opción</option>
            <option value="modificar">Modificar</option>
            <option value="eliminar">Eliminar</option>
          </select>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2 className="h2_admin">Jurado registrado</h2>
      <DataTableAcademy
        columns={columns}
        data={juryMembers}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default JuryDataTable;
