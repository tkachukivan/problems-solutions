/**
 * https://leetcode.com/problems/remove-outermost-parentheses
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = '';
    let level = 0;
    let open = false
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (!open) {
                open = true;
            } else {
                result += s[i];
                level++;
            }
        } else if (s[i] === ')') {
            if (open && !level) {
                open = false;
            } else {
                result += s[i];
                level--
            }
        }
    }
    
    return result;
};

// shorten(easier to read) solution from discussions
var removeOuterParentheses = function(s) {
    let result = '';
    let level = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' && level++ > 0) {
            result += s[i];
        } else if (s[i] === ')' && level-- > 1) {
            result += s[i];
        }
    }
    
    return result;
};