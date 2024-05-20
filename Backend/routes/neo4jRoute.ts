import express from 'express';
import { getRecs } from '../controllers/neo4jController';

const router = express.Router();

router.get('/recommendations/:userId', getRecs);

export default router;
