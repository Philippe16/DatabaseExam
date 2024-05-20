import { Request, Response } from 'express';
import { getAllOrders, Order } from '../models/mongoModel';

const getOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders: Order[] = await getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export { getOrders };
