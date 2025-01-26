const express = require('express');
const cors = require('cors');
const pool = require('./db/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para obtener los usuarios
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "usuario"');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
