const express = require('express');
const router = express.Router();
// const userController= require("../controllers/userController")
const userController= require("../controllers/userCntrl")
const routeMid = require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", routeMid.validation, userController.getUserData)

router.put("/users/:userId", routeMid.validation, userController.updateUser)

router.delete("/users/:userId", routeMid.validation, userController.deleteUser)

module.exports = router;