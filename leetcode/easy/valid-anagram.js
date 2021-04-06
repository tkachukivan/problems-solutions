/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Uint16Array(26);
    const LETTER_SHIFT = 97;
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - LETTER_SHIFT]++;
        freq[t.charCodeAt(i) - LETTER_SHIFT]--;
    }
    
    for (let i = 0; i < 26; i++) {
        if (freq[i] !== 0) return false
    }

    return true;
};