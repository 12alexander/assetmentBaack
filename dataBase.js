const mongoose = require("mongoose");

const connect = () =>
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => console.log("successfully connected to Data Base"))
    .catch((err) => console.log("error conection", err));

module.exports = connect;
