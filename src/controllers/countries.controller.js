const countriesService = require("../services/countries.service");

async function getAll(req, res, next) {
  try {
    const data = await countriesService.getAllCountries();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

async function getByRegion(req, res, next) {
  try {
    const { region } = req.params;
    const data = await countriesService.getCountriesByRegion(region);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

async function getByName(req, res, next) {
  try {
    const { name } = req.params;
    const data = await countriesService.getCountryByName(name);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
  getByRegion,
  getByName,
};
