// Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.
let s = '{[()]}';
//given a function that takes in a string of brackets and returns a boolean value of whether the string is balanced or not
function isBalanced(s) {
    let stack = [];
    let open = ['{', '[', '('];
    let close = ['}', ']', ')'];
    let y = 'YES';
    let n = 'NO';   
    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        } else if (close.includes(s[i])) {
            let last = stack.pop();
            if (open.indexOf(last) !== close.indexOf(s[i])) {
                return n;
            }
        }
    }
    if(stack.length === 0) {
        return y;
    }

}
