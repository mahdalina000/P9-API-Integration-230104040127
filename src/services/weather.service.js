const axios = require("axios");
const { getCache, setCache } = require("../utils/cache");

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.OPENWEATHER_API_KEY;

/**
 * Ambil data cuaca berdasarkan nama kota
 * GET /api/weather?city=NamaKota
 */
async function getWeatherByCity(city) {
  // key cache (lowercase biar konsisten)
  const cacheKey = `weather_${city.toLowerCase()}`;

  // cek cache dulu
  const cachedData = getCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  // validasi API key
  if (!API_KEY) {
    throw {
      status: 500,
      message: "API Key OpenWeatherMap belum diset",
    };
  }

  // request ke OpenWeatherMap
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  // simpan ke cache (TTL 2 menit)
  setCache(cacheKey, response.data, 2 * 60 * 1000);

  return response.data;
}

module.exports = {
  getWeatherByCity,
};
