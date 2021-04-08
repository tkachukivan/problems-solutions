/** 
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    if (n <= 4) return 0;
    let zeros = 0;
    while (n != 0) {
        n = Math.floor(n / 5);
        zeros += n;
    }
    
    return zeros;
};