// load environment variables
require("dotenv").config();

// 🔎 CEK APAKAH API KEY TERBACA
console.log("OPENWEATHER_API_KEY =", process.env.OPENWEATHER_API_KEY);

// import app utama
const app = require("./src/app");

// port config
const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 Server P9 WSE Mahdalina aktif");
  console.log(`🌐 URL : http://localhost:${PORT}`);
  console.log("=================================");
});
