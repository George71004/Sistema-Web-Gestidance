import express, { Request, Response } from 'express';
import pool from '../db/db';

const router = express.Router(); // Inicialización del router

// Endpoint para agregar un bailarín
router.post('/agregar', async (req: Request, res: Response) => {
    const { cedula, fechaNac, instagram, genero, academia } = req.body;
    console.log(cedula, fechaNac, instagram, genero, academia);

    // Validación básica de entrada
    if (!cedula || !fechaNac || !instagram || !genero || !academia) {
        res.status(400).json({ message: 'Todos los campos son requeridos' });
        return;
    }

    try {
        // Realizamos la consulta para insertar el bailarín en la base de datos
        const result = await pool.query(
            `INSERT INTO public.bailarines(
                cedula, fecha_nacimiento, instagram, sexo, nombre_academia
            ) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [cedula, fechaNac, instagram, genero, academia]
        );

        // Verificamos si la inserción fue exitosa
        if (result.rows.length > 0) {
            const nuevoBailarin = result.rows[0]; // El bailarín recién insertado
            res.status(201).json({ message: 'Bailarín ingresado exitosamente', bailarin: nuevoBailarin });
        } else {
            // Si no se insertó correctamente
            res.status(500).json({ message: 'Error al insertar el bailarín' });
        }
    } catch (err) {
        console.error('Error en la consulta a la base de datos:', err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

// Endpoint para agregar una academia
router.post('/modificar', async (req: Request, res: Response) => {
    const { cedula, fechaNac, instagram, genero, academia } = req.body;

    // Validación básica de entrada
    if (!cedula || !fechaNac || !instagram || !genero || !academia) {
        res.status(400).json({ message: 'Todos los campos son requeridos' });
        return;
    }

    try {
        // Realizamos la consulta para insertar la academia en la base de datos
        const result = await pool.query(
            'UPDATE bailarines SET fecha_nacimiento=$2, instagram=$3, sexo=$4, nombre_academia=$5 WHERE cedula=$1 RETURNING *',
            [cedula, fechaNac, instagram, genero, academia]
        );

        // Verificamos si la inserción fue exitosa
        if (result.rows.length > 0) {
            const nuevoBailarin = result.rows[0]; // La academia recién insertada
            res.status(201).json({ message: 'Bailarin modificado exitosamente', academia: nuevoBailarin });
        } else {
            // Si no se insertó correctamente
            res.status(500).json({ message: 'Error al modificadar el bailarin' });
        }
    } catch (err) {
        console.error('Error en la consulta a la base de datos:', err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

// Endpoint para agregar una academia
router.post('/eliminar', async (req: Request, res: Response) => {
    const { cedula } = req.body;
    console.log(cedula);
    try {
        // Realizamos la consulta para insertar la academia en la base de datos
        const result = await pool.query(
            'DELETE FROM bailarines WHERE cedula=$1',
            [cedula]
        );
        res.status(201).json({ message: 'Bailarin eliminado'});
    } catch (err) {
        console.error('Error en la consulta a la base de datos:', err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

router.get('/obtener', async (req: Request, res: Response) => {
    try {
        // Realizamos la consulta para encontrar al usuario en la base de datos
        const result = await pool.query('SELECT * FROM bailarines');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Error en la consulta a la base de datos: ", err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

export default router;