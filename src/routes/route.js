const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const MemesController = require("../controllers/memesController")
const WeatherController = require("../controllers/weatherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getBydistrictId", CowinController.getByDistrictId)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/getWeather", WeatherController.getWeather)
router.get("/sortCities", WeatherController.sortCitiesByWeather)

router.post("/cowin/getOtp", CowinController.getOtp)
router.post("/createMemes", MemesController.createMemes)

module.exports = router;