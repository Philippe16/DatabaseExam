import driver from '../config/neo4jConfig';

interface Recommendation {
    id: string;
    name: string;
    price: number;
}

const getRecommendations = async (userId: string): Promise<Recommendation[]> => {
    const session = driver.session();
    const result = await session.run(
        'MATCH (u:User)-[:PURCHASED]->(s:Skin) WHERE u.id = $userId RETURN s',
        { userId }
    );
    session.close();
    return result.records.map(record => record.get('s').properties) as Recommendation[];
};

export { getRecommendations, Recommendation };
