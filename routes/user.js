const { register, login } = require("../controllers/user");
const api = require("express").Router();

api.post("/", login);
api.post("/register", register);

module.exports = api;
