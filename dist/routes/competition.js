"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const competitionController_1 = require("../controllers/competitionController");
router.route('/competition')
    .get(competitionController_1.getCompetitions)
    .post(competitionController_1.createCompetition);
router.route('/competition/:id')
    .get(competitionController_1.getCompetition)
    .put(competitionController_1.updateCompetition)
    .delete(competitionController_1.deleteCompetition);
router.route('/clubCompetition')
    .get(competitionController_1.getClubCompetitions)
    .post(competitionController_1.createClubCompetition);
router.route('/clubCompetition/:id')
    .get(competitionController_1.getClubCompetition)
    .put(competitionController_1.updateClubCompetition)
    .delete(competitionController_1.deleteClubCompetition);
router.route('/nationalCompetition')
    .get(competitionController_1.getNationalCompetitions)
    .post(competitionController_1.createNationalCompetition);
router.route('/nationalCompetition/:id')
    .get(competitionController_1.getNationalCompetition)
    .put(competitionController_1.updateNationalCompetition)
    .delete(competitionController_1.deleteNationalCompetition);
exports.default = router;
