const express = require('express');
// const underScore = require('underscore')

const abc = require('./intro')
const firstQue = require('../logger/logger.js')
const secondQue = require('../util/helper.js')
const thirdQue = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log("My batch is",abc.name)
    firstQue.welcome()
    secondQue.date()
    secondQue.month()
    secondQue.info()
    thirdQue.mystr("     JavaScipt    and    Nodejs    ")
    // thirdQue.mystr()
    // thirdQue.lower("BACKEND DEVELOPMENT")
    thirdQue.lowerModule() 
    // thirdQue.upper("functionup plutonium batch")
    thirdQue.upperModule()
    
    res.send('<h1>My first ever api! I will Create it.</h1>')
});

router.get('/test-you',function (req,res){
    res.send("My Second route")
});

module.exports = router;
// adding this comment for no reason