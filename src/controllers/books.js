const BookModel= require("../models/bookModel")

const getAllBooks= async function (req, res) {
    let allBooks= await BookModel.find().select( { bookName: 1, authorName: 1, _id:0})
    res.send({msg: allBooks})
}

const getBookYears = async function(req,res){
    let year = req.body.year
    let allBooksyear = await BookModel.find({ year: { $eq: year } })
    res.send({ msg: allBooksyear })
}

// const yearDetails = async function (req, res) {
//     let yearList= await BookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
//     res.send(yearList)
//  }

// const getParticularBook = async function(req,res){
//         let data = req.body
//         let particularBook = await BookModel.find(data);
//         res.send(particularBook)
//     }

    const particularBooks = async function (req, res) {
        let specificBooks = await BookModel.find(req.body)
        res.send({msg:specificBooks})
    }
    
const getByINR = async function(req,res){
        // let bookByPrice = await BookModel.find({$or:[{"prices.indianPrice":{$eq:"100INR"}},{"prices.indianPrice":{$eq:"200INR"}},{"prices.indianPrice":{$eq:"500INR"}}]})
        let bookbyPrice = await BookModel.find({"price.indianPrice": {$in: ["100INR","200INR","500INR"]}}).select({bookName:1,_id:0})
        res.send({msg : bookbyPrice})
        
    }

const getRandom = async function(req,res){
    let allRandom = await BookModel.find({$or: [{stockAvailable : true} , {totalPages:  {$gt: 500}}]})
    res.send({msg:allRandom})
}

module.exports.getAll= getAllBooks
module.exports.getYear = getBookYears
module.exports.getParticularBook = particularBooks
module.exports.getByINR = getByINR
module.exports.getRandom = getRandom