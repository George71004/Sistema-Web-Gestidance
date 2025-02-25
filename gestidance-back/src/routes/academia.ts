import express, { Request, Response } from 'express';
import pool from '../db/db';

const router = express.Router(); // Inicialización del router

// Ejemplo de uso de pool en el router
const academia = express.Router();

academia.post('/agregar', async (req: Request, res: Response) => {
    const { academyName,
            registrationDate,
            directorName,
            directorPhone }: 
        {   academyName: string;
            registrationDate: string;
            directorName: string; 
            directorPhone: string } = req.body;

    try {
        console.log([academyName]);
        // Realizamos la consulta para encontrar al usuario en la base de datos
        const result = await pool.query('INSERT INTO academias(nombre, fechainsc, nombdirect, tlfdirect) VALUES ($1, $2, $3, $4)', [academyName,registrationDate,directorName,directorPhone]);

        res.status(200).json({ message: "Academia ingresada!"});
    } catch (err) {
        console.error("Error en la consulta a la base de datos: ", err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

academia.get('/obtener', async (req: Request, res: Response) => {

    try {
        // Realizamos la consulta para encontrar al usuario en la base de datos
        const result = await pool.query('SELECT * FROM academias');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Error en la consulta a la base de datos: ", err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

export default academia;