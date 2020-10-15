"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.createToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user }, process.env.JWT_SECRET || '28552455565g');
};
