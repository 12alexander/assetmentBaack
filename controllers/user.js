const { registerUser, loginService } = require("../services/UserService");

const registerUser = async (req, res) => {
  try {
    const user = await cregisterUserService(req.body);
    res
      .status(200)
      .send({ message: "Successfully registered user", data: user });
  } catch (err) {
    res.status(400).send({ message: "failed operation", error: err });
  }
};

const login = async (req, res) => {
  try {
    return await loginService(req.body);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "incorrect information", errores: error });
  }
};

module.exports = {
  registerUser,
  login,
};
