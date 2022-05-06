let functionName = function(name, num) {
    console.log("Hello" + ' ' + name)
    console.log(num)
}

let square = function(num = 1) { // 1 is default value, considered only if no argument provided
    return num ** 2;
}

function abs() {
    return 0
}

functionName('Arpit', 2)

console.log(square(10))
console.log(square())

console.log(abs())