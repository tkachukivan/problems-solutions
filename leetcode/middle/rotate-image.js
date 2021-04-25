/**
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    if (matrix.length === 1) return;
    const n = matrix.length;
    const l = Math.floor(n / 2);
    let k = n - 1;
    for (let i = 0; i < l; i++) {
        for (let j = i; j < k; j++) {
            // there is just 4 moves we can do it here
            // const tmp = matrix[n - 1 - j][i];
            // matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
            // matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i];
            // matrix[j][n - 1 - i] = matrix[i][j];
            // matrix[i][j] = tmp;
            moveNum(null, i, j);
        }
        k--;
    }
    
    function moveNum(num, i, j) {
        const currentNum = matrix[i][j];
        matrix[i][j] = num;
        if (currentNum !== null) {
            moveNum(currentNum, j, n - 1 - i);
        }
    }
//     transpose();
//     reflect();
    
//     function transpose() {
//         for (let i = 0; i < n; i++) {
//             for (let j = i; j < n; j++) {
//                 let tmp = matrix[j][i];
//                 matrix[j][i] = matrix[i][j];
//                 matrix[i][j] = tmp;
//             }
//         }
//     }
    
//     function reflect() {
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < l; j++) {
//                 let tmp = matrix[i][j];
//                 matrix[i][j] = matrix[i][n - j - 1];
//                 matrix[i][n - j - 1] = tmp;
//             }
//         }
//     }
};