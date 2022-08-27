const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {
    let data = req.body
    let userId = data.userId
    let productId = data.productId
    let isFreeAppUser = req.headers.isfreeappuser
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
    if (req.headers["isfreeappuser"] == 'true') {
        data.amount = 0
        let savedData = await orderModel.create(data)
        return res.send({ data: savedData, msg: "You are free app user." })

    }
    // if(req.headers["isfreeappuser"] == 'false'){
    //     let userBlnc = await userModel.findById(userId).select({ balance: 1, _id: 0})
    //     if(userBlnc.balance < req.body.amount){
    //         return res.send({msg: "Error: The user doesn't have enough balance"})
    //     }

    else if (isFreeAppUser !== 'true') {
        console.log("hi paid app user")
        let orderAmount = await productModel.findById(productId).select({ price: 1, _id: 0 })
        data.amount = orderAmount.price
        let userBlnc = await userModel.findById(userId).select({ balance: 1, _id: 0 })
        userBalance = userBlnc.balance
        if (userBalance > data.amount) {
            let updateUserBlnc = await userModel.findByIdAndUpdate({ _id: userId },
                { $inc: { balance: -data.amount } },
                { new: true })
            console.log(updateUserBlnc)

            let savedData = await orderModel.create(data)
            return res.send({ data: savedData, msg: "You are paid User" })
        }
        else{
            return res.send({ msg: "Error: The user doesn't have enough balance" })
        }
        }
}


module.exports.createOrder = createOrder
