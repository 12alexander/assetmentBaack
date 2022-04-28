const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() =>
      console.log(
        "Successfully connected to DB <{",
        process.env.DB_CONNECTION,
        "}>"
      )
    )
    .catch((err) =>
      console.log(
        "Couldn't connect to DB <{",
        process.env.DB_CONNECTION,
        "}>. Error: ",
        err
      )
    );
};

module.exports = connectDatabase;
