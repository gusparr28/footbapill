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
exports.signInController = exports.signUpController = void 0;
const bcryptjs_1 = require("bcryptjs");
const queries_1 = __importDefault(require("../utils/queries"));
const database_1 = require("../database");
const Strategies_1 = require("../utils/Strategies");
exports.signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        if (!email || !password)
            return res.status(422).json({
                status: 422,
                error: 'Please complete all fields'
            });
        const savedUser = yield database_1.pool.query(queries_1.default.CHECK_USER, [email]);
        if (savedUser.rows.length != 0)
            return res.status(422).json({
                status: 422,
                error: 'User already exists'
            });
        const salt = bcryptjs_1.genSaltSync(10);
        const hashedPassword = bcryptjs_1.hashSync(password, salt);
        const user = yield database_1.pool.query(queries_1.default.SIGN_UP, [email, hashedPassword]);
        return res.status(200).json({ status: 200, message: 'User successfully signed up', user: user.rows });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
    ;
});
exports.signInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        if (!email || !password)
            return res.status(422).json({
                status: 422,
                error: 'Please complete all fields'
            });
        const savedUser = yield database_1.pool.query(queries_1.default.CHECK_USER, [email]);
        if (savedUser.rows.length == 0)
            return res.status(422).json({
                status: 422,
                error: 'Invalid credentials'
            });
        const passFromDB = yield database_1.pool.query(queries_1.default.GET_PASSWORD, [email]);
        const correctCreds = yield bcryptjs_1.compare(password, passFromDB.rows[0].clave_usuario);
        if (correctCreds) {
            return res.status(200).json({
                status: 200,
                message: 'User successfully signed in',
                token: Strategies_1.createToken(email)
            });
        }
        return res.status(422).json({ status: 422, error: 'Invalid credentials' });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
    ;
});
