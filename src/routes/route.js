const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

const BookDetails = require("../controllers/books")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookDetails.getAll)

router.post("/getBooksInYear", BookDetails.getYear)

// router.get("/getBooksData", BookDetails.getBooksData)

router.post("/getParticularBooks", BookDetails.getParticularBook)

router.get("/getXINRBooks", BookDetails.getByINR)

router.get("/getRandomBooks", BookDetails.getRandom)

module.exports = router;