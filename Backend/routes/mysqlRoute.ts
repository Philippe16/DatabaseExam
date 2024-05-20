import express from 'express';
import { getSkins } from '../controllers/mysqlController';

const router = express.Router();

router.get('/skins', getSkins);

export default router;
