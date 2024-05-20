import connect from '../config/mongoConfig';

interface Order {
    id: string;
    userId: string;
    skinId: number;
    date: string;
}

const getAllOrders = async (): Promise<Order[]> => {
    const db = await connect();
    return db.collection('orders').find().toArray() as Promise<Order[]>;
};

export { getAllOrders, Order };
