/**
 * https://leetcode.com/problems/divide-two-integers/
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    const MIN_VALUE = -2147483648;
    const MAX_VALUE = 2147483647;
    let result = 0;
    let sign = 1;
    if (Math.sign(dividend) !== Math.sign(divisor)) sign = -1;
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend - divisor >= 0) {
        let divisorUpdates = 1;
        let currentDivisor = divisor;
        while (currentDivisor + currentDivisor <= dividend) {
            currentDivisor += currentDivisor;
            divisorUpdates += divisorUpdates;
        }
        result += divisorUpdates;
        dividend -= currentDivisor;
        
        if (result > MAX_VALUE) {
            if (sign === -1) return MIN_VALUE;
            return MAX_VALUE;
        }
    }
    
    return result * sign;
};

// var divide = function(A, B) {
//     if (A === -2147483648 && B === -1) return 2147483647
//     let ans = 0, sign = 1
//     if (Math.sign(A) !== Math.sign(B)) sign = -1;
//     A = Math.abs(A);
//     B = Math.abs(B);
//     if (A === B) return sign
//     for (let i = 0, val = B; A >= B; i = 0, val = B) {
//         while (val > 0 && val <= A) val = B << ++i
//         A -= B << i - 1, ans += 1 << i - 1
//     }
//     return sign < 0 ? -ans : ans
// };

// var divide = function(A, B) {
//     let ans = 0
//     if (B === -2147483648) return A === B
//     if (A === -2147483648)
//         if (B === 1) return -2147483648
//         else if (B === -1) return 2147483647
//         else A += Math.abs(B), ans++
//     ans += Math.floor(Math.exp(Math.log(Math.abs(A)) - Math.log(Math.abs(B))))
//     return A > 0 === B > 0 ? ans : -ans
// };
