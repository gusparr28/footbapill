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
exports.deleteLeague = exports.updateLeague = exports.createLeague = exports.getLeagues = exports.getLeague = exports.deleteCountry = exports.updateCountry = exports.createCountry = exports.getCountries = exports.getCountry = exports.deleteCity = exports.updateCity = exports.createCity = exports.getCities = exports.getCity = void 0;
const queries_1 = __importDefault(require("../utils/queries"));
const database_1 = require("../database");
exports.getCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const city = yield database_1.pool.query(queries_1.default.GET_CITY, [id]);
        return res.status(200).json({ status: 200, city: city.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cities = yield database_1.pool.query(queries_1.default.GET_CITIES);
        return res.status(200).json({ status: 200, cities: cities.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_ciudad, poblacion_ciudad, estado_ciudad, id_pais } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_CITY, [nombre_ciudad, poblacion_ciudad, estado_ciudad, id_pais]);
        return res.status(200).json({ status: 200, message: 'City successfully created', body: { city: nombre_ciudad } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { nombre_ciudad, poblacion_ciudad, estado_ciudad, id_pais } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_CITY, [nombre_ciudad, poblacion_ciudad, estado_ciudad, id_pais, id]);
        return res.status(200).json({ status: 200, message: `City ${id} successfully updated`, body: { city: nombre_ciudad } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_CITY, [id]);
        return res.status(200).json({ status: 200, message: `City ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const country = yield database_1.pool.query(queries_1.default.GET_COUNTRY, [id]);
        return res.status(200).json({ status: 200, country: country.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countries = yield database_1.pool.query(queries_1.default.GET_COUNTRIES);
        return res.status(200).json({ status: 200, countries: countries.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_pais, continente_pais } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_COUNTRY, [nombre_pais, continente_pais]);
        return res.status(200).json({ status: 200, message: 'Country successfully created', body: { country: nombre_pais } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { nombre_pais, continente_pais } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_COUNTRY, [nombre_pais, continente_pais, id]);
        return res.status(200).json({ status: 200, message: `Country ${id} successfully updated`, body: { country: nombre_pais } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_COUNTRY, [id]);
        return res.status(200).json({ status: 200, message: `Country ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const league = yield database_1.pool.query(queries_1.default.GET_LEAGUE, [id]);
        return res.status(200).json({ status: 200, league: league.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.getLeagues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leagues = yield database_1.pool.query(queries_1.default.GET_LEAGUES);
        return res.status(200).json({ status: 200, leagues: leagues.rows });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.createLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cantidad_equipos_liga, nombre_liga, id_pais } = req.body;
        yield database_1.pool.query(queries_1.default.CREATE_LEAGUE, [cantidad_equipos_liga, nombre_liga, id_pais]);
        return res.status(200).json({ status: 200, message: 'League successfully created', body: { league: nombre_liga } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.updateLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { cantidad_equipos_liga, nombre_liga, id_pais } = req.body;
        yield database_1.pool.query(queries_1.default.UPDATE_LEAGUE, [cantidad_equipos_liga, nombre_liga, id]);
        return res.status(200).json({ status: 200, message: `League ${id} successfully updated`, body: { league: nombre_liga } });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
exports.deleteLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query(queries_1.default.DELETE_LEAGUE, [id]);
        return res.status(200).json({ status: 200, message: `League ${id} successfully deleted` });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, error: e });
    }
    ;
});
