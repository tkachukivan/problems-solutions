/**
 * https://leetcode.com/problems/reshape-the-matrix/
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if (m * n !== r * c) return mat;
    const result = Array.from({ length: r }, () => new Int16Array(c));
    let currentR = 0;
    let currentC = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[currentR][currentC] = mat[i][j];
            currentC++
            if (currentC === c) {
                currentR++;
                currentC = 0;
            }
        }
    }
    
    
    return result;
};