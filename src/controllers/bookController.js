const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")
const bookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

// const bookData = async function(req,res){
//     let data = req.body
//     const{author,publisher} = data

//     let findauthor = await authorModel.findById(author)
//     if(!findauthor){
//         res.send({msg: "Wrong Author"})
//     }

//     let findpublisher = await publisherModel.findById(publisher)
//     if(!findpublisher){
//         res.send({msg:"Wrong Publisher"})
//     }

//     else{
//         let createBook = await bookModel.create(data)
//     res.send({msg: createBook})
//     }

// }

const createBookWithAuthorAndPublisherId = async function(req,res){
    let data = req.body
    
    let findAuthor = await authorModel.findById(data.author) 
    let findPublisher = await publisherModel.findById(data.publisher)

    if(!data.author){
       return res.send({msg: "Author_Id is Mandatory"})
    }
    else if(findAuthor == null){
      return  res.send({msg: "Please enter valid Author Id"})
    }

    if(!data.publisher){
       return res.send({msg: "Publisher_id is Mandatory"})
    }
    else if(findPublisher == null){
     return res.send({msg: "Please enter valid Publisher Id"})
    }

    let createBook = await bookModel.create(data)
       return res.send({msg: createBook})
    
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    // let specificBook = await bookModel.find().populate('author').populate('publisher')
    let specificBook = await bookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})

}

const updateBooks = async function(req,res){
    let publisherName = await publisherModel.find({name: {$in:["HarperCollins","Penguin"]}}).select("_id")
    // let publisherName = await publisherModel.find({name: "HarperCollins"},{name:"Penguin"}).select("_id")

    let updateCover = await bookModel.updateMany({publisher: publisherName},
        {$set: {isHardCover: true}})
    
    let authorRating = await authorModel.find({rating:{$gt: 3.5}}).select("_id")
    let updateBookPrice = await bookModel.updateMany(
        {author: authorRating},
        {$inc: {price: 10}})

    res.send({data: updateCover,updateBookPrice})
}

// module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
// module.exports.bookData = bookData
module.exports.createBookWithAuthorAndPublisherId = createBookWithAuthorAndPublisherId
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.updateBooks = updateBooks
