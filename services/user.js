const bcrypt = require("bcrypt");
const User = require("../models/user");

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("password").exec();
  if (!user) {
    return { message: "enter valid data", code: 400 };
  }
  return (await bcrypt.compare(password, user.password))
    ? { message: user.getToken(), code: 200 }
    : { message: "enter valid data wqe", code: 400 };
};

const registerUser = ({ email, password }) => User.create({ email, password });
const getAll = () => User.find({});
module.exports = { loginService, registerUser, getAll };
