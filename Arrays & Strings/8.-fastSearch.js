let haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let needle = 4;

function find(haystack, needle){
    for(let i = 0; i< haystack.length; i++){
        if(needle === haystack[i]){
            return i;
        }
    }
    return -1;
}

console.log(find(haystack, needle));