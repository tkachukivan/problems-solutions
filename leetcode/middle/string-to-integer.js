/**
 * https://leetcode.com/problems/string-to-integer-atoi/
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const MIN_VALUE = -2147483648;
    const MAX_VALUE = 2147483647;
    let sign = 1;
    let result = 0;
    s = s.trimStart();
    
    let i = 0;
    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') sign = -1;
        i++;
    }
    
    while (s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + Number(s[i++])

        if (result >= 2147483648) {
            if (sign === -1) return MIN_VALUE;
            return MAX_VALUE;
        }
    }
        
    return result * sign;
};