"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countryController_1 = require("../controllers/countryController");
const router = express_1.Router();
router.route('/city')
    .get(countryController_1.getCities)
    .post(countryController_1.createCity);
router.route('/city/:id')
    .get(countryController_1.getCity)
    .put(countryController_1.updateCity)
    .delete(countryController_1.deleteCity);
router.route('/country')
    .get(countryController_1.getCountries)
    .post(countryController_1.createCountry);
router.route('/country/:id')
    .get(countryController_1.getCountry)
    .put(countryController_1.updateCountry)
    .delete(countryController_1.deleteCountry);
router.route('/league')
    .get(countryController_1.getLeagues)
    .post(countryController_1.createLeague);
router.route('/league/:id')
    .get(countryController_1.getLeague)
    .put(countryController_1.updateLeague)
    .delete(countryController_1.deleteLeague);
exports.default = router;
