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