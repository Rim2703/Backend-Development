// function printDate(){
// const d = new Date();
// console.log(d)
// }

let d = function printDate(){
    const date = new Date();
    console.log(date.toDateString())
}

// function printMonth(){
//     const m = new Date()
//     console.log(m.toLocaleDateString("en-Us",{month: "long"}))
// }

let m  = function month(){
    let b = new Date();
    console.log(b.toLocaleString())
}

function getBatchInfo(){
    console.log('Plutonium, W3D5, the topic for today is Nodejs module system')
}

// module.exports.date = printDate
module.exports.date = d 
// module.exports.month = printMonth
module.exports.month = m 
module.exports.info = getBatchInfo