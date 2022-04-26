const app = require("./app");
const connection_database = require("./dataBase.js");

require("dotenv").config();
app.listen(process.env.PORT || 5000, () => connection_database());
