const express = require("express");
const User = require("./routes/user");
const Fav = require("./routes/fav");
const app = express();

app.use(express.json());

app.use("/api/user", User);
app.use("/api/favs", Fav);
module.exports = app;
