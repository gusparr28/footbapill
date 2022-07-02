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
exports.deleteNationalCompetition = exports.updateNationalCompetition = exports.createNationalCompetition = exports.getNationalCompetitions = exports.getNationalCompetition = exports.deleteClubCompetition = exports.updateClubCompetition = exports.createClubCompetition = exports.getClubCompetitions = exports.getClubCompetition = exports.deleteCompetition = exports.updateCompetition = exports.createCompetition = exports.getCompetitions = exports.getCompetition = void 0;
const queries_1 = __importDefault(require("../utils/queries"));
const database_1 = require("../database");
exports.getCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const competition = yield database_1.pool.query(queries_1.default.GET_COMPETITION, [id]);
        return res.status(200).json({ status: 200, competition: competition.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getCompetitions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const competitions = yield database_1.pool.query(queries_1.default.GET_COMPETITIONS);
        return res.status(200).json({ status: 200, competitions: competitions.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_competicion } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_COMPETITION, [nombre_competicion]);
        return res.status(200).json({ status: 200, message: 'Competition successfully created', body: { competition: nombre_competicion } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { nombre_competicion } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_COMPETITION, [nombre_competicion, id]);
        return res.status(200).json({ status: 200, message: `Competition ${id} successfully updated`, body: { competition: nombre_competicion } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_COMPETITION, [id]);
        return res.status(200).json({ status: 200, message: `Competition ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getClubCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const clubCompetition = yield database_1.pool.query(queries_1.default.GET_CLUB_COMPETITION, [id]);
        return res.status(200).json({ status: 200, clubCompetition: clubCompetition.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getClubCompetitions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clubCompetitions = yield database_1.pool.query(queries_1.default.GET_CLUB_COMPETITIONS);
        return res.status(200).json({ status: 200, clubCompetitions: clubCompetitions.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createClubCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_club, id_competicion } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_CLUB_COMPETITION, [id_club, id_competicion]);
        return res.status(200).json({ status: 200, message: 'Club competition successfully created' });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateClubCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { id_club, id_competicion } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_CLUB_COMPETITION, [id_club, id_competicion, id]);
        return res.status(200).json({ status: 200, message: `Club competition ${id} successfully updated` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteClubCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_CLUB_COMPETITION, [id]);
        return res.status(200).json({ status: 200, message: `Club competition ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getNationalCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const nationalCompetition = yield database_1.pool.query(queries_1.default.GET_NATIONAL_COMPETITION, [id]);
        return res.status(200).json({ status: 200, nationalCompetition: nationalCompetition.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getNationalCompetitions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nationalCompetitions = yield database_1.pool.query(queries_1.default.GET_NATIONAL_COMPETITIONS);
        return res.status(200).json({ status: 200, nationalCompetitions: nationalCompetitions.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createNationalCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_seleccion, id_competicion } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_NATIONAL_COMPETITION, [id_seleccion, id_competicion]);
        return res.status(200).json({ status: 200, message: 'National competition successfully created' });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateNationalCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { id_seleccion, id_competicion } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_NATIONAL_COMPETITION, [id_seleccion, id_competicion, id]);
        return res.status(200).json({ status: 200, message: `National competition ${id} successfully updated` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteNationalCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_NATIONAL_COMPETITION, [id]);
        return res.status(200).json({ status: 200, message: `National competition ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
