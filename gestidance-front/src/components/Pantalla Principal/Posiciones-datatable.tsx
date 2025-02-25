import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./Posiciones.css";

interface Dancer {
  id: number;
  dancerName: string;
  category: string;
  academy: string;
  position: number;
}

const DancerDataTable: React.FC = () => {
  const [dancers, setDancers] = useState<Dancer[]>([
    {
      id: 1,
      dancerName: "Ana Pérez",
      category: "Salsa",
      academy: "Academia A",
      position: 1,
    },
    {
      id: 2,
      dancerName: "Juan González",
      category: "Bachata",
      academy: "Academia B",
      position: 2,
    },
    {
      id: 3,
      dancerName: "Luis Morales",
      category: "Salsa",
      academy: "Academia A",
      position: 3,
    },
    {
      id: 4,
      dancerName: "María López",
      category: "Hip-Hop",
      academy: "Academia C",
      position: 1,
    },
  ]);

  const [filterCategory, setFilterCategory] = useState<string>("");

  const filteredDancers = filterCategory
    ? dancers.filter((dancer) => dancer.category === filterCategory)
    : dancers;

  const columns = [
    {
      name: "Nombre del Bailarín",
      selector: (row: Dancer) => row.dancerName,
      sortable: true,
    },
    {
      name: "Categoría",
      selector: (row: Dancer) => row.category,
      sortable: true,
    },
    {
      name: "Academia",
      selector: (row: Dancer) => row.academy,
      sortable: true,
    },
    {
      name: "Posición",
      selector: (row: Dancer) => row.position,
      sortable: true,
    },
  ];

  return (
    <div className="page-background">
      <div className="main-container">
        <h2 className="h2_admin">Tabla de posiciones</h2>
        <div className="contenedor-filtro">
          <label htmlFor="categoryFilter">Filtrar por categoría:</label>
          <select
            id="categoryFilter"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="Salsa">Salsa</option>
            <option value="Bachata">Bachata</option>
            <option value="Hip-Hop">Hip-Hop</option>
          </select>
        </div>
        <div className="tabla-posiciones">
          <DataTable
            columns={columns}
            data={filteredDancers}
            pagination
            highlightOnHover
            responsive
          />
        </div>
      </div>
    </div>
  );
};

export default DancerDataTable;
