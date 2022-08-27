const ProductModel = require('../models/productModel')
const UserModel = require("../models/userModel")
const OrderModel = require("../models/orderModel")

const createOrder = async function (req,res){
    const order = req.body;
    const uid = order.userId
    const pid = order.productId

    const isValidUid = await UserModel.findById(uid)
    if(!isValidUid){return res.send("Plz Enter Valid user id")}

    const isValidPid = await ProductModel.findById(pid)
    if(!isValidPid){return res.send("Plz Enter Valid prodcut id")}

    const isFreeAppUser = req.appUser

    if(isFreeAppUser == true){
        order.amount = 0;
        order.isFreeAppUser = isFreeAppUser;
        const saveOrder = await OrderModel.create(order)
        return res.send({order : saveOrder})
    }
    else if(isFreeAppUser == false){
        const user = await UserModel.findById(uid)

        if(user['balance'] < order.amount)
        {
            return res.send(" You Have not enough balance ")
        }
        else
        {
        const updatedUser = await UserModel.updateOne({_id : uid} ,{$inc : {balance : -order.amount} } , {new :true})
        order.isFreeAppUser = isFreeAppUser;
        const saveOrder = await OrderModel.create(order)
        return res.send({order : saveOrder})
    }
    }    

}

module.exports.createOrder = createOrder