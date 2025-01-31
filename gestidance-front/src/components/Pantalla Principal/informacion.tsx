import React from "react";
import "./informacion.css";

const Información = () => {
  return (
    <section className="informative-section">
      <div className="informative-content">
        <h2>Información Adicional</h2>
        <p>
          Aquí puedes agregar contenido informativo que estará disponible en la
          parte inferior de la pantalla. Este contenido no afectará el fondo ni
          los otros componentes que ya existen.
        </p>
      </div>
    </section>
  );
};

export default Información;
