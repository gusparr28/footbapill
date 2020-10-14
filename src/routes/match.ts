import { Router } from 'express';
const router = Router();

import {
    createClubMatch,
    createMatch,
    createNationalMatch,
    deleteClubMatch,
    deleteMatch,
    deleteNationalMatch,
    getClubMatch,
    getClubMatches,
    getMatch,
    getMatches,
    getNationalMatch,
    getNationalMatches,
    updateClubMatch,
    updateMatch,
    updateNationalMatch
} from '../controllers/matchController';

router.route('/match')
    .get(getMatches)
    .post(createMatch)

router.route('/match/:id')
    .get(getMatch)
    .put(updateMatch)
    .delete(deleteMatch)

router.route('/clubMatch')
    .get(getClubMatches)
    .post(createClubMatch)

router.route('/clubMatch/:id')
    .get(getClubMatch)
    .put(updateClubMatch)
    .delete(deleteClubMatch)

router.route('/nationalMatch')
    .get(getNationalMatches)
    .post(createNationalMatch)

router.route('/nationalMatch/:id')
    .get(getNationalMatch)
    .put(updateNationalMatch)
    .delete(deleteNationalMatch)

export default router;