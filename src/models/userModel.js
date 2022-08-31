const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {type: String, required: true, unique: true},
    emailId: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    age: Number,
    posts: {type: [], deafult: []}
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)
