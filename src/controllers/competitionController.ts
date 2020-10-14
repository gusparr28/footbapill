import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import queries from '../utils/queries';
import { pool } from '../database';

export const getCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const competition: QueryResult = await pool.query(queries.GET_COMPETITION, [id]);
        return res.status(200).json({ status: 200, competition: competition.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getCompetitions = async (req: Request, res: Response): Promise<Response> => {
    try {
        const competitions: QueryResult = await pool.query(queries.GET_COMPETITIONS);
        return res.status(200).json({ status: 200, competitions: competitions.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nombre_competicion } = req.body;
        await pool.query(queries.CREATE_COMPETITION, [nombre_competicion]);
        return res.status(200).json({ status: 200, message: 'Club successfully created', body: { competition: nombre_competicion } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { nombre_competicion } = req.body;
        await pool.query(queries.UPDATE_COMPETITION, [nombre_competicion, id]);
        return res.status(200).json({ status: 200, message: `Competition ${id} successfully updated`, body: { competition: nombre_competicion } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_COMPETITION, [id]);
        return res.status(200).json({ status: 200, message: `Competition ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getClubCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const clubCompetition: QueryResult = await pool.query(queries.GET_CLUB_COMPETITION, [id]);
        return res.status(200).json({ status: 200, clubCompetition: clubCompetition.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getClubCompetitions = async (req: Request, res: Response): Promise<Response> => {
    try {
        const clubCompetitions: QueryResult = await pool.query(queries.GET_CLUB_COMPETITIONS);
        return res.status(200).json({ status: 200, clubCompetitions: clubCompetitions.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createClubCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id_club, id_competicion } = req.body;
        await pool.query(queries.CREATE_CLUB_COMPETITION, [id_club, id_competicion]);
        return res.status(200).json({ status: 200, message: 'Club competition successfully created' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateClubCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { id_club, id_competicion } = req.body;
        await pool.query(queries.UPDATE_CLUB_COMPETITION, [id_club, id_competicion, id]);
        return res.status(200).json({ status: 200, message: `Club competition ${id} successfully updated` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteClubCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_CLUB_COMPETITION, [id]);
        return res.status(200).json({ status: 200, message: `Club competition ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getNationalCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const nationalCompetition: QueryResult = await pool.query(queries.GET_NATIONAL_COMPETITION, [id]);
        return res.status(200).json({ status: 200, nationalCompetition: nationalCompetition.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getNationalCompetitions = async (req: Request, res: Response): Promise<Response> => {
    try {
        const nationalCompetitions: QueryResult = await pool.query(queries.GET_NATIONAL_COMPETITIONS);
        return res.status(200).json({ status: 200, nationalCompetitions: nationalCompetitions.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createNationalCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id_seleccion, id_competicion } = req.body;
        await pool.query(queries.CREATE_NATIONAL_COMPETITION, [id_seleccion, id_competicion]);
        return res.status(200).json({ status: 200, message: 'National competition successfully created' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateNationalCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { id_seleccion, id_competicion } = req.body;
        await pool.query(queries.UPDATE_NATIONAL_COMPETITION, [id_seleccion, id_competicion, id]);
        return res.status(200).json({ status: 200, message: `National competition ${id} successfully updated` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteNationalCompetition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_NATIONAL_COMPETITION, [id]);
        return res.status(200).json({ status: 200, message: `National competition ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};