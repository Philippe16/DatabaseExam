import pool from '../config/mysqlCSonfig';

interface Skin {
    id: number;
    name: string;
    price: number;
}

const getAllSkins = async (): Promise<Skin[]> => {
    const [rows] = await pool.query('SELECT * FROM skins');
    return rows as Skin[];
};

export { getAllSkins, Skin };
