import express from 'express';
import { getOrders } from '../controllers/mongoController';

const router = express.Router();

router.get('/orders', getOrders);

export default router;
