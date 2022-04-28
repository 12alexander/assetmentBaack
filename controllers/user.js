const { registerUser, loginService } = require("../services/user");

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res
      .status(200)
      .send({ message: "Successfully registered user", data: user });
  } catch (err) {
    res.status(400).send({ message: "failed operation", error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { message, code } = await loginService(req.body);
    return res.status(code).send({ message });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "incorrect information", errores: error });
  }
};

module.exports = {
  register,
  login,
};
