import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import queries from '../utils/queries';
import { pool } from '../database';

export const getPlayer = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const player: QueryResult = await pool.query(queries.GET_PLAYER, [id]);
        return res.status(200).json({ status: 200, player: player.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getPlayers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const players: QueryResult = await pool.query(queries.GET_PLAYERS);
        return res.status(200).json({ status: 200, players: players.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const createPlayer = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, salario_jugador, dorsal_jugador, id_seleccion, id_club } = req.body;
        await pool.query(queries.CREATE_PLAYER, [nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, salario_jugador, dorsal_jugador, id_seleccion, id_club]);
        return res.status(200).json({ status: 200, message: 'Player successfully created', body: { player: nombre_jugador } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const updatePlayer = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, salario_jugador, dorsal_jugador, id_seleccion, id_club } = req.body;
        await pool.query(queries.UPDATE_PLAYER, [nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, salario_jugador, dorsal_jugador, id_seleccion, id_club, id]);
        return res.status(200).json({ status: 200, message: `Player ${id} successfully updated`, body: { player: nombre_jugador } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const deletePlayer = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_PLAYER, [id]);
        return res.status(200).json({ status: 200, message: `Player ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const getPosition = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const position: QueryResult = await pool.query(queries.GET_POSITION, [id]);
        return res.status(200).json({ status: 200, position: position.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getPositions = async (req: Request, res: Response): Promise<Response> => {
    try {
        const positions: QueryResult = await pool.query(queries.GET_POSITIONS);
        return res.status(200).json({ status: 200, positions: positions.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const createPosition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nombre_posicion } = req.body;
        await pool.query(queries.CREATE_POSITION, [nombre_posicion]);
        return res.status(200).json({ status: 200, message: 'Position successfully created', body: { position: nombre_posicion } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const updatePosition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { nombre_posicion } = req.body;
        await pool.query(queries.UPDATE_POSITION, [nombre_posicion, id]);
        return res.status(200).json({ status: 200, message: `Position ${id} successfully updated`, body: { position: nombre_posicion } });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const deletePosition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_POSITION, [id]);
        return res.status(200).json({ status: 200, message: `Position ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const getPlayerPosition = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const playerPosition: QueryResult = await pool.query(queries.GET_PLAYER_POSITION, [id]);
        return res.status(200).json({ status: 200, playerPosition: playerPosition.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getPlayerPositions = async (req: Request, res: Response): Promise<Response> => {
    try {
        const playerPositions: QueryResult = await pool.query(queries.GET_PLAYER_POSITIONS);
        return res.status(200).json({ status: 200, playerPositions: playerPositions.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const createPlayerPosition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id_posicion, id_jugador } = req.body;
        await pool.query(queries.CREATE_PLAYER_POSITION, [id_posicion, id_jugador]);
        return res.status(200).json({ status: 200, message: 'Player position successfully created' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const updatePlayerPosition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { id_posicion, id_jugador } = req.body;
        await pool.query(queries.UPDATE_PLAYER_POSITION, [id_posicion, id_jugador, id]);
        return res.status(200).json({ status: 200, message: `Player position ${id} successfully updated` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const deletePlayerPosition = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_PLAYER_POSITION, [id]);
        return res.status(200).json({ status: 200, message: `Player position ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const getPlayerNationality = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const playerNationality: QueryResult = await pool.query(queries.GET_PLAYER_NATIONALITY, [id]);
        return res.status(200).json({ status: 200, playerNationality: playerNationality.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    };
};

export const getPlayerNationalities = async (req: Request, res: Response): Promise<Response> => {
    try {
        const playerNationalities: QueryResult = await pool.query(queries.GET_PLAYER_NATIONALITIES);
        return res.status(200).json({ status: 200, playerNationalities: playerNationalities.rows });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const createPlayerNationality = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id_jugador, id_pais } = req.body;
        await pool.query(queries.CREATE_PLAYER_NATIONALITY, [id_jugador, id_pais]);
        return res.status(200).json({ status: 200, message: 'Player nationality successfully created' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const updatePlayerNationality = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { id_jugador, id_pais } = req.body;
        await pool.query(queries.UPDATE_PLAYER_NATIONALITY, [id_jugador, id_pais ,id]);
        return res.status(200).json({ status: 200, message: `Player nationality  ${id} successfully updated` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};

export const deletePlayerNationality = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        await pool.query(queries.DELETE_PLAYER_NATIONALITY, [id]);
        return res.status(200).json({ status: 200, message: `Player nationality ${id} successfully deleted` });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
};
