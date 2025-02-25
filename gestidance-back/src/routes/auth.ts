import express, { Request, Response } from 'express';;
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import pool from '../db/db';

const authRouter = express.Router(); // Inicialización del router

dotenv.config(); 
// Endpoint de login
authRouter.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Validación básica de entrada
    if (!email || !password) {
        res.status(400).json({ message: 'Email y contraseña son requeridos' });
        return;
    }

    try {
        // Buscar el usuario en la base de datos
        const result = await pool.query('SELECT * FROM usuarios WHERE correo = $1', [email]);

        if (result.rows.length > 0) {
            const user = result.rows[0];

            // Verificar la contraseña
            const isPasswordValid = await bcrypt.compare(password, user.contraseña);

            if (isPasswordValid) {
                // Si las credenciales son correctas, responder con un token (simulado)
                res.status(200).json({ message: 'Login exitoso', token: 'fake-jwt-token' });
            } else {
                // Si la contraseña es incorrecta
                res.status(401).json({ message: 'Credenciales inválidas (contraseña incorrecta)' });
            }
        } else {
            // Si el usuario no existe
            res.status(401).json({ message: 'Credenciales inválidas (usuario no encontrado)' });
        }
    } catch (err) {
        console.error('Error en la consulta a la base de datos:', err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Endpoint de registro
authRouter.post('/register', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Validación básica de entrada
    if (!email || !password) {
        res.status(400).json({ message: 'Todos los campos son requeridos' });
        return;
    }

    try {
        // Verificar si el usuario ya existe
        const userExists = await pool.query('SELECT * FROM usuarios WHERE correo = $1', [email]);

        if (userExists.rows.length > 0) {
            res.status(400).json({ message: 'El usuario ya existe' });
            return;
        }

        // Encriptar la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insertar el nuevo usuario en la base de datos
        const result = await pool.query(
            'INSERT INTO usuarios (correo, contraseña) VALUES ($1, $2) RETURNING *',
            [email, hashedPassword]
        );

        // Responder con el usuario creado (sin la contraseña)
        const newUser = result.rows[0];
        delete newUser.contraseña; // Eliminar la contraseña de la respuesta

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (err) {
        console.error('Error en el registro:', err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

export default authRouter;