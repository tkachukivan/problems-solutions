/**
 * https://leetcode.com/problems/reverse-bits
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let result = 0;
    let count = 32;

    while (count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
    // return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
};