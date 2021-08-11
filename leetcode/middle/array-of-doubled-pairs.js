/**
 * https://leetcode.com/problems/array-of-doubled-pairs/
 * @param {number[]} arr
 * @return {boolean}
 */
 var canReorderDoubled = function(arr) {
    const copy = [...arr];
    copy.sort((a, b) => Math.abs(a) - Math.abs(b));
    const counts = new Map();
    for (const num of arr) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    
    for (const num of copy) {
        if (counts.get(num) === 0) continue;
        const doubleValue = num * 2;
        const doubleCount = counts.get(doubleValue);
        if (!doubleCount || doubleCount < 0) return false;
        
        counts.set(num, counts.get(num) - 1);
        counts.set(doubleValue, counts.get(doubleValue) - 1);
    }
    
    return true;
};