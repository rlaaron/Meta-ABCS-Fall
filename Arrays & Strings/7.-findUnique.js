let haystack = [1, 1, 10,2, 5, 3, 3, 2, 5];

function duplicates(haystack){
    for(let i = 0; i<haystack.length; i++){
        let count = 0;
        for(let j = 0; j<haystack.length; j++){
            if(haystack[i] === haystack[j]){
                count ++;
            }
        }
        if(count === 1){
            return haystack[i];
        }
    }
    
}
console.log(duplicates(haystack));