import { Router } from 'express';
import { insertSale } from '../controllers/ventas.controller';

const router = Router();

router.post('/ventas', insertSale);

export default router;