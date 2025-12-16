const axios = require("axios");
const { getCache, setCache } = require("../utils/cache");

const BASE_URL = "https://restcountries.com/v3.1";
const FIELDS = "name,cca2,region,subregion,population,flags";

/**
 * GET /api/countries
 * Ambil semua negara
 */
async function getAllCountries() {
  const cacheKey = "countries_all";

  const cachedData = getCache(cacheKey);
  if (cachedData) return cachedData;

  const response = await axios.get(`${BASE_URL}/all`, {
    params: { fields: FIELDS },
  });

  setCache(cacheKey, response.data);
  return response.data;
}

/**
 * GET /api/countries/region/:region
 * Ambil negara berdasarkan region
 */
async function getCountriesByRegion(region) {
  const cacheKey = `countries_region_${region.toLowerCase()}`;

  const cachedData = getCache(cacheKey);
  if (cachedData) return cachedData;

  const response = await axios.get(`${BASE_URL}/region/${region}`, {
    params: { fields: FIELDS },
  });

  setCache(cacheKey, response.data);
  return response.data;
}

/**
 * GET /api/countries/name/:name
 * Ambil negara berdasarkan nama
 */
async function getCountryByName(name) {
  const cacheKey = `countries_name_${name.toLowerCase()}`;

  const cachedData = getCache(cacheKey);
  if (cachedData) return cachedData;

  const response = await axios.get(`${BASE_URL}/name/${name}`, {
    params: {
      fullText: false,
      fields: FIELDS,
    },
  });

  setCache(cacheKey, response.data);
  return response.data;
}

module.exports = {
  getAllCountries,
  getCountriesByRegion,
  getCountryByName,
};
