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
const passport_jwt_1 = require("passport-jwt");
const database_1 = require("../database");
const queries_1 = __importDefault(require("../utils/queries"));
const opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || '28552455565g'
};
exports.default = new passport_jwt_1.Strategy(opts, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield database_1.pool.query(queries_1.default.CHECK_USER, [payload]);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }
    catch (e) {
        console.error(e);
    }
    ;
}));
