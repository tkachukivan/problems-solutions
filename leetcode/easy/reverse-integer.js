/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const MAX = 2 ** 31 - 1;
    const MIN = (-2) ** 31;
    let result = 0;
    
    while(x !== 0) {
        result *= 10;
        result += x % 10;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    }
    
    return result > MAX || result < MIN ? 0 : result;
};