function trim(str){
    var trimmedstr = str.trim();
    console.log(trimmedstr)
    }

function changetoLowerCase(str) {
    let lower = str.toLowerCase();
    console.log(lower)
}
function changetoUpperCase(str) {
    let upper = str.toUpperCase();
    console.log(upper)
}
module.exports.mystr = trim
module.exports.lower = changetoLowerCase
module.exports.upper = changetoUpperCase
