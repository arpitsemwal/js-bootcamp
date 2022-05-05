let num = 5.5 / 2
console.log(num)

if(true) {
    myName = 'Arpit'    //this will create a global level variable - not good practice
    a = 1               //this will create a global level variable
    console.log(myName + ' ' + a)
}
console.log(myName + ' ' + a)

let b = 1
if(true) {
    let b = 2           // creates new varible 'b' coz 'b' is in different scope
    console.log(b)
}
console.log(b)