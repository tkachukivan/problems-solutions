/**
 * https://leetcode.com/problems/unique-binary-search-trees/
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    const dp = new Uint32Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j];
        }
    }
    
    return dp[n];
};