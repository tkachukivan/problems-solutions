/**
 * https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
 var numSubmatrixSumTarget = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let result = 0;
    
    for (let row = 0; row < m; row++) {
        for (let col = 1; col < n; col++) {
            matrix[row][col] += matrix[row][col - 1];
        }
    }
    
    const counters = new Map();
    for (let colStart = 0; colStart < n; colStart++) {
        for (let colEnd = colStart; colEnd < n; colEnd++) {
            let currentSum = 0;
            counters.clear();
            counters.set(0, 1);
            for (let row = 0; row < m; row++) {
                currentSum += matrix[row][colEnd] - (colStart ? matrix[row][colStart - 1] : 0);
                result += (counters.get(currentSum - target) || 0);
                counters.set(currentSum, (counters.get(currentSum) || 0) + 1);
            }
        }
    }
    
    
    return result;
};