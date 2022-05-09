let num = 100.49

console.log(num.toFixed(2))
console.log(Math.round(num))
console.log(Math.max(1,2,3,4))

// Generate random number between [10, 20]
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)