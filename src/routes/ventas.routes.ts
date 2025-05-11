
import { Router } from 'express';
import { createSale } from '../controllers/ventas.controller';

const router = Router();

router.post('/ventas', createSale);

// Ruta para mostrar un mensaje al acceder a /api/ventas

    

export default router;