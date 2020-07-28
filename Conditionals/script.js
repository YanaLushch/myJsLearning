// If age is negative
var age = -21;
if (Math.sign(age) === -1) {
    console.log("Something is wrong")
} else {
    console.log("You're good to go!")
}

// If age is 21 
var myAge = 21;
if (myAge === 21) {
    console.log("Happy 21st birthday!!!")
}

///If age is odd
var myOddAge = 20;
if (myOddAge % 2 !== 0){
console.log("HAHAHA! Your age is ODD!")
} else{
    console.log("OH WOW, your are is an even number!")
}
///If age is a perfect square
var perfectSquareAge = 49;
if (perfectSquareAge % (Math.sqrt(perfectSquareAge)) === 0 ){
console.log("Yes, this is perfect square")
} else{
    console.log("Oh no! Unfortunately your age is not a perfect square")
}