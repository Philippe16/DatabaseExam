import { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/orders');
                setOrders(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Orders</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        User: {order.userId}, Skin: {order.skinId}, Date: {order.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
