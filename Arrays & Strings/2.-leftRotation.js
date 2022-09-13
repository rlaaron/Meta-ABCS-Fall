let a = [3,2,1];
let n =1;
function rotation(a,n){
    while(n>0){
        let aux=a[0];
        for(let i =0; i<a.length; i++){
            a[i] = a[i+1]
        }
        a[a.length-1]=aux
        n--;
    }
    return a;
}
console.log(rotation(a,n));