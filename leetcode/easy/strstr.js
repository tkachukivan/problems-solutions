/**
 * https://leetcode.com/problems/implement-strstr
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (!needle) return 0;
    if (!haystack) return -1;
    const m = haystack.length;
    const n = needle.length;
    for (let i = 0; i < m - n + 1; i++) {
        for (let j = 0; j < n; j++) {
            if (needle[j] !== haystack[i + j]) break;
            if (j + 1 === n) return i;
        }
    }
    
    return -1;
};