import { Router } from 'express';
const router = Router();

import {
    createCoach,
    createCoachNationality,
    deleteCoach,
    deleteCoachNationality,
    getCoach,
    getCoaches,
    getCoachNationalities,
    getCoachNationality,
    updateCoach,
    updateCoachNationality
} from '../controllers/coachController';

router.route('/coach')
    .get(getCoaches)
    .post(createCoach)

router.route('/coach/:id')
    .get(getCoach)
    .put(updateCoach)
    .delete(deleteCoach)

router.route('/coachNationality')
    .get(getCoachNationalities)
    .post(createCoachNationality)

router.route('/coachNationality/:id')
    .get(getCoachNationality)
    .put(updateCoachNationality)
    .delete(deleteCoachNationality)

export default router;