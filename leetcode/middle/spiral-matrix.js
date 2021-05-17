/**
 * https://leetcode.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const result = [];
    
    traverse(0, 0, matrix.length - 1, matrix[0].length - 1, 'right');
    
    return result;
    
    function traverse(top, left, bottom, right, direction) {
        if (top > bottom || left > right) return;
        
        if (direction === 'right') {
            for (let j = left; j <= right; j++) {
                result.push(matrix[top][j]);
            }
            traverse(top + 1, left, bottom, right, 'bottom');
        }
        
        if (direction === 'bottom') {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            traverse(top, left, bottom, right - 1, 'left');
        }
        
        if (direction === 'left') {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            traverse(top, left, bottom - 1, right, 'top');
        }
        
        if (direction === 'top') {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            traverse(top, left + 1, bottom, right, 'right');
        }
    }
};

// var spiralOrder = function(matrix) {
//     const result = [];
    
//     let top = 0;
//     let left = 0;
//     let bottom = matrix.length - 1;
//     let right = matrix[0].length - 1;
    
//     while (top <= bottom && left <= right) {
//         for (let j = left; j <= right; j++) {
//             result.push(matrix[top][j]);
//         }
        
//         for (let i = top + 1; i <= bottom; i++) {
//             result.push(matrix[i][right]);
//         }
        
//         if (top < bottom && left < right) {
//             for (let j = right - 1; j > left; j--) {
//                 result.push(matrix[bottom][j]);
//             }

//             for (let i = bottom; i > top; i--) {
//                 result.push(matrix[i][left]);
//             }
//         }
//         top++;
//         right--;
//         bottom--;
//         left++;
//     }
    
    
//     return result;
// };