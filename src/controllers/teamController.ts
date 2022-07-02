import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import queries from '../utils/queries';
import { pool } from '../database';

export const getClub = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const club: QueryResult = await pool.query(queries.GET_CLUB, [id]);
        return res.status(200).json({ status: 200, club: club.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getClubs = async (req: Request, res: Response): Promise<Response> => {
    try {
        const clubs: QueryResult = await pool.query(queries.GET_CLUBS);
        return res.status(200).json({ status: 200, clubs: clubs.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createClub = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nombre_club, propietario_club, estadio_club, id_director_tecnico, id_ciudad } = req.body;
        await pool.query(queries.CREATE_CLUB, [nombre_club, propietario_club, estadio_club, id_director_tecnico, id_ciudad]);
        return res.status(200).json({ status: 200, message: 'Club successfully created', body: { club: nombre_club } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateClub = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { nombre_club, propietario_club, estadio_club, id_director_tecnico, id_ciudad } = req.body;
        await pool.query(queries.UPDATE_CLUB, [nombre_club, propietario_club, estadio_club, id_director_tecnico, id_ciudad, id]);
        return res.status(200).json({ status: 200, message: `Club ${id} successfully updated`, body: { club: nombre_club } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteClub = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_CLUB, [id]);
        return res.status(200).json({ status: 200, message: `Club ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getNational = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const national: QueryResult = await pool.query(queries.GET_NATIONAL, [id]);
        return res.status(200).json({ status: 200, national: national.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getNationals = async (req: Request, res: Response): Promise<Response> => {
    try {
        const nationals: QueryResult = await pool.query(queries.GET_NATIONALS);
        return res.status(200).json({ status: 200, nationals: nationals.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createNational = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nombre_seleccion, id_director_tecnico } = req.body;
        await pool.query(queries.CREATE_NATIONAL, [nombre_seleccion, id_director_tecnico]);
        return res.status(200).json({ status: 200, message: 'National successfully created', body: { national: nombre_seleccion } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateNational = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const { nombre_seleccion, id_director_tecnico } = req.body;
        await pool.query(queries.UPDATE_NATIONAL, [nombre_seleccion, id_director_tecnico, id]);
        return res.status(200).json({ status: 200, message: `National ${id} successfully updated`, body: { national: nombre_seleccion } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteNational = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_NATIONAL, [id]);
        return res.status(200).json({ status: 200, message: `National ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};