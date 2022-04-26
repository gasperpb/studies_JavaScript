var a = 1
var b = 2

if (a === 1) {
    var a = 11 // the sope is global
    let b = 22 // the sope is inside the if-block

    console.log(a)
    console.log(b)
}
console.log(a) // 11
console.log(b) //2

number = 11
console.log(number + 2)
var number