//Write a function that recursively calculates the sum of the digits in a string, and terminates when the sum is a single digit.
let sumDigits = (digits) => {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += Number(digits[i]);
    }
    if (sum < 10) {
      return sum;
    }
    return sumDigits(sum.toString());
};
  
  console.log(sumDigits("9875"));