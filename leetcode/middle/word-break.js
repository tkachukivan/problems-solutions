/**
 * https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    const cache = new Map();
    const words = new Set(wordDict);
    
    return canBreak(s, 1);
    
    function canBreak(s, end) {
        if (end === s.length) {
            return words.has(s);
        }
        if (cache.has(s)) return cache.get(s);
        const candidate = s.substring(0, end);
        let result = 0;
        if (words.has(candidate)) {
            result = canBreak(s, end + 1) || canBreak(s.substring(end), 1);
        } else {
            result = canBreak(s, end + 1);
        }
        
        cache.set(s, result);
        
        return result;
    }
};

// dp
// var wordBreak = function(s, wordDict) {
//     const words = new Set(wordDict);
//     const dp = new Array(s.length + 1).fill(false);
//     dp[0] = true;
    
//     for(let i = 1; i <= s.length; i++) {
//         for(let j = 0; j < i; j++) {
//             if(dp[j] && words.has(s.substring(j, i))) {
//                 dp[i] = true
//                 break;
//             }
//         }
//     }
//     return dp[s.length]
// };
