const { addFav, getAllFavs, findFavs, deleteFav } = require("../services/fav");

const addFavs = async (req, res) => {
  try {
    const fav = await addFav(req.body);
    res.status(200).send({ message: "successful operation", fav: fav });
  } catch (error) {
    res
      .status(400)
      .send({ message: "an error occurred in the operation", error });
  }
};

const findFav = async (req, res) => {
  try {
    const { message, code } = await findFavs(req.params.id, req.body);
    res.status(code).send({ message });
  } catch (error) {
    res
      .status(400)
      .send({ message: "an error occurred in the operation", error });
  }
};
/*
const update = async (req, res) => {
  try {
    const { code, message, data } = await Favs.edit(req.params.id, req.body);
    res.status(code).send({ message, data });
  } catch (error) {
    res.status(400).send({ message: "Fav couldn't be created", error });
  }
};
*/
const deleteFavs = async (req, res) => {
  try {
    await deleteFav(req.params.id, req.body);
    res.status(200).send({ message: "successful operation" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const favs = await getAllFavs(req.body);
    res.status(200).send({ favs: favs });
  } catch (error) {
    res
      .status(400)
      .send({ message: "an error occurred in the operation", error });
  }
};

module.exports = { getAll, addFavs, findFav, deleteFavs };
