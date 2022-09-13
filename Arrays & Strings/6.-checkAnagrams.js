let s1 = 'abcf';
let s2 = 'cbad';


function isAnagram(s1, s2){
    let newS1 = s1.split('').sort().join('');
    let newS2 = s2.split('').sort().join('');
     if(newS1 === newS2){
        return 1;
     }else {
        return 0;
     }
}

console.log(isAnagram(s1, s2));
