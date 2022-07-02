import { Request, Response } from 'express';
import { compare, genSaltSync, hashSync } from 'bcryptjs';
import { QueryResult } from 'pg';

import queries from '../utils/queries';
import { pool } from '../database';
import { createToken } from '../utils/Strategies';

export const signUpController = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    try {
        if (!email || !password) return res.status(422).json({
            status: 422,
            error: 'Please complete all fields'
        });
        const savedUser: QueryResult = await pool.query(queries.CHECK_USER, [email]);
        if (savedUser.rows.length != 0) return res.status(422).json({ 
            status: 422,
            error: 'User already exists' 
        });
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);
        const user: QueryResult = await pool.query(queries.SIGN_UP, [email, hashedPassword]);
        return res.status(200).json({ status: 200, message: 'User successfully signed up', user: user.rows });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const signInController = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    try {
        if (!email || !password) return res.status(422).json({ 
            status: 422,
            error: 'Please complete all fields' 
        });
        const savedUser: QueryResult = await pool.query(queries.CHECK_USER, [email]);
        if (savedUser.rows.length == 0) return res.status(422).json({ 
            status: 422,
            error: 'Invalid credentials' 
        });
        const passFromDB: QueryResult = await pool.query(queries.GET_PASSWORD, [email]);
        const correctCreds = await compare(password, passFromDB.rows[0].clave_usuario);
        if (correctCreds) {
            return res.status(200).json({
                status: 200,
                message: 'User successfully signed in',
                token: createToken(email)
            });
        }
        return res.status(422).json({ status: 422, error: 'Invalid credentials' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};
