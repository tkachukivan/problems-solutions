/**
 * https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    let current = 0;
    
    for (let i = 1; i < intervals.length; i++) {
        if (result[current][1] >= intervals[i][0]) {
            result[current][1] = Math.max(result[current][1], intervals[i][1]);
        } else {
            current++;
            result.push(intervals[i]);
        }
    }
    
    return result;
};