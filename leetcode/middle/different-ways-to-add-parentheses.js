/**
 * https://leetcode.com/problems/different-ways-to-add-parentheses/
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression, memo = new Map()) {
    if (memo.has(expression)) return memo.get(expression);
    const result = [];
    
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === '+' || char === '-' || char === '*') {
            const leftResult = diffWaysToCompute(expression.substring(0, i), memo);
            const rightResult = diffWaysToCompute(expression.substring(i + 1), memo);
            for (const num1 of leftResult) {
                for (const num2 of rightResult) {
                    result.push(executeOperation(num1, num2, char));
                }
            }
        }
    }
    
    if (!result.length) result.push(Number(expression));
    memo.set(expression, result);
    return result;
    
    function executeOperation(num1, num2, op) {
        switch(op) {
            case '+':
                return num1 + num2;
            case '*':
                return num1 * num2;
            case '-':
                return num1 - num2;
        }
    }
};