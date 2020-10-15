import { Pool } from 'pg';
require('dotenv').config();

export const pool = new Pool({
    user: 'aorbivcutbdxue',
    host: 'ec2-52-3-4-232.compute-1.amazonaws.com',
    password: 'bd016d417aaf9c96da458a29573e2f436d25513e4c7185558b60fa531c537b42',
    database: 'dfh1v31ete2n74',
    port: 5432
});

pool.connect().then(() => console.log("Successfully connected to PostgreSQL"))
    .catch(err => console.log(err));

