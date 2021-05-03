/**
 * https://leetcode.com/problems/unique-paths/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    const dp = Array.from({ length: m }, () => new Uint32Array(n));
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[m - 1][n - 1];
};


// var uniquePaths = function(m, n) {
//     return factorial(m + n - 2)/(factorial(m - 1)*factorial(n - 1));
// };

// const cache = [];
// function factorial(n) {
//     if (n < 2) return 1;
//     if (cache[n] !== undefined) return cache[n];
//     cache[n] = n * factorial(n - 1);
//     return cache[n];
// }