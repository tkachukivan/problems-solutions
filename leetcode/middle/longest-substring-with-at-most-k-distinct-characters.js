/**
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0 || s.length === 0) return 0;
    const counts = new Map();
    let left = 0;
    let right = 0;
    let longestSubstring = 0;
    
    while (right < s.length) {
        counts.set(s[right], (counts.get(s[right]) || 0) + 1);
        right++;
        while (counts.size > k) {
            const letterCount = counts.get(s[left]);
            if (letterCount === 1) counts.delete(s[left]);
            else counts.set(s[left], letterCount - 1);
            left++;
        }
        
        longestSubstring = Math.max(longestSubstring, right - left);
    }
    
    return longestSubstring;
};