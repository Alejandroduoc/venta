
import { Router } from 'express';
import { createSale } from '../controllers/ventas.controller';

const router = Router();

router.post('/ventas', createSale);

export default router;