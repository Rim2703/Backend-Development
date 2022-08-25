const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment');
const ip = require('ip');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Rimsha:RimAtlas@cluster0.ij9mujl.mongodb.net/Rimsha-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

app.use(function(req,res,next){
    let now = moment();
    let ipAddress = ip.address()

    let formatting = now.format("YYYY-MM-DD") + " , " + now.format("HH:mm:ss") 
    
    let url = req.url;
    let log = `[${formatting} , ${ipAddress} , ${url}]`;
    console.log(log);
    next();
})

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
