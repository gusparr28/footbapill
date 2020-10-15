import { Router } from 'express';
const router = Router();

import {
    createClub,
    createNational,
    deleteClub,
    deleteNational,
    getClub,
    getClubs,
    getNational,
    getNationals,
    updateClub,
    updateNational
} from '../controllers/teamController';

router.route('/club')
    .get(getClubs)
    .post(createClub)

router.route('/club/:id')
    .get(getClub)
    .put(updateClub)
    .delete(deleteClub)

router.route('/national')
    .get(getNationals)
    .post(createNational)

router.route('/national/:id')
    .get(getNational)
    .put(updateNational)
    .delete(deleteNational)

export default router;
