//Write a function that uses recursion to find the maximum value in an array_of_integers of integers.
let array_of_integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// write a function that uses recursion to find the maximum value in an array_of_integers of integers.
function find_max(array_of_integers) {
    if (array_of_integers.length === 1) {
        return array_of_integers[0];
    }
    let max = find_max(array_of_integers.slice(1));
    if (array_of_integers[0] > max) {
        return array_of_integers[0];
    }
    return max;
}
// function findMax(array_of_integers) {
//     let max = array_of_integers[0];
//     for (let i = 0; i < array_of_integers.length; i++) {
//         if (array_of_integers[i] > max) {
//             max = array_of_integers[i];
//         }
//     }
//     return max;
// }
console.log(find_max(array_of_integers));