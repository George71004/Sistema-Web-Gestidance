const express = require("express");
const cors = require("cors");
const pool = require("./db/db");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint de login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Realizamos la consulta para encontrar al usuario en la base de datos
    console.log([email]);
    const result = await pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    console.log(result.rows);
    // Verificamos si encontramos un usuario con el correo proporcionado
    if (result.rows.length > 0) {
      const user = result.rows[0]; // El primer usuario encontrado

      // Verificamos si la contraseña es correcta
      if (user.contraseña === password) {
        // Si las credenciales son correctas, respondemos con un mensaje y un token
        res
          .status(200)
          .json({ message: "Login exitoso", token: "fake-jwt-token" });
      } else {
        // Si la contraseña es incorrecta, respondemos con un error
        res
          .status(401)
          .json({ message: "Credenciales inválidas (contraseña incorrecta)" });
      }
    } else {
      // Si no se encuentra el usuario en la base de datos, respondemos con un error
      res
        .status(401)
        .json({ message: "Credenciales inválidas (usuario no encontrado)" });
    }
  } catch (err) {
    console.error("Error en la consulta a la base de datos: ", err.message);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

// Escuchar en el puerto
app.listen(3001, () => {
  console.log("Backend ejecutándose en http://localhost:3001");
});
