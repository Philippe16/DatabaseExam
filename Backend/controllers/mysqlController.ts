import { Request, Response } from 'express';
import { getAllSkins, Skin } from '../models/mysqlModel';

const getSkins = async (req: Request, res: Response): Promise<void> => {
    try {
        const skins: Skin[] = await getAllSkins();
        res.json(skins);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export { getSkins };
