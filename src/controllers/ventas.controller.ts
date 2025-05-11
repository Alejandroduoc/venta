import { Request, Response } from 'express';
import { pool } from '../database';

export const createSale = async (req: Request, res: Response) => {
  const { codigo_producto, cantidad, precio_venta, fecha_venta } = req.body;

  if (!codigo_producto || !cantidad || !precio_venta || !fecha_venta) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newSale = {
    codigo_producto,
    cantidad,
    precio_venta,
    fecha_venta,
    fecha_actual: new Date(), // Assuming fecha_actual should be the current time
  };

  try {
    const [rows] = await pool.query('INSERT INTO ventas SET ?', [newSale]);
    res.status(201).json({ message: 'Sale created successfully', saleId: (rows as any).insertId });
  } catch (error) {
    console.error('Error inserting sale:', error);
    res.status(500).json({ message: 'Error creating sale', error });
  }
};