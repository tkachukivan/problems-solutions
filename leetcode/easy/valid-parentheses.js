/**
 * https://leetcode.com/problems/valid-parentheses
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2) return false;
    const mappings = { '{': '}', '(': ')', '[': ']'};
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (mappings[s[i]]) {
            stack.push(s[i]);
        } else {
            if (!stack.length) return false;
            if (mappings[stack.pop()] !== s[i]) return false;
        }
    }
    
    return stack.length === 0;
};