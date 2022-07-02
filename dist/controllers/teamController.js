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
exports.deleteNational = exports.updateNational = exports.createNational = exports.getNationals = exports.getNational = exports.deleteClub = exports.updateClub = exports.createClub = exports.getClubs = exports.getClub = void 0;
const queries_1 = __importDefault(require("../utils/queries"));
const database_1 = require("../database");
exports.getClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const club = yield database_1.pool.query(queries_1.default.GET_CLUB, [id]);
        return res.status(200).json({ status: 200, club: club.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getClubs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clubs = yield database_1.pool.query(queries_1.default.GET_CLUBS);
        return res.status(200).json({ status: 200, clubs: clubs.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_club, propietario_club, estadio_club, id_director_tecnico, id_ciudad } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_CLUB, [nombre_club, propietario_club, estadio_club, id_director_tecnico, id_ciudad]);
        return res.status(200).json({ status: 200, message: 'Club successfully created', body: { club: nombre_club } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { nombre_club, propietario_club, estadio_club, id_director_tecnico, id_ciudad } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_CLUB, [nombre_club, propietario_club, estadio_club, id_director_tecnico, id_ciudad, id]);
        return res.status(200).json({ status: 200, message: `Club ${id} successfully updated`, body: { club: nombre_club } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_CLUB, [id]);
        return res.status(200).json({ status: 200, message: `Club ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getNational = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const national = yield database_1.pool.query(queries_1.default.GET_NATIONAL, [id]);
        return res.status(200).json({ status: 200, national: national.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getNationals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nationals = yield database_1.pool.query(queries_1.default.GET_NATIONALS);
        return res.status(200).json({ status: 200, nationals: nationals.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createNational = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_seleccion, id_director_tecnico } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_NATIONAL, [nombre_seleccion, id_director_tecnico]);
        return res.status(200).json({ status: 200, message: 'National successfully created', body: { national: nombre_seleccion } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateNational = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { nombre_seleccion, id_director_tecnico } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_NATIONAL, [nombre_seleccion, id_director_tecnico, id]);
        return res.status(200).json({ status: 200, message: `National ${id} successfully updated`, body: { national: nombre_seleccion } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteNational = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_NATIONAL, [id]);
        return res.status(200).json({ status: 200, message: `National ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
