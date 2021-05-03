/**
 * https://leetcode.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// top down
var minDistance = function(word1, word2) {
    const cache = Array.from({ length: word1.length }, () => new Uint16Array(word2.length))
    return getDistance(word1.length - 1,  word2.length - 1);
    
    function getDistance(a, b) {
        if (a < 0) return b + 1; // number of operations(insert) to have result string + 1 as rollback to prev minus;
        if (b < 0) return a + 1;
        if (cache[a][b]) return cache[a][b];
        if (word1[a] === word2[b]) {
            cache[a][b] = getDistance(a - 1, b - 1);
        } else {
            cache[a][b] = 1 + Math.min(
                getDistance(a - 1, b - 1), // replace
                getDistance(a, b - 1), // insert
                getDistance(a - 1, b), // edit 
            );
        }
        
        return cache[a][b];
    }
};

// bottom up
// var minDistance = function(word1, word2) {
//     const m = word1.length, n = word2.length;
//     const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1))

//     for (let i = 1; i <= m; i++) {
//         dp[i][0] = i
//     }

//     for (let i = 1; i <= n; i++) {
//         dp[0][i] = i
//     }

//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (word1[i - 1] == word2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1];
//             } else {
//                 dp[i][j] = 1 + Math.min(
//                     dp[i - 1][j], // edit
//                     dp[i][j - 1], // insert
//                     dp[i - 1][j - 1] // replace
//                 );
//             }
//         }
//     }
//     return dp[m][n];
// };