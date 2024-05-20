import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let db: Db;

async function connect(): Promise<Db> {
    if (!db) {
        await client.connect();
        db = client.db(process.env.MONGO_DB_NAME);
    }
    return db;
}

export default connect;
