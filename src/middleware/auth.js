const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticateAndAuthorize = async function (req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "Functionup-Plutonium-July");
    if (!decodedToken) {
      return res.status(403).send({ status: false, msg: "token is invalid" });
    }

    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ status: false, msg: "No such user exists" });
    }

    if (userId != decodedToken.userId) {
      return res.status(401).send({ status: false, msg: "Unauthorized Permission Denied!!" });
    }

    next()
  }
  catch (err) {
    res.status(500).send({msg: "Error", error: err.message })
  }
}

module.exports.authenticateAndAuthorize = authenticateAndAuthorize  