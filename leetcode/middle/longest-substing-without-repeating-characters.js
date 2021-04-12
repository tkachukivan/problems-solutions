/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    let max = 0;
    const seen = new Set();
    let end = 0;
    let start = 0;
    
    while(end < s.length) {
        if (seen.has(s[end])) {
            seen.delete(s[start++]);
        } else {
            seen.add(s[end++]);
            max = Math.max(max, end - start);
        }
    }
    
    return max;
    
//     const seen = new Map();
//     let end = 0;
//     let start = 0;
//     while(end < s.length) {
//         if (seen.has(s[end])) {
//             start = Math.max(start, seen.get(s[end]));
//         }
//         seen.set(s[end], ++end);
//         max = Math.max(max, end - start);
//     }
//     return max;
};