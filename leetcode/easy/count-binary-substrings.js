/**
 * https://leetcode.com/problems/count-binary-substrings/
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    let prevGroup = 0;
    let currentGroup = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        currentGroup++;
        
        if (s[i] !== s[i + 1]) {
            result += Math.min(prevGroup, currentGroup);
            prevGroup = currentGroup;
            currentGroup = 0;
        }
    }
    
    return result;
};