const express = require("express");
const router = express.Router();

const countriesController = require("../controllers/countries.controller");

// GET /api/countries
router.get("/", countriesController.getAll);

// GET /api/countries/region/asia
router.get("/region/:region", countriesController.getByRegion);

// GET /api/countries/name/indonesia
router.get("/name/:name", countriesController.getByName);

module.exports = router;
