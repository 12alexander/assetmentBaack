const { login, register } = require("../controllers/auth");
const api = require("express").Router();

api.post("/", login);
router.route("/register").post(register);

module.exports = api;
