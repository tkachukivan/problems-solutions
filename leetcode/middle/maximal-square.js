/**
 * https://leetcode.com/problems/maximal-square/
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
    let maxSide = 0;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (matrix[i - 1][j - 1] === '0') continue;
            dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
            maxSide = Math.max(maxSide, dp[i][j]);
        }
    }
    
    return maxSide * maxSide;
};