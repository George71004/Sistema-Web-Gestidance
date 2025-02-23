import express, { Request, Response } from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Configura dotenv para cargar variables de entorno
dotenv.config();

// Crear una instancia de Express
const app: express.Application = express();
// Middleware
app.use(cors());
app.use(express.json());

// Configurar la conexión a la base de datos
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

// Interfaz para el tipo de usuario
interface Usuario {
    id: number;
    correo: string;
    contraseña: string;
}

// Endpoint de login
app.post("/api/login", async (req: Request, res: Response) => {
    const { email, password }: { email: string; password: string } = req.body;

    try {
        // Realizamos la consulta para encontrar al usuario en la base de datos
        const result = await pool.query('SELECT * FROM "usuarios" WHERE correo = $1', [email]);

        // Verificamos si encontramos un usuario con el correo proporcionado
        if (result.rows.length > 0) {
            const user = result.rows[0]; // El primer usuario encontrado

            // Verificamos si la contraseña es correcta
            if (user.contraseña === password) {
                // Si las credenciales son correctas, respondemos con un mensaje y un token
                res.status(200).json({ message: "Login exitoso", token: "fake-jwt-token" });
            } else {
                // Si la contraseña es incorrecta, respondemos con un error
                res.status(401).json({ message: "Credenciales inválidas (contraseña incorrecta)" });
            }
        } else {
            // Si no se encuentra el usuario en la base de datos, respondemos con un error
            res.status(401).json({ message: "Credenciales inválidas (usuario no encontrado)" });
        }
    } catch (err) {
        console.error("Error en la consulta a la base de datos: ", err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

// Escuchar en el puerto
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend ejecutándose en http://localhost:${PORT}`);
});