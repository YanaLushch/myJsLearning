//write function isEven which will return true or false if the number is even or not
function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
    return false
}
console.log(isEven(22));
/// write a function factorial  which will multiply the number like: if num is 5 then it wil(5*4*3*2*1) and wil return the result

function factorial (num) {
    var result = 1;
    for (let i = 1; i <= num; i++) {
    result = result*i;
}
return result;
}
console.log(factorial(10))

// Kebab to snake - returns keyway different instead of -, returns _
function kebabToSnake(param) {
   return param.replace(/-/g, "_")
}
console.log(kebabToSnake("try-it-with-me"))