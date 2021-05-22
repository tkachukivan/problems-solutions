/**
 * https://leetcode.com/problems/n-queens
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    const result = [];
    const board = Array.from({ length: n }, () => new Array(n).fill('.'));
    
    collectSolutions(0);
    
    return result;
    
    function collectSolutions(col) {
        if (col === n) {
            result.push(board.map(row => row.join('')));
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

// var solveNQueens = function(n) {
//     const board = Array.from({ length: n }, () => new Array(n).fill('.'));
//     const result = [];
//     collectBoards(0, board);
    
//     return result;
    
//     function collectBoards(row, board) {
//         if (row === n) {
//             result.push(board.map(row => row.join('')));
//             return;
//         }
        
//         for (let col = 0; col < n; col++) {
//             if (isValid(board, row, col)) {
//                 board[row][col] = 'Q';
//                 collectBoards(row + 1, board);
//                 board[row][col] = '.';
//             }
//         }
//     }
    
//     function isValid(board, row, col) {
//         // check from top to current
//         for (let i = 0; i < row; i++) {
//             if (board[i][col] === 'Q') return false;
//         }
        
//         // check from current to left top
//         let i = row - 1;
//         let j = col - 1;
//         while(i >= 0 && j >= 0) {
//             if (board[i--][j--] === 'Q') return false;
//         }
//         // check from current to right top
//         i = row - 1;
//         j = col + 1;
//         while(i >= 0 && j < n) {
//             if (board[i--][j++] === 'Q') return false;
//         }
        
//         return true;
//     }
// };