/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        const char = tokens[i];
        if (!isNaN(char)) {
            stack.push(Number(char));
            continue;
        }
        const num1 = stack.pop();
        const num2 = stack.pop();
        switch(char) {
            case '+':
                stack.push(num1 + num2);
                break;
            case '*':
                stack.push(num1 * num2);
                break;
            case '-':
                stack.push(num2 - num1);
                break;
            case '/':
                stack.push(Math.trunc(num2 / num1));
                break;
        }
    }
    
    return stack[0];
};