/**
 * https://leetcode.com/problems/delete-operation-for-two-strings/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    // same as original but dp with one level
    const m = word1.length;
    const n = word2.length
    let dp = new Uint16Array(n + 1);
    
    for (let i = 0; i <= m; i++) {
        const tmp = new Uint16Array(n + 1);
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                tmp[j] = i + j;
            } else if (word1[i - 1] === word2[j - 1]) {
                tmp[j] = dp[j - 1];
            } else {
                tmp[j] = 1 + Math.min(tmp[j - 1], dp[j]);
            }
        }
        dp = tmp;
    }
    
    return dp[n];
    
    // original (missed at first that need to add j/i + 1 as has minus in step before)
//     const m = word1.length;
//     const n = word2.length
//     const cache = Array.from({ length: word1.length }, () => new Int16Array(word2.length).fill(-1));

//     return helper(word1.length - 1, word2.length - 1);
    
//     function helper(i, j) {
//         if (i < 0 && j < 0) return 0;
//         if (i < 0) return j + 1;
//         if (j < 0) return i + 1;
//         if (cache[i][j] !== -1) return cache[i][j];
//         let result;
        
//         if (word1[i] === word2[j]) {
//             result = helper(i - 1, j - 1);
//         } else {
//             result = 1 + Math.min(helper(i - 1, j), helper(i, j - 1));
//         }
        
//         cache[i][j] = result;

//         return result;
//     }
    
        // find greatest common subsequence
//     const m = word1.length;
//     const n = word2.length
//     const cache = Array.from({ length: word1.length }, () => new Int16Array(word2.length).fill(-1));
    
//     return m + n - 2 * helper(m - 1, n - 1);
    
//     function helper(i, j) {
//         if (i < 0 || j < 0) return 0;
//         if (cache[i][j] !== -1) return cache[i][j];
//         let result;
        
//         if (word1[i] === word2[j]) {
//             result = helper(i - 1, j - 1) + 1;
//         } else {
//             result = Math.max(helper(i - 1, j), helper(i, j - 1));
//         }
        
//         cache[i][j] = result;

//         return result;
//     }
};