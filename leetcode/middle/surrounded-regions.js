/**
 * https://leetcode.com/problems/surrounded-regions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    const NOT_SURROUNDED = 'N';
    const OPEN = 'O';
    const SURROUNDED = 'X';
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const rows = board.length;
    const cols = board[0].length;
    if (rows < 3 || cols < 3) return;
    
    for (let row = 0; row < rows; row++) {
        if (board[row][0] === OPEN) dfs(row, 0, board);
        if (board[row][cols - 1] === OPEN) dfs(row, cols - 1, board);
    }
    
    for (let col = 1; col < cols - 1; col++) {
        if (board[0][col] === OPEN) dfs(0, col, board);
        if (board[rows - 1][col] === OPEN) dfs(rows - 1, col, board);
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === OPEN) board[row][col] = SURROUNDED;
            if (board[row][col] === NOT_SURROUNDED) board[row][col] = OPEN;
        }
    }
    
    function dfs(row, col, board) {
        board[row][col] = NOT_SURROUNDED;
        for (let direction of directions) {
            const newRow = row + direction[0];
            const newCol = col + direction[1];
            
            if (newRow < 0 ||
                newRow > rows - 1 ||
                newCol < 0 ||
                newCol > cols - 1 ||
                board[newRow][newCol] !== OPEN) continue;

            dfs(newRow, newCol, board);
        }
    }
};