/**
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let index = digits.length - 1;
    while(index >= 0) {
        if (digits[index] === 9) {
            digits[index--] = 0;
        } else {
            digits[index]++;
             return digits;
        }
    }
    
    digits[0] = 1;
    digits.push(0);

    return digits;
};