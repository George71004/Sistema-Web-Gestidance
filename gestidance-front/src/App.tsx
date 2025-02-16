import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Pantalla Principal/header";
import Login from "./components/Pantalla Principal/Login";
import Fondo from "./components/Pantalla Principal/Fondo-principal";
import WelcomeMessage from "./components/Pantalla Principal/WelcomeMessage";
import HomePage from "./components/Pantalla Principal/home-page"; // Importamos el nuevo HomePage

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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <Header />
      {/* Fondo y WelcomeMessage solo en la página de inicio */}
      {isHomePage && (
        <div id="fondo">
          <Fondo isLoginPage={isLoginPage} />
        </div>
      )}
      {isHomePage && (
        <div id="welcome">
          <WelcomeMessage />
        </div>
      )}
      <Routes>
        {/* Ruta para Inscripción */}
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        {/* Reemplazamos el contenido de la página de inicio por HomePage */}
        <Route path="/" element={<HomePage />} />{" "}
      </Routes>
    </>
  );
};

export default App;
