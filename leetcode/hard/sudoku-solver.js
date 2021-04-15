/**
 * https://leetcode.com/problems/sudoku-solver
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    solve(board, 0);
    
    function solve(board, r) {
        for (let row = r; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] !== '.') continue;
                for (let num = 1; num <= 9; num++) {
                    if (canAddNumber(board, row, col, num)) {
                        board[row][col] = num.toString();
                        if (solve(board, row)) {
                            return true;
                        }
                    }
                }
                board[row][col] = '.';
                return false;
            }
        }
        
        return true;
//         if (col === 9) {
//             col = 0;
//             row++;
//             if (row === 9) {
//                 return true;
//             }
//         }
        
//         if (board[row][col] !== '.') return solve(board, row, col + 1);
//         for (let num = 1; num <= 9; num++) {
//             if (canAddNumber(board, row, col, num)) {
//                 board[row][col] = num + '';
//                 if (solve(board, row, col + 1)) {
//                     return true;
//                 }
//             }
//         }
        
//         board[row][col] = '.';
//         return false;
    }
    
    function canAddNumber(board, row, col, num) {
        // row
        for (let i = 0; i < 9; i++) { 
            if (board[row][i] == num) return false;
        }
        
        // col
        for (let i = 0; i < 9; i++) { 
            if (board[i][col] == num) return false;
        }
        // box
        let rowStart = Math.floor(row / 3) * 3;
        let cellStart = Math.floor(col / 3) * 3;
        for (let i = rowStart; i < rowStart + 3; i++) {
            for (let j = cellStart; j < cellStart + 3; j++) {
                if (board[i][j] == num) return false;
            }
        }
        
        return true;
    }
};