/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
 var platesBetweenCandles = function(s, queries) {
    const prefixSums = [];
    const result = [];
    let plates = 0;
    let prevPlates = 0;
    let prevCandle = -1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            if (prevCandle !== -1) plates++;
            continue;
        }
        while (prevCandle < i) {
            prevCandle++;
            prefixSums.push([prevPlates, plates]);
        }
        prevPlates = plates
    }
    
    while (prevCandle < s.length) {
        prevCandle++;
        prefixSums.push([prevPlates, plates]);
    }
    
    for (let [left, right] of queries) {
        result.push(Math.max(prefixSums[right + 1][0] - prefixSums[left][1], 0));
    }
    
    return result;
};