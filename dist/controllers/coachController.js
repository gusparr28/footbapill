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
exports.deleteCoachNationality = exports.updateCoachNationality = exports.createCoachNationality = exports.getCoachNationalities = exports.getCoachNationality = exports.deleteCoach = exports.updateCoach = exports.createCoach = exports.getCoaches = exports.getCoach = void 0;
const queries_1 = __importDefault(require("../utils/queries"));
const database_1 = require("../database");
exports.getCoach = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const coach = yield database_1.pool.query(queries_1.default.GET_COACH, [id]);
        return res.status(200).json({ status: 200, coach: coach.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getCoaches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coaches = yield database_1.pool.query(queries_1.default.GET_COACHES);
        return res.status(200).json({ status: 200, coaches: coaches.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createCoach = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_director_tecnico, edad_director_tecnico, fecha_director_tecnico, salario_director_tecnico } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_COACH, [nombre_director_tecnico, edad_director_tecnico, fecha_director_tecnico, salario_director_tecnico]);
        return res.status(200).json({ status: 200, message: 'Coach successfully created', body: { coach: nombre_director_tecnico } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateCoach = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { nombre_director_tecnico, edad_director_tecnico, fecha_director_tecnico, salario_director_tecnico } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_COACH, [nombre_director_tecnico, edad_director_tecnico, fecha_director_tecnico, salario_director_tecnico, id]);
        return res.status(200).json({ status: 200, message: `Coach ${id} successfully updated`, body: { coach: nombre_director_tecnico } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteCoach = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_COACH, [id]);
        return res.status(200).json({ status: 200, message: `Coach ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getCoachNationality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const coachNationality = yield database_1.pool.query(queries_1.default.GET_COACH_NATIONALITY, [id]);
        return res.status(200).json({ status: 200, coachNationality: coachNationality.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getCoachNationalities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coachNationalities = yield database_1.pool.query(queries_1.default.GET_COACH_NATIONALITIES);
        return res.status(200).json({ status: 200, coachNationalities: coachNationalities.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createCoachNationality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_director_tecnico, id_pais } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_COACH_NATIONALITY, [id_director_tecnico, id_pais]);
        return res.status(200).json({ status: 200, message: 'Coach nationality successfully created' });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateCoachNationality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { id_director_tecnico, id_pais } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_COACH_NATIONALITY, [id_director_tecnico, id_pais, id]);
        return res.status(200).json({ status: 200, message: `Coach nationality ${id} successfully updated` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteCoachNationality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_COACH_NATIONALITY, [id]);
        return res.status(200).json({ status: 200, message: `Coach nationality ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
