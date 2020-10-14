import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'apifutbolweb',
    port: 5432
});

pool.connect().then(() => console.log("Successfully connected to PostgreSQL"))
    .catch(err => console.log(err));

