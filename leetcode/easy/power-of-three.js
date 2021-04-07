/**
 * https://leetcode.com/problems/power-of-three
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    // original
    // let power = 0;
    // while(true) {
    //     let value = 3 ** power++;
    //     if (value === n) return true;
    //     if (value > n) return false;
    // }
    while (n % 3 == 0) {
        n /= 3;
    }

    return n == 1;
    // fastest
    // return n > 0 && 1162261467 % n == 0;
};