/**
 * https://leetcode.com/problems/palindromic-substrings
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    const n = s.length;
    let palindroms = 0;
//     dp version
//     const dp = new Array(n);
//     for (let i = 0; i < n; i++) {
//         dp[i] = new Array(n);
//         dp[i][i] = true;
//     }
    
//     for (let i = 0; i < n - 1; i++) {
//         dp[i][i + 1] = dp[i][i] && s[i] === s[i + 1];
//         dp[i][i + 1] && palindroms++;
//     }
    
    
    
//     for (let len = 3; len <= n; len++) {
//         for (let i = 0, j = i + len - 1; j < n; j++, i++) {
//             dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
//             dp[i][j] && palindroms++;
//         }
//     }
    
    for (let i = 0; i < n; i++) {
        countAccoundCenter(i, i);
        countAccoundCenter(i, i + 1);
    }
    
    return palindroms;
    
    function countAccoundCenter(lo, hi) {
        while(lo >= 0 && hi < n) {
            if (s[lo] !== s[hi]) break
            palindroms++;
            lo--;
            hi++;
        }
    }
};