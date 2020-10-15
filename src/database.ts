import { Pool } from 'pg';
require('dotenv').config();

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect().then(() => console.log("Successfully connected to PostgreSQL"))
    .catch(err => console.log(err));

