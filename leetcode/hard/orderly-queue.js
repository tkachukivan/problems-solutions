/**
 * https://leetcode.com/problems/orderly-queue/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var orderlyQueue = function(s, k) {
    const n = s.length;
    if (n === 1) return s;
    if (k > 1) return s.split('').sort().join('');
    let result = s;
    for (let i = 0; i < n; i++) {
        const tmp = s.substring(i) + s.substring(0, i);

        if (tmp < result) result = tmp;
    }
    
    return result;
};