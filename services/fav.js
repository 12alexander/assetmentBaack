const FavShema = require("../models/favs");

const addFav = async ({ name, favs, userId }) => {
  try {
    const favAdd = await FavShema.create({ name, favs, userId });
    return favAdd;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getAllFavs = async () => {
  return await FavShema.find();
};

const findFavs = async (_id, { userId }) => {
  const favs = await FavShema.findOne({ _id, userId });
  return !favs
    ? { message: "Not found", code: 400 }
    : { message: favs, code: 200 };
};

const deleteFav = (_id, { userId }) => FavShema.deleteOne({ _id, userId });

module.exports = { addFav, getAllFavs, findFavs, deleteFav };
