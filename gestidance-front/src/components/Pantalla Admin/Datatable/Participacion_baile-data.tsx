import React, { useState } from "react";
import DataTableAcademy from "react-data-table-component";

interface Participation {
  academyName: string;
  categoryName: string;
  participationNumber: string;
  dancerID: string;
  position: string;
}

const ParticipationDataTable: React.FC = () => {
  const [participations, setParticipations] = useState<Participation[]>([
    {
      academyName: "Academia de Danza 1",
      categoryName: "Salsa",
      participationNumber: "001",
      dancerID: "12345678",
      position: "1",
    },
    {
      academyName: "Academia de Danza 2",
      categoryName: "Bachata",
      participationNumber: "002",
      dancerID: "87654321",
      position: "2",
    },
    {
      academyName: "Academia de Danza 3",
      categoryName: "Hip Hop",
      participationNumber: "003",
      dancerID: "11223344",
      position: "3",
    },
  ]);

  const handleModify = (
    academyName: string,
    categoryName: string,
    dancerID: string
  ) => {
    alert(
      `Modificar participación de la academia ${academyName}, categoría ${categoryName} y cédula de bailarín ${dancerID}`
    );
    // Aquí puedes añadir la lógica para modificar la participación
  };

  const handleDelete = (
    academyName: string,
    categoryName: string,
    dancerID: string
  ) => {
    alert(
      `Eliminar participación de la academia ${academyName}, categoría ${categoryName} y cédula de bailarín ${dancerID}`
    );
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
      name: "Cédula de Bailarín",
      selector: (row: Participation) => row.dancerID,
      sortable: true,
    },
    {
      name: "Posición",
      selector: (row: Participation) => row.position,
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
                handleModify(row.academyName, row.categoryName, row.dancerID);
              } else if (value === "eliminar") {
                handleDelete(row.academyName, row.categoryName, row.dancerID);
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
