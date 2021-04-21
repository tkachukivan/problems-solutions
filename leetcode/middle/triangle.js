/**
 * https://leetcode.com/problems/triangle/
 * @param {number[][]} triangle
 * @return {number}
 */

// bottom-up flip triangle upside down to simplify solution code
var minimumTotal = function(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }

    return triangle[0][0];
};