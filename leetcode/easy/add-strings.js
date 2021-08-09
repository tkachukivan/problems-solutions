/**
 * https://leetcode.com/problems/add-strings/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    if (!num1) return num2;
    if (!num2) return num1;

    let result = '';

    if(num1.length > num2.length) num2 = num2.padStart(num1.length, '0');
    else num1 = num1.padStart(num2.length, '0');

    let carry = 0;

    for (let i = num1.length - 1; i >= 0; i--) {
        const sum = +num1[i] + +num2[i] + carry;
        if (sum > 9) {
            carry = 1;
            result = sum % 10 + result;
        } else {
            carry = 0;
            result = sum + result;
        }
    }
    
    if (carry) result = 1 + result;
    
    return result;
};