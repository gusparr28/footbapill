"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const matchController_1 = require("../controllers/matchController");
router.route('/match')
    .get(matchController_1.getMatches)
    .post(matchController_1.createMatch);
router.route('/match/:id')
    .get(matchController_1.getMatch)
    .put(matchController_1.updateMatch)
    .delete(matchController_1.deleteMatch);
router.route('/clubMatch')
    .get(matchController_1.getClubMatches)
    .post(matchController_1.createClubMatch);
router.route('/clubMatch/:id')
    .get(matchController_1.getClubMatch)
    .put(matchController_1.updateClubMatch)
    .delete(matchController_1.deleteClubMatch);
router.route('/nationalMatch')
    .get(matchController_1.getNationalMatches)
    .post(matchController_1.createNationalMatch);
router.route('/nationalMatch/:id')
    .get(matchController_1.getNationalMatch)
    .put(matchController_1.updateNationalMatch)
    .delete(matchController_1.deleteNationalMatch);
exports.default = router;
