import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import queries from '../utils/queries';
import { pool } from '../database';

export const getCoach = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const coach: QueryResult = await pool.query(queries.GET_COACH, [id]);
        return res.status(200).json({ status: 200, coach: coach.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getCoaches = async (req: Request, res: Response): Promise<Response> => {
    try {
        const coaches: QueryResult = await pool.query(queries.GET_COACHES);
        return res.status(200).json({ status: 200, coaches: coaches.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createCoach = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nombre_director_tecnico, edad_director_tecnico, fecha_director_tecnico, salario_director_tecnico } = req.body;
        await pool.query(queries.CREATE_COACH, [nombre_director_tecnico, edad_director_tecnico, fecha_director_tecnico, salario_director_tecnico]);
        return res.status(200).json({ status: 200, message: 'Coach successfully created', body: { coach: nombre_director_tecnico } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateCoach = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { nombre_director_tecnico, edad_director_tecnico, fecha_director_tecnico, salario_director_tecnico } = req.body;
        await pool.query(queries.UPDATE_COACH, [nombre_director_tecnico, edad_director_tecnico, fecha_director_tecnico, salario_director_tecnico, id]);
        return res.status(200).json({ status: 200, message: `Coach ${id} successfully updated`, body: { coach: nombre_director_tecnico } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteCoach = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_COACH, [id]);
        return res.status(200).json({ status: 200, message: `Coach ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getCoachNationality = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const coachNationality: QueryResult = await pool.query(queries.GET_COACH_NATIONALITY, [id]);
        return res.status(200).json({ status: 200, coachNationality: coachNationality.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getCoachNationalities = async (req: Request, res: Response): Promise<Response> => {
    try {
        const coachNationalities: QueryResult = await pool.query(queries.GET_COACH_NATIONALITIES);
        return res.status(200).json({ status: 200, coachNationalities: coachNationalities.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createCoachNationality = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id_director_tecnico, id_pais } = req.body;
        await pool.query(queries.CREATE_COACH_NATIONALITY, [id_director_tecnico, id_pais]);
        return res.status(200).json({ status: 200, message: 'Coach nationality successfully created' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateCoachNationality = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { id_director_tecnico, id_pais } = req.body;
        await pool.query(queries.UPDATE_COACH_NATIONALITY, [id_director_tecnico, id_pais, id]);
        return res.status(200).json({ status: 200, message: `Coach nationality ${id} successfully updated` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteCoachNationality = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_COACH_NATIONALITY, [id]);
        return res.status(200).json({ status: 200, message: `Coach nationality ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};
