import React, { useState } from "react";
import DataTableAcademy from "react-data-table-component";

interface Participation {
  id: number;
  academyName: string;
  categoryName: string;
  participationNumber: string;
}

const ParticipationDataTable: React.FC = () => {
  const [participations, setParticipations] = useState<Participation[]>([
    {
      id: 1,
      academyName: "Academia de Danza 1",
      categoryName: "Salsa",
      participationNumber: "001",
    },
    {
      id: 2,
      academyName: "Academia de Danza 2",
      categoryName: "Bachata",
      participationNumber: "002",
    },
    {
      id: 3,
      academyName: "Academia de Danza 3",
      categoryName: "Hip Hop",
      participationNumber: "003",
    },
  ]);

  const handleModify = (id: number) => {
    alert(`Modificar participación con ID: ${id}`);
    // Aquí puedes añadir la lógica para modificar la participación
  };

  const handleDelete = (id: number) => {
    alert(`Eliminar participación con ID: ${id}`);
    // Aquí puedes añadir la lógica para eliminar la participación
  };

  const columns = [
    {
      name: "Nombre de Academia",
      selector: (row: Participation) => row.academyName,
      sortable: true,
    },
    {
      name: "Nombre de Categoría",
      selector: (row: Participation) => row.categoryName,
      sortable: true,
    },
    {
      name: "Número de Participación",
      selector: (row: Participation) => row.participationNumber,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: Participation) => (
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
      <h2 className="h2_admin">Participaciones registradas</h2>
      <DataTableAcademy
        columns={columns}
        data={participations}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default ParticipationDataTable;
