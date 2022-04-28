const { getAll, addFavs, findFav, deleteFavs } = require("../controllers/fav");
const isAuthenticated = require("../middlewares/auth");

const api = require("express").Router();

api.post("/", isAuthenticated, addFavs);
api.get("/", isAuthenticated, getAll);
api.get("/:id", isAuthenticated, findFav);
api.delete("/:id", isAuthenticated, deleteFavs);
/*api.delete("/:id", isAuthenticated, del);*/

module.exports = api;
