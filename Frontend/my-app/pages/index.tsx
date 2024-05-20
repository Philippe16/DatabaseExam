import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [skins, setSkins] = useState([]);

    useEffect(() => {
        const fetchSkins = async () => {
            try {
                const response = await axios.get('/api/skins');
                setSkins(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSkins();
    }, []);

    return (
        <div>
            <h1>CS:GO Skins</h1>
            <ul>
                {skins.map((skin) => (
                    <li key={skin.id}>
                        {skin.name} - ${skin.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
