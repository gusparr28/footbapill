"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayerNationality = exports.updatePlayerNationality = exports.createPlayerNationality = exports.getPlayerNationalities = exports.getPlayerNationality = exports.deletePlayerPosition = exports.updatePlayerPosition = exports.createPlayerPosition = exports.getPlayerPositions = exports.getPlayerPosition = exports.deletePosition = exports.updatePosition = exports.createPosition = exports.getPositions = exports.getPosition = exports.deletePlayer = exports.updatePlayer = exports.createPlayer = exports.getPlayers = exports.getPlayer = void 0;
const queries_1 = __importDefault(require("../utils/queries"));
const database_1 = require("../database");
exports.getPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const player = yield database_1.pool.query(queries_1.default.GET_PLAYER, [id]);
        return res.status(200).json({ status: 200, player: player.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const players = yield database_1.pool.query(queries_1.default.GET_PLAYERS);
        return res.status(200).json({ status: 200, players: players.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.createPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, salario_jugador, dorsal_jugador, id_seleccion, id_club } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_PLAYER, [nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, salario_jugador, dorsal_jugador, id_seleccion, id_club]);
        return res.status(200).json({ status: 200, message: 'Player successfully created', body: { player: nombre_jugador } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.updatePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, salario_jugador, dorsal_jugador, id_seleccion, id_club } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_PLAYER, [nombre_jugador, edad_jugador, pie_jugador, fecha_jugador, altura_jugador, salario_jugador, dorsal_jugador, id_seleccion, id_club, id]);
        return res.status(200).json({ status: 200, message: `Player ${id} successfully updated`, body: { player: nombre_jugador } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.deletePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_PLAYER, [id]);
        return res.status(200).json({ status: 200, message: `Player ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.getPosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const position = yield database_1.pool.query(queries_1.default.GET_POSITION, [id]);
        return res.status(200).json({ status: 200, position: position.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getPositions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const positions = yield database_1.pool.query(queries_1.default.GET_POSITIONS);
        return res.status(200).json({ status: 200, positions: positions.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.createPosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_posicion } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_POSITION, [nombre_posicion]);
        return res.status(200).json({ status: 200, message: 'Position successfully created', body: { position: nombre_posicion } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.updatePosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { nombre_posicion } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_POSITION, [nombre_posicion, id]);
        return res.status(200).json({ status: 200, message: `Position ${id} successfully updated`, body: { position: nombre_posicion } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.deletePosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_POSITION, [id]);
        return res.status(200).json({ status: 200, message: `Position ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.getPlayerPosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const playerPosition = yield database_1.pool.query(queries_1.default.GET_PLAYER_POSITION, [id]);
        return res.status(200).json({ status: 200, playerPosition: playerPosition.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getPlayerPositions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const playerPositions = yield database_1.pool.query(queries_1.default.GET_PLAYER_POSITIONS);
        return res.status(200).json({ status: 200, playerPositions: playerPositions.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.createPlayerPosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_posicion, id_jugador } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_PLAYER_POSITION, [id_posicion, id_jugador]);
        return res.status(200).json({ status: 200, message: 'Player position successfully created' });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.updatePlayerPosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { id_posicion, id_jugador } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_PLAYER_POSITION, [id_posicion, id_jugador, id]);
        return res.status(200).json({ status: 200, message: `Player position ${id} successfully updated` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.deletePlayerPosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_PLAYER_POSITION, [id]);
        return res.status(200).json({ status: 200, message: `Player position ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.getPlayerNationality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const playerNationality = yield database_1.pool.query(queries_1.default.GET_PLAYER_NATIONALITY, [id]);
        return res.status(200).json({ status: 200, playerNationality: playerNationality.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getPlayerNationalities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const playerNationalities = yield database_1.pool.query(queries_1.default.GET_PLAYER_NATIONALITIES);
        return res.status(200).json({ status: 200, playerNationalities: playerNationalities.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.createPlayerNationality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_jugador, id_pais } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_PLAYER_NATIONALITY, [id_jugador, id_pais]);
        return res.status(200).json({ status: 200, message: 'Player nationality successfully created' });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.updatePlayerNationality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { id_jugador, id_pais } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_PLAYER_NATIONALITY, [id_jugador, id_pais, id]);
        return res.status(200).json({ status: 200, message: `Player nationality  ${id} successfully updated` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
exports.deletePlayerNationality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_PLAYER_NATIONALITY, [id]);
        return res.status(200).json({ status: 200, message: `Player nationality ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
});
