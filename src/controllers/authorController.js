const AuthorModel= require("../models/authorSchema")
const BookModel2= require("../models/bookSchema")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getBooks = async function(req,res){
    let findAuthor = await AuthorModel.find({author_name: "Chetan Bhagat"})
    let findBook = await BookModel2.find({author_id:{$eq: findAuthor[0].author_id} })
    res.send({msg: findBook})
}

const Updates = async function(req,res){
    let data = req.body 
    let updateBook = await BookModel2.findOneAndUpdate(
        {name : "Two States"},
        {$set: data},
        {new: true}
        )
    let priceUpdate = updateBook.price
    let authorUpdate = await AuthorModel.find({author_id: {$eq: updateBook.author_id}}).select({author_id:1, _id: 0})
        res.send({msg: authorUpdate, priceUpdate})
}

const bookRange = async function(req,res){
    let range = await BookModel2.find({ price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let a = range.map(x=>x.author_id)
    let newRange = await AuthorModel.find({author_id: a}).select({author_name: 1, _id:0})
    res.send({msg: newRange})
}

module.exports.createAuthor = createAuthor
module.exports.getBooks = getBooks
module.exports.Updates = Updates
module.exports.bookRange = bookRange 