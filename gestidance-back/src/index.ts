import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth';

// Configura dotenv para cargar variables de entorno
dotenv.config();

// Crear una instancia de Express
const app = express();

// Middleware
app.use(cors()); // Habilita CORS
app.use(express.json()); // Parsea el cuerpo de las solicitudes en formato JSON

// Usar el router de autenticación
app.use('/api/auth', authRouter);

// Manejador de errores global
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Error no controlado:', err.stack);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

// Escuchar en el puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend ejecutándose en http://localhost:${PORT}`);
});