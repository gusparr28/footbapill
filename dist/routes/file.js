"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const multer_1 = __importDefault(require("../utils/multer"));
const fileController_1 = require("../controllers/fileController");
router.post('/file', multer_1.default.single('file'), fileController_1.uploadFileController);
exports.default = router;
