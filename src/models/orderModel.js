const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId:  {
        type: ObjectId,
        required: true,
        ref: "User"
    },
	productId: {
        type: ObjectId,
        required: true,
        ref: "product"
    },
	amount: Number,
	isFreeAppUser: {
        type: Boolean,
        default:false
    },
	// date: String
	date: {
        type: Date,
        default: new Date()
    }
   
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)
