const { create, getAll, find, update, del } = require("../controllers/favs");
const { isAuthenticated } = require("../middlewares/auth");

const api = require("express").Router();

api.post("/", isAuthenticated, create);
api.get("/", isAuthenticated, getAll);
api.get("/:id", isAuthenticated, find);
api.post("/:id", isAuthenticated, update);
api.delete("/:id", isAuthenticated, del);

module.exports = api;
