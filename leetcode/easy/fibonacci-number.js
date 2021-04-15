/**
 * https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let num1 = 0;
    let num2 = 1;
    for (let i = 2; i <= n; i++) {
        const tmp = num1;
        num1 = num2;
        num2 = tmp + num2;
    }
    
    return num2;
};
