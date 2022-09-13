let a = [3,2,1];
function reverseArray(a){
    let b = [];
    for(let i = a.length-1; i>=0; i--){
        b[b.length] = a[i];
        // console.log(b.length);
    }
    return b;
}


console.log(reverseArray(a));