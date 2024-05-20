import { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const userId = 'sampleUserId'; // Replace with actual user ID

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get(`/api/recommendations?userId=${userId}`);
                setRecommendations(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecommendations();
    }, []);

    return (
        <div>
            <h1>Recommendations</h1>
            <ul>
                {recommendations.map((rec) => (
                    <li key={rec.id}>
                        {rec.name} - ${rec.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;
