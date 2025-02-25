import React from "react";

import "./Puntaje.css"
import DataTable from "react-data-table-component";

interface DataRow {
  id: number;
  name: string;
  age: number;
  email: string;
  category: string;
}

const data: DataRow[] = [
  { id: 1, name: "John Doe", age: 28, email: "john@example.com", category: "A" },
  { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com", category: "B" },
  { id: 3, name: "Sam Green", age: 22, email: "sam@example.com", category: "A" },
  { id: 4, name: "Alice Brown", age: 29, email: "alice@example.com", category: "C" },
  { id: 5, name: "Bob White", age: 30, email: "bob@example.com", category: "B" },
];

const columnas = [
  {
    name: "ID",
    selector: (row: DataRow) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: DataRow) => row.name,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row: DataRow) => row.age,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: DataRow) => row.email,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: DataRow) => row.category,
    sortable: true,
  },
];

const Puntaje: React.FC = () => {
  return (
    <div className="datatable-container">
      <div className="datatable-header">
        <DataTable
          columns={columnas}
          data={data}
          title="Informacion"
        />
      </div>
      <div className="datatable-body"></div>
    </div>
  );
};

export default Puntaje;

