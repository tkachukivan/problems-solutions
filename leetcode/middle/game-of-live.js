/**
 * https://leetcode.com/problems/game-of-life/
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ]
    const m = board.length;
    const n = board[0].length;
    const DEAD = 0;
    const ALIVE = 1;
    const DEAD_ALIVE = 2;
    const ALIVE_DEAD = 3;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let neighbors = 0;
            for (let [x, y] of directions) {
                x = x + i;
                y = y + j;
                if (x < 0 || y < 0 || x >= m || y >= n) continue;
                if (board[x][y] === ALIVE || board[x][y] === ALIVE_DEAD) neighbors++;
            }
            
            if (board[i][j] === DEAD && neighbors === 3) {
                board[i][j] = DEAD_ALIVE;
            } else if (board[i][j] === ALIVE && (neighbors < 2 || neighbors > 3)) {
                board[i][j] = ALIVE_DEAD; 
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === DEAD_ALIVE) {
                board[i][j] = ALIVE;
            } else if (board[i][j] === ALIVE_DEAD ) {
                board[i][j] = DEAD; 
            }
        }
    }
};