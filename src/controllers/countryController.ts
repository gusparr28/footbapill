import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import queries from '../utils/queries';
import { pool } from '../database';

export const getCity = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const city: QueryResult = await pool.query(queries.GET_CITY, [id]);
        return res.status(200).json({ status: 200, city: city.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getCities = async (req: Request, res: Response): Promise<Response> => {
    try {
        const cities: QueryResult = await pool.query(queries.GET_CITIES);
        return res.status(200).json({ status: 200, cities: cities.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createCity = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nombre_ciudad, poblacion_ciudad, estado_ciudad, id_pais } = req.body;
        await pool.query(queries.CREATE_CITY, [nombre_ciudad, poblacion_ciudad, estado_ciudad, id_pais]);
        return res.status(200).json({ status: 200, message: 'City successfully created', body: { city: nombre_ciudad } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateCity = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { nombre_ciudad, poblacion_ciudad, estado_ciudad, id_pais } = req.body;
        await pool.query(queries.UPDATE_CITY, [nombre_ciudad, poblacion_ciudad, estado_ciudad, id_pais, id]);
        return res.status(200).json({ status: 200, message: `City ${id} successfully updated`, body: { city: nombre_ciudad } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteCity = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_CITY, [id]);
        return res.status(200).json({ status: 200, message: `City ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getCountry = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const country: QueryResult = await pool.query(queries.GET_COUNTRY, [id]);
        return res.status(200).json({ status: 200, country: country.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getCountries = async (req: Request, res: Response): Promise<Response> => {
    try {
        const countries: QueryResult = await pool.query(queries.GET_COUNTRIES);
        return res.status(200).json({ status: 200, countries: countries.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createCountry = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nombre_pais, continente_pais } = req.body;
        await pool.query(queries.CREATE_COUNTRY, [nombre_pais, continente_pais]);
        return res.status(200).json({ status: 200, message: 'Country successfully created', body: { country: nombre_pais } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateCountry = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { nombre_pais, continente_pais } = req.body;
        await pool.query(queries.UPDATE_COUNTRY, [nombre_pais, continente_pais, id]);
        return res.status(200).json({ status: 200, message: `Country ${id} successfully updated`, body: { country: nombre_pais } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteCountry = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_COUNTRY, [id]);
        return res.status(200).json({ status: 200, message: `Country ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getLeague = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const league: QueryResult = await pool.query(queries.GET_LEAGUE, [id]);
        return res.status(200).json({ status: 200, league: league.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getLeagues = async (req: Request, res: Response): Promise<Response> => {
    try {
        const leagues: QueryResult = await pool.query(queries.GET_LEAGUES);
        return res.status(200).json({ status: 200, leagues: leagues.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const createLeague = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { cantidad_equipos_liga, nombre_liga, id_pais } = req.body;
        await pool.query(queries.CREATE_LEAGUE, [cantidad_equipos_liga, nombre_liga, id_pais]);
        return res.status(200).json({ status: 200, message: 'League successfully created', body: { league: nombre_liga } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const updateLeague = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { cantidad_equipos_liga, nombre_liga, id_pais } = req.body;
        await pool.query(queries.UPDATE_LEAGUE, [cantidad_equipos_liga, nombre_liga, id]);
        return res.status(200).json({ status: 200, message: `League ${id} successfully updated`, body: { league: nombre_liga } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const deleteLeague = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_LEAGUE, [id]);
        return res.status(200).json({ status: 200, message: `League ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

