// Given two integers represented as strings (x and y), return a string representing the sum of the integers.

function addStrings(x, y) {
    let xInt = parseInt(x);
    let yInt = parseInt(y);
    let sum = xInt+yInt;
    return sum.toString();
}
console.log(addStrings("1", "2"));