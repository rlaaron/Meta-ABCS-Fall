//We define super digit of an integer  using the following rules:

// Given an integer, we need to find the super digit of the integer.

function superDigit(n, k) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    sum *= k;
    if (sum < 10) {
        return sum;
    }
    return superDigit(sum.toString(), 1);
}

console.log(superDigit("9875", 4));