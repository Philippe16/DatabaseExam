import { Request, Response } from 'express';
import { getRecommendations, Recommendation } from '../models/neo4jModel';

const getRecs = async (req: Request, res: Response): Promise<void> => {
    try {
        const recommendations: Recommendation[] = await getRecommendations(req.params.userId);
        res.json(recommendations);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export { getRecs };
