import express, { Request, Response } from 'express';
import pool from '../db/db';

const router = express.Router(); // Inicialización del router

// Ejemplo de uso de pool en el router
const academia = express.Router();

academia.post('/agregar', async (req: Request, res: Response) => {
    const { nombre_academia,
            fecha,
            nombre_director,
            telefono_director }: 
        {   nombre_academia: string;
            fecha: string;
            nombre_director: string; 
            telefono_director: string } = req.body;

    try {
        // Realizamos la consulta para encontrar al usuario en la base de datos
        const result = await pool.query('INSERT INTO public.academias(nombre, fechainsc, nombdirect, tlfdirect) VALUES ($1, $2, $3, $4)', [nombre_academia,fecha,nombre_director,telefono_director]);

        // Verificamos si encontramos un usuario con el correo proporcionado
        if (result.rows.length > 0) {
            const user = result.rows[0]; // El primer usuario encontrado
            res.status(200).json({ message: "Academia ingresada!"});
        } else {
            // Si no se encuentra el usuario en la base de datos, respondemos con un error
            res.status(401).json({ message: "Credenciales inválidas (usuario no encontrado)" });
        }
    } catch (err) {
        console.error("Error en la consulta a la base de datos: ", err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

export default academia;