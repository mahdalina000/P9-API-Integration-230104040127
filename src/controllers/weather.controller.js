const weatherService = require("../services/weather.service");

async function getWeather(req, res, next) {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        status: "error",
        message: "Parameter city wajib diisi",
      });
    }

    const data = await weatherService.getWeatherByCity(city);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getWeather,
};
