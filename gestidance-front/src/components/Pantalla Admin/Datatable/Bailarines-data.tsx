import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTableAcademy from 'react-data-table-component';

interface Dancer {
  cedula: string;
  birthdate: Date;
  instagram: string;
  gender: string;
  academyName: string;
}

interface DancerDataTableProps {
  refreshTable: boolean;
  onModify: (dancer: Dancer) => void; // Callback para modificar con todos los datos
  onDelete: (cedula: string) => void;  // Callback para eliminar
}

const DancerDataTable: React.FC<DancerDataTableProps> = ({ refreshTable, onModify, onDelete }) => {
  const [dancers, setdancers] = useState<Dancer[]>([]);

  // Cargar los datos de los bailarines al montar el componente o al refrescar
  useEffect(() => {
    const fetchBailarines = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/bailarin/obtener");

        const mappedDancers: Dancer[] = response.data.map((bailarin: any) => {
          // Crear un objeto Date a partir de la fecha de nacimiento (suponiendo que 'fecha_nacimiento' es una cadena en formato aaaa/mm/dd)
          const birthdate = new Date(bailarin.fecha_nacimiento);
          
          // Formatear la fecha en dd/mm/aaaa
          const formattedBirthdate = `${birthdate.getDate().toString().padStart(2, '0')}/${(birthdate.getMonth() + 1).toString().padStart(2, '0')}/${birthdate.getFullYear()}`;
        
          return {
            cedula: bailarin.cedula,
            birthdate: formattedBirthdate,
            instagram: bailarin.instagram,
            gender: bailarin.sexo,
            academyName: bailarin.nombre_academia,
          };
        });
        

        setdancers(mappedDancers);
      } catch (error) {
        console.error("Error al obtener los datos de los bailarines:", error);
      }
    };

    fetchBailarines();
  }, [refreshTable]);

  const columns = [
    {
      name: "Cédula",
      selector: (row: Dancer) => row.cedula,
      sortable: true,
    },
    {
      name: "Fecha de Nacimiento",
      selector: (row: Dancer) => row.birthdate.toString().split("T")[0],
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
      name: "Academia",
      selector: (row: Dancer) => row.academyName,
      sortable: true,
    },
    {
      name: 'Acciones',
      cell: (row: Dancer) => (
        <div>
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value === "modificar") {
                onModify(row); // Ahora se envía toda la fila al callback
              } else if (value === "eliminar") {
                onDelete(row.cedula);
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
    <div>
      <h2 className="h2_admin">Bailarines registrados</h2>
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
