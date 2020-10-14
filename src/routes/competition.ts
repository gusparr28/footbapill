import { Router } from 'express';
const router = Router();

import {
    createClubCompetition,
    createCompetition,
    createNationalCompetition,
    deleteClubCompetition,
    deleteCompetition,
    deleteNationalCompetition,
    getClubCompetition,
    getClubCompetitions,
    getCompetition,
    getCompetitions,
    getNationalCompetition,
    getNationalCompetitions,
    updateClubCompetition,
    updateCompetition,
    updateNationalCompetition
} from '../controllers/competitionController';

router.route('/competition')
    .get(getCompetitions)
    .post(createCompetition)

router.route('/competition/:id')
    .get(getCompetition)
    .put(updateCompetition)
    .delete(deleteCompetition)

router.route('/clubCompetition')
    .get(getClubCompetitions)
    .post(createClubCompetition)

router.route('./clubCompetition/:id')
    .get(getClubCompetition)
    .put(updateClubCompetition)
    .delete(deleteClubCompetition)

router.route('./nationalCompetition')
    .get(getNationalCompetitions)
    .post(createNationalCompetition)

router.route('./nationalCompetition/:id')
    .get(getNationalCompetition)
    .put(updateNationalCompetition)
    .delete(deleteNationalCompetition)

export default router;