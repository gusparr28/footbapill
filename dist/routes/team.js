"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const teamController_1 = require("../controllers/teamController");
router.route('/club')
    .get(teamController_1.getClubs)
    .post(teamController_1.createClub);
router.route('/club/:id')
    .get(teamController_1.getClub)
    .put(teamController_1.updateClub)
    .delete(teamController_1.deleteClub);
router.route('/national')
    .get(teamController_1.getNationals)
    .post(teamController_1.createNational);
router.route('/national/:id')
    .get(teamController_1.getNational)
    .put(teamController_1.updateNational)
    .delete(teamController_1.deleteNational);
exports.default = router;
