// const moment = require('moment');
// const ip = require('ip');

const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}


let Logged = (req, res, next) => {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();
    let method = req.method;
    let url = req.url;
    // let status = res.statusCode;
    // let log = `[${formatted_date}] ${method}:${url} ${status}`;
    let log = `[${formatted_date}] ${method}:${url}`;
    console.log(log);
    next();
  };

// let logger = function(req,res,next){
//     let now = moment();
//     let ipAddress = ip.address()

//     let formatting = now.format("YYYY-MM-DD") + " , " + now.format("HH:mm:ss") 
    
//     let url = req.url;
//     let log = `[${formatting} , ${ipAddress} , ${url}]`;
//     console.log(log);
//     next();

// }
  
  

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.Logged = Logged
// module.exports.logger = logger
