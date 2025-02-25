import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTableAcademy from 'react-data-table-component';

interface Academy {
  academyName: string;
  registrationDate: string;
  directorName: string;
  directorPhone: string;
}

interface AcademyDataTableProps {
  refreshTable: boolean; // Prop para recargar la tabla
  onModify: (academyName: string,directorName: string,directorPhone: string) => void; // Callback para modificar
  onDelete: (academyName: string) => void; // Callback para eliminar
}

const AcademyDataTable: React.FC<AcademyDataTableProps> = ({ refreshTable, onModify,onDelete}) => {
  const [academies, setAcademies] = useState<Academy[]>([]);

  // Cargar los datos de la academia al montar el componente
  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/academia/obtener");
        
        // Mapear los datos recibidos al formato esperado
        const mappedAcademies = response.data.map((academia: any) => ({
          academyName: academia.nombre,
          registrationDate: academia.fechainsc,
          directorName: academia.nombdirect,
          directorPhone: academia.tlfdirect,
        }));

        setAcademies(mappedAcademies); // Actualizar el estado con los datos mapeados
      } catch (error) {
        console.error("Error al obtener los datos de la academia:", error);
      }
    };

    fetchAcademies(); // Llamar a la función para cargar los datos
  },[refreshTable]); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  const columns = [
    {
      name: 'Nombre de la Academia',
      selector: (row: Academy) => row.academyName,
    },
    {
      name: 'Fecha de Inscripción',
      selector: (row: Academy) => row.registrationDate.split("T")[0],
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
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value === "modificar") {
                onModify(row.academyName,row.directorName,row.directorPhone);
              } else if (value === "eliminar") {
                onDelete(row.academyName);
              }
              e.target.value="";
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