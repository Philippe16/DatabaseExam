import express from 'express';
import mysqlRoutes from './routes/mysqlRoutes';
import mongoRoutes from './routes/mongoRoutes';
import neo4jRoutes from './routes/neo4jRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/api', mysqlRoutes);
app.use('/api', mongoRoutes);
app.use('/api', neo4jRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
