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

      <Fondo isLoginPage={isLoginPage} />
      {/*Contenido pagina */}

      {/* Mostrar el WelcomeMessage solo en la página de inicio */}
      {isHomePage && <WelcomeMessage />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h2>Página de inicio</h2>} />
      </Routes>
    </>
  );
};

export default App;
