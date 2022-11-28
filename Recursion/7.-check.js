let stairs= 0;
let n = 0;

function upStair(n){
    console.log(`stairs: ${stairs}`);
    if(n>36){
        console.log("stepts more topStairs");
        return;
    }
    stairs += n;
    if(stairs>=36){
        console.log("you top stairs");
        return;
    }else{
        console.log("enter you steps");
        n=5
        upStair(n);
    }
    

}
console.log(upStair(n));

//  first step, check if n < thithy six, 