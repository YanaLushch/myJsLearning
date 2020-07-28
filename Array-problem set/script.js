//takes an array and returns true or false if the array has identical elements
// comment: why I did not give the if else - then return truw. Because for sure first element of this array will be equal to element of checkarray. Because that's what I give in condition. That is why, I have to go out from the loop whenever I see that elements are not equal. And also I have to return true just if it is not false in the whole loop;

var someArray = [];

function checkArray (el) {
    someArray = el[0];
    for (let i = 1; i < el.length; i++) {
        if (el[i] !== someArray) {
        return false;
      } 
    }
   return true;      
}
console.log(checkArray(["b", "a", "a"]));
// function that prints elements in reverse order
var resultArray = [];
function printReverse(element) {
    for (let i = 0; i < element.length; i++) {
        resultArray.unshift(element[i]); 
    }
    return resultArray;
}
console.log(printReverse(["a", "b", "c"]))
///sums an array and returns the sum
var sum = 0;
function sumsArray(ele) {
    for (let i = 0; i < ele.length; i++) {
    sum += ele[i];
    }
    return sum;
}
console.log(sumsArray([1, 10, 11, 40, 90]));
///returns the max num in array
var max = 0;
function maxNum(num) {
   for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
       max = num[i];
    }
   } return max;
}
console.log(maxNum([5, 109, 5, 99]));