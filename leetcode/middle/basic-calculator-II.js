/**
 * https://leetcode.com/problems/basic-calculator-ii/
 * @param {string} s
 * @return {number}
 */

 const operations = {
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
};

var calculate = function(s) {
    const numbersStack = [];

    
    let i = 0;
    let operation = '+';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === ' ') continue;
        if (isOperation(char)) {
            operation = char;
            continue;
        }
        
        let j = i;
        while (isDigit(s[j + 1])) j++;
        
        const num = Number(s.substring(i, j + 1));
        i = j;
        
        if (operation === '-') numbersStack.push(-num);
        else numbersStack.push(num);

        if (operation === '/' || operation === '*') {
            const num1 = numbersStack.pop();
            const num2 = numbersStack.pop();
            numbersStack.push(operations[operation](num2, num1));
        }
    }
    
    let result = 0;
    for (let i = 0; i < numbersStack.length; i++) {
        result += numbersStack[i];
    }
    
    return result;
        
    function isDigit(char) {
        return !isNaN(char);
    }
    
    function isOperation(char) {
        return char === '-' || char === '+' || char === '*' || char === '/';
    }
};
