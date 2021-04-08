/**
 * https://leetcode.com/problems/sqrtx
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if (x === 0) return 0;
    if (x < 4) return 1;
    // let value = 2;
    // while(value < x) {
    //     if (value ** 2 > x) return --value;
    //     else value++;
    // }
    let low = 1;
    let hi = Math.floor(x / 2);
    while(low <= hi) {
        const mid = Math.floor((low + hi)/ 2);
        let pow = mid ** 2;
        if (pow > x) {
            hi = mid;
        } else {
            if (pow === x || (mid + 1) ** 2 > x) return mid;
            low = mid + 1;
        }
    }
};