/**
 * https://leetcode.com/problems/generate-parentheses
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const result = [];
    generate('(', 1, 0);
    
    return result;
    
    function generate(parentheses, opened, closed) {
        if (opened === n) {
            result.push(parentheses + ')'.repeat(opened - closed));
            return;
        }
        
        if (opened === closed) {
            generate(parentheses + '(', opened + 1, closed);
        } else {
            generate(parentheses + '(', opened + 1, closed);
            generate(parentheses + ')', opened, closed + 1);
        }
    }
};

// var generateParenthesis = function(n) {
//     const result = [];
    
//     generate('(', 1, 0);
    
//     return result;
    
//     function generate(parenthesis, open, closed) {
//         if (closed === n && open === n) {
//             result.push(parenthesis);
//             return;
//         }
        
//         if (open < n) {
//             generate(parenthesis + '(', open + 1, closed);
//         }
        
//         if (closed < open) {
//             generate(parenthesis + ')', open, closed + 1);
//         }
//     }
// };