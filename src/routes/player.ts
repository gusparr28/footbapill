import { Router } from 'express';
const router = Router();

import {
    createPlayer,
    createPlayerNationality,
    createPlayerPosition,
    createPosition,
    deletePlayer,
    deletePlayerNationality,
    deletePlayerPosition,
    deletePosition,
    getPlayer,
    getPlayerNationalities,
    getPlayerNationality,
    getPlayerPosition,
    getPlayerPositions,
    getPlayers,
    getPosition,
    getPositions,
    updatePlayer,
    updatePlayerNationality,
    updatePlayerPosition,
    updatePosition
}
    from '../controllers/playerController';

router.route('/player')
    .get(getPlayers)
    .post(createPlayer)

router.route('/player/:id')
    .get(getPlayer)
    .put(updatePlayer)
    .delete(deletePlayer)

router.route('/position')
    .get(getPositions)
    .post(createPosition)

router.route('/position/:id')
    .get(getPosition)
    .put(updatePosition)
    .delete(deletePosition)

router.route('/playerPosition')
    .get(getPlayerPositions)
    .post(createPlayerPosition)

router.route('/playerPosition/:id')
    .get(getPlayerPosition)
    .put(updatePlayerPosition)
    .delete(deletePlayerPosition)

router.route('/playerNationality')
    .get(getPlayerNationalities)
    .post(createPlayerNationality)

router.route('/playerNationality/:id')
    .get(getPlayerNationality)
    .put(updatePlayerNationality)
    .delete(deletePlayerNationality)

export default router;