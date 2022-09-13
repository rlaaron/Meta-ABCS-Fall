let s = 'Aaron-Rincon';
let k = 3;

function caesarCipher(s, k) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '-') {
            answer += '-';
        } else {
            if(s[i] === s[i].toUpperCase()){
                answer += alphabet[(alphabet.indexOf(s[i].toLowerCase()) + k) % alphabet.length].toUpperCase();
            } else {
                answer += alphabet[(alphabet.indexOf(s[i])+k )% alphabet.length];
            } 
        }
    }
    return answer;
}
function cesar(s,k){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'answer'];
    // let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'answer'];
    let anwser = '';
    let lt =0;
    for(let i = 0; i<s.length; i++){
        // if(s[i] === '@' ||'~'|| '#'|| '_' ||'^'|| '*'|| '%'|| '/'|| '.'|| '+'|| ':'|| '='||'`'){
        if(!find(alphabet,s[i])){
            anwser +=s[i];
        }else if (s[i] === s[i].toUpperCase()){
            let lt = find(alphabet,s[i].toLowerCase())+k;
            if(lt>26){
                lt -= 26;
            }
            anwser += alphabet[lt].toUpperCase();
        }else{
            lt = find(alphabet,s[i])+k;
            if(lt>26){
                lt -= 26;
            }
            anwser += alphabet[lt];
        }
    }
    return anwser;

}
function find(alphabet,x){
    for(let i = 0; i< alphabet.length; i++){
        if(x === alphabet[i]){
            return i;
        }
    }
}
console.log(caesarCipher(s, k));