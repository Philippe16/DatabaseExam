import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const response = await axios.get('http://localhost:3001/api/skins');
            res.status(200).json(response.data);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
