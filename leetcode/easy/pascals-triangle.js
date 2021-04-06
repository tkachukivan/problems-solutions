/**
 * https://leetcode.com/problems/pascals-triangle
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1],[1,1]];
    const res = [[1],[1,1]];
    
    for (let i = 2; i < numRows; i++) {
        const base = res[i - 1];
        const row = new Uint32Array(i + 1);
        row[0] = row[i] = 1;
        for (let j = 1; j < i; j++) {
            row[j] = base[j] + base[j - 1];
        }
        res.push(row);
    }
    
    return res;
};