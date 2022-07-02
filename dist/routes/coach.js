"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const coachController_1 = require("../controllers/coachController");
router.route('/coach')
    .get(coachController_1.getCoaches)
    .post(coachController_1.createCoach);
router.route('/coach/:id')
    .get(coachController_1.getCoach)
    .put(coachController_1.updateCoach)
    .delete(coachController_1.deleteCoach);
router.route('/coachNationality')
    .get(coachController_1.getCoachNationalities)
    .post(coachController_1.createCoachNationality);
router.route('/coachNationality/:id')
    .get(coachController_1.getCoachNationality)
    .put(coachController_1.updateCoachNationality)
    .delete(coachController_1.deleteCoachNationality);
exports.default = router;
