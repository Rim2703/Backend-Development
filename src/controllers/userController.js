const userModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}


const basicCode= async function(req, res, next) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    }

/*
const createUser= async function (req, res) {
    
    let data= req.body
    let tokenDataInHeaders= req.headers.token
    //Get all headers from request
    console.log("Request headers before modificatiom",req.headers)
    //Get a header from request
    console.log(req.headers.batch)
    console.log(req.headers["content-type"])
    // console.log(req.headers.content-type)   //this is not work becoz of dot notation
    console.log(tokenDataInHeaders)
    //Set a header in request
    req.headers['month']='June' //req.headers.month = "June"

    //Set an attribute in request object
    req.anything = "everything"
    
    console.log("Request headers after modificatiom",req.headers)
    
    //Set a header in response
    res.header('year','2022')
    res.send({msg: "Hi"})
}
*/

const getUsersData= async function (req, res) {
    let allUsers= await userModel.find()
    res.send({msg: allUsers})
}
/*
let obj = {
    name:"Apple",
    city: "Europe",
    address_pincode: "56890",
    "address-pincode": "56890"
}

console.log(obj.name)
console.log(obj["city"])
console.log(obj["address_pincode"])
console.log(obj.address_pincode)
// console.log(obj.address-pincode)    //ReferenceError: pincode is not defined

obj.age = 12
obj["age"] = 21
console.log(obj.age)
console.log(obj["age"])

*/

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode