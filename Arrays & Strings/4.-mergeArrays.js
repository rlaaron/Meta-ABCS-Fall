let arr1 = [1,40,50];
let arr2 = [5,9,10];

function merge(arr1, arr2){
    let i = 0;
    let j = 0;
    let c= [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            c[c.length] = arr1[i];
            i++;
        } else {
            c[c.length] = arr2[j];
            j++;
        }
    }

    while(i < arr1.length){
        c[c.length] = arr1[i];
        i++;
    }
    
    while(j < arr2.length){
        c[c.length] = arr2[j];
        j++;
    }
    return c;
}
console.log(merge(arr1,arr2));