import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Pantalla Principal/header";
import Login from "./components/Pantalla Principal/Login";
import Fondo from "./components/Pantalla Principal/Fondo-principal";
import WelcomeMessage from "./components/Pantalla Principal/WelcomeMessage";
import HomePage from "./components/Pantalla Principal/home-page"; // Importamos el nuevo HomePage
import Inscripcion from "./components/Otras pantallas/Inscripcion";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"; // Verifica si estamos en la página de login
  const isHomePage = location.pathname === "/"; // Verifica si estamos en la página de inicio

  return (
    <>
      <Header />

      {/* Fondo y WelcomeMessage solo en la página de inicio */}
      {isHomePage && <Fondo isLoginPage={isLoginPage} />}
      {isHomePage && <WelcomeMessage />}

      <Routes>
        <Route path="/inscripcion" element={<Inscripcion />} />{" "}
        {/* Ruta para Inscripción */}
        <Route path="/login" element={<Login />} />
        {/* Reemplazamos el contenido de la página de inicio por HomePage */}
        <Route path="/" element={<HomePage />} />{" "}
        {/* Aquí cargamos el componente HomePage */}
      </Routes>
    </>
  );
};

export default App;
