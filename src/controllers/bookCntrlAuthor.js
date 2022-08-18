const BookModel2= require("../models/bookSchema")

const createBooks = async function (req, res) {
    let data= req.body
    let savedData= await BookModel2.create(data)
    res.send({msg: savedData})
}

module.exports.createBooks = createBooks