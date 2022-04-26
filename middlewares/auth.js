const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.get("authorization");
  if (!token) return res.status(401).send({ message: "token missing" });
  try {
    const decoded = jwt.verify(token.substring(7), process.env.JWT_KEY_SECRET);
    req.body._user_id = decoded.id;
  } catch (error) {
    return res.status(403).send({ message: "invalid token" });
  }
  return next();
};

module.exports = isAuthenticated;
