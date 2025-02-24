import React, { useState } from "react";
import DataTableAcademy from "react-data-table-component";

interface Category {
  id: number;
  categoryName: string;
  dancerCount: number;
  femaleCount: number;
  maleCount: number;
}

const CategoryDataTable: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      categoryName: "Salsa",
      dancerCount: 30,
      femaleCount: 18,
      maleCount: 12,
    },
    {
      id: 2,
      categoryName: "Bachata",
      dancerCount: 25,
      femaleCount: 15,
      maleCount: 10,
    },
    {
      id: 3,
      categoryName: "Hip Hop",
      dancerCount: 20,
      femaleCount: 10,
      maleCount: 10,
    },
  ]);

  const handleModify = (id: number) => {
    alert(`Modificar categoría con ID: ${id}`);
    // Aquí puedes añadir la lógica para modificar la categoría
  };

  const handleDelete = (id: number) => {
    alert(`Eliminar categoría con ID: ${id}`);
    // Aquí puedes añadir la lógica para eliminar la categoría
  };

  const columns = [
    {
      name: "Nombre de Categoría",
      selector: (row: Category) => row.categoryName,
      sortable: true,
    },
    {
      name: "Cantidad de Bailarines",
      selector: (row: Category) => row.dancerCount,
      sortable: true,
    },
    {
      name: "Cantidad de Mujeres",
      selector: (row: Category) => row.femaleCount,
      sortable: true,
    },
    {
      name: "Cantidad de Hombres",
      selector: (row: Category) => row.maleCount,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: Category) => (
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
      <h2 className="h2_admin">Categorías registradas</h2>
      <DataTableAcademy
        columns={columns}
        data={categories}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default CategoryDataTable;
