import React, { useState } from "react";
import DataTableAcademy from 'react-data-table-component';

interface Dancer {
  id: number;
  cedula: string;
  birthdate: string;
  instagram: string;
  gender: string;
  participationNumber: string;
  position: string;
  academyName: string;
}

const DancerDataTable: React.FC = () => {
  const [dancers, setDancers] = useState<Dancer[]>([
    {
      id: 1,
      cedula: "123456789",
      birthdate: "2000-01-01",
      instagram: "@maria_perez",
      gender: "F",
      participationNumber: "001",
      position: "1",
      academyName: "Academia de Danza 1",
    },
    {
      id: 2,
      cedula: "987654321",
      birthdate: "1995-06-15",
      instagram: "@juan_fernandez",
      gender: "M",
      participationNumber: "002",
      position: "2",
      academyName: "Academia de Danza 2",
    },
    {
      id: 3,
      cedula: "112233445",
      birthdate: "1998-11-30",
      instagram: "@laura_gomez",
      gender: "F",
      participationNumber: "003",
      position: "3",
      academyName: "Academia de Danza 3",
    }
  ]);

  const handleModify = (id: number) => {
    alert(`Modificar academia con ID: ${id}`);
    // Aquí puedes añadir la lógica para modificar la academia
  };

  const handleDelete = (id: number) => {
    alert(`Eliminar academia con ID: ${id}`);
    // Aquí puedes añadir la lógica para eliminar la academia
  };

  const columns = [
    {
      name: "Cedula",
      selector: (row: Dancer) => row.cedula,
      sortable: true,
    },
    {
      name: "Fecha de Nacimiento",
      selector: (row: Dancer) => row.birthdate,
      sortable: true,
    },
    {
      name: "Instagram",
      selector: (row: Dancer) => row.instagram,
      sortable: true,
    },
    {
      name: "Género",
      selector: (row: Dancer) => row.gender,
      sortable: true,
    },
    {
      name: "Número de Participación",
      selector: (row: Dancer) => row.participationNumber,
      sortable: true,
    },
    {
      name: "Posición",
      selector: (row: Dancer) => row.position,
      sortable: true,
    },
    {
      name: "Academia",
      selector: (row: Dancer) => row.academyName,
      sortable: true,
    },
    {
      name: 'Acciones',
      cell: (row: Dancer) => (
        <div>
          <select onChange={(e) => {
            const value = e.target.value;
            if (value === "modificar") {
              handleModify(row.id);
            } else if (value === "eliminar") {
              handleDelete(row.id);
            }
          }}>
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
      <h2 className="h2_admin">Bailarines registrados
      </h2>
      <DataTableAcademy
        columns={columns}
        data={dancers}
        pagination
        highlightOnHover
        responsive
      />
    </div>
   
  );
  };
  
  export default DancerDataTable;
  