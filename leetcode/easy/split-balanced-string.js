/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let balancedStrings = 0;
    let balanceCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') balanceCount++;
        else balanceCount--;
        if (balanceCount === 0) balancedStrings++;
    }
    
    return balancedStrings;
};