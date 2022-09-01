const axios = require("axios");

let getWeather = async function (req, res) {
    try {
        let name = req.query.q
        let key = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({ Temp: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortCitiesByWeather = async function (req, res) {
    try {
        let cities =  [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []
        for(let i=0; i<cities.length; i++){
            let obj = { city: cities[i]}     // {city: ""Bengaluru"}  it shows in object format where key is city
        
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=aa985cdf865df996ef9fdf009825e512`
        }
    
        let result = await axios(options);
        console.log(result.data.main.temp)
        
        obj.temp = result.data.main.temp
        cityObjArray.push(obj)
    }
    let sorted = cityObjArray.sort( function(a,b) { return a.temp - b.temp})
    console.log(sorted)
    res.status(200).send({ data: sorted, status: true })
}
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather = getWeather
module.exports.sortCitiesByWeather = sortCitiesByWeather