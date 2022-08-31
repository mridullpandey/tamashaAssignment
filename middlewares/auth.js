const jwt = require("jsonwebtoken");

function authentication(req, res, next) {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    req.userData = decode;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Auth failed",
    });
  }
}
module.exports = authentication;
