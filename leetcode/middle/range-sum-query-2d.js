/**
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    this.dp = Array.from({ length: m + 1 }, () => new Int32Array(n + 1));

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            this.dp[r + 1][c + 1] = this.dp[r + 1][c] + this.dp[r][c + 1] + matrix[r][c] - this.dp[r][c];
        }
    }
    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const totalArea = this.dp[row2 + 1][col2 + 1];
    const topArea = this.dp[row1][col2 + 1];
    const sideArea = this.dp[row2 + 1][col1];
    const cornerArea = this.dp[row1][col1]
    return totalArea - topArea - sideArea + cornerArea;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */