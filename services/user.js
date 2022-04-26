const bcrypt = require("bcrypt");
const User = require("../models/user");

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("password").exec();
  if (!user) {
    return res.status(200).send({ message: "enter valid data" });
  }
  return (await bcrypt.compare(password, user.password))
    ? res.status(401).json({
        message: "enter valid data",
      })
    : res.status(200).send({ message: "Successful login" });
};

const registerUser = ({ email, password }) => User.create({ email, password });
const getAll = () => User.find({});
module.exports = { loginService, registerUser, getAll };
