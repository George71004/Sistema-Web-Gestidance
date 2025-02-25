import express, { Request, Response } from 'express';
import pool from '../db/db';

const router = express.Router(); // Inicialización del router

// Endpoint para agregar una academia
router.post('/agregar', async (req: Request, res: Response) => {
    const { nombre_academia, nombre_director, telefono_director } = req.body;
    console.log(nombre_academia + nombre_director + telefono_director);
    // Validación básica de entrada
    if (!nombre_academia || !nombre_director || !telefono_director) {
        res.status(400).json({ message: 'Todos los campos son requeridos' });
        return
    }

    try {
        // Realizamos la consulta para insertar la academia en la base de datos
        const result = await pool.query(
            'INSERT INTO academias(nombre, fechainsc, nombdirect, tlfdirect) VALUES ($1, NOW(), $2, $3) RETURNING *',
            [nombre_academia, nombre_director, telefono_director]
        );

        // Verificamos si la inserción fue exitosa
        if (result.rows.length > 0) {
            const nuevaAcademia = result.rows[0]; // La academia recién insertada
            res.status(201).json({ message: 'Academia ingresada exitosamente', academia: nuevaAcademia });
        } else {
            // Si no se insertó correctamente
            res.status(500).json({ message: 'Error al insertar la academia' });
        }
    } catch (err) {
        console.error('Error en la consulta a la base de datos:', err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

// Endpoint para agregar una academia
router.post('/modificar', async (req: Request, res: Response) => {
    const { nombre_academia, nombre_director, telefono_director } = req.body;
    
    // Validación básica de entrada
    if (!nombre_academia || !nombre_director || !telefono_director) {
        res.status(400).json({ message: 'Todos los campos son requeridos' });
        return
    }

    try {
        // Realizamos la consulta para insertar la academia en la base de datos
        const result = await pool.query(
            'UPDATE academias SET nombdirect=$2, tlfdirect=$3 WHERE nombre=$1 RETURNING *',
            [nombre_academia, nombre_director, telefono_director]
        );

        // Verificamos si la inserción fue exitosa
        if (result.rows.length > 0) {
            const nuevaAcademia = result.rows[0]; // La academia recién insertada
            res.status(201).json({ message: 'Academia modificada exitosamente', academia: nuevaAcademia });
        } else {
            // Si no se insertó correctamente
            res.status(500).json({ message: 'Error al modificadar la academia' });
        }
    } catch (err) {
        console.error('Error en la consulta a la base de datos:', err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

// Endpoint para agregar una academia
router.post('/eliminar', async (req: Request, res: Response) => {
    const { nombre_academia } = req.body;
    console.log(nombre_academia);
    try {
        // Realizamos la consulta para insertar la academia en la base de datos
        const result = await pool.query(
            'DELETE FROM academias WHERE nombre=$1',
            [nombre_academia]
        );
        const nuevaAcademia = result.rows[0]; // La academia recién insertada
        res.status(201).json({ message: 'Academia eliminada', academia: nuevaAcademia });
    } catch (err) {
        console.error('Error en la consulta a la base de datos:', err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

router.get('/obtener', async (req: Request, res: Response) => {
    try {
        // Realizamos la consulta para encontrar al usuario en la base de datos
        const result = await pool.query('SELECT * FROM academias');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Error en la consulta a la base de datos: ", err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

export default router;