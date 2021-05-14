/**
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         if (search(matrix[i])) return true;
//     }
    
//     return false;
    
//     function search(array) {
//         let lo = 0;
//         let hi = array.length - 1;
        
//         while (lo <= hi) {
//             const mid = lo + Math.floor((hi - lo) / 2);
//             if (array[mid] > target) {
//                 hi = mid - 1;
//             } else if (array[mid] < target) {
//                 lo = mid + 1;
//             } else {
//                 return true;
//             }
//         }
        
//         return false;
//     }
// };
// right way :D
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = m > 0 ? matrix[0].length : 0;
    
    let i = m - 1, j = 0;
    while (i >= 0 && j < n) {
      if (matrix[i][j] === target) return true;
      if (matrix[i][j] > target) {
        i--;
      } else {
        j++;
      }
    }
    
    return false;
  };
  