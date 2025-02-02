import React, { useState } from "react";
import "./Inscripcion.css"; // Asegúrate de que la ruta sea la correcta
import axios from "axios";

export default function AcademySignup() {
  const [academyName, setAcademyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false); // Estado para mostrar el formulario

  // Activar el formulario con animación
  const handleShowForm = () => {
    setIsVisible(true);
  };

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
      setError("Error al inscribir la academia");
    }
  };

  return (
    <div>
      {/* Fondo oscuro semitransparente */}
      <div
        className={`form-background ${isVisible ? "distort-background" : ""}`}
      ></div>

      {/* Contenedor del formulario */}
      <div className={`login-container ${isVisible ? "show" : ""}`}>
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Inscripción de Academia
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Nombre de la Academia */}
          <div className="mb-4">
            <label
              htmlFor="academy-name"
              className="block text-gray-700 font-medium mb-2"
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
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
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

          {/* Teléfono */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
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

          {/* Ubicación */}
          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-gray-700 font-medium mb-2"
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

          {/* Mensaje de error */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Botón de inscripción */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Inscribir Academia
          </button>
        </form>
      </div>

      {/* Botón para mostrar el formulario */}
      <button
        onClick={handleShowForm}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Abrir Formulario de Inscripción
      </button>
    </div>
  );
}
