/**
 * https://leetcode.com/problems/powx-n/
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//     if (n === 0) return 1;
//     if (x === 1) return 1;
//     if (x === -1) {
//         return n % 2 === 0 ? 1 : -1
//     }
//     let result = x;
//     if (n < 0) {
//         n = Math.abs(n);
//         while (n > 1) {
//             result *= x;
//             n--;
//         }
//         result = 1 / result;
//     } else {
//         while (n > 1) {
//             result *= x;
//             n--;
//         }
//     }
    
//     return result;
// };

var myPow = function(x, n) {
    if (n===0) return 1;
    if (x === 1) return 1;
    if (x === -1) {
        return n % 2 === 0 ? 1 : -1
    }
    let pow = Math.abs(n);
    
	let result = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;
    
    return n < 0 ? 1 / result : result;
};

// var myPow = function(a, b) {
//     let flag = false;
	
// 	// checking if a is negative 
//     if(a < 0) {
//         a = Math.abs(a)
//         if (b % 2 != 0) flag = true;
// 		let res = Math.exp(b * Math.log(a));
//         return ( flag ? res * -1 : res);
//     }
	
//     // when a is not negative
//     else return Math.exp((b) * Math.log(a));
// };

// var myPow = function (x, n) {
//     let ans = 1;
//     let i = n;
//     while (n != 0) {
//         if (n & 1) ans *= x;
//         x *= x;
//         n = n / 2;
//     }
//     return i >= 0 ? ans : 1 / ans;
// }