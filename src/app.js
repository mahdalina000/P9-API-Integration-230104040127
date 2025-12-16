const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const countriesRoutes = require("./routes/countries.routes");
const weatherRoutes = require("./routes/weather.routes");
const notFound = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/errorHandler.middleware");

const swaggerDocument = YAML.load("./src/docs/swagger.yaml");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/ping", (req, res) => {
  res.json({ message: "API P9 Mahdalina aktif 🚀" });
});

app.use("/api/countries", countriesRoutes);
app.use("/api/weather", weatherRoutes);

// 🔹 Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 🔻 Middleware error (HARUS PALING BAWAH)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
