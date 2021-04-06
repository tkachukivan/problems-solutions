/**
 * https://leetcode.com/problems/first-unique-character-in-a-string
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const counts = new Map();
    for (let i = 0; i < s.length; i++) {
        counts.set(s[i], (counts.get(s[i]) || 0) + 1)
    }
    
    for (let i = 0; i < s.length; i++) {
        if (counts.get(s[i]) === 1) return i;
    }
    
    return -1;
};