/**
 * https://leetcode.com/problems/valid-palindrome
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if (s.length === 1) return true;
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let lo = 0;
    let hi = s.length - 1;
    while(lo < hi) {
        if (s[lo++] !== s[hi--]) return false;
    }
    return true;
};