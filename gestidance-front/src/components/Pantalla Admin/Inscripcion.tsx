import React, { useState } from "react";
import axios, { AxiosError } from "axios"; // Importamos AxiosError para el tipo de error

export default function AcademySignup() {
  const [academyName, setAcademyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/signup", {
        academyName,
        email,
        phone,
        location,
      });

      console.log(response.data.message); // Mostrar mensaje de éxito
      alert("¡Inscripción exitosa!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Verificamos si es un error de Axios
        setError(
          err.response?.data?.message || "Error al inscribir la academia"
        );
      } else {
        setError("Error desconocido al inscribir la academia");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Inscripción de Academia
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Nombre de la Academia */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="academy-name"
            >
              Nombre de la Academia
            </label>
            <input
              type="text"
              id="academy-name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Nombre de la academia"
              value={academyName}
              onChange={(e) => setAcademyName(e.target.value)}
              required
            />
          </div>

          {/* Correo Electrónico */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Número de Teléfono */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Número de teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Ubicación de la Academia */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="location"
            >
              Ubicación
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Dirección de la academia"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* Mensaje de error si lo hay */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Inscribir Academia
          </button>
        </form>
      </div>
    </div>
  );
}
