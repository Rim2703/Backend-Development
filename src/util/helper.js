function printDate(){
const d = new Date();
console.log(d)
}

function printMonth(){
    const m = new Date()
    console.log(m.toLocaleDateString("en-Us",{month: "long"}))
}

function getBatchInfo(){
    console.log('Plutonium, W3D5, the topic for today is Nodejs module system')
}
module.exports.date = printDate
module.exports.month = printMonth
module.exports.info = getBatchInfo