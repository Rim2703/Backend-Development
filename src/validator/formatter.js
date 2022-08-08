// function trim(str){                   // it is simple function
//     var trimmedstr = str.trim();
//     console.log(trimmedstr)
//     }

let a = function trim(){            //here function is store in a variable "a" 
    let ans = "   hi   "
    console.log(ans.trim())
}

const trim  = (str) => {           //Here using arrow function
    console.log(str.trim())
}

// function changetoLowerCase(str) {
//     let lower = str.toLowerCase();
//     console.log(lower)
// }

let b = function changetolowerCase(){
    let lower = "HI THIS IS RIM"
    console.log(lower.toLowerCase())
}

// function changetoUpperCase(str) {
//     let upper = str.toUpperCase();
//     console.log(upper)
// }

let c = function changetoUpperCase(){
    let upper = "how will u become a developer?"
    console.log(upper.toUpperCase())
}

module.exports.mystr = trim
// module.exports.mystr = a  
// module.exports.lower = changetoLowerCase
module.exports.lowerModule = b 
// module.exports.upper = changetoUpperCase
module.exports.upperModule = c 
