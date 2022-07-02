"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const playerController_1 = require("../controllers/playerController");
router.route('/player')
    .get(playerController_1.getPlayers)
    .post(playerController_1.createPlayer);
router.route('/player/:id')
    .get(playerController_1.getPlayer)
    .put(playerController_1.updatePlayer)
    .delete(playerController_1.deletePlayer);
router.route('/position')
    .get(playerController_1.getPositions)
    .post(playerController_1.createPosition);
router.route('/position/:id')
    .get(playerController_1.getPosition)
    .put(playerController_1.updatePosition)
    .delete(playerController_1.deletePosition);
router.route('/playerPosition')
    .get(playerController_1.getPlayerPositions)
    .post(playerController_1.createPlayerPosition);
router.route('/playerPosition/:id')
    .get(playerController_1.getPlayerPosition)
    .put(playerController_1.updatePlayerPosition)
    .delete(playerController_1.deletePlayerPosition);
router.route('/playerNationality')
    .get(playerController_1.getPlayerNationalities)
    .post(playerController_1.createPlayerNationality);
router.route('/playerNationality/:id')
    .get(playerController_1.getPlayerNationality)
    .put(playerController_1.updatePlayerNationality)
    .delete(playerController_1.deletePlayerNationality);
exports.default = router;
