import express, { Request, Response } from 'express';
import pool from '../db/db';

const router = express.Router();

// Endpoint para agregar un jurado
router.post('/agregar', async (req: Request, res: Response) => {
  const { numero, nombre, aspecto } = req.body;
  console.log(numero, nombre, aspecto);

  // Validación básica de entrada
  if (!numero || !nombre || !aspecto) {
    res.status(400).json({ message: 'Todos los campos son requeridos' });
    return;
  }

  try {
    // Insertar el jurado en la base de datos
    const result = await pool.query(
      'INSERT INTO jurados(numero, nombre, aspecto) VALUES ($1, $2, $3) RETURNING *',
      [numero, nombre, aspecto]
    );

    if (result.rows.length > 0) {
      const nuevoJurado = result.rows[0]; // Jurado recién insertado
      res.status(201).json({ message: 'Jurado ingresado exitosamente', jurado: nuevoJurado });
    } else {
      res.status(500).json({ message: 'Error al insertar el jurado' });
    }
  } catch (err) {
    console.error('Error en la consulta a la base de datos:', err);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

// Endpoint para modificar un jurado
router.post('/modificar', async (req: Request, res: Response) => {
  const { numero, nombre, aspecto } = req.body;

  // Validación básica de entrada
  if (!numero || !nombre || !aspecto) {
    res.status(400).json({ message: 'Todos los campos (numero, nombre, aspecto) son requeridos' });
    return;
  }

  try {
    // Actualizamos el jurado identificado por su "numero"
    const result = await pool.query(
      'UPDATE jurados SET nombre=$2, aspecto=$3 WHERE numero=$1 RETURNING *',
      [numero, nombre, aspecto]
    );

    if (result.rows.length > 0) {
      const juradoModificado = result.rows[0];
      res.status(200).json({ message: 'Jurado modificado exitosamente', jurado: juradoModificado });
    } else {
      res.status(404).json({ message: 'Jurado no encontrado o error al modificar' });
    }
  } catch (err) {
    console.error('Error en la consulta a la base de datos:', err);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

// Endpoint para eliminar un jurado (por "numero")
router.post('/eliminar', async (req: Request, res: Response) => {
  const { numero } = req.body;
  console.log(numero);

  if (!numero) {
    res.status(400).json({ message: 'El campo "numero" es requerido para eliminar el jurado' });
    return;
  }

  try {
    const result = await pool.query(
      'DELETE FROM jurados WHERE numero=$1 RETURNING *',
      [numero]
    );

    if (result.rows.length > 0) {
      const juradoEliminado = result.rows[0];
      res.status(200).json({ message: 'Jurado eliminado exitosamente', jurado: juradoEliminado });
    } else {
      res.status(404).json({ message: 'Jurado no encontrado o error al eliminar' });
    }
  } catch (err) {
    console.error('Error en la consulta a la base de datos:', err);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

// Endpoint para obtener todos los jurados
router.get('/obtener', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM jurados');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error en la consulta a la base de datos:", err);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

export default router;
