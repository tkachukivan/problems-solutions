/**
 * https://leetcode.com/problems/backspace-string-compare/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  var backspaceCompare = function(s, t) {
//     let sEnd = s.length - 1;
//     let tEnd = t.length - 1;
//     let sBack = 0;
//     let tBack = 0;
//     while(sEnd >= 0 || tEnd >= 0) {
//         while (sEnd >= 0) { // Find position of next possible char in build(S)
//             if (s[sEnd] === '#') { sBack++; sEnd--; }
//             else if (sBack > 0) { sBack--; sEnd--; }
//             else break;
//         }
//         while (tEnd >= 0) { // Find position of next possible char in build(T)
//             if (t[tEnd] === '#') { tBack++; tEnd--; }
//             else if (tBack > 0) { tBack--; tEnd--; }
//             else break;
//         }
        
//         if (s[sEnd--] !== t[tEnd--]) return false;
//     }
    
//     return true;
// };
const BACKSPACE = '#'
// much simpler version
function backspaceCompare(s1, s2) {
    // Write your code here
    s1 = removeBackspaces(s1);
    s2 = removeBackspaces(s2);
    
    return s1 === s2 ? 1 : 0;
}

function removeBackspaces(str) {
    const stack = [];
    
    for (const letter of str) {
        if (letter === BACKSPACE) {
            stack.pop();
        } else {
            stack.push(letter);
        }
    }
    
    return stack.join('');
}