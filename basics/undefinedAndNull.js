//undefined for variable
let a
console.log(a)      //undefined - means no value assigned / absence of value

if(a === undefined) {
    console.log('a is undefined')
}

//undefined for function
let square = function(num) {
    if(num == undefined) {
        console.log('num is ' + num)
    }
    else {
        console.log(num)
    }
}

square()
let sq = square(5)
console.log(sq)     //undefined, because square function does not return anything

let b = undefined
console.log(b) //no context if b is undefined by user or by the compiler
//Therefore, we have null, null is always defined by user/programmer
b = null
console.log(b)