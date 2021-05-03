/**
 * https://leetcode.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    
    const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;    
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};

// var longestCommonSubsequence = function(text1, text2) {
//     const m = text1.length;
//     const n = text2.length;
//     const memo = Array.from({ length: m }, () => new Uint16Array(n));

//     return recursion(m - 1, n - 1);
    
//     function recursion(index1, index2) {
//         if (index1 < 0 || index2 < 0) return 0;

//         if (memo[index1][index2]) return memo[index1][index2];

//         let result;

//         if (text1[index1] === text2[index2]) {
//             result = recursion(index1 - 1, index2 - 1) + 1;
//         } else {
//             result = Math.max(recursion(index1, index2 - 1), recursion(index1 - 1, index2));
//         }

//         memo[index1][index2] = result;
//         return result;
//     }
// };
