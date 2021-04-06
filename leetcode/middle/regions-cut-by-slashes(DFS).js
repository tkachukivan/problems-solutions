/**
 * https://leetcode.com/problems/regions-cut-by-slashes/
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const n = grid.length * 3;
    const squares = [];
    let result = 0;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if (j === 0) squares[i] = [];
            squares[i][j] = 0;
        }
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid.length; j++) {
            if (grid[i][j] === '\\') {
                squares[i * 3][j * 3] = 1;
                squares[i * 3 + 1][j * 3 + 1] = 1;
                squares[i * 3 + 2][j * 3 + 2] = 1;
            } else if (grid[i][j] === '/') {
                squares[i * 3][j * 3 + 2] = 1;
                squares[i * 3 + 1][j * 3 + 1] = 1;
                squares[i * 3 + 2][j * 3] = 1;
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if (squares[i][j] === 0) {
                dfs(i, j);
                result++
            }
        }
    }
    // it may be better to use queue
    function dfs(i,j) {
        if (i >= 0 && j >=0 && i < n && j < n && squares[i][j] === 0) {
            squares[i][j] = 1;
            dfs(i - 1, j);
            dfs(i, j - 1);
            dfs(i + 1, j);
            dfs(i, j + 1);
        }
    }
    
    return result;
};