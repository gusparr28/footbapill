import { Request, Response } from 'express';
import { genSaltSync, hashSync } from 'bcryptjs';
import { QueryResult } from 'pg';

import queries from '../utils/queries';
import { pool } from '../database';

export const signUpController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) return res.status(422).json({ error: 'Please complete all fields' });
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);
        const user: QueryResult = await pool.query(queries.SIGN_UP, [email, hashedPassword]);
        res.status(200).json({ status: 200, message: 'User successfully signed up', data: user.rows });
    } catch (e) {
        console.log(e);
        res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};
