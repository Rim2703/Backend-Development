const express = require('express');

const abc = require('./intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log("My batch is",abc.name)
    abc.printName()
    res.send('My first ever api! I will Create it.')
});

router.get('/test-you',function (req,res){
    res.send("My Second route")
});

module.exports = router;
// adding this comment for no reason