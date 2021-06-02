/**
 * https://leetcode.com/problems/interleaving-string/
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// var isInterleave = function(s1, s2, s3) {
//     if (s1.length + s2.length !== s3.length) return false;
//     const cache = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1));
    
//     return solve(0, 0, 0);
    
//     function solve(current, currentS1, currentS2) {
//         if (current === s3.length) return true;
//         if (cache[currentS1][currentS2] !== undefined) return cache[currentS1][currentS2];
        
//         let result = false;
//         if (s3[current] === s1[currentS1] && s3[current] === s2[currentS2]) {
//             result = solve(current + 1, currentS1 + 1, currentS2) ||
//                      solve(current + 1, currentS1, currentS2 + 1);
//         } else if (s3[current] === s1[currentS1]) {
//             result = solve(current + 1, currentS1 + 1, currentS2);
//         } else if (s3[current] === s2[currentS2]) {
//             result = solve(current + 1, currentS1, currentS2 + 1);
//         }
//         cache[currentS1][currentS2] = result;
//         return result;
//     }
// };

// var isInterleave = function(s1, s2, s3) {
//     if (s1.length + s2.length !== s3.length) return false;

//     // dp[i][j] <=> if s1.substr(0, i) interleaving s2.substr(0, j) generates s3.substr(0, i+j)
//     const dp =  Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1));

//     for (let i =0; i <= s1.length; i++)
//         for (let j=0; j <= s2.length; j++)
//             dp[i][j] = i && dp[i-1][j] && s3[i+j-1] == s1[i-1]    
//                     || j && dp[i][j-1] && s3[i+j-1] == s2[j-1]
//                     || !i && !j   // set dp[0][0] to true

    
//     return !!dp[s1.length][s2.length];
// };

var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    
    const dp = new Array(s2.length + 1);
    
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0 && j == 0) {
                dp[j] = true;
            } else if (i == 0) {
                dp[j] = dp[j - 1] && s2[j - 1] === s3[i + j - 1];
            } else if (j == 0) {
                dp[j] = dp[j] && s1[i - 1] === s3[i + j - 1];
            } else {
                dp[j] = (dp[j] && s1[i - 1] === s3[i + j - 1]) || (dp[j - 1] && s2[j - 1] == s3[i + j - 1]);
            }
        }
    }
    
    return dp[s2.length];
}