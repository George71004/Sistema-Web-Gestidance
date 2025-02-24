import React, { useState } from "react";
import DataTableAcademy from "react-data-table-component";

interface Jury {
  id: number;
  juryNumber: string;
  juryName: string;
  evaluationAspect: string;
}

const JuryDataTable: React.FC = () => {
  const [juryMembers, setJuryMembers] = useState<Jury[]>([
    {
      id: 1,
      juryNumber: "001",
      juryName: "Dr. Carlos Hernández",
      evaluationAspect: "Técnica",
    },
    {
      id: 2,
      juryNumber: "002",
      juryName: "Sra. Ana Martínez",
      evaluationAspect: "Creatividad",
    },
    {
      id: 3,
      juryNumber: "003",
      juryName: "Ing. José Pérez",
      evaluationAspect: "Presentación",
    },
  ]);

  const handleModify = (id: number) => {
    alert(`Modificar jurado con ID: ${id}`);
    // Aquí puedes añadir la lógica para modificar el jurado
  };

  const handleDelete = (id: number) => {
    alert(`Eliminar jurado con ID: ${id}`);
    // Aquí puedes añadir la lógica para eliminar el jurado
  };

  const columns = [
    {
      name: "Número de Jurado",
      selector: (row: Jury) => row.juryNumber,
      sortable: true,
    },
    {
      name: "Nombre del Jurado",
      selector: (row: Jury) => row.juryName,
      sortable: true,
    },
    {
      name: "Aspecto que Evalúa",
      selector: (row: Jury) => row.evaluationAspect,
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
                handleModify(row.id);
              } else if (value === "eliminar") {
                handleDelete(row.id);
              }
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
