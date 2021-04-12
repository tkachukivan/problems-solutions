/**
 * https://leetcode.com/problems/beautiful-arrangement-ii
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
 var constructArray = function(n, k) {
    const result = [];
    let start = 1, i = 0, kk = k;
        
    while (i <= kk) {
        result[i++] = start++;

        if (i <= kk) {
            result[i++] = 1 + k--;
        }
    }

    for (; i < n; i++) {
        result[i] = i + 1;
    }
        
    return result;
};