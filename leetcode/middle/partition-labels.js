/**
 * https://leetcode.com/problems/partition-labels/
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    const lastIndecies = new Map();
    const result = [];
    
    for (let i = 0; i < s.length; i++) {
        lastIndecies.set(s[i], i);
    }
    
    let startIndex = -1;
    let lastIndex = 0;
    for (let i = 0; i < s.length; i++) {
        lastIndex = Math.max(lastIndex, lastIndecies.get(s[i]));
        
        if (lastIndex === i) {
            result.push(i - startIndex);
            startIndex = i;
        }
    }
    
    return result;
};