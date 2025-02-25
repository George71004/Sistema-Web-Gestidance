import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

//Homepage
import Header from "./components/Pantalla Principal/header";
import Login from "./components/Pantalla Principal/Login";
import Fondo from "./components/Pantalla Principal/Fondo-principal";
import WelcomeMessage from "./components/Pantalla Principal/WelcomeMessage";
import HomePage from "./components/Pantalla Principal/home-page";

//Admin
import Admin from "./components/Pantalla Admin/Pantalla-admin";
import AdminHeader from "./components/Pantalla Admin/header-admin";

//Forms
import Inscripcion_academia from "./components/Pantalla Admin/Inscripcion-academia";
import Inscripcion_baile from "./components/Pantalla Admin/Inscripcion";
import Puntos from "./components/Pantalla Admin/Puntaje";
import Jurado from "./components/Pantalla Admin/jurado";
import Categoria from "./components/Pantalla Admin/Categoria";
import PartAcademia from "./components/Pantalla Admin/Participacion-academia";
import PartBaile from "./components/Pantalla Admin/Participacion-bailarin";

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isHomePage = location.pathname === "/";
  const isAdminRoute = location.pathname.startsWith("/admin");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate("/admin"); // Corregir la ruta para la página de administración
  };

  return (
    <>
      {!isAdminRoute && <Header />}
      {isAdminRoute && <AdminHeader />}
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
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <Admin isAuthenticated={isAuthenticated} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/inscripcion_academia"
          element={
            isAuthenticated ? (
              <Inscripcion_academia />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/puntos"
          element={isAuthenticated ? <Puntos /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/inscripcion_baile"
          element={
            isAuthenticated ? <Inscripcion_baile /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/admin/jurado"
          element={isAuthenticated ? <Jurado /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/categoria"
          element={isAuthenticated ? <Categoria /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/participacion_academia"
          element={
            isAuthenticated ? <PartAcademia /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/admin/participacion_baile"
          element={isAuthenticated ? <PartBaile /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
