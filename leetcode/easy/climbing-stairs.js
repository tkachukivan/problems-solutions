/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let a = 1;
    let b = 2;
    for(let i = 3; i <= n; i++) {
        const tmp = a;
        a = b;
        b = tmp + b;
    }
    
    return b;
};