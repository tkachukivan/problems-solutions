/**
 * https://leetcode.com/problems/reduce-array-size-to-the-half/
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    const half = arr.length / 2;
    const counts = new Map();
    for (let num of arr) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    
    const countsArr = [...counts.values()].sort((a, b) => b - a);
    let currentSize = 0;
    let removed = 0;
    
    while (currentSize < half) {
        currentSize += countsArr[removed++];
    }
    
    return removed;
};