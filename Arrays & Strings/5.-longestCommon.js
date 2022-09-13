let strings = ['lower', 'loow', 'low'];
let prefix = '';

function common(strings, prefix){
    for(let i = 0; i < strings[0].length; i++){
        let char = strings[0][i];
        for(let j = 1; j < strings.length; j++){
            if(strings[j][i] !== char){
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}

console.log(common(strings, prefix));