/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const hasPrefixLetter = strs.every(w => strs[0][i] === w[i]);
        if (hasPrefixLetter) prefix += strs[0][i];
        else break;
    }
    return prefix;
};