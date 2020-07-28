//while num is between -10 and 19
var num = -10;
while (num < 19) {
    console.log(num);
    num++;
}
//even nums between 10 and 40
var numsEven = 10;
while (numsEven <= 40) {
    if (numsEven % 2 === 0) {
    console.log(numsEven);   
    }
    numsEven++;
}
////all odd nums between 300 and 333
var numsOdd = 300;
while (numsOdd <= 333) {
    if (numsOdd % 2 !== 0) {
    console.log(numsOdd);   
    }
    numsOdd++;
}
/// divisible by 5 and 3 between 5 and 50
var divisible = 5;
while (divisible <=50) {
    if (divisible % 3 === 0 && divisible % 5 === 0) {
        console.log(divisible)
    }
    divisible++;
}