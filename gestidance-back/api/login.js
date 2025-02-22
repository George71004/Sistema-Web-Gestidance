require("dotenv").config({ path: "../.env" }); // Cargar las variables de entorno desde el archivo .env

const express = require("express");
const { Client } = require("pg");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect();

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const query = {
    text: 'SELECT * FROM usuario WHERE correo = $1 AND "contraseña" = $2',
    values: [email, password],
  };

  try {
    const result = await client.query(query);
    if (result.rows.length > 0) {
      res.status(200).json({ message: "Login exitoso", token: "dummy-token" });
    } else {
      res.status(401).json({ message: "Correo o contraseña incorrectos" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error en el servidor", error: err.stack });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
