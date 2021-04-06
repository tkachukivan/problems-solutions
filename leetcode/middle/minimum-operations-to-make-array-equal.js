/**
 * https://leetcode.com/problems/minimum-operations-to-make-array-equal/
 * @param {number} n
 * @return {number}
 */
 var minOperations = function(n) {
    return Math.floor(n * n / 4)
//     let result = 0;
//     let index = Math.floor((n - 1)/ 2);
    
//     while(index >= 0) {
//         result += n - ((2 * index--) + 1);
//     }
    
//     return result;
    // let m = Math.floor(n / 2); 
    // if (n % 2 == 1) {
    //     return m * (m + 1);
    // } else {
    //     return m * m;
    // }
};