/**
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 * @param {number[][]} grid
 * @return {number}
 */
 const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
]

var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
    if (n === 1) return 1;
    
    const queue = [[0, 0, 1]];
    grid[0][0] = 1;
    
    while (queue.length) {
        const [x, y, pathLength] = queue.shift();
        
        for (const dir of directions) {
            const newX = x + dir[0];
            const newY = y + dir[1];
            if (newX >= 0 && newX < n && newY >=0 && newY < n && grid[newX][newY] === 0) {
                if (newX === n - 1 && newY === n - 1) return pathLength + 1;

                grid[newX][newY] = 1;
                queue.push([newX, newY, pathLength + 1]);
            }
        }
    }
    
    return -1;
};