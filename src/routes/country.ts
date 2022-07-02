import { Router } from 'express';
import {
    createCity,
    createCountry,
    createLeague,
    deleteCity,
    deleteCountry,
    deleteLeague,
    getCities,
    getCity,
    getCountries,
    getCountry,
    getLeague,
    getLeagues,
    updateCity,
    updateCountry,
    updateLeague
}
    from '../controllers/countryController';
const router = Router();

router.route('/city')
    .get(getCities)
    .post(createCity)

router.route('/city/:id')
    .get(getCity)
    .put(updateCity)
    .delete(deleteCity)

router.route('/country')
    .get(getCountries)
    .post(createCountry)

router.route('/country/:id')
    .get(getCountry)
    .put(updateCountry)
    .delete(deleteCountry)

router.route('/league')
    .get(getLeagues)
    .post(createLeague)

router.route('/league/:id')
    .get(getLeague)
    .put(updateLeague)
    .delete(deleteLeague)

export default router;