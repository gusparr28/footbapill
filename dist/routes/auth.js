"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const authController_1 = require("../controllers/authController");
router.post('/signup', authController_1.signUpController);
router.post('/signin', authController_1.signInController);
exports.default = router;
