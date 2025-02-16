import React from "react";
import "./Contactanos.css"; // Importa el archivo CSS

const Contacto: React.FC = () => {
  return (
    <div className="contacto-container">
      <h2 className="contacto-title">Contáctanos</h2>
      <form className="contacto-form">
        <div className="input-group">
          <label htmlFor="nombre">Nombre y Apellido</label>
          <input type="text" id="nombre" name="nombre" className="input" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" className="input" />
        </div>
        <div className="input-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" className="textarea"></textarea>
        </div>
        <button type="submit" className="button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
