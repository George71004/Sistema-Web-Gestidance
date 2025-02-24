import React, { useState } from "react";
import DataTableAcademy from 'react-data-table-component';

interface Academy {
  id: number;
  academyName: string;
  registrationDate: string;
  directorName: string;
  directorPhone: string;
}

const AcademyDataTable: React.FC = () => {
  const [academies, setAcademies] = useState<Academy[]>([
    {
      id: 1,
      academyName: "Academia de Danza 1",
      registrationDate: "2025-01-15",
      directorName: "María Pérez",
      directorPhone: "1234567890"
    },
    {
      id: 2,
      academyName: "Academia de Danza 2",
      registrationDate: "2025-02-10",
      directorName: "Juan Rodríguez",
      directorPhone: "0987654321"
    },
    {
      id: 3,
      academyName: "Academia de Danza 3",
      registrationDate: "2025-03-05",
      directorName: "Laura Gómez",
      directorPhone: "1122334455"
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
      name: 'Nombre de la Academia',
      selector: (row: Academy) => row.academyName,
    },
    {
      name: 'Fecha de Inscripción',
      selector: (row: Academy) => row.registrationDate,
    },
    {
      name: 'Nombre del Director',
      selector: (row: Academy) => row.directorName,
    },
    {
      name: 'Teléfono del Director',
      selector: (row: Academy) => row.directorPhone,
    },
    {
      name: 'Acciones',
      cell: (row: Academy) => (
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
    <div className="admin-container-datatable">
      <h2 className="h2_admin">Academias registradas</h2>
      <DataTableAcademy
        columns={columns}
        data={academies}
        pagination
      />
    </div>
  );
};

export default AcademyDataTable;
