/**
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Divide And Conquer
var longestSubstring = function(s, k) {
    return longest(0, s.length);
    
    function longest(start, end) {
        if (end - start < k) return 0;
        const frequencies = new Map();
        for (let i = start; i < end; i++) {
            frequencies.set(s[i], (frequencies.get(s[i]) || 0) + 1);
        }
        
        for (let mid = start; mid < end; mid++) {
            if (frequencies.get(s[mid]) >= k) continue;
            let midNext = mid + 1;
            while (midNext < end && frequencies.get(s[midNext]) < k) midNext++;
            return Math.max(longest(start, mid), longest(midNext, end));
        }
        
        return end - start;
    }
};
// sliding window
// var longestSubstring = function(s, k) {
//     let maxUnique = new Set(s).size;
//     // we'll try substrings consisting of one distinct character to those consisting of maximum distinct characters
//     let max = 0;
//     for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
//         let start = 0, end = 0, atLeastK = 0, unique = 0, m = new Map();
//         while (end < s.length) {    
//             m.set(s[end], m.get(s[end]) + 1 || 1);
//             if (m.get(s[end]) == 1) unique++;
//             if (m.get(s[end]) == k) atLeastK++;
            
//             while (unique > curUnique) { // move left pointer so that the number of unique characters do not exceed the upper bound
//                 m.set(s[start], m.get(s[start]) - 1);
//                 if (m.get(s[start]) == k-1) atLeastK--;
//                 if (m.get(s[start]) == 0) unique--;
//                 start++;
//             }
//             if (unique == curUnique && unique == atLeastK) {
//                 max = Math.max(max, end - start + 1);
//             } 
//             end++;
//         }
//     }
//     return max;
//     // We are only considering lowercase alphaabets so maxUnique can be at most 26.
//     // Therefore, Time complexity: O(26) * O(n) = O(n)
//     // Space Complexity: O(26) = O(1)
// };