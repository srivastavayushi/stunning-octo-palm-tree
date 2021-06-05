const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  //Check if not token
  if (!token) {
    return res.status(401).json({ msg: "Authorization failed, No token" });
  }

  // Verify token

  try {
    const decoded = jwt.verify(token, config.get("JWT_SECRET_TOKEN"));

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};
