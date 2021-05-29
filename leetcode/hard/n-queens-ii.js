/**
 * https://leetcode.com/problems/n-queens-ii
 * @param {number} n
 * @return {string[][]}
 */
 var totalNQueens = function(n) {
    let result = 0;
    const board = Array.from({ length: n }, () => new Array(n).fill('.'));
    
    collectSolutions(0);
    
    return result;
    
    function collectSolutions(col) {
        if (col === n) {
            result++;
            return;
        }
        
        for (let row = 0; row < n; row++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                collectSolutions(col + 1);
                board[row][col] = '.';
            }
        }
    }
    
    function isValid(i, j) {
        let l,k;
        // left
        l = j - 1;
        while(l >= 0) if (board[i][l--] === 'Q') return false;
        // left top
        k = i - 1;
        l = j - 1;
        while(l >= 0 && k >= 0) if (board[k--][l--] === 'Q') return false;
        // left bottom
        k = i + 1;
        l = j - 1;
        while(l >= 0 && k < n) if (board[k++][l--] === 'Q') return false;

        return true;
    }
};

/**
 * @param {number} n
 * @return {number}
 */
//  var totalNQueens = function(n) {
//     const board = Array.from( { length: n }, () => new Array(n));
//     let result = 0;
//     solve(0, board)
//     return result;
    
//     function solve(row, board) {
//         if (row === n) {
//             result++;
//             return;
//         }
        
//         for (let col = 0; col < n; col++) {
//             if (isValid(board, row, col)) {
//                 board[row][col] = 'Q';
//                 solve(row + 1, board);
//                 board[row][col] = null;
//             }
//         }
//     }
    
//     function isValid(board, row, col) {
//         let curCol = col;
//         let curRow = 0;
//         // col
//         for (; curRow < row; curRow++) {
//             if (board[curRow][curCol] === 'Q') return false;
//         }
        
//         // top left
//         curCol = col - 1;
//         curRow = row - 1;
//         while (curCol >= 0 && curRow >= 0) {
//             if (board[curRow--][curCol--] === 'Q') return false;
//         }
//         // top right
//         curCol = col + 1;
//         curRow = row - 1;
//         while (curCol < n && curRow >= 0) {
//             if (board[curRow--][curCol++] === 'Q') return false;
//         }
        
//         return true;
//     }
// };