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
exports.deleteNationalMatch = exports.updateNationalMatch = exports.createNationalMatch = exports.getNationalMatches = exports.getNationalMatch = exports.deleteClubMatch = exports.updateClubMatch = exports.createClubMatch = exports.getClubMatches = exports.getClubMatch = exports.deleteMatch = exports.updateMatch = exports.createMatch = exports.getMatches = exports.getMatch = void 0;
const queries_1 = __importDefault(require("../utils/queries"));
const database_1 = require("../database");
exports.getMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const match = yield database_1.pool.query(queries_1.default.GET_MATCH, [id]);
        return res.status(200).json({ status: 200, match: match.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getMatches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const matches = yield database_1.pool.query(queries_1.default.GET_MATCHES);
        return res.status(200).json({ status: 200, matches: matches.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fecha_partido } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_MATCH, [fecha_partido]);
        return res.status(200).json({ status: 200, message: 'Match successfully created', body: { matchDate: fecha_partido } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { fecha_partido } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_MATCH, [fecha_partido, id]);
        return res.status(200).json({ status: 200, message: `Match date ${id} successfully updated`, body: { matchDate: fecha_partido } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_MATCH, [id]);
        return res.status(200).json({ status: 200, message: `Match ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getClubMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const clubMatch = yield database_1.pool.query(queries_1.default.GET_CLUB_MATCH, [id]);
        return res.status(200).json({ status: 200, clubMatch: clubMatch.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getClubMatches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clubMatches = yield database_1.pool.query(queries_1.default.GET_CLUB_MATCHES);
        return res.status(200).json({ status: 200, clubMatches: clubMatches.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createClubMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { resultado_partido_club, id_partido, id_club_competicion_local, id_club_competicion_visitante } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_CLUB_MATCH, [resultado_partido_club, id_partido, id_club_competicion_local, id_club_competicion_visitante]);
        return res.status(200).json({ status: 200, message: 'Club match successfully created', body: { clubMatch: resultado_partido_club } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateClubMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { resultado_partido_club, id_partido, id_club_competicion_local, id_club_competicion_visitante } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_CLUB_MATCH, [resultado_partido_club, id_partido, id_club_competicion_local, id_club_competicion_visitante, id]);
        return res.status(200).json({ status: 200, message: `Club match ${id} successfully updated`, body: { clubMatch: resultado_partido_club } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteClubMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_CLUB_MATCH, [id]);
        return res.status(200).json({ status: 200, message: `Club match ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getNationalMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const nationalMatch = yield database_1.pool.query(queries_1.default.GET_NATIONAL_MATCH, [id]);
        return res.status(200).json({ status: 200, nationalMatch: nationalMatch.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getNationalMatches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nationalMatches = yield database_1.pool.query(queries_1.default.GET_NATIONAL_MATCHES);
        return res.status(200).json({ status: 200, nationalMatches: nationalMatches.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createNationalMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { resultado_partido_seleccion, id_partido, id_seleccion_competicion_local, id_seleccion_competicion_visitante } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_NATIONAL_MATCH, [resultado_partido_seleccion, id_partido, id_seleccion_competicion_local, id_seleccion_competicion_visitante]);
        return res.status(200).json({ status: 200, message: 'National match successfully created', body: { nationalMatch: resultado_partido_seleccion } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateNationalMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { resultado_partido_seleccion, id_partido, id_seleccion_competicion_local, id_seleccion_competicion_visitante } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_NATIONAL_MATCH, [resultado_partido_seleccion, id_partido, id_seleccion_competicion_local, id_seleccion_competicion_visitante, id]);
        return res.status(200).json({ status: 200, message: `National match ${id} successfully updated`, body: { nationalMatch: resultado_partido_seleccion } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteNationalMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_NATIONAL_MATCH, [id]);
        return res.status(200).json({ status: 200, message: `National match ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
