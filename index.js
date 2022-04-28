const app = require("./app");
const connectDatabase = require("./config/dbConfig");

require("dotenv").config();
app.listen(process.env.PORT || 5000, () => connectDatabase());
