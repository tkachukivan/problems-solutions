/**
 * https://leetcode.com/problems/to-lower-case/
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32);
        } else {
            result += s[i];
        }
    }
    
    return result;
};