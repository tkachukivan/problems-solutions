/**
 * https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if (n === 1) return "1";
    const counts = countAndSay(n - 1);
    let result = '';
    let current = 1;
    for (let i = 1; i < counts.length; i++) {
        if (counts[i] === counts[i - 1]) current++;
        else {
            result += current + counts[i - 1];
            current = 1;
        }
    }
    
    result += current + counts[counts.length - 1];
    
    return result;
};
