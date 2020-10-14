import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import queries from '../utils/queries';
import { pool } from '../database';

export const getMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const match: QueryResult = await pool.query(queries.GET_MATCH, [id]);
        return res.status(200).json({ status: 200, match: match.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getMatches = async (req: Request, res: Response): Promise<Response> => {
    try {
        const matches: QueryResult = await pool.query(queries.GET_MATCHES);
        return res.status(200).json({ status: 200, matches: matches.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { fecha_partido } = req.body;
        await pool.query(queries.CREATE_MATCH, [fecha_partido]);
        return res.status(200).json({ status: 200, message: 'Match successfully created', body: { matchDate: fecha_partido } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { fecha_partido } = req.body;
        await pool.query(queries.UPDATE_MATCH, [fecha_partido, id]);
        return res.status(200).json({ status: 200, message: `Match date ${id} successfully updated`, body: { matchDate: fecha_partido } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_MATCH, [id]);
        return res.status(200).json({ status: 200, message: `Match ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getClubMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const clubMatch: QueryResult = await pool.query(queries.GET_CLUB_MATCH, [id]);
        return res.status(200).json({ status: 200, clubMatch: clubMatch.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getClubMatches = async (req: Request, res: Response): Promise<Response> => {
    try {
        const clubMatches: QueryResult = await pool.query(queries.GET_CLUB_MATCHES);
        return res.status(200).json({ status: 200, clubMatches: clubMatches.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createClubMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { resultado_partido_club, id_partido, id_club_competicion_local, id_club_competicion_visitante } = req.body;
        await pool.query(queries.CREATE_CLUB_MATCH, [resultado_partido_club, id_partido, id_club_competicion_local, id_club_competicion_visitante]);
        return res.status(200).json({ status: 200, message: 'Club match successfully created', body: { clubMatch: resultado_partido_club } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateClubMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { resultado_partido_club, id_partido, id_club_competicion_local, id_club_competicion_visitante } = req.body;
        await pool.query(queries.UPDATE_CLUB_MATCH, [resultado_partido_club, id_partido, id_club_competicion_local, id_club_competicion_visitante, id]);
        return res.status(200).json({ status: 200, message: `Club match ${id} successfully updated`, body: { clubMatch: resultado_partido_club } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteClubMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_CLUB_MATCH, [id]);
        return res.status(200).json({ status: 200, message: `Club match ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getNationalMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const nationalMatch: QueryResult = await pool.query(queries.GET_NATIONAL_MATCH, [id]);
        return res.status(200).json({ status: 200, nationalMatch: nationalMatch.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getNationalMatches = async (req: Request, res: Response): Promise<Response> => {
    try {
        const nationalMatches: QueryResult = await pool.query(queries.GET_NATIONAL_MATCHES);
        return res.status(200).json({ status: 200, nationalMatches: nationalMatches.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createNationalMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { resultado_partido_seleccion, id_partido, id_seleccion_competicion_local, id_seleccion_competicion_visitante } = req.body;
        await pool.query(queries.CREATE_NATIONAL_MATCH, [resultado_partido_seleccion, id_partido, id_seleccion_competicion_local, id_seleccion_competicion_visitante]);
        return res.status(200).json({ status: 200, message: 'National match successfully created', body: { nationalMatch: resultado_partido_seleccion } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateNationalMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { resultado_partido_seleccion, id_partido, id_seleccion_competicion_local, id_seleccion_competicion_visitante } = req.body;
        await pool.query(queries.UPDATE_NATIONAL_MATCH, [resultado_partido_seleccion, id_partido, id_seleccion_competicion_local, id_seleccion_competicion_visitante, id]);
        return res.status(200).json({ status: 200, message: `National match ${id} successfully updated`, body: { nationalMatch: resultado_partido_seleccion } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteNationalMatch = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_NATIONAL_MATCH, [id]);
        return res.status(200).json({ status: 200, message: `National match ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};