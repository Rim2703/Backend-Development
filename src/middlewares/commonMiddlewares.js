const { isValidObjectId } = require("mongoose")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const validation1= function ( req, res, next) {
    let data = req.headers
    let validate = data.isfreeappuser
    if(!validate){
        return res.send({msg: "The request is missing a mandatory header"})
     }
    next()
}

const isFreeAppUser = async function(req,res,next){
    let bool = req.headers["isfreeappuser"]
    if(bool != "true" && bool != "false"){
        return res.send("Header Must be in Beelean")
    }
    next()
}

const validation2= async function ( req, res, next) {
    let data = req.body
    let userId = data.userId
    let productId = data.productId
    
    let finduser = await userModel.findById(userId)
    let findproduct = await productModel.findById(productId)
    if(!userId){
        return res.send({msg: "User Id is required"})
    }
    else if(!finduser){
        return  res.send({msg: "Please enter valid User Id"})
      }

    if(!productId){
        return res.send({msg: "Product Id is required"})
    }
    else if(!findproduct){
        return  res.send({msg: "Please enter valid Product Id"})
        }
     next()
    
}


module.exports.mid1= mid1
module.exports.validation1= validation1
module.exports.validation2= validation2
module.exports.isFreeAppUser = isFreeAppUser
