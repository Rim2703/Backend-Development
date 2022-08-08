const express = require('express');
const lodash = require('lodash')

const abc = require('./intro')
const firstQue = require('../logger/logger.js')
const secondQue = require('../util/helper.js')
const thirdQue = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log("My batch is", abc.name)
    firstQue.welcome()
    secondQue.date()
    secondQue.month()
    secondQue.info()
    thirdQue.mystr("     JavaScipt    and    Nodejs    ")
    thirdQue.lower("BACKEND DEVELOPMENT")
    thirdQue.upper("functionup plutonium batch")
    
    // first Question
    let arr = ['january', 'february', 'march', 'april', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    let a = lodash.chunk(arr, 4)
    console.log(a)
    
    // Second Question
    let odd = [1, 3, 5, 7, 11, 13, 15, 17, 19, 21]
    let b = lodash.tail(odd)
    console.log(b)
    
    // Third Question
    let arr1 = [1, 2, 4, 2, 1]
    let arr2 = [45, 7, 56, 0]
    let arr3 = [18, 45, 7, 11, 67]
    let arr4 = [2, 5, 8, 0, 8]
    let arr5 = [16, 90, 5, 8]
    let unique = lodash.union(arr1, arr2, arr3, arr4, arr5)
    console.log(unique)

    // Fourth Question
    let comb = [['horror', 'The Shining'], ['drama', 'Titanic'], ['thriller', 'Shutter Island'], ['fantasy', 'Pans Labyrinth']]
    let objList = lodash.fromPairs(comb)
    console.log(objList)
    res.send('My first ever api! I will Create it.')
});

router.get('/test-you', function (req, res) {
    res.send("My Second route")
});

module.exports = router;
// adding this comment for no reason